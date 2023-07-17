<template>
    <div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-dark float-end" data-bs-toggle="modal" data-bs-target="#linkTeacherModal">
        Link Teacher
      </button>
  
      <!-- Modal -->
      <div class="modal fade" id="linkTeacherModal" tabindex="-1" aria-labelledby="linkTeacherModalLabel" aria-hidden="true" data-bs-backdrop="static">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="linkTeacherModalLabel">Link A Teacher!</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="modalCloseButton"></button>
            </div>
            <div class="modal-body">
              <form @submit="linkTeacher">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pick a teacher
                  </button>
                  <ul class="dropdown-menu">
                    <!-- Loop through teachers data and show each teacher as a dropdown item -->
                    <li v-for="teacher in teachers" :key="teacher.id">
                      <a class="dropdown-item">{{ teacher.last_name }}</a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="linkTeacher">Link</button>
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
    name: "LinkTeacher",
    data() {
      return {
        teachers: [], // Initialize an empty array to store the teachers data
      };
    },
//     mounted() {
//   // Manually trigger the modal
//   $('#linkTeacherModal').modal('show');
// },
    methods: {
      linkTeacher() {
        console.log('The teacher is being linked');
  
        const teacherData = {
          // Add relevant teacher data here
        };
  
        const API_ROOT = process.env.VUE_APP_API_URL;
        const API_URL = `${API_ROOT}/api/teachersubject`;
  
        axios.post(API_URL, teacherData)
          .then(response => {
            console.log('Response:', response.data);
            $('#linkTeacherModal').modal('hide');
            swal('Teacher linked successfully!');
          })
          .catch(error => {
            console.error('Error:', error);
          });
      },
    },
  };
  </script>
  