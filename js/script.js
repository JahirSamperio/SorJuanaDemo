// Desktop submenu functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuGroups = document.querySelectorAll('.group');

    // Asegúrate de que todos los submenús estén ocultos al cargar
    menuGroups.forEach(group => {
        const submenu = group.querySelector('.submenu');
        if (submenu) {
            submenu.style.opacity = 0; // Inicialmente opacidad 0
            submenu.style.visibility = 'hidden'; // También ocultamos con visibility
            submenu.style.transition = 'opacity 0.3s ease, visibility 0.3s ease'; // Suave transición
        }
    });

    menuGroups.forEach(group => {
        const submenu = group.querySelector('.submenu');

        // Mostrar el submenú al pasar el ratón
        group.addEventListener('mouseenter', () => {
            if (submenu) {
                submenu.style.opacity = 1;
                submenu.style.visibility = 'visible'; // Mostramos el submenú
            }
        });

        // Ocultar el submenú al salir el ratón
        group.addEventListener('mouseleave', () => {
            if (submenu) {
                submenu.style.opacity = 0;
                submenu.style.visibility = 'hidden'; // Ocultamos el submenú
            }
        });
    });

    // Cerrar el menú si se hace clic fuera
    document.addEventListener('click', function (event) {
        const targetElement = event.target; // Elemento clickeado
        let isClickInside = false;

        menuGroups.forEach(group => {
            const submenu = group.querySelector('.submenu');
            if (submenu) {
                // Comprobar si el clic está dentro del grupo o submenú
                if (group.contains(targetElement) || submenu.contains(targetElement)) {
                    isClickInside = true; // Si el clic es dentro, no hacer nada
                }
            }
        });

        // Si el clic está fuera de los menús, ocultar submenús
        if (!isClickInside) {
            menuGroups.forEach(group => {
                const submenu = group.querySelector('.submenu');
                if (submenu) {
                    submenu.style.opacity = 0;
                    submenu.style.visibility = 'hidden'; // Ocultar submenú
                }
            });
        }
    });
});
