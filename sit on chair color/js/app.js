function myFunction() {
    var x = document.getElementById("top");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}