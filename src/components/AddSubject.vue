<template>
  <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-dark float-end" data-bs-toggle="modal" data-bs-target="#subjectModal">
      Add Subject
    </button>

    <!-- Modal -->
    <div class="modal fade" id="subjectModal" tabindex="-1" aria-labelledby="subjectModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="subjectModalLabel">Add A New Subject!</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="modalCloseButton"></button>
          </div>
          <div class="modal-body">
            <form @submit="saveSubject">
              <div class="row g-3">
                <div class="col">
                  <input v-model="subject_name" type="text" class="form-control" placeholder="Subject name" aria-label="Subject name">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" v-on:click="saveSubject">Save</button>
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

export default {
  name: "AddSubject",
  data() {
    return {
      subjects: []
    };
  },
  methods: {
    saveSubject() {
      console.log('The subject is being saved');

      const subjectData = {
        subject_name: this.subject_name,
      };

   
      const API_ROOT = process.env.VUE_APP_API_URL;
      const API_URL = `${API_ROOT}/api/subject`;

      axios.post(API_URL, subjectData)
        .then(response => {
          console.log('Response:', response.data); 
          swal('Subject saved successfully!');
          this.$refs.modalCloseButton.click(); // Programmatically click the modal close button
          $(this.$refs.subjectModal_1).modal('hide'); 
        })
        .catch(error => {
          console.error('Error:', error); // Log the error
        });
      
    }
  }
};
</script>

