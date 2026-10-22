<script setup>
import { computed } from 'vue'
import { daftarProyek } from '../data.js'

const props = defineProps({
  kategoriAktif: {
    type: String,
    required: true,
  },
})

const proyekTampil = computed(() => {
  if (props.kategoriAktif === 'semua') {
    return daftarProyek
  }

  return daftarProyek.filter(
    (proyek) => proyek.kategori === props.kategoriAktif
  )
})
</script>

<template>
  <section class="daftar-proyek">
    <article
      v-for="proyek in proyekTampil"
      :key="proyek.judul"
      class="kartu-proyek"
    >
      <h2>{{ proyek.judul }}</h2>
      <p>Tahun: {{ proyek.tahun }}</p>
      <p>Kategori: {{ proyek.kategori }}</p>
    </article>
  </section>
</template>
