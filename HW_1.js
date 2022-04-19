function reverseString1(str) {
    return str.split("").reverse().join("");
}


function reverseString2(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function reverseString3(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }


function reverseString4(str) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        newString = str[i] + newString;
    }
    return newString;
}

function reverseString5(str) {
    let reversedStr = "";
    for (let i in str) {
        reversedStr = str[i] + reversedStr;
    }
    return reversedStr;
}

function reverseString6(str) {
    let reversedStr = "";
    for (let i of str) {
        reversedStr = i + reversedStr;
    }
    return reversedStr;
}

