javascript
const express = require('express');
const path = require('path');
const app = express();

// Serve file static dari folder "public"
app.use(express.static(path.join(__dirname, '..', 'public')));

// Route utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Route API contoh
app.get('/api/salam', (req, res) => {
  res.json({ 
    pesan: 'Halo! Ini API pertama saya! 🎉',
    waktu: new Date().toLocaleString('id-ID')
  });
});

// Jalankan server (untuk development)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;