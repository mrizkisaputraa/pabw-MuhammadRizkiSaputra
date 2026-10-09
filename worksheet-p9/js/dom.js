import { daftarProyek } from "./app.js";

const daftar = document.querySelector("#daftar");
const tombolFilter = document.querySelector("#filter-button");
const pesanKosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
    const kartu = document.createElement("li");

    kartu.className = "kartu";
    kartu.textContent = `${proyek.judul} (${proyek.tahun}) - ${proyek.kategori}`;

    return kartu;
}

function tampilkanProyek(kategori = "semua") {
    daftar.textContent = "";
    const proyekTerpilih = daftarProyek.filter((proyek) => {
        return (
            kategori === "semua" ||
            proyek.kategori.toLowerCase() === kategori.toLowerCase()
        );
    });

    const fragmen = document.createDocumentFragment();

    proyekTerpilih.forEach((proyek) => {
        fragmen.append(buatKartu(proyek));
    });

    daftar.append(fragmen);

    pesanKosong.hidden = proyekTerpilih.length > 0;
}


function tandaiTombolAktif(tombolAktif) {
    tombolFilter
        .querySelectorAll('button[data-kategori]')
        .forEach((tombol) => {
            tombol.classList.toggle("aktif", tombol === tombolAktif);
        });
}

tombolFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button[data-kategori]");

    if (!tombol) return;

    tandaiTombolAktif(tombol);
    tampilkanProyek(tombol.dataset.kategori);
});

const tombolSemua = tombolFilter.querySelector(
    'button[data-kategori="semua"]'
);

if (tombolSemua) {
    tandaiTombolAktif(tombolSemua);
}

tampilkanProyek();