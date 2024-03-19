<template>
  <header>
    <Navbar></Navbar>
  </header>
  <router-view />
  <span style="min-height: 100%; display: block;"></span>
  <Footer :ydelser="navLinks.find((link) => link.path =='/ydelser')?.items"></Footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { ref } from 'vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  setup() {
    const navLinks = ref([
      { path: '/', text: 'Home', type: 'default' },
      { path: '/ydelser', text: 'Ydelser', type: 'dropdown', items:[
        { path: '/statiske-beregninger', text: 'Statiske Beregninger' },
        { path: '/fem-design', text: 'FEM-Design' },
        { path: '/stålrammer', text: 'Stålrammer' },
        { path: '/murvaerkprojektering', text: 'Murværkprojektering' },
        { path: '/diverse', text: 'Diverse' },
      ] 
      },
      { path: '/kontakt', text: 'Kontakt', type: 'default' },
      { path: '/om-os', text: 'Om os', type: 'default' },
    ]);
    
    return { navLinks };
  }
}

</script>

