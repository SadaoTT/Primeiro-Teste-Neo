const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // configurações adicionais ou plugins
    },
    // outras configurações...
  },
  video: true, // Habilita a gravação de vídeo
});
