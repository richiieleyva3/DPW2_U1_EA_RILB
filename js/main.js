document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const menuBtn = document.getElementById("boton-menu");
    const cerrarMenu = document.getElementById("boton-menu-close");
    const abrirMenu = document.getElementById("boton-menu-open");

    if (!menu || !menuBtn || !cerrarMenu || !abrirMenu) {
        return;
    }

    const updateMenuVisibility = () => {
        if (window.innerWidth > 700) {
            cerrarMenu.style.display = "none";
            abrirMenu.style.display = "none";
            menu.classList.remove("active");
        } else {
            cerrarMenu.style.display = "";
            abrirMenu.style.display = "";
            if (menu.classList.contains("active")) {
                cerrarMenu.classList.add("active");
                abrirMenu.classList.remove("active");
            } else {
                cerrarMenu.classList.remove("active");
                abrirMenu.classList.add("active");
            }
        }
    };

    updateMenuVisibility();

    window.addEventListener("resize", updateMenuVisibility);

    menuBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        menu.classList.toggle("active");
        cerrarMenu.classList.toggle("active");
        abrirMenu.classList.toggle("active");
        if (!menu.classList.contains("active")) {
            document.querySelectorAll(".menu ul li a").forEach((item) => {
                item.classList.remove("active");
            });
        }
    });

    document.addEventListener("click", (event) => {
        // Cerrar el menú si se hace clic fuera de él o si se selecciona una opción
        if ((!menu.contains(event.target) && !menuBtn.contains(event.target)) || menu.contains(event.target)) {
            menu.classList.remove("active");
            cerrarMenu.classList.remove("active");
            abrirMenu.classList.add("active");
        }
    });
});
