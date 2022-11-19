const mongoose = require('mongoose');

const Vendedor = mongoose.model(
  "Vendedor",
  new mongoose.Schema({
    idVendedor: String,
    nombre: String,
    email: String,
    totalComision: Number,
  })
);

const Venta = mongoose.model(
  "Venta",
  new mongoose.Schema({
    idVenta: String,
    zona: String,
    fecha: String,
    valorVenta: Number,
  })
);

  if (Venta.zona != "norte" || "sur") {
    console.log("Solo se permite norte o sur");
  }
  else {
    console.log("Se guardo la información");
  }

module.exports = {
  Vendedor: Vendedor,
  Venta: Venta,
};