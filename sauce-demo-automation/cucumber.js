module.exports = {
  default: {
    require: ['step_definitions/**/*.js'], // Asegúrate de que esta ruta sea correcta
    format: ['pretty'],
    tags: '@InicionValido or @InicionInvalido', // Si estás usando etiquetas para filtrar escenarios
    snippets: true, // Esto es opcional, pero útil para generar fragmentos de código
  },
};
