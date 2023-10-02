import { ref, reactive, computed ,onUnmounted ,onMounted } from 'vue'
import {faker} from '@faker-js/faker'

export function useName(){
    const firstName = ref();
    const lastName = ref();

    function updateName(){
        firstName.value = faker.name.firstName();
        lastName.value = faker.name.lastName();
    }

    onMounted(()=>{
        window.addEventListener('mousemove',updateName);
    })
    onUnmounted(()=>{
        window.removeEventListener('mousemove',updateName);
    })

    return {firstName,lastName}
}