
<template>
  <div>
        <div class="dropdown float-end">
          <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Subject Filter
          </button>
          <ul class="dropdown-menu"  >
            <li v-for="subject in subjects">
              <button class="dropdown-item" type="button">{{ subject.name }}</button>
          </li>
            
          </ul>
        </div>
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