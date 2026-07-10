let libros = [];

function agregarLibro(){

    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const anio = document.getElementById("anio").value;

    if(titulo === "" || autor === "" || anio === ""){
        alert("Complete todos los campos");
        return;
    }

    const libro = {
        titulo,
        autor,
        anio
    };

    libros.push(libro);

    mostrarLibros();

    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("anio").value = "";
}

function mostrarLibros(){

    const contenedor = document.getElementById("contenedorLibros");

    contenedor.innerHTML = "";

    libros.forEach((libro, indice)=>{

        contenedor.innerHTML += `
            <div class="libro">
                <h3>${libro.titulo}</h3>
                <p><strong>Autor:</strong> ${libro.autor}</p>
                <p><strong>Año:</strong> ${libro.anio}</p>

                <div class="botones">
                    <button class="eliminar"
                    onclick="eliminarLibro(${indice})">
                    Eliminar
                    </button>
                </div>
            </div>
        `;
    });
}

function eliminarLibro(indice){
    libros.splice(indice,1);
    mostrarLibros();
}
