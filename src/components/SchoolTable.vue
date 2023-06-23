<!-- YourComponent.vue -->
<template>
    <div>

        <table class="table">
            <thead>
              <tr>
                <th>#id</th>
                <th>name</th>
                <th>region</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="school in schools" :key="school.id">
                <td>{{ school.id }}</td>
                <td>{{ school.name }}</td>
                <td>{{school.region}}</td>
              </tr>
              
            </tbody>
            
          </table>
    </div>
  </template>
  
  <script>
import axios from 'axios';

export default {


  data() {
    return {
      schools: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const API_ROOT = process.env.VUE_APP_API_URL;
      const API_URL = `${API_ROOT}/api/school`;
      axios.get(API_URL)
        .then(response => {
          this.schools = response.data;
          console.log(this.schools)
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>