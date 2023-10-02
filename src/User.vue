<template>
   <h2>user FullName : {{firstName}} {{lastName}}</h2>
</template>
 
 
<script setup>
import {useName} from './Composable/Name.js' 
import {ref} from 'vue'

const {firstName,lastName} = useName();


 
</script>
 