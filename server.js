// TODO: this file :)
// TODO: this file :)




// server.js

// Importing required modules
const express = require('express');  // Import Express framework
const employees = require('./employees');  // Importing employee data from employees.js

// Creating an instance of an Express application
const app = express();

// Defining the port for the server to listen on
const PORT = process.env.PORT || 3000; // Use environment port or default to 3000

// Starting the server and logging the running port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log server start
});

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello employees!'); // Respond with a greeting message
});

// Route to handle GET requests for all employees
app.get('/employees', (req, res) => {
    res.json(employees); // Respond with the array of employees in JSON format
});

// Route to handle GET requests for a specific employee by ID
app.get('/employees/:id', (req, res) => {
    const employeeId = parseInt(req.params.id, 10); // Parse ID from the request parameters
    const employee = employees.find(emp => emp.id === employeeId); // Find the employee by ID

    // If employee is found, return it; otherwise return a 404 error
    if (employee) {
        res.json(employee); // Respond with the employee object in JSON format
    } else {
        res.status(404).json({ message: 'Employee not found' }); // Respond with 404 error message
    }
});

// Route to handle GET requests for a random employee
app.get('/employees/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * employees.length); // Generate a random index
    res.json(employees[randomIndex]); // Respond with a random employee object
});
