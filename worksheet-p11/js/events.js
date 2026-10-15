import { pilihKategori, resetKategori } from "./state.js";

import {
    tombolFilter,
    formLatihan,
} from "./dom.js";

export function pasangPendengar() {
    tombolFilter.addEventListener("click", (event) => {
        const tombol = event.target.closest(
            "button[data-kategori]"
        );

        if (!tombol) return;

        pilihKategori(tombol.dataset.kategori);
    });
    const tombolAturUlang = document.querySelector("#atur-ulang");

    tombolAturUlang.addEventListener("click", () => {
        resetKategori();
    });

    if (!formLatihan) return;

    const namaKolom = formLatihan.querySelector("#nama-kolom");
    const tanggalLatihan = formLatihan.querySelector(
        "#tanggal-latihan"
    );
    const durasiLatihan = formLatihan.querySelector(
        "#durasi-latihan"
    );
    const tombolSimpan = formLatihan.querySelector(
        'button[type="submit"]'
    );

    const kolomForm = [
        namaKolom,
        tanggalLatihan,
        durasiLatihan
    ];

    formLatihan.noValidate = true;

    function kolomValid(kolom) {
        const nilai = kolom.value.trim();

        if (nilai === "") return false;

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
        tombolSimpan.disabled = !kolomForm.every(kolomValid);
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

    perbaruiTombol();

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
