function username(username, userType) {

    if (userType === "admin" || userType === "manager"){
        return "username valid(1)";
    }
    if (username.length > 5 && username.length < 10) {
        return "username valid(2)";
    }
    else {
        return "username invalid";
    }

}
console.log(username("Sheikh" ,"admin"));