<template>
  <div class="layout">
    <header class="header">
      <!-- Add your header content -->
    </header>
    
    <main class="main">
      <router-view />
    </main>

    <footer class="footer">
      <!-- Add your footer content -->
    </footer>
  </div>
</template>

<script setup lang="ts">
// Layout logic here
</script>

<style scoped lang="scss">
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}

.header, .footer {
  padding: $spacing-unit * 4;
}
</style> 