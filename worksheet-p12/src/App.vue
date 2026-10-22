<script setup>
import { ref } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const identitas = {
  nama: 'Muhammad Rizki Saputra',
  peran: 'Mahasiswa Informatika yang belajar front-end',
}

const kategoriAktif = ref('semua')

function ubahKategori(kategori) {
  kategoriAktif.value = kategori
}
</script>

<template>
  <main>
    <KepalaProfil :profil="identitas" />

    <TombolFilter
      :kategori-aktif="kategoriAktif"
      @pilih-kategori="ubahKategori"
    />

    <DaftarProyek :kategori-aktif="kategoriAktif" />

    <FormKontak />
  </main>
</template>
