/* =========================================
   DATA PRODUK UNTUK BERANDA KATALOG
========================================= */
const products = [
    {
        name: "DLY Lunar Mermaid Skirt Wanita Scuba Premium",
        rating: "★★★★★ <span>(4.9/5)</span>",
        detailPage: "produk-skirt.html",
        variants: [
            { size: "Fit to S-M", price: "Rp 79.900" },
            { size: "Fit to L-XL", price: "Rp 81.900" }
        ],
        colors: {
            "Hitam Maxi": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=600&q=80",
            "Putih Maxi": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
            "Ivory Maxi": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80",
            "Cream Maxi": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
            "Moca Maxi": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
            "Cream Midi": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
        }
    },
    {
        name: "DLY Aurelia Blouse",
        rating: "★★★★☆ <span>(4.8/5)</span>",
        detailPage: "produk-aurelia.html",
        variants: [
            { size: "LD110", price: "Rp 85.500" },
            { size: "LD120", price: "Rp 90.500" }
        ],
        colors: {
            "Butter": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80",
            "Hitam": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
            "Cokelat": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80"
        }
    },
    {
        name: "DLY Kima Blouse Polkadot Premium",
        rating: "★★★★★ <span>(5.0/5)</span>",
        detailPage: "produk-kima.html",
        variants: [
            { size: "LD110", price: "Rp 85.500" },
            { size: "LD120", price: "Rp 90.500" }
        ],
        colors: {
            "Hitam": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
            "Putih": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
            "Maroon": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80",
            "Butter Yellow": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
            "Baby Pink": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
            "Coklat": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
        }
    },
    {
        name: "DLY Linya Blouse Wanita Rayon Premium Motif Elegan",
        rating: "★★★★★ <span>(4.9/5)</span>",
        detailPage: "produk-linya.html",
        variants: [
            { size: "M (LD100)", price: "Rp 79.900" },
            { size: "L (LD110)", price: "Rp 85.500" },
            { size: "XL (LD120)", price: "Rp 90.500" }
        ],
        colors: {
            "Arabel Hitam": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
            "Arabel Putih": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
            "Arabel Abu": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80",
            "Aster Mint": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
            "Blossom": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
            "Hanum Cream": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80",
            "Hanum Maroon": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
            "Mella": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
            "Reva Putih": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
            "Sania": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80"
        }
    }
];

let currentIndex = 0;

// RENDER PRODUK KE CARD KATALOG BERANDA
function renderCard() {
    const currentProd = products[currentIndex];
    const cardEl = document.getElementById("productCard");

    cardEl.style.opacity = "0";
    cardEl.style.transform = "scale(0.96)";

    setTimeout(() => {
        document.getElementById("cardName").innerText = currentProd.name;
        document.getElementById("cardRating").innerHTML = currentProd.rating;
        document.getElementById("cardDetailLink").href = currentProd.detailPage;

        // Opsi Ukuran Card
        const sizeSelect = document.getElementById("cardSize");
        sizeSelect.innerHTML = "";
        currentProd.variants.forEach(v => {
            const opt = document.createElement("option");
            opt.value = v.size;
            opt.innerText = v.size;
            sizeSelect.appendChild(opt);
        });

        // Set Harga Sesuai Ukuran Pertama
        document.getElementById("cardPrice").innerText = currentProd.variants[0].price;

        // Opsi Warna Card
        const colorSelect = document.getElementById("cardColor");
        colorSelect.innerHTML = "";
        Object.keys(currentProd.colors).forEach(c => {
            const opt = document.createElement("option");
            opt.value = c;
            opt.innerText = c;
            colorSelect.appendChild(opt);
        });

        // Set Gambar Card
        const firstColor = Object.keys(currentProd.colors)[0];
        document.getElementById("cardImage").src = currentProd.colors[firstColor];

        cardEl.style.opacity = "1";
        cardEl.style.transform = "scale(1)";
    }, 200);
}

// UBAH HARGA KETIKA UKURAN DIGANTI PADA CARD
function onSizeChange(selectedSize) {
    const currentProd = products[currentIndex];
    const foundVariant = currentProd.variants.find(v => v.size === selectedSize);
    if (foundVariant) {
        document.getElementById("cardPrice").innerText = foundVariant.price;
    }
}

// UBAH GAMBAR KETIKA WARNA DIGANTI PADA CARD
function onColorChange(colorName) {
    const currentProd = products[currentIndex];
    const imgEl = document.getElementById("cardImage");
    if (currentProd.colors[colorName]) {
        imgEl.style.opacity = "0.3";
        setTimeout(() => {
            imgEl.src = currentProd.colors[colorName];
            imgEl.style.opacity = "1";
        }, 150);
    }
}

// NAVIGATION PREV / NEXT
function nextProduct() {
    currentIndex = (currentIndex + 1) % products.length;
    renderCard();
}

function prevProduct() {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    renderCard();
}

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.12 });

revealElements.forEach(element => observer.observe(element));

// INIT CARD ON LOAD
renderCard();