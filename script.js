// script.js
const contactos = [
    "Leonardo Fierro",
    "Yanet Olmedo",
    "Rafael",
    "Sabiya",
    "Jairo"
];

function imprimirContactos() {
    console.log("Lista de Contactos:");
    contactos.forEach(contacto => {
        console.log(contacto);
    });
}

function addContact() {
    const nombreApellido = document.getElementById("name").value.trim();
    if (nombreApellido !== "") {
        if (!contactos.includes(nombreApellido)) {
            contactos.push(nombreApellido);
            document.getElementById("name").value = "";
            actualizarLista();
        } else {
            alert("El contacto ya existe en la lista.");
        }
    }
}

function deleteContact(index) {
    const nombreContacto = contactos[index];
    const confirmar = confirm(`¿Estás seguro de eliminar a ${nombreContacto}?`);
    if (confirmar) {
        contactos.splice(index, 1);
        actualizarLista();
    }
}

function actualizarLista() {
    const lista = document.getElementById("contacts");
    lista.innerHTML = "";
    contactos.forEach((contacto, index) => {
        const li = document.createElement("li");
        li.textContent = contacto;
        li.addEventListener("click", () => deleteContact(index));

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "delete-btn";
        btnEliminar.addEventListener("click", (event) => {
            event.stopPropagation();
            deleteContact(index);
        });

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

actualizarLista();
