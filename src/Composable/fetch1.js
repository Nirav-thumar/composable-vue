// composable function with ref

import { ref, isRef, unref, watchEffect } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  const getData = async () => {
    data.value = null;
    error.value = null;
    try {
      const response = await fetch(unref(url));
      const resData = await response.json();
      data.value = resData;
    } catch (err) {
      error.value = err;
    }
  };

  if (isRef(url)) {
    watchEffect(getData);
  } else {
    getData();
  }


  return { data, error };
}
