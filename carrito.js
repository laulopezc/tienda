let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    abrirCarrito();
}

function mostrarCarrito() {
    const contenedor = document.getElementById('carrito-lista');
    const totalSpan = document.getElementById('carrito-total');
    contenedor.innerHTML = "";

    let total = 0;
    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        contenedor.appendChild(li);
        total += item.precio;
    });

    document.getElementById('carrito-cantidad').textContent = carrito.length;
    totalSpan.textContent = total;
}

function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

function abrirCarrito() {
    const carritoSidebar = document.getElementById('carrito-sidebar');
    carritoSidebar.classList.remove('oculto');
    carritoSidebar.classList.add('visible');
}

function toggleCarrito() {
    const carritoSidebar = document.getElementById('carrito-sidebar');
    carritoSidebar.classList.toggle('visible');
    carritoSidebar.classList.toggle('oculto');
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const confirmar = confirm("¿Deseás finalizar la compra?");
    if (confirmar) {
        alert("¡Gracias por tu compra!");
        vaciarCarrito();
        toggleCarrito();
    }
}

window.onload = function () {
    const guardado = localStorage.getItem('carrito');
    if (guardado) {
        carrito = JSON.parse(guardado);
        mostrarCarrito();
    }
};
