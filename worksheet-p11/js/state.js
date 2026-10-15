import { daftarProyek } from "./data.js";

export const state = {
    daftarProyek: daftarProyek,
    kategoriAktif: "semua"
};

export function pilihKategori(nilai) {
    state.kategoriAktif = nilai;
}
