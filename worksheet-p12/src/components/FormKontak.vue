<script setup>
import { ref } from 'vue'

const nama = ref('')
const pesan = ref('')

function kirimPesan() {
  nama.value = ''
  pesan.value = ''
}
</script>

<template>
  <section>
    <h2>Form Kontak</h2>

    <form @submit.prevent="kirimPesan">
      <div>
        <label for="nama">Nama</label>
        <input
          id="nama"
          v-model="nama"
          type="text"
          required
        />
      </div>

      <div>
        <label for="pesan">Pesan</label>
        <textarea
          id="pesan"
          v-model="pesan"
          required
        ></textarea>
      </div>

      <button type="submit">Kirim</button>
    </form>
  </section>
</template>
