const express = require('express'); // "experess" xatosini to'g'irladim
const path = require('path');
const app = express();
const port = process.env.PORT || 7000;

// Barcha statik fayllarni (css, js, rasmlar) avtomatik ulash
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} da ishlamoqda`);
});