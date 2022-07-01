<template>
  <div>
    <n-config-provider inline-theme-disabled>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </n-config-provider>
  </div>
</template>
<script setup>
import { NConfigProvider } from 'naive-ui';
</script>