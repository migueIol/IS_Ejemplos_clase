//componente mejorado

const productos = [
    { nombre: "PC Gamer", precio: 20000, img: "https://tse3.mm.bing.net/th/id/OIP.436xXEbMuOiFIahDMXgKtQHaIl?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { nombre: "Audifonos", precio: 2000, img: "https://tse1.mm.bing.net/th/id/OIP.8dAkEVxLLH9WLymkFD2QtAHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" }
];

const contenedor = document.getElementById("contenedor");

productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src="${prod.img}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>${prod.precio}</p>
            <button>Agregar al carrito</button>
    `;
    contenedor.appendChild(card);
});