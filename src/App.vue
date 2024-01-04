<template>
    <div>
        {{ message }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('hi world')
</script>

<style lang="scss" scoped>

</style>