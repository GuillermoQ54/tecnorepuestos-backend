const request = require('supertest');
const express = require('express');

// Simulamos una aplicación Express pequeña
const app = express();
app.use(express.json());

app.post('/api/productos', (req, res) => {
    const { nombre, precio } = req.body;
    if (!nombre || !precio) {
        return res.status(400).json({ error: 'Faltan datos' });
    }
    res.status(201).json({ mensaje: 'Producto creado', producto: req.body });
});

describe('Prueba de Integración - Rutas HTTP', () => {
    test('POST /api/productos debe crear un producto y retornar 201', async () => {
        const respuesta = await request(app)
            .post('/api/productos')
            .send({ nombre: 'Cable HDMI', precio: 10.50 });
        
        expect(respuesta.statusCode).toBe(201);
        expect(respuesta.body.mensaje).toBe('Producto creado');
    });
});