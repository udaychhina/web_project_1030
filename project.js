function menuToggle() {
    let menu = document.getElementById("menu-links");
    if(menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}