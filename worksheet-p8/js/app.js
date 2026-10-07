const namaLengkap = "Muhammad Rizki Saputra";

const peran = "Mahasiswa Informatika yang belajar front-end";

const keahlian = ["HTML", "CSS", "JavaScript"];

const jumlahProyek = 5;

console.log(namaLengkap);
console.log(peran);
console.log(keahlian);
console.log(jumlahProyek);

function buatPerkenalan(nama, peran) {
    return `Nama saya ${nama}. Saya ${peran}.`;
}

function formatKeahlian(keahlian) {
    return `Keahlian saya: ${keahlian.join(", ")}`;
}

globalThis.buatPerkenalan = buatPerkenalan;
globalThis.formatKeahlian = formatKeahlian;