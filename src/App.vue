<script setup lang="ts">
const rows: [string, string][] = [
  ['Environment (VITE_ENV_NAME)', import.meta.env.VITE_ENV_NAME ?? '-'],
  ['Vite mode', import.meta.env.MODE],
  ['Version (VITE_APP_VERSION)', import.meta.env.VITE_APP_VERSION ?? '-'],
  ['Commit', __BUILD_INFO__.commit],
  ['Built at', __BUILD_INFO__.builtAt],
]
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Release flow sandbox info</h1>
      <table>
        <tr v-for="[label, value] in rows" :key="label">
          <th>{{ label }}</th>
          <td>{{ value }}</td>
        </tr>
      </table>
    </div>
  </header>
</template>

<style scoped>
th {
  text-align: left;
  padding-right: 1.5rem;
}
</style>
