export const profil = {
    nama: "Muhammad Rizki Saputra",
    peran: "Mahasiswa Informatika yang belajar front-end",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

export const daftarProyek = [
    {
        judul: "Halaman Profil",
        tahun: 2026,
        kategori: "Web"
    },
    {
        judul: "Katalog Produk",
        tahun: 2026,
        kategori: "data"
    },
    {
        judul: "Jadwal Olahraga",
        tahun: 2026,
        kategori: "Web"
    }
];

export function buatPerkenalan(nama, peran) {
    return `Nama saya ${nama}. Saya ${peran}.`;
}

export function formatKeahlian(keahlian) {
    return `Keahlian saya: ${keahlian.join(", ")}`;
}