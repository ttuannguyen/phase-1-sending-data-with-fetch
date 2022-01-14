// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// // method: "POST" is missing from the object below
// const configurationObject = {
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });


//LAB WORK:

function submitData (userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            "name": userName,
            "email": userEmail
        })
    })
    .then(response => response.json()) //access the response object and use its built-in json() method to parse the contents of the body property
    .then(body => addNewID(body.id)) //find the new id and append this value to the DOM

    .catch(error => document.body.innerHTML = error.message)
} 

//callback function to add new ID to the DOM for the above response 
function addNewID(newID) {
    document.getElementsByTagName('body')[0].innerHTML = newID;
}
//submitData(); => should log a new ID

//callback function for error
// function errorMessage(error) {
//     document.body.append(error);
// }


