const mongoose = require('mongoose');
const Vacante = mongoose.model('Vacante');

exports.showJobs = async (req, res, next) => {

  const vacantes = await Vacante.find().lean();

  if (!vacantes) return next();

  res.render('home', {
    nombrePagina: 'Dev Jobs',
    tagline: 'Encuentra y publica trabajos para desarrolladores web',
    barra: true,
    button: true,
    vacantes
  })
}