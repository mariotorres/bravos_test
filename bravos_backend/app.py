from flask import Flask
from flask import request # Does not use any Flask extensions or the requests library.
from flask_cors import CORS
import urllib.request
import json
import os

# Fixes MacOS issue
os.environ["no_proxy"] = "*"
API_URL = "https://dogapi.dog/api/v2"

app = Flask(__name__)
CORS(app)

def handle_request(url):
    with urllib.request.urlopen(url) as response:
        data =response.read().decode()
        json_data = json.loads(data)
        return json_data

@app.route("/", methods=["GET"])
def hello_world():
    return {
        "bravos_backend": "v0.1"
    }

@app.route("/breeds", methods=["GET"])
def breeds():
    page = request.args.get('page', 1, type=int)
    page = page if page >= 1 else 1
    try:
        url = f"{API_URL}/breeds?page[number]={page}"
        return handle_request(url)
    except urllib.error.URLError as e:
        print("Something went wrong", e)
        return {"error": f"Something went wrong {e}"}

@app.route("/breeds/<breed_id>", methods=["GET"])
def breed(breed_id):
    try:
        url = f"{API_URL}/breeds/{breed_id}"
        return handle_request(url)
    except urllib.error.URLError as e:
        print("Something went wrong", e)
        return {"error": f"Something went wrong {e}"}

@app.route("/facts", methods=["GET"])
def facts():
    try:
        url = f"{API_URL}/facts"
        return handle_request(url)
    except urllib.error.URLError as e:
        print("Something went wrong", e)
        return {"error": f"Something went wrong {e}"}

@app.route("/groups", methods=["GET"])
def groups():
    try:
        url = f"{API_URL}/groups"
        return handle_request(url)
    except urllib.error.URLError as e:
        print("Something went wrong", e)
        return {"error": f"Something went wrong {e}"}

@app.route("/groups/<group_id>", methods=["GET"])
def group(group_id):
    try:
        url = f"{API_URL}/groups/{group_id}"
        return handle_request(url)
    except urllib.error.URLError as e:
        print("Something went wrong", e)
        return {"error": f"Something went wrong {e}"}

@app.route("/group-details/<group_id>", methods=["GET"])
def groups_details(group_id):
    # response = {}
    try:
        url = f"{API_URL}/groups/{group_id}"
        group_data = handle_request(url)
        """
        response["name"] = group_data["data"]["attributes"]["name"]
        response["breeds"] = []

        for breed in group_data["data"]["relationships"]["breeds"]["data"]:
            print(breed["id"])
            url = f"{API_URL}/breeds/{breed['id']}"
            breed_data = handle_request(url)
            response["breeds"].append(breed_data)

        return response
        """
        return group_data
    except urllib.error.URLError as e:
        print("Something went wrong", e)
        return {"error": f"Something went wrong {e}"}

@app.route("/group-details/<group_id>/breed/<breed_id>", methods=["GET"])
def groups_details_breed(group_id, breed_id):
    try:
        group_url = f"{API_URL}/groups/{group_id}"
        group_data = handle_request(group_url)
        breed_url = f"{API_URL}/breeds/{breed_id}"
        breed_data = handle_request(breed_url)
        return {
            "group": group_data,
            "breed": breed_data,
        }
    except urllib.error.URLError as e:
        print("Something went wrong", e)
        return {"error": f"Something went wrong {e}"}

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug=True)