
function AddressBook() {
  this.contacts = [],
  this.currentId = -1
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  }
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}



function AddressEntry(entry, type) {
  this.entry = entry;
  this.type = type;
}




function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
  this.addresses = [];
}

Contact.prototype.addAddress = function (entry) {
  this.addresses.push(entry)
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

var addressBook = new AddressBook()
function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

function showContact(contactId) {
  var contact = addressBook.findContact(contactId)
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  var buttons =$("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + contact.id +  ">Delete</button>");
}


function showAddresses(contactId) {
  var contact = addressBook.findContact(contactId)
  var addressList = ""
  for (var i = 0; i < contact.addresses.length; i++) {
    addressList += "<p>" + contact.addresses[i].type + ": " + contact.addresses[i].entry + "</p>";
    contact.addresses[i]
  }

  $("#addresses").html(addressList);

}


function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {

    showAddresses(this.id)
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
}

$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();

    var inputtedEmailP = $("input#primary-email-address").val();
    var inputtedEmailS = $("input#secondary-email-address").val();
    var inputtedAddressP = $("input#primary-home-address").val();
    var inputtedAddressS = $("input#secondary-home-address").val();

    clearForm();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    if (inputtedEmailP) newContact.addAddress(new AddressEntry(inputtedEmailP, "Primary Email"))
    if (inputtedEmailS) newContact.addAddress(new AddressEntry(inputtedEmailS, "Secondary Email"))
    if (inputtedAddressP) newContact.addAddress(new AddressEntry(inputtedAddressP, "Primary Address"))
    if (inputtedAddressS) newContact.addAddress(new AddressEntry(inputtedAddressS, "Secondary Address"))
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
    debugger;
  })
})




function clearForm() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-phone-number").val("");

  $("input#primary-email-address").val("");
  $("input#primary-email-address").val("");
  $("input#primary-home-address").val("");
  $("input#secondary-home-address").val("");
}
