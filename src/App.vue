<template>
 <h1>App</h1>

 <!-- simple composable -->
 <!-- <Composable />
<User /> -->

<!-- composable inside composable -->
<!-- <h2>fullName : {{fullName.firstName}} {{fullName.lastName}}</h2> -->

<!-- composable with argument -->
<!-- 
<p v-if="data">Data loded 
  {{data}}
</p>
<p v-else-if="error">oops ! Error ooccur : {{error}}</p>
<div v-else class="loader"></div> -->


<!-- composable with ref -->

<pre v-if="data">Data loded 
  {{data}}
</pre>
<p v-else-if="error">oops ! Error ooccur : {{error}}</p>
<div v-else class="loader"></div>
<button @click="changeUrl">change url</button>
</template>
 
 
<script setup>
 
import { ref, reactive, computed  } from 'vue'
// simple composable

// import {useName} from './Composable/Name.js'
//  import Composable from './Composable.vue'
//  import User from './User.vue'


// composable inside composable
// import {useName1} from './Composable/Name1.js'

// const fullName = useName1();


// composable with arguments
// import {useFetch} from './Composable/fetch'

// let  url = "https://jsonplaceholder.typicode.com/posts/1";
// let {data,error} =   useFetch(url);

// composable with ref
import {useFetch} from './Composable/fetch1'
let  url = ref("https://jsonplaceholder.typicode.com/posts/1");
let {data,error} =   useFetch(url);
function changeUrl(){
  url.value = 'https://dummyjson.com/products/1';
}


</script>
 
<style scoped>
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
 
</style>