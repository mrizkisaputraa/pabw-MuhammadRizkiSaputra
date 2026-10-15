import { daftarProyek } from "./data.js";
import { render } from "./dom.js";
import {
    simpan,
    muat,
    aturUlang as hapusSimpanan
} from "./storage.js";

export const state = {
    daftarProyek: daftarProyek,
    kategoriAktif: "semua"
};

export function muatState() {
    const isi = muat();

    if (
        isi &&
        ["semua", "web", "data"].includes(isi.kategoriAktif)
    ) {
        state.kategoriAktif = isi.kategoriAktif;
    } else {
        state.kategoriAktif = "semua";
    }
}

export function pilihKategori(nilai) {
    if (!["semua", "web", "data"].includes(nilai)) return;

    state.kategoriAktif = nilai;
    simpan(state);
    render(state);
}

export function resetKategori() {
    hapusSimpanan();
    state.kategoriAktif = "semua";
    render(state);
}
