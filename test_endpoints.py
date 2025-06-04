"""
Endpoints to evaluate:

GET /breeds
GET /breeds/<breed_id>
GET /facts
GET /groups
GET /groups/<group_id>
GET /group-details/<group_id>
GET /group-details/<group_id>/breed/<breed_id>

"""


import urllib.request
import json

total= 0
counter= 0


"""
Note: I'm using and MacOS. Port 5000 is used by another program. 
If you're using MacOS, you can either identify and stop that program, or start the server with a different port.
On macOS, try disabling the 'AirPlay Receiver' service from System Preferences -> General -> AirDrop & Handoff.
"""
API_BASE_URL = "http://localhost:8000" # Fixes issue with port 5000 in MacOS

# Define endpoints to test like this
basic_endpoints = [
    f"{API_BASE_URL}/breeds",
    f"{API_BASE_URL}/breeds/<breed_id>",
    f"{API_BASE_URL}/facts",
    f"{API_BASE_URL}/groups",
    f"{API_BASE_URL}/groups/<group_id>"
]

complex_endpoints = [
    f"{API_BASE_URL}/group-details/<group_id>",
    f"{API_BASE_URL}/group-details/<group_id>/breed/<breed_id>"
]

def eval_resp(task_done= False, fct= 1):
    global total, counter
    
    total+= 1*fct
    if task_done:
        counter+= 1*fct
    return

def test_endpoints(endpoints, title):
    f= 1 if title.lower().startswith("basic") else 2
    print(f"\n{title}")
    for url in endpoints:
        try:
            with urllib.request.urlopen(url) as response:
                status = response.getcode()
                
                is_json= True
                cont= response.read().decode()
                try:
                    json.loads(cont)
                except:
                    is_json= False
                eval_resp(is_json, f)
                
                is_status= status == 200
                if is_status:
                    print(f"200 OK - {url}")
                else:
                    print(f"WRONG {status} - {url}")
                eval_resp(is_status, f)
        except Exception as e:
            print(f"ERROR - {url} - {e}")
            eval_resp(False, f)

if __name__ == "__main__":
    test_endpoints(basic_endpoints, "Basic Endpoints")
    test_endpoints(complex_endpoints, "Complex/Structured Endpoints")
    print(f"\n # Result: {100*counter/total:.1f} %")
