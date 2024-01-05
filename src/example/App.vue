<template>
    <div class="container">
        <div class="content">
            <div class="logos">
            <div class="logo">
            <img width="130" src="./assets/vite.png" alt="Vite"/>
            </div>
            <div class="logo">
                <img width="100" src="./assets/vue.png" alt="Vue.js">
            </div>
        </div>
        <h1>Example Vue3 Project</h1>
        <p>Test your vue package in a fresh Vue3 project</p>
        
        <div class="package-test">
            <p>Component from myVuePackage library</p>
            <MyButton />
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {MyButton} from '../../dist/myVuePackage.esm.js'
</script>

<style scoped>
.container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 1rem;
    min-height: 100vh;
    display: flex;
}
.content {
    margin: auto
}
.logos {
    display: flex;
    gap: 0.7rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
}
.content h1{
    margin-bottom: 1rem;
}
.content p {
    margin-bottom: 1rem;
}
.package-test {
    margin-top: 4rem;
}
</style>