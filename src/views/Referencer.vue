<template>
  <div class="container">
    <div v-for="(row, index) in image_rows" class="row" :key="index+'-lightbox-row'">
    	<a :id="index+'-lightbox-item-'+ind" v-for="(item, ind) in row" :href="item.src" :key="index+'-lightbox-item-'+ind" data-toggle="lightbox" data-gallery="gallery" class="col-sm-4" @click.prevent="TriggerLightbox">
    		<img :id="index+'-lightbox-image-'+ind" :src="item.thumbnail" class="img-fluid">
    	</a>
    </div>
  </div>
</template>
  
<script>
import { ref } from 'vue';
import Lightbox from 'bs5-lightbox';
export default {
  name: 'Referencer',
  setup() {
    const image_rows = ref([
      [
        { src: 'https://unsplash.it/1200/768.jpg?image=251', thumbnail: 'https://unsplash.it/600.jpg?image=251' },
        { src: 'https://unsplash.it/1200/768.jpg?image=252', thumbnail: 'https://unsplash.it/600.jpg?image=252' },
        { src: 'https://unsplash.it/1200/768.jpg?image=253', thumbnail: 'https://unsplash.it/600.jpg?image=253' },
      ],
      [
        { src: 'https://unsplash.it/1200/768.jpg?image=254', thumbnail: 'https://unsplash.it/600.jpg?image=254' },
        { src: 'https://unsplash.it/1200/768.jpg?image=255', thumbnail: 'https://unsplash.it/600.jpg?image=255' },
        { src: 'https://unsplash.it/1200/768.jpg?image=256', thumbnail: 'https://unsplash.it/600.jpg?image=256' },
      ]
    ]);
    function TriggerLightbox(event) {
      const lightbox = new Lightbox(event.currentTarget, { keyboard: true, size: 'xl', gallery:'gallery'});
      console.log(lightbox)
      console.log(lightbox.carouselElement)
      console.log(lightbox.carouselElement.children[2])
      lightbox.show();
    }
    return { image_rows, TriggerLightbox };
  }
}

</script>

  