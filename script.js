function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    sidebar.style.display = (sidebar.style.display === "none") ? "block" : "none";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}