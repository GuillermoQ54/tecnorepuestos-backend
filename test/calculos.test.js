
const { calcularTotalCompra, validarStockDisponible } = require('../src/services/calculos');

describe('Pruebas Unitarias - Lógica de Negocio', () => {
    test('calcularTotalCompra debe multiplicar precio por cantidad correctamente', () => {
        expect(calcularTotalCompra(15, 3)).toBe(45);
        expect(calcularTotalCompra(-5, 2)).toBe(0); // Manejo de errores
    });

    test('validarStockDisponible debe retornar true si hay stock suficiente', () => {
        expect(validarStockDisponible(10, 5)).toBe(true);
        expect(validarStockDisponible(2, 5)).toBe(false);
    });
});