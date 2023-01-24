<template >
    <div class="img-box">
        <img :src=notFoundImg alt="Not Found Image">
        
    </div>
</template>


<script>

import NotFoundImage from '../assets/notfound.jpg'

export default {
  data : ()=>({
    notFoundImg : NotFoundImage
  })
}

</script>


<style>
@import '../styles/NotFound.css';
</style>

