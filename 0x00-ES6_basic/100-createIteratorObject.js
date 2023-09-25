export default function createIteratorObject(report) {
  // Initialize department and employee indices
  let departmentIndex = 0;
  let employeeIndex = 0;

  // Generator function to iterate through employees
  function* iterateEmployees() {
    while (departmentIndex < Object.keys(report.allEmployees).length) {
      const departmentName = Object.keys(report.allEmployees)[departmentIndex];
      const employees = report.allEmployees[departmentName];

      yield employees[employeeIndex];

      // Move to the next employee in the current department
      employeeIndex++;

      // If we've gone through all employees in the current department, move to the next department
      if (employeeIndex >= employees.length) {
        employeeIndex = 0;
        departmentIndex++;
      }
    }
  }

  return {
    [Symbol.iterator]: iterateEmployees,
  };
}
