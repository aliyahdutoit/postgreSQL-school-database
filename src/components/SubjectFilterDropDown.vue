
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

    const API_ROOT = process.env.VUE_APP_API_URL;
      const API_URL = `${API_ROOT}/api/subject`;

    axios.get(API_URL)
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