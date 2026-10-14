import { daftarProyek } from "./app.js";

const daftar = document.querySelector("#daftar");
const tombolFilter = document.querySelector("#filter-button");
const pesanKosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
    const kartu = document.createElement("li");

    kartu.className = "kartu";
    kartu.textContent =
        `${proyek.judul} (${proyek.tahun}) - ${proyek.kategori}`;

    return kartu;
}

function render(data) {
    daftar.textContent = "";

    if (data.length === 0) {
        pesanKosong.hidden = false;
        return;
    }

    pesanKosong.hidden = true;

    const fragmen = document.createDocumentFragment();

    data.forEach((proyek) => {
        fragmen.append(buatKartu(proyek));
    });

    daftar.append(fragmen);
}

function tampilkanProyek(kategori = "semua") {
    const terpilih = daftarProyek.filter((proyek) => {
        return (
            kategori === "semua" ||
            proyek.kategori.toLowerCase() === kategori.toLowerCase()
        );
    });

    render(terpilih);
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

tampilkanProyek("semua");

const formLatihan = document.querySelector("#jadwal-olahraga form");

if (formLatihan) {
    const namaKolom = formLatihan.querySelector("#nama-kolom");
    const tanggalLatihan = formLatihan.querySelector("#tanggal-latihan");
    const durasiLatihan = formLatihan.querySelector("#durasi-latihan");
    const tombolSimpan = formLatihan.querySelector('button[type="submit"]');

    const kolomForm = [
        namaKolom,
        tanggalLatihan,
        durasiLatihan
    ];

    formLatihan.noValidate = true;

    function kolomValid(kolom) {
        const nilai = kolom.value.trim();

        if (nilai === "") {
            return false;
        }

        if (kolom === durasiLatihan) {
            const durasi = Number(nilai);

            return (
                Number.isInteger(durasi) &&
                durasi >= 1 &&
                durasi <= 300
            );
        }

        return true;
    }

    function validasiKolom(kolom) {
        const sah = kolomValid(kolom);

        kolom.setAttribute("aria-invalid", String(!sah));

        return sah;
    }

    function perbaruiTombol() {
        const semuaSah = kolomForm.every(kolomValid);
        tombolSimpan.disabled = !semuaSah;
    }

    kolomForm.forEach((kolom) => {
        kolom.setAttribute("aria-invalid", "false");

        kolom.addEventListener("input", () => {
            validasiKolom(kolom);
            perbaruiTombol();
        });

        kolom.addEventListener("change", () => {
            validasiKolom(kolom);
            perbaruiTombol();
        });
    });

    tombolSimpan.disabled = false;

    formLatihan.addEventListener("submit", (event) => {
        event.preventDefault();

        const hasil = kolomForm.map(validasiKolom);
        const kolomSalah = kolomForm.find(
            (kolom, indeks) => !hasil[indeks]
        );

        tombolSimpan.disabled = !hasil.every(Boolean);

        if (kolomSalah) {
            kolomSalah.focus();
            return;
        }

        alert("Validasi berhasil. Semua kolom sudah benar.");
    });
}

