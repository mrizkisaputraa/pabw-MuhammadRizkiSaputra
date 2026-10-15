export const daftar = document.querySelector("#daftar");
export const tombolFilter = document.querySelector("#filter-button");
export const pesanKosong = document.querySelector("#pesan-kosong");

export const formLatihan = document.querySelector(
    "#jadwal-olahraga form"
);

export function buatKartu(proyek) {
    const kartu = document.createElement("li");

    kartu.className = "kartu";
    kartu.textContent =
        `${proyek.judul} (${proyek.tahun}) - ${proyek.kategori}`;

    return kartu;
}

export function saring(state) {
    return state.daftarProyek.filter((proyek) => {
        return (
            state.kategoriAktif === "semua" ||
            proyek.kategori.toLowerCase() ===
                state.kategoriAktif.toLowerCase()
        );
    });
}

export function render(state) {
    daftar.textContent = "";

    const tampil = saring(state);

    if (tampil.length === 0) {
        pesanKosong.hidden = false;
    } else {
        pesanKosong.hidden = true;

        const fragmen = document.createDocumentFragment();

        tampil.forEach((proyek) => {
            fragmen.append(buatKartu(proyek));
        });

        daftar.append(fragmen);
    }

    tombolFilter
        .querySelectorAll("button[data-kategori]")
        .forEach((tombol) => {
            tombol.classList.toggle(
                "aktif",
                tombol.dataset.kategori === state.kategoriAktif
            );
        });
}

export function tandaiTombolAktif(tombolAktif) {
    tombolFilter
        .querySelectorAll("button[data-kategori]")
        .forEach((tombol) => {
            tombol.classList.toggle(
                "aktif",
                tombol === tombolAktif
            );
        });
}
