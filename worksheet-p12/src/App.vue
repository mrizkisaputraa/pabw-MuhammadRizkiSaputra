<script setup>
import { profil, daftarProyek, buatPerkenalan, formatKeahlian } from './data.js'
</script>

<template>
  <main>
    <h1>Halaman Anda</h1>

    <h2>{{ profil.nama }}</h2>
    <p>{{ buatPerkenalan(profil.nama, profil.peran) }}</p>
    <p>{{ formatKeahlian(profil.keahlian) }}</p>

    <h2>Daftar Proyek</h2>
    <ul>
      <li v-for="proyek in daftarProyek" :key="proyek.judul">
        {{ proyek.judul }} — {{ proyek.tahun }} — {{ proyek.kategori }}
      </li>
    </ul>
  </main>
</template>
