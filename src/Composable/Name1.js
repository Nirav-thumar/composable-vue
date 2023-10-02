import { ref, reactive, computed ,onUnmounted ,onMounted } from 'vue'
import {faker} from '@faker-js/faker'
import { useEventListener } from './Event';

export function useName1(){
    const firstName = ref();
    const lastName = ref();

    function updateName(){
        firstName.value = faker.name.firstName();
        lastName.value = faker.name.lastName();
    }

    useEventListener(window,'mousemove',updateName)
   

    return {firstName,lastName}
}