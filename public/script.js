javascript
// TOMBOL SALAM - Memanggil API
document.getElementById('btn-salam').addEventListener('click', async () => {
    const hasilEl = document.getElementById('hasil-salam');
    hasilEl.textContent = 'Memuat...';

    try {
        const response = await fetch('/api/salam');
        const data = await response.json();
        hasilEl.textContent = `${data.pesan} (${data.waktu})`;
    } catch (error) {
        hasilEl.textContent = '⚡ Halo dari Website Pertamaku! Selamat datang! 🎉';
    }
});

// FORM KONTAK
document.getElementById('form-kontak').addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = '✅ Pesan berhasil dikirim! Terima kasih! 🎉';
    e.target.reset();

    setTimeout(() => {
        status.textContent = '';
    }, 4000);
});

// SMOOTH SCROLL untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ANIMASI SKILL BAR saat scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

console.log('🚀 Website Pertamaku berhasil dimuat!');