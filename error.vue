<template>
  <div>
    <n-result status="500" title="异常出错" :description="error.message">
    <template #footer>
      <n-button>回到首页</n-button>
    </template>
  </n-result>
  </div>
</template>
<script setup lang="ts">
import { NResult, NButton } from 'naive-ui';

const error = useError()

</script>