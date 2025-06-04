# Technical Test for Developers
In this test, you need to write code to consume an API, process its data and display it in a UI.

## Description
You will use a free API (https://dogapi.dog/docs/api-v2) to retrieve some data. The idea is to show how you handle the request, response and resulting data given some brief instructions.

## Instructions
The objective of this test is split in two parts.

**The backend part is mandatory** and will be used as the core of this evaluation. The **frontend is optional**, but it will be considered in the technical interview, if we get to that stage.

You need to send:

* a) your code solution (and any instruction needed for it)
  and
* b) the test_endpoints.py output as a screenshot

TO: admin.ti@bravosenergia.com CC: administracion@bravosenergia.com,  with the subject `FS developer test - [your name initials]`. You can share it as a git repo or a drive folder.

### Backend
    Technology: Flask

*Your code solution*
* A working Flask app that consumes the Dog API (`https://dogapi.dog/docs/api-v2`), parses the response, and exposes structured RESTful endpoints.
* Only use Python's built-in libraries (e.g., urllib, json, etc.). Do not use external packages like requests or Flask extensions.
* Your app must include the following endpoints and return a valid JSON.
  Required Endpoints:
  ```
  GET /breeds
  GET /breeds/<breed_id>
  GET /facts
  GET /groups
  GET /groups/<group_id>
  GET /group-details/<group_id>
  GET /group-details/<group_id>/breed/<breed_id>
  ```
* Use 'test_endpoints.py' to test your 'dog_api_backend.py' endpoints.<br>
  Replace the URLs under 'basic_endpoints' and 'complex_endpoints' with yours.<br>
  We recommend using 'http://localhost:5000' as your local base URL.


### Frontend
    Technology: React

*Your code solution*

You have to build a UI that consumes the data gathered in the backend part and display the following:
* Button to retrieve data
* Table with top 5 rows and the pagination for the results
* [optional] Chart to display any variable column from the API. The chart has to be:
  
  | Breed | Avg Lifespan |
  | --- | --- |
  | Beagle | 13.5 |
  | Akita | 11 |
  
* Fields to filter both the table and plot.

## Things to consider
No library to change data structure of API answer. We want you to handle tree objects in proper way.

-------------------
-------------------
Feel free to proceed with implementing the solution based on these guidelines!

*Bravos 2025*
