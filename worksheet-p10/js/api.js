const ALAMAT = "https://jsonplaceholder.typicode.com/posts";

export async function muat() {
    try {
        const respons = await fetch(ALAMAT);

        if (!respons.ok) {
            throw new Error("status " + respons.status);
        }

        const data = await respons.json();

        if (Array.isArray(data) && data.length > 0) {
            console.log("Judul pertama:", data[0].title);
        } else {
            console.log("Data API kosong atau bukan larik");
        }

        console.log("Jenis data:", typeof data);

        return data;
    } catch (galat) {
        console.error("gagal memuat", galat.message);
        throw galat;
    }
}

export async function kirimContoh() {
    const nilai = {
        title: "Latihan C.1",
        body: "Contoh mengirim data JSON",
        userId: 1
    };

    // Mengubah objek JavaScript menjadi teks JSON
    const badan = JSON.stringify(nilai);

    console.log("Badan kiriman:", badan);
    console.log("Jenis badan:", typeof badan);

    const respons = await fetch(ALAMAT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: badan
    });

    if (!respons.ok) {
        throw new Error("Status " + respons.status);
    }

    const hasil = await respons.json();
    console.log("Balasan setelah POST:", hasil);

    return hasil;
}
