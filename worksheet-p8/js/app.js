const profil = {
    nama: "Muhammad Rizki Saputra",
    peran: "Mahasiswa Informatika yang belajar front-end",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

/*=====================================================*/
const daftarProyek = [
    {
        judul: "Halaman Profil",
        tahun: 2026,
        selesai: true
    },
    {
        judul: "Katalog Produk",
        tahun: 2026,
        selesai: false
    }
];

/*=====================================================*/
console.log(profil.nama);
console.log(profil.peran);
console.log(profil.keahlian);
console.log(daftarProyek.length);

/*=====================================================*/
console.table(profil.keahlian);
console.table(daftarProyek);

/*=====================================================*/
const selesai = daftarProyek.filter(
    proyek => proyek.selesai
);

console.table(selesai);

/*=====================================================*/
const katalog = daftarProyek.find(
    proyek => proyek.judul === "Katalog Produk"
);

console.log(katalog);

/*=====================================================*/
const judulProyek = daftarProyek.map(
    proyek => proyek.judul
);

console.log(judulProyek);

/*=====================================================*/
const urut = [...daftarProyek].sort(
    (a, b) => a.tahun - b.tahun
);
console.table(urut);
console.table(daftarProyek);

/*=====================================================*/
function buatPerkenalan(nama, peran) {
    return `Nama saya ${nama}. Saya ${peran}.`;
}
console.log(
    buatPerkenalan("Rizki", "Mahasiswa Informatika")
);

/*=====================================================*/
function formatKeahlian(keahlian) {
    return `Keahlian saya: ${keahlian.join(", ")}`;
}
console.log(
    formatKeahlian(["HTML", "CSS", "JavaScript"])
);