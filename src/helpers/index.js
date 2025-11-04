document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert("Tack! Ditt meddelande har skickats.");
  } else {
    alert("Fyll i alla fält innan du skickar.");
  }
});
