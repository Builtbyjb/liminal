from http.server import BaseHTTPRequestHandler, HTTPServer
from thinkledger.utils.logger import log
from thinkledger.database.postgres.postgres_db import create_db_and_tables
import time
import json
from thinkledger.google.types import ChatEvent


class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self) -> None:
        try:
            if self.path == "/":
                self.send_response(200)
                self.send_header("Content-type", "text/html")
                self.end_headers()
                self.wfile.write(b"Thinkledger")
        except IOError as e:
            log.error(f"get request error {e}")
            self.send_error(404, "Not found", self.path)

    def do_POST(self) -> None:
        try:
            if self.path.endswith("/api/v1/chat"):
                content_len = int(self.headers.get("Content-Length", 0))
                body = self.rfile.read(content_len)
                try:
                    chat = ChatEvent(**json.loads(body.decode("utf-8")))
                    log.info(f"User query: {chat.message.text}")
                except json.JSONDecodeError:
                    self.send_response(400)
                    self.end_headers()
                    self.wfile.write(b"Invalid Json")
                    return

            response = { "text": "Hello, How may i help you?" }
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()

            self.wfile.write(json.dumps(response).encode("utf-8"))

        except IOError as e:
            log.error(f"post request error {e}")
            self.send_error(404, "Not Found", self.path)

    def do_PUT(self) -> None:
        pass

    def do_DELETE(self) -> None:
        pass


def run_server(port: int) -> None:
    try:
        server = HTTPServer(('0.0.0.0', port), RequestHandler)
        log.info(f"Server running on PORT: {port}")
        create_db_and_tables() # Create postgres tables
        server.serve_forever()
    except KeyboardInterrupt:
        log.info("Shutting down server....")
        time.sleep(1)
    except Exception as e:
        log.error(f"Server error: {e}")
    finally:
        server.shutdown()
        log.info("Server shutdown!")
