<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light" role="navigation" aria-label="main-navigation">
      <div class="container">
        <router-link class="navbar-brand img-responsive text-start" to="/">
          <span><img src="logoblack.png" class="img-fluid" alt="Company Logo"></span>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto text-center flex-1 d-flex justify-content-end">
           <span></span>
           <span></span>
            <template v-for="link in navLinks" :key="link.text+'-main'">
              <li v-if="link.type == 'default'" class="nav-item h5 mb-0 mx-4">
                  <router-link class="nav-link" :to="link.path">{{ link.text }}</router-link>
              </li>
              <li v-else-if="link.type == 'dropdown'" class="nav-item dropdown h5 mb-0 mx-4">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ link.text }}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li v-for="ddlink in link.items" :key="ddlink.text+'-'+link.text+'-main'">
                    <router-link class="dropdown-item" :to="ddlink.path">{{ ddlink.text }}</router-link>
                  </li>
                </ul>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { ref } from 'vue';

  export default {
    name: 'Navbar',
    setup() {
      const navLinks = ref([
        { path: '/ydelser', text: 'Ydelser', type: 'dropdown', items:[
          { path: '/statiske-beregninger', text: 'Statiske Beregninger' },
          { path: '/fem-design', text: 'FEM-Design' },
          { path: '/stålrammer', text: 'Stålrammer' },
          { path: '/murvaerkprojektering', text: 'Murværkprojektering' },
          { path: '/diverse', text: 'Diverse' },
        ]},
        { path: '/referencer', text: 'Referencer', type: 'default' },
        { path: '/kontakt', text: 'Kontakt', type: 'default' },
        { path: '/om-os', text: 'Om os', type: 'default' },
      ]);
      return { navLinks };
    }
  }
  </script>
  
  <style>
  .navbar-brand {
    max-width: 200px;
  }
  @media only screen and (max-width: 768px) {
    .navbar-brand {
      max-width: 150px;
    }
  }
  .navbar-brand span {
   display: table-cell;
   vertical-align: middle;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0; /* remove the gap so it doesn't close */
  }
  </style>
  