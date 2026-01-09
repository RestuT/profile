// Inisialisasi Ikon
lucide.createIcons();

// Filter Portofolio
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Reset tombol
        filterBtns.forEach(b => {
            b.style.background = 'white';
            b.style.color = 'black';
        });
        // Aktifkan tombol yang diklik
        btn.style.background = 'black';
        btn.style.color = 'white';

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'semua' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Modal Logic
const overlay = document.getElementById('modal-overlay');
const mTitle = document.getElementById('modal-title');
const mDesc = document.getElementById('modal-desc');
const mHeader = document.getElementById('modal-header');

function openModal(title, desc, colorClass) {
    mTitle.innerText = title;
    mDesc.innerText = desc;
    
    // Set header color (manual colors based on project)
    if(title.includes('Edu')) mHeader.style.backgroundColor = 'var(--purple)';
    if(title.includes('Studio')) mHeader.style.backgroundColor = 'var(--yellow)';
    if(title.includes('Campaign')) mHeader.style.backgroundColor = 'var(--blue)';

    overlay.style.display = 'flex';
}

function closeModal() {
    overlay.style.display = 'none';
}

// Tutup modal jika klik di luar box
window.onclick = function(event) {
    if (event.target == overlay) {
        closeModal();
    }
}
