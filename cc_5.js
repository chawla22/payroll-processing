// Step 2: Create an array of 3–5 employee objects. Each should include: name, hourlyRate, hoursWorked. 
var employees = [
    { name: "Alice", hourlyRate: 20, hoursWorked: 38 },
    { name: "Bob", hourlyRate: 25, hoursWorked: 45 },
    { name: "Charlie", hourlyRate: 30, hoursWorked: 50 },
    { name: "Diana", hourlyRate: 22, hoursWorked: 42 },
    { name: "Steven", hourlyRate: 28, hoursWorked: 36 }
];
console.log("Employees:", employees);

//Step 3: Write a function calculateBasePay(rate, hours) that returns pay for up to 40 hours only.
function calculateBasePay(rate, hours) {
    if (hours <= 40) {
        return rate * hours;
    } else {
        return rate * 40; // Only pay for the first 40 hours
    }
}