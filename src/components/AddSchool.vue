<template>
    <div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-dark float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add School
      </button>
  
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add A New School!</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="row g-3">
                  <div class="col">
                    <input v-model="schoolName" type="text" class="form-control" placeholder="School name" aria-label="School name">
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button @click="saveSubject" type="button" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "AddSubject",
    data() {
      return {
        subjectName: '',
      };
    },
    methods: {
      saveSubject() {
        const subjectData = {
          subject_name: this.subjectName,
        };
  
        axios
          .post('/api/subject', subjectData)
          .then(response => {
            console.log(response.data);
            // Perform any necessary actions on the frontend (e.g., show a success message)
            // Optionally, you can close the modal
            document.getElementById('exampleModal').modal('hide');
          })
          .catch(error => {
            console.error(error);
            // Perform any necessary error handling on the frontend (e.g., show an error message)
          });
      },
    },
  };
  </script>
  