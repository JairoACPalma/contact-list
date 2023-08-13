
const contactos = [];

function addContact() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const city = document.getElementById("city").value.trim();
    const address = document.getElementById("address").value.trim();

    if (firstName !== "" && lastName !== "") {
        const newContact = {
            id: generateId(),
            nombres: firstName,
            apellidos: lastName,
            telefono: phone,
            ciudad: city,
            direccion: address
        };

        if (!contactExists(newContact)) {
            contactos.push(newContact);
            clearInputs();
            actualizarLista();
        } else {
            alert("El contacto ya existe en la lista.");
        }
    }
}

function deleteContact(id) {
    const index = findContactIndexById(id);

    if (index !== -1) {
        contactos.splice(index, 1);
        actualizarLista();
    }
}

function actualizarLista() {
    const lista = document.getElementById("contacts");
    lista.innerHTML = "";
    contactos.forEach(contacto => {
        const li = document.createElement("li");
        li.textContent = `${contacto.nombres} ${contacto.apellidos} - ${contacto.telefono} - ${contacto.ciudad} - ${contacto.direccion}`;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "delete-btn";
        btnEliminar.addEventListener("click", () => {
            deleteContact(contacto.id);
        });

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function contactExists(newContact) {
    return contactos.some(contacto => contacto.nombres === newContact.nombres && contacto.apellidos === newContact.apellidos);
}

function findContactIndexById(id) {
    return contactos.findIndex(contacto => contacto.id === id);
}

function clearInputs() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("city").value = "";
    document.getElementById("address").value = "";
}

actualizarLista();
