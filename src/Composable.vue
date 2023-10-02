<template>
   <h1>firstName {{firstName}}
    lastName {{lastName}} </h1>
</template>
 
 
<script setup>
import {useName} from './Composable/Name.js' 
import {ref} from 'vue'

const {firstName,lastName} = useName();


 
</script>
 
<style scoped>
 
</style>