
function calcularTotalCompra(precio, cantidad) {
    if (precio < 0 || cantidad < 0) return 0;
    return precio * cantidad;
}

function validarStockDisponible(stockActual, cantidadSolicitada) {
    return stockActual >= cantidadSolicitada;
}

module.exports = { calcularTotalCompra, validarStockDisponible };