const password = "your password";
const rpt = "password";

function pass(password) {
    if (!(password.length >= 8 && password ===rpt)) {
        return true
    }
    else {
        return false
    }

}
console.log(pass(password));