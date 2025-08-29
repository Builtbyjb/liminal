from http.server import BaseHTTPRequestHandler, HTTPServer
from thinkledger.utils.logger import log
from thinkledger.database.postgres.postgres_db import create_db_and_tables
import time


class RequestHandler(BaseHTTPRequestHandler):
  def do_GET(self) -> None:
    self.send_response(200)
    self.send_header('Content-type', 'text/html')
    self.end_headers()
    self.wfile.write(b'Hello, World!')

  def do_POST(self) -> None:
    pass

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
