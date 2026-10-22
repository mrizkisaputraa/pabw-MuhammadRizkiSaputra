<script setup>
const props = defineProps({
  kategoriAktif: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['pilih-kategori'])

const kategori = ['semua', 'Web', 'data']
</script>

<template>
  <div class="tombol-filter">
    <button
      v-for="item in kategori"
      :key="item"
      :class="{ aktif: props.kategoriAktif === item }"
      @click="emit('pilih-kategori', item)"
    >
      {{ item }}
    </button>
  </div>
</template>

<style scoped>
.tombol-filter {
  display: flex;
  gap: 8px;
}

button {
  padding: 8px 16px;
  cursor: pointer;
}

button.aktif {
  background-color: #1d3a8c;
  color: white;
}
</style>
