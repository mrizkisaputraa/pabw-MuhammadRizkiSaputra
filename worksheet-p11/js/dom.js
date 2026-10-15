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

export function render(data) {
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
