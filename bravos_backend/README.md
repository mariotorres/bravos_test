# FLASK BACKEND
## Restore environment
```console
cd bravos_backend/
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```
## Run Backend Server (using port 8000 by default)
```console
python app.py
```

# You can use also:
```console
flask run --port=8000
```

Note: I'm using and MacOS. Port 5000 is used by another program. 
If you're using MacOS, you can either identify and stop that program, or start the server with a different port.
On macOS, try disabling the 'AirPlay Receiver' service from System Preferences -> General -> AirDrop & Handoff.

