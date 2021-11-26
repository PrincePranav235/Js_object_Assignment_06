var Person = {
    FirstName : "First name is person's first property",
    LastName : "Last name is person's second property",
    Officeaddress : "Office address is person's third property",
};
for(key in Person)
console.log(key+": "+Person[key])

//function to print object properties
function display(Persons)
{
    for(key in Persons)
    console.log(key+": " +Persons[key])
}


// creating an object "Person 1" using literal
var Person1 = {
    FirstName : "Mahendra singh",
    LastName : "Dhoni",
    Officeaddress : "Ranchi, India",
};
console.log("Person 1");
display(Person1);

//creating an object "Person 2" using literal
var Person2 = {
    FirstName : "Virat",
    LastName : "kohli",
    Officeaddress : "Delhi,India",
};
console.log("Person 2");
display(Person2);

// creating an object "Person 3" using literal
var Person3 = {
    FirstName : "Abraham benjamin",
    LastName : "de villiers",
    Officeaddress : "johannesberg,South Africa",
};
console.log("Person3");
display(Person3);


