
// Business Logic for AddressBook ---------
//creates empty contacts array & initialize current id at 0
function AddressBook() {
  this.contacts = [],
  this.currentId = -1
}
//it is a function of address book, it accepts one argument, and that argument is a contact
AddressBook.prototype.addContact = function(contact) {
  // takes a passed variable (contact) and assigns a new variable called Id. Then assigns it the value "returned" by assigned ID.
  contact.id = this.assignId();
  //Takes the local variable contact and pushes it to the contacts array of AddressBook
  this.contacts.push(contact);
}
//it is a function of address book, it accepts no argument.
AddressBook.prototype.assignId = function() {
  // takes the variable current id, under address book, and adds one.
  this.currentId += 1;
  // returns the variable addressBook.currentId which will now be +1
  return this.currentId;
}
// It is a function of address book, it accepts one argument, and assigns a new variable called id
AddressBook.prototype.findContact = function(id) {
  //this for loop creates a var "i" and assigns it the value 0. it checks the value of i to see if it's less then the length of the contacts array. increment i by one.
  for (var i=0; i< this.contacts.length; i++) {
    // if contact at index(i) exists run code (true)
    if (this.contacts[i]) {
      // if the var id, inside the array contact at index(i) is equal to local variable id,
      if (this.contacts[i].id == id) {
        // return the contact inside the array at index i
        return this.contacts[i];
      }
    }
  };
  // if any of the values inside the array addressBook.contacts do not equal the local var id, then return false.
  return false;
}
// It is a function of address book , it accepts one argument , and assiigns a local variable called id.
AddressBook.prototype.deleteContact = function(id) {
  //this for loop creates a var i amd assigns it the valie of 0. it checks the value of i to see if is less than the length of the array contacts under address book. increments i by 1.
  for (var i=0; i< this.contacts.length; i++) {
    //if the variable in the array at index i run code (true)
    if (this.contacts[i]) {
      //if the var id inside the array contact at index(i) is equal to local variable id,
      if (this.contacts[i].id == id) {
  // delete the contact indide the array at index(i).
        delete this.contacts[i];
  // if any of the values inside the arry addressBook.contacts are equal to local var id, then return true.
        return true;
      }
    }
  };
  // if any of the values inside the array addressBook.contacts do not equal the local var id, then return false.
  return false;
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


// User Interface Logic ---------
// creating a new variable "addressBook" and assigning it to a new instance of the object "AddressBook"
var addressBook = new AddressBook();
//creating a funciton displayContactDetails 
function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

$(document).ready(function() {
  //when submit run the finction below with the argument event
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    //create a new variable called input#firstName and assign it the value of the value of the JQuery object returned
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    //creating a variable called newContact and assigning the value to a new instance of the contact object and passing/accepting three values.
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    //were running the method addContact inder the object addressBook amd passing variable newContact.
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
  })
})
