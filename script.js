document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Quitar clase activa de todos los botones
            filterBtns.forEach(b => b.classList.remove("active"));
            // Añadir clase activa al botón clicado
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projects.forEach(project => {
                if (filterValue === "all" || project.getAttribute("data-category") === filterValue) {
                    project.classList.remove("hide");
                    // Pequeña animación de entrada
                    project.style.opacity = "0";
                    setTimeout(() => {
                        project.style.opacity = "1";
                        project.style.transition = "opacity 0.4s ease";
                    }, 50);
                } else {
                    project.classList.add("hide");
                }
            });
        });
    });
});
