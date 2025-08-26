from http.server import BaseHTTPRequestHandler, HTTPServer
from utils.logger import log
import time


class Middleware:
  pass


class Server(BaseHTTPRequestHandler):
  def do_GET(self) -> None:
    self.send_response(200)
    self.send_header('Content-type', 'text/html')
    self.end_headers()
    self.wfile.write(b'Hello, World!')


def run_server(port: int) -> None:
  try:
    server = HTTPServer(('0.0.0.0', port), Server)
    log.info(f"Server running on PORT: {port}")
    server.serve_forever()
  except KeyboardInterrupt:
    log.info("Shutting down server....")
    time.sleep(1)
    log.info("Server shutdown complete")
