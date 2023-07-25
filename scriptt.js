// script.js
const contactos = [
    {
        id: 1,
        nombres: "Leonardo",
        apellidos: "Fierro",
        telefono: "123456789",
        ubicaciones: {
            ciudad: "Ciudad 1",
            direccion: "Calle 123"
        }
    },
    {
        id: 2,
        nombres: "Yanet",
        apellidos: "Olmedo",
        telefono: "987654321",
        ubicaciones: {
            ciudad: "Ciudad 2",
            direccion: "Avenida 456"
        }
    },
    {
        id: 3,
        nombres: "Rafael",
        apellidos: "Pérez",
        telefono: "555555555",
        ubicaciones: {
            ciudad: "Ciudad 3",
            direccion: "Plaza 789"
        }
    },
    {
        id: 4,
        nombres: "Sabiya",
        apellidos: "Gomez",
        telefono: "111222333",
        ubicaciones: {
            ciudad: "Ciudad 4",
            direccion: "Carretera 999"
        }
    },
    {
        id: 5,
        nombres: "Jairo",
        apellidos: "Cuaical",
        telefono: "444444444",
        ubicaciones: {
            ciudad: "Ciudad 5",
            direccion: "Carrera 777"
        }
    }
];

function imprimirContactos() {
    console.log("Lista de Contactos:");
    contactos.forEach(contacto => {
        console.log(contacto.nombres + " " + contacto.apellidos);
    });
}

function addContact() {
    const nombreApellido = document.getElementById("name").value.trim();
    if (nombreApellido !== "") {
        if (!contactos.some(contacto => (contacto.nombres + " " + contacto.apellidos) === nombreApellido)) {
            const nuevoContacto = {
                id: contactos.length + 1,
                nombres: nombreApellido.split(" ")[0],
                apellidos: nombreApellido.split(" ")[1],
                telefono: "",
                ubicaciones: {
                    ciudad: "",
                    direccion: ""
                }
            };
            contactos.push(nuevoContacto);
            document.getElementById("name").value = "";
            actualizarLista();
        } else {
            alert("El contacto ya existe en la lista.");
        }
    }
}

function deleteContact(id) {
    const nombreContacto = contactos.find(contacto => contacto.id === id).nombres + " " + contactos.find(contacto => contacto.id === id).apellidos;
    const confirmar = confirm(`¿Estás seguro de eliminar a ${nombreContacto}?`);
    if (confirmar) {
        const index = contactos.findIndex(contacto => contacto.id === id);
        contactos.splice(index, 1);
        actualizarLista();
    }
}

function actualizarLista() {
    const lista = document.getElementById("contacts");
    lista.innerHTML = "";
    contactos.forEach(contacto => {
        const li = document.createElement("li");
        li.textContent = contacto.nombres + " " + contacto.apellidos;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "delete-btn";
        btnEliminar.addEventListener("click", () => deleteContact(contacto.id));

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

actualizarLista();
