<template>
    <div>
        hello
        dsa
        <hi />
        <MyButton />
        <!-- <MyVuePackage /> -->
    </div>
</template>

<script setup lang="ts">
import hi from './hi.vue'
import {MyButton} from '../../dist/myVuePackage.esm.js'
</script>

<style scoped>

</style>