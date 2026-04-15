// ==========================================
// INITIALIZE ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // GALLERY FILTER
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hidden');
                } else {
                    if (item.getAttribute('data-category') === filterValue) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });

    // ==========================================
    // CONTACT FORM HANDLING
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic validation
            if (name && email && subject && message) {
<<<<<<< HEAD
                // Show success message
                const successMessage = document.getElementById('successMessage');
                successMessage.style.display = 'block';

                // Reset form
                contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(function() {
                    successMessage.style.display = 'none';
                }, 5000);

                // Log form data (for debugging)
                console.log({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
=======
                const successMessage = document.getElementById('successMessage');
                const submitButton = contactForm.querySelector('[type="submit"]');
                const originalButtonText = submitButton.textContent;

                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;

                const formData = new FormData(contactForm);
                const formEndpoint = contactForm.getAttribute('action');

                fetch(formEndpoint, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(function(response) {
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;

                    if (response.ok) {
                        successMessage.style.display = 'block';
                        contactForm.reset();
                        setTimeout(function() {
                            successMessage.style.display = 'none';
                        }, 5000);
                    } else {
                        return response.json().then(function(data) {
                            throw new Error(data.error || 'Form submission failed.');
                        });
                    }
                })
                .catch(function() {
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                    alert('Oops! Something went wrong. Please try again later.');
>>>>>>> 01552c4 (final)
                });
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // ==========================================
    // SCROLL ANIMATIONS (Optional enhancement)
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe gallery items for fade-in effect
    document.querySelectorAll('.gallery-item, .featured-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
<<<<<<< HEAD
=======

// ==========================================
// ARTWORK MODAL FUNCTIONALITY
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('artworkModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalMedium = document.getElementById('modalMedium');
    const modalYear = document.getElementById('modalYear');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.querySelector('.artwork-modal-close');
    const imageZoomOverlay = document.getElementById('imageZoomOverlay');
    const zoomedImage = document.getElementById('zoomedImage');

    // Artwork data
    const artworks = {
        img1: {
            image: 'img/img1.jpeg',
            title: 'GAUNG DALAM BIRU',
            medium: 'Akrilik dan pasta indigo alami pada kain katun primissima (200 × 600 cm)',
            year: '2026',
            description: 'Gaung dalam Biru Terdiri dari lima lembar kain yang disusun berjajar, menampilkan gradasi dari warna biru gelap menuju putih yang merepresentasikan jarak antar generasi serta perubahan zaman. Warna biru dimaknai sebagai ruang di mana pengalaman dan ingatan kultural saling bergaung. Pola lingkaran hasil dari teknik ikat-celup secara visual menyerupai jejak sel atau sisa memori. Motif burung lawet dihadirkan dalam bentuk siluet agar tetap senada dengan gradasi warna, sekaligus berfungsi sebagai penanda ingatan kolektif dan identitas wilayah Kebumen.'
        },
        img2: {
            image: 'img/img2.jpeg',
            title: 'SPECIMENS IN BLUE FIELD',
            medium: 'Akrilik, daun marenggo, dan pasta indigo alami pada kain katun primissima (50 × 100 cm)',
            year: '2026',
            description: 'Mengeksplorasi penggunaan material alami seperti daun marenggo dan pasta indigo sebagai medium pembentuk citra visual. Bentuk-bentuk yang muncul menyerupai spesimen, merepresentasikan upaya dokumentasi visual terhadap jejak alam pada bidang biru sebagai latar utama. Melalui pendekatan eksperimental terhadap bahan alami, karya ini menekankan relasi antara proses material, alam, dan praktik artistik sebagai bentuk pencatatan visual yang bersifat organik.'
        },
        img3: {
            image: 'img/img3.jpeg',
            title: '3 LAWET',
            medium: 'Akrilik, pemutih, ekstrak daun jati, dan ekstrak bunga kamboja pada kain katun primissima (30 × 30 cm)',
            year: '2026',
            description: 'Menampilkan representasi tiga burung lawet sebagai subjek visual yang berkaitan dengan simbol kehidupan dan interaksi ekologis. Penggunaan bahan seperti pemutih, ekstrak daun jati, dan ekstrak bunga kamboja menghasilkan variasi warna dan tekstur yang terbentuk melalui proses kimiawi dan alami. Melalui pendekatan tersebut, karya ini menggarisbawahi eksplorasi material alami sebagai medium ekspresi visual yang merefleksikan hubungan antara makhluk hidup dan lingkungan.'
        }
    };

    // Add click event to portfolio cards
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', function() {
            const artworkId = this.getAttribute('data-artwork');
            const artwork = artworks[artworkId];

            if (artwork) {
                modalImage.src = artwork.image;
                modalTitle.textContent = artwork.title;
                modalMedium.textContent = artwork.medium;
                modalYear.textContent = artwork.year;
                modalDescription.textContent = artwork.description;

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (imageZoomOverlay.style.display === 'flex') {
                closeZoom();
            } else if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });

    // Open full-size zoom overlay when the modal image is clicked
    modalImage.addEventListener('click', function() {
        if (modalImage.src) {
            zoomedImage.src = modalImage.src;
            imageZoomOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });

    // Close zoom overlay helper
    function closeZoom() {
        imageZoomOverlay.style.display = 'none';
        if (modal.style.display !== 'block') {
            document.body.style.overflow = 'auto';
        }
    }

    imageZoomOverlay.addEventListener('click', function(event) {
        if (event.target === imageZoomOverlay || event.target === zoomedImage) {
            closeZoom();
        }
    });
});
>>>>>>> 01552c4 (final)
