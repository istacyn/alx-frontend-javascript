export default function iterateThroughObject(reportWithIterator) {
  const employeesArray = [];

  for (const employeeName of reportWithIterator) {
    employeesArray.push(employeeName);
  }

  return employeesArray.join(' | ');
 }
