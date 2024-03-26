// Write your solution in this file!
const employee = {
    name: 'John',
    streetAddress: 'e56 Grand Line',
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return  Object.assign({}, employee, { [key]: value });
 };
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
 const workers = Object.assign({}, employee);
 delete workers[key];
 return workers;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee [key];
    return  employee;
}