document.getElementById("getInfoBtn").addEventListener("click", function () {
    var name = prompt("Enter your name:");
    var phone = prompt("Enter your phone number:");
    // You can send this data to a server for further processing
    // For a real project, you would need server-side code to handle this.
    alert("Thank you, " + name + "! We'll get in touch with you soon.");
});
