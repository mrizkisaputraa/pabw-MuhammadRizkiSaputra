<script setup>
import { onMounted, watch } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

import { profil } from './data.js'
import { state, pilihKategori } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'

onMounted(() => {
  const isi = muat()

  if (isi && ['semua', 'Web', 'data'].includes(isi.kategoriAktif)) {
    pilihKategori(isi.kategoriAktif)
  }
})

watch(
  () => state.kategoriAktif,
  () => simpan(state)
)

function ubahKategori(kategori) {
  pilihKategori(kategori)
}

function resetKategori() {
  aturUlang()
  pilihKategori('semua')
}
</script>

<template>
  <main>
    <KepalaProfil :profil="profil" />

    <button type="button" @click="resetKategori">
      Reset Filter
    </button>

    <TombolFilter
      :kategori-aktif="state.kategoriAktif"
      @pilih-kategori="ubahKategori"
    />

    <DaftarProyek :kategori-aktif="state.kategoriAktif" />

    <FormKontak />
  </main>
</template>
