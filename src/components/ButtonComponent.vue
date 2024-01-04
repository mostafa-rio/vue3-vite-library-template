<template>
    <button>
        {{ title }}
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

    const title = ref('click me')
</script>

<style scoped>

</style>