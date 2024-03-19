<template>
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 align-items-center my-5">
          <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" alt="..." /></div>
          <div class="col-lg-5">
              <h1 class="font-weight-light">Business Name or Tagline</h1>
              <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
              <a class="btn btn-primary" href="#!">Call to Action!</a>
          </div>
      </div>
      <div class="row gx-4 gx-lg-5 my-5">
        <div class="col-12 col-lg-4 mb-5" v-for="medarbejder in medarbejdere" :key="medarbejder.navn"> 
          <div class="card d-flex align-items-center text-center p-2" style="width: 100%;">
            <img :src="medarbejder.imgsrc" class="card-img-top" style="max-width: 87px;" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ medarbejder.navn }}</h5>
              <p class="card-text"> {{ medarbejder.rolle }} </p>
              <a :href="'mailto:'+medarbejder.email" class="btn btn-info">Send Mail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import { ref } from 'vue';
export default {
  name: 'Kontakt',
  setup() {
    const medarbejdere = ref([
        { navn: 'Poul Peter Gad', rolle: 'Ingeniør, ejer', email: 'ppg@broens-ing.dk', imgsrc:'medarbejdere/person-img1.png' },
        { navn: 'Bente M. Andersen', rolle: 'Ingeniør, anerkendt statiker', email: 'bma@broens-ing.dk', imgsrc:'medarbejdere/person-img2.png' },
        { navn: 'Liva R. Sørensen', rolle: 'Kontorassistent', email: 'ls@broens-ing.dk', imgsrc:'medarbejdere/person-img3.png' },
    ]);
    
    return { medarbejdere };
  }
}
</script>

<style scoped></style>