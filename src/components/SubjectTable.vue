<!-- YourComponent.vue -->
<template>
    <div>

        <table class="table">
            <thead>
              <tr>
                <th>#id</th>
                <th>name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="subject in subjects" :key="subject.id">
                <td>{{ subject.id }}</td>
                <td>{{ subject.name }}</td>
               
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
      subjects: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get('http://localhost:3000/api/subject')
        .then(response => {
          this.subjects = response.data;
          console.log(this.subjects)
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>