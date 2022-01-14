document.addEventListener("DOMContentLoaded", function (event) {
    var shadowMenu = document.getElementById('menuItems');
    var menuIconContainer = document.getElementById('hamburguer_icon');
 
    menuIconContainer.addEventListener('click', () => {
        shadowMenu.setAttribute("class", "collapse navbar-collapse shadow-lg");
    });

    window.addEventListener('resize', () => {
        document.getElementById('menuItems').setAttribute("class", "collapse navbar-collapse");
    });
});