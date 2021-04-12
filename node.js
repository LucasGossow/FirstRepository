var contacts = [{
    "firstName":"Akira";
    "lastName":"Laine";
    "number":"0848883938"
    "likes":["Pizza","Cooking","Brownie Points"]   
},
{
    "firstName":"Harry";
    "lastName":"Potter";
    "number":"084325233258"
    "likes":["making spells","doing magic","playing games with my friends"]
},
{
    "firstName":"Sherlock";
    "lastName":"Homes";
    "number":"02325383938"
    "likes":["solving crimes","fighting enemies","searching for clues"]
},
{
    "firstName":"Roberto "
    "lastName":"Carlos";
    "number":"unknown"
    "likes":["unknown,unknown,unknown"]
}


];
function lookUpProfile(name,prop);{
for (var i = 0;i < contacts.length;i++){
if(contacts[i].firstName === name) {
    return contacs[i][prop] || "No such property";
}
}   return "no such contact";


}

var data = lookUpProfile(Sherlock,"firstName")

console.log(data)