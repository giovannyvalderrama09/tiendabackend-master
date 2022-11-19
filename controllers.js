const { Vendedor, Venta } = require("./models.js");

// TODO: DATOS Vendedor

exports.createVendedor = (req, res) =>
  new Vendedor({
    idVendedor: req.body.idVendedor,
    nombre: req.body.nombre,
    email: req.body.email,
    totalComision: req.body.totalComision,
  }).save((err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });

exports.updateVendedor = (req, res) =>
  Vendedor.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        nombre: req.body.nombre,
        email: req.body.email,
        totalComision: req.body.totalComision,
      },
    },
    (err, data) => {
      if (err) res.json({ error: err });
      else res.json(data);
    }
  );

exports.deleteVendedor = (req, res) =>
  Vendedor.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });

exports.readVendedores = (req, res) =>
  Vendedor.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });

exports.readVendedor = (req, res) =>
  Vendedor.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });

//   FIXME: DATOS Venta

exports.createVenta = (req, res) =>
  new Venta({
    idVenta: req.body.idVenta,
    zona: req.body.zona,
    fecha: req.body.fecha,
    valorVenta: req.body.valorVenta,
  }).save((err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });

exports.updateVenta = (req, res) =>
  Venta.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        idVenta: req.body.idVenta,
        zona: req.body.zona,
        fecha: req.body.fecha,
        valorVenta: req.body.valorVenta,
      },
    },
    (err, data) => {
      if (err) res.json({ error: err });
      else res.json(data);
    }
  );

exports.deleteVenta = (req, res) =>
  Venta.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });

exports.readVentas = (req, res) =>
  Venta.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });

exports.readVenta = (req, res) =>
  Venta.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
