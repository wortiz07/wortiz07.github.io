document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item-gif");
    const paginacionContenedor = document.getElementById("paginacion");
    
    const itemsPorPagina = 10; 
    let paginaActual = 1;

    function mostrarPagina(pagina) {
        const inicio = (pagina - 1) * itemsPorPagina;
        const fin = inicio + itemsPorPagina;

        items.forEach((item, index) => {
            if (index >= inicio && index < fin) {
                item.classList.remove("oculto");
            } else {
                item.classList.add("oculto");
            }
        });

        actualizarBotones(pagina);
    }

    function crearBotones() {
        const totalPaginas = Math.ceil(items.length / itemsPorPagina);
        paginacionContenedor.innerHTML = ""; 

        if (totalPaginas <= 1) return; 

        for (let i = 1; i <= totalPaginas; i++) {
            const boton = document.createElement("button");
            boton.innerText = i;
            boton.classList.add("btn-pag");
            if (i === paginaActual) boton.classList.add("activo");

            boton.addEventListener("click", function() {
                paginaActual = i;
                mostrarPagina(paginaActual);

                window.scrollTo({ top: 0, behavior: 'smooth' }); 
            });

            paginacionContenedor.appendChild(boton);
        }
    }

    function actualizarBotones(pagina) {
        const botones = document.querySelectorAll(".btn-pag");
        botones.forEach(boton => {
            boton.classList.remove("activo");
            if (parseInt(boton.innerText) === pagina) {
                boton.classList.add("activo");
            }
        });
    }

    crearBotones();
    mostrarPagina(paginaActual);
});
