// Scroll suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Validación del formulario de contacto
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const mensaje = this.querySelector('textarea').value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Por favor completá todos los campos.');
    return;
  }

  // Aquí podrías integrar un servicio de envío de correos o notificación
  console.log('Formulario enviado con éxito:');
  console.log('Nombre:', nombre);
  console.log('Email:', email);
  console.log('Mensaje:', mensaje);
  alert('Gracias por tu mensaje. Te responderé pronto.');

  this.reset();
});
