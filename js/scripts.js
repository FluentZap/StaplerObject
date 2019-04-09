
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
//creating a funciton displayContactDetails an argument to the local variable addressBookToDisplay
function displayContactDetails(addressBookToDisplay) {
  //creating a variable named contactsList and assigning the value retuened bt JQuery
  var contactsList = $("ul#contacts");
  //creating a variable named htmlForContactInfo and assigning it as a empty string
  var htmlForContactInfo = "";
  //for each element in the array contacts in the addressBook object run the function that accepts one argument and assigns it the local variable contact.
  addressBookToDisplay.contacts.forEach(function(contact) {
  //assign the variable htmlForContactInfo it's value + a string + the id of the local object contact + a string + the firstName variable in the contact + a string + the varible lastName in contacts + a string.
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  //run the method html for the local object contact list with the argument html contacts.
  contactsList.html(htmlForContactInfo);
};
// this declares function showContact that accepts one argument and assigns it to the var contactId
function showContact(contactId) {
  // this declares a var contact and assigns a value returned by the function findContact in the object addressBook and it accepts one argument (contactId)
  var contact = addressBook.findContact(contactId)
  // run the function show on the element with the id (show-contact) returned by jq
  $("#show-contact").show();
  // run the function html on the elements with the class (first-name) returned by jq and passes one argument (firstName variable of the object contact)
  $(".first-name").html(contact.firstName);
  // run the function html on the elements with the class (last-name) returned by jq and passes one argument (lastName variable of the object contact)
  $(".last-name").html(contact.lastName);
  // run the function html on the elements with the class (phone-number) returned by jq and passes one argument (phoneNumber variable of the object contact)
  $(".phone-number").html(contact.phoneNumber);
  // declares a var buttons and sets it to equal the element with the id of buttons.
  var buttons =$("#buttons");
  // removes all child (elements) nodes of the set of matched elements from the DOM.
  buttons.empty();
  // adds to the top of child (li) of parent (button) a string + the id of the local object (contact) + string
  buttons.append("<button class='deleteButton' id=" + contact.id +  ">Delete</button>");
}

// declaring function attachContactListeners that accepts no argument
function attachContactListeners() {
  // when the on function is triggered by the event "click" by jq function, it adds an event listener
  $("ul#contacts").on("click", "li", function() {
    // this runs function showContact(passing one argument the id of li)
    showContact(this.id);
  });
  // new code
  //
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};

$(document).ready(function() {
  // run the function attachContactListeners with 0 argument
  attachContactListeners();
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
    // runs the displayContactDetails function passing the argument addressBook
    displayContactDetails(addressBook);
  })
})
