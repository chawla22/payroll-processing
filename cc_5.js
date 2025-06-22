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


// Step 4: Write calculateOvertimePay(rate, hours) that returns 1.5x rate for hours over 40.
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return (hours - 40) * (rate * 1.5);
    } else {
        return 0; // No overtime pay if hours are 40 or less
    }
}

// Step 5: Write calculateTaxes(grossPay) that deducts 15% tax.
function calculateTaxes(grossPay) {
    return grossPay * 0.15; // 15% tax deduction
}

// Step 6: Write processPayroll(employee) that returns an object with:
// o	name
// o	basePay
// o	overtimePay
// o	grossPay
// o	netPay
function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay;
    let taxes = calculateTaxes(grossPay);
    let netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
} 

// Step 7: Loop through your employee array and log the payroll object for each employee.

employees.forEach(employee => {
    let payroll = processPayroll(employee);
    console.log(`Payroll for ${payroll.name}:`);
    console.log(`Base Pay: $${payroll.basePay.toFixed(2)}`);
    console.log(`Overtime Pay: $${payroll.overtimePay.toFixed(2)}`);
    console.log(`Gross Pay: $${payroll.grossPay.toFixed(2)}`);
    console.log(`Net Pay (after taxes): $${payroll.netPay.toFixed(2)}`);
    console.log('-----------------------------');
});
