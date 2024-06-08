from http.server import BaseHTTPRequestHandler, HTTPServer
from http.cookies import SimpleCookie
import uuid
import time
import uu


sessions = {}

class SessionHandler(BaseHTTPRequestHandler):

    def do_Get(self):
        session_id = self.get_session_id()
        if session_id not in sessions:
            session_id = self.create_session_id()

        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(bytes(f"Hello, your session is {session_id}"))


    def get_session_id(self):
        if "Cookie" in self.headers:
            cookie = SimpleCookie(self.headers["Cookie"])
            if "session_id" in cookie:
                return cookie["session_id"].value
        return None

    def create_session(self):
        session_id = str(uuid.uuid4())
        self.send_header("Set-Cookie", f"session_id={session_id}; Path=/")
        sessions[session_id]= {"crated": time.time(), "data": {}}
        return session_id

def run(server_class=HTTPServer, handler_class= SessionHandler, port = 8000):
    server_adress = ("",port)
    httpd = server_class(server_adress,handler_class)
    print(f"starting server on port: {port}")
    httpd.serve_forever()

if __name__ == "__main__":
    run()