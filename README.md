# INSTRUCTIONS
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

# You can also use:
```console
flask run --port=8000
```

Note: I'm using and MacOS. Port 5000 is used by another program. 
If you're using MacOS, you can either identify and stop that program, or start the server with a different port.
On macOS, try disabling the 'AirPlay Receiver' service from System Preferences -> General -> AirDrop & Handoff.

# REACT FRONTEND
```console
cd bravos_frontend/
```

## Install dependencies
```console 
npm install
```

## Set backend address (optional)
Please edit .env if you want to set API_URL with a custom value. Example:
```console 
VITE_API_URL=http://localhost:5000
```

## Run frontend on a local environment 
```console
npm run dev
```

Frontend will be available at:
http://localhost:5173

