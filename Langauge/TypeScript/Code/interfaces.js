function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "jane", lastName: "User" };
document.body.textContent = greeter(user);
