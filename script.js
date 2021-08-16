var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

function generatePassword() {
    var allChars = [];
    var resultPass = "";

    var totlength = prompt("How many characters would you like your password to be?");

    if (confirm("Would you like your password to contain upper case letters?")) {
        Array.prototype.push.apply(allChars, abcUpperArr);
    }

    if (confirm("Would you like your password to contain lower case letters?")) {
        Array.prototype.push.apply(allChars, abcLowerArr);
    }

    if (confirm("Would you like your password to contain numbers?")) {
        Array.prototype.push.apply(allChars, numArr);
    }

    if (confirm("Would you like your password to contain symbols?")) {
        Array.prototype.push.apply(allChars, symArr);
    }

    if (allChars.length === 0) {
        alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
    }

    else {
        for (var i = 0; i < totlength; i++) {
            var random = Math.floor(Math.random() * allChars.length);
            resultPass += allChars[random];
        }
    }

    document.getElementById("password").innerHTML = resultPass;
};
