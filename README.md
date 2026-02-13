# Title and Description
- UNIT CONVERTER 
- Converts numerical values from one unit to another.

- Available conversion units
Kilometers to Miles
Miles to Kilometers
Celsius to Fahrenheit
Fahrenheit to Celsius
Kilograms to Pounds
Pounds to Kilograms

# Modules
- data/conversion.json
The conversions.json file stores sample conversion data in JSON format. It contains 21 entries as required by the assignment guidelines.
This file is read by fileHandler.js using the Node.js File System module. Although it does not directly perform conversions, it demonstrates the backend data handling without using a database.
- utils/fileHandler.js
The fileHandler.js module handles reading data from the conversions.json file using Node’s built-in fs module. This module is imported and used in index.js, ensuring proper separation of concerns between Server logic, File handling logic, Conversion logic.
- index.js
index.js is the main backend entry point of the application. It initializes the Express server, defines API routes, and connects all modules together.
index.js acts as the central controller that connects Frontend (index.html + main.js), Conversion logic (conversions.js), File handling module (fileHandler.js), JSON data (conversions.json)
It ensures the entire backend system functions correctly.
- logic/conversion.js
This module fetches data from the index.html and fileHandler.js files (which in itself fetches data from the conversion.json file) and applies arithmetic logic to carry out the conversion calculations.
- index.html
The is the frontend part of the project. That is, the user facing part where they can input values and carrying out the unit conversion.
- main.js
This is the module which links the data part (conversion.js) to the frontend part of the project (index.html), ensuring functionality.



