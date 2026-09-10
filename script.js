/*
 * NOMOR WHATSAPP DLY WEAR (Format: 628xxxxxxxxxx)
 */
const nomorWhatsApp = "6287731427304";

/* =========================================
   DATA PRODUK LENGKAP DENGAN HARGA NUMERIK
========================================= */
const products = [
    {
        name: "DLY Lunar Mermaid Skirt Wanita Scuba Premium",
        rating: "★★★★★ <span>(4.9/5)</span>",
        variants: [
            { size: "Fit to S-M", price: "Rp 79.900", rawPrice: 79900 },
            { size: "Fit to L-XL", price: "Rp 81.900", rawPrice: 81900 }
        ],
        colors: {
            "Hitam Maxi": "images/mermaid-hitam-maxi.webp",
            "Putih Maxi": "images/mermaid-putih-maxi.webp",
            "Ivory Maxi": "images/mermaid-ivory-maxi.webp",
            "Cream Maxi": "images/mermaid-cream-maxi.webp",
            "Moca Maxi": "images/mermaid-moca-maxi.webp",
            "Cream Midi": "images/mermaid-cream-midi.webp"
        }
    },
    {
        name: "DLY Aurelia Blouse",
        rating: "★★★★☆ <span>(4.8/5)</span>",
        variants: [
            { size: "LD110", price: "Rp 85.500", rawPrice: 85500 },
            { size: "LD120", price: "Rp 90.500", rawPrice: 90500 }
        ],
        colors: {
            "Butter": "images/aurelia-butter.webp",
            "Hitam": "images/aurelia-hitam.webp",
            "Cokelat": "images/aurelia-coklat.webp"
        }
    },
    {
        name: "DLY Kima Blouse Polkadot Premium",
        rating: "★★★★★ <span>(5.0/5)</span>",
        variants: [
            { size: "LD110", price: "Rp 85.500", rawPrice: 85500 },
            { size: "LD120", price: "Rp 90.500", rawPrice: 90500 }
        ],
        colors: {
            "Hitam": "images/kima-hitam.webp",
            "Putih": "images/kima-putih.webp",
            "Maroon": "images/kima-maroon.webp",
            "Butter Yellow": "images/kima-butter-yellow.webp",
            "Baby Pink": "images/kima-baby-pink.webp",
            "Coklat": "images/kima-coklat.webp"
        }
    },
    {
        name: "DLY Linya Blouse Wanita Rayon Premium Motif Elegan",
        rating: "★★★★★ <span>(4.9/5)</span>",
        variants: [
            { size: "M (LD100)", price: "Rp 79.900", rawPrice: 79900 },
            { size: "L (LD110)", price: "Rp 85.500", rawPrice: 85500 },
            { size: "XL (LD120)", price: "Rp 90.500", rawPrice: 90500 }
        ],
        colors: {
            "Arabel Hitam": "images/arabel-hitam.webp",
            "Arabel Putih": "images/arabel-putih.webp",
            "Arabel Abu": "images/arabel-abu.webp",
            "Aster Mint": "images/aster-mint.webp",
            "Blossom": "images/blossom.webp",
            "Hanum Cream": "images/hanum-cream.webp",
            "Hanum Maroon": "images/hanum-maroon.webp",
            "Mella": "images/mella.webp",
            "Reva Putih": "images/reva-putih.webp",
            "Sania": "images/sania.webp"
        }
    }
];

let currentIndex = 0;

// RENDER PRODUK KE CARD KATALOG
function renderCard() {
    const currentProd = products[currentIndex];
    const cardEl = document.getElementById("productCard");

    cardEl.style.opacity = "0";
    cardEl.style.transform = "scale(0.96)";

    setTimeout(() => {
        document.getElementById("cardName").innerText = currentProd.name;
        document.getElementById("cardRating").innerHTML = currentProd.rating;

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

// PRODUK SELANJUTNYA & SEBELUMNYA
function nextProduct() {
    currentIndex = (currentIndex + 1) % products.length;
    renderCard();
}

function prevProduct() {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    renderCard();
}

// SINKRONISASI PADA FORM PEMESANAN KETIKA "BELI SEKARANG" DIKLIK
function buyCurrentProduct() {
    const currentProd = products[currentIndex];
    const selectedSize = document.getElementById("cardSize").value;
    const selectedColor = document.getElementById("cardColor").value;

    // Set Produk pada Form
    document.getElementById("produk").value = currentProd.name;

    // Population Opsi Ukuran & Warna Form
    populateFormOptions(currentProd);

    // Set Ukuran & Warna Sesuai Card
    document.getElementById("ukuran").value = selectedSize;
    document.getElementById("warna").value = selectedColor;

    // Update Rincian
    updateSummary();

    // Scroll Ke Form
    document.getElementById("pesan").scrollIntoView({ behavior: 'smooth' });
}

// ISI DYNAMIC OPTIONS FORM PEMESANAN
function populateFormOptions(productObj) {
    const ukuranSelect = document.getElementById("ukuran");
    ukuranSelect.innerHTML = "";
    productObj.variants.forEach(v => {
        const opt = document.createElement("option");
        opt.value = v.size;
        opt.innerText = v.size;
        ukuranSelect.appendChild(opt);
    });

    const warnaSelect = document.getElementById("warna");
    warnaSelect.innerHTML = "";
    Object.keys(productObj.colors).forEach(c => {
        const opt = document.createElement("option");
        opt.value = c;
        opt.innerText = c;
        warnaSelect.appendChild(opt);
    });
}

// EVENT SANGAT PRODUK DI FORM DIGANTI MANUAL
function onFormProductChange(selectedProductName) {
    const foundProd = products.find(p => p.name === selectedProductName);
    if (foundProd) {
        populateFormOptions(foundProd);
    } else {
        document.getElementById("ukuran").innerHTML = '<option value="">Pilih ukuran</option>';
        document.getElementById("warna").innerHTML = '<option value="">Pilih warna</option>';
    }
    updateSummary();
}

// FORMAT HARGA RUPIAH
function formatRupiah(number) {
    return "Rp " + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// UPDATE RINCIAN PESANAN & TOTAL HARGA OTOMATIS
function updateSummary() {
    const prodName = document.getElementById("produk").value;
    const sizeName = document.getElementById("ukuran").value;
    const colorName = document.getElementById("warna").value;
    const jumlah = parseInt(document.getElementById("jumlah").value) || 1;

    const foundProd = products.find(p => p.name === prodName);

    if (foundProd && sizeName) {
        const variant = foundProd.variants.find(v => v.size === sizeName);
        const hargaSatuan = variant ? variant.rawPrice : 0;
        const total = hargaSatuan * jumlah;

        document.getElementById("sumProduk").innerText = prodName;
        document.getElementById("sumUkuran").innerText = sizeName;
        document.getElementById("sumWarna").innerText = colorName || "-";
        document.getElementById("sumHargaSatuan").innerText = formatRupiah(hargaSatuan);
        document.getElementById("sumJumlah").innerText = jumlah;
        document.getElementById("sumTotal").innerText = formatRupiah(total);
    } else {
        document.getElementById("sumProduk").innerText = prodName || "-";
        document.getElementById("sumUkuran").innerText = sizeName || "-";
        document.getElementById("sumWarna").innerText = colorName || "-";
        document.getElementById("sumHargaSatuan").innerText = "Rp 0";
        document.getElementById("sumJumlah").innerText = jumlah;
        document.getElementById("sumTotal").innerText = "Rp 0";
    }
}

// SUBMIT FORM PEMESANAN KE WHATSAPP
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const noWa = document.getElementById("noWa").value;
    const produk = document.getElementById("produk").value;
    const ukuran = document.getElementById("ukuran").value;
    const warna = document.getElementById("warna").value;
    const jumlah = document.getElementById("jumlah").value;
    const kotaKecamatan = document.getElementById("kotaKecamatan").value;
    const alamat = document.getElementById("alamat").value;

    const totalHarga = document.getElementById("sumTotal").innerText;
    const hargaSatuan = document.getElementById("sumHargaSatuan").innerText;

    const pesan = 
`Halo DLY Wear 👋

Saya ingin melakukan pemesanan:

📋 *DATA PEMESANAN*
• Nama: ${nama}
• No. WhatsApp: ${noWa}
• Kota / Kecamatan: ${kotaKecamatan}
• Alamat Lengkap: ${alamat}

🛍️ *RINCIAN PESANAN*
• Produk: ${produk}
• Ukuran: ${ukuran}
• Warna: ${warna}
• Jumlah: ${jumlah} pcs
• Harga Satuan: ${hargaSatuan}

----------------------------------
💰 *TOTAL HARGA: ${totalHarga}*
----------------------------------

Mohon info untuk proses pembayaran dan pengiriman. Terima kasih 😊`;

    const url = "https://wa.me/" + nomorWhatsApp + "?text=" + encodeURIComponent(pesan);
    window.open(url, "_blank");
});

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