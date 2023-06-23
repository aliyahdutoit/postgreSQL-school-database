<template>
    <div>

        <table class="table">
            <thead>
              <tr>
                <th>name</th>
                <th> surname</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="link in links" :key="link.id">
                <td>{{ link.first_name }}</td>
                <td>{{link.last_name}}</td>
                <td>{{ link.name }}</td>
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
      links: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get('http://localhost:3000/api/teachersubject')
        .then(response => {
          this.links = response.data;
          console.log(this.links)
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>