// composable function with arguments

import { ref } from "vue";


export function useFetch(url){

    const data = ref(null);
    const error = ref(null);

    const getData  = async ()=>{
       try{
            const response = await fetch(url);
            const resData  = await response.json(); 
            data.value = resData

       }
       catch(err){
        error.value = err 

       } 
    }

    getData();


    return {data,error};
}