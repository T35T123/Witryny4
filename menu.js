(function(){

    let className = "navbar-container-responsive";

    const init = () => {

       document.addEventListener("DOMContentLoaded", initMenu); 

    };

    const initMenu = () => {

        const menu = document.getElementById("menu");
        openMenuRegistry(menu);
        closeMenuRegistry(menu);

    }

    const openMenuRegistry = menu => {

        const openIcon = document.getElementById("open");
        openIcon.addEventListener("click", () => {
            menu.className = className;
        });

    };

    const closeMenuRegistry = menu => {

        const closeIcon = document.getElementById("close");
        closeIcon.addEventListener("click", () => {
            menu.className = className + " disabled";
        });

    };

    init();

})();