<template>
  <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-dark float-end" data-bs-toggle="modal" data-bs-target="#schoolModal">
      Add School
    </button>

    <!-- Modal -->
    <div class="modal fade" id="schoolModal" tabindex="-1" aria-labelledby="schoolModalLabel" aria-hidden="true" data-bs-backdrop="true" ref="schoolModal">      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="schoolModalLabel">Add A New School!</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="modalCloseButton"></button>
          </div>
          <div class="modal-body">
            <form @submit="saveSchool">
              <div class="row g-3">
                <div class="col">
                  <input v-model="school_name" type="text" class="form-control" placeholder="School name" aria-label="School name" id="$2">
                </div>
                <br/>
                <br/>
                <br/>
               </div>
              <div class="row g-3">
                <div class="col">
                  <input v-model="school_region" type="text" class="form-control" placeholder="School region" aria-label="School region" id="$3">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
            <button type="submit" class="btn btn-primary" v-on:click="saveSchool">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import $ from 'jquery';

// import VueSweetalert2 from 'vue-sweetalert2';

export default {
  name: "AddSchool",
  // plugins: [
  //   VueSweetalert2
  // ],
  data() {
    return {
      school_name: "",
      school_region: ""
    };
  },
  methods: {
    fetchData() {
      // Simulated asynchronous API call
      setTimeout(() => {
        // Assume the API response contains the updated data
        const response = { data: { myData: "Updated Data" } };

        // Update the reactive data property with the fetched data
        this.myData = response.data.myData;
      }, 1000);
    },
    saveSchool() {
      console.log('The school is being saved');

      const schoolData = {
        school_name: this.school_name,
        school_region: this.school_region,
      };

      const API_ROOT = process.env.VUE_APP_API_URL;
      const API_URL = `${API_ROOT}/api/school`;

      axios.post(API_URL, schoolData)
        .then(response => {
          console.log('Response:', response.data);
          swal('School saved successfully!');
          this.$refs.modalCloseButton.click(); // Programmatically click the modal close button
          $(this.$refs.schoolModal).modal('hide');  
          //  this.fetchData(); // Fetch the updated data      
         
        })
        .catch(error => {
          console.error('Error:', error); // Log the error
        });
        axios.get(API_URL)
    .then(response => {
      console.log('Response:', response.data); // Log the response data
      this.schools = response.data; // Update the table data
    })
    .catch(error => {
      console.error('Error:', error); // Log the error
    });
    }
   
  }
};
</script>