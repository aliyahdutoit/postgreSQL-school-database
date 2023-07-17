<template>
    <div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-dark float-end" data-bs-toggle="modal" data-bs-target="#teacherModal">
        Add Teacher
      </button>
  
      <!-- Modal -->
      <div class="modal fade" id="teacherModal" tabindex="-1" aria-labelledby="teacherModalLabel" aria-hidden="true" data-bs-backdrop="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="teacherModalLabel">Add A New Teacher!</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="modalCloseButton"></button>
            </div>
            <div class="modal-body">
              <form @submit="saveTeacher">
                <div class="row g-3">
                  <div class="col">
                    <input v-model="teacher_first_name" type="text" class="form-control" placeholder="Teacher name" aria-label="Teacher first name">
                  </div>
                 </div>
                  <br/>
                 
                <div class="row g-3">
                  <div class="col">
                    <input v-model="teacher_last_name" type="text" class="form-control" placeholder="Teacher surname" aria-label="Teacher last name" >
                  </div>
                </div>
                <br/>
                <div class="row g-3">
                <div class="col">
                    <input v-model="teacher_email" type="text" class="form-control" placeholder="Teacher email" aria-label="Teacher email">
                  </div>
                  </div>
                
            
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" v-on:click="saveTeacher">Save</button>
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
    name: "AddTeacher",
    data() {
      return {
        teacher_first_name: "",
        teacher_last_name: "",
        teacher_email: ""
      };
    },
    methods: {
      saveTeacher() {
        console.log('The teacher is being saved');
  
        const teacherData = {
          teacher_first_name: this.teacher_first_name,
          teacher_last_name: this.teacher_last_name,
          teacher_email: this.teacher_email,
        };
  
        const API_ROOT = process.env.VUE_APP_API_URL;
        const API_URL = `${API_ROOT}/api/teacher`;
  
        axios.post(API_URL, teacherData)
          .then(response => {
            console.log('Response:', response.data); // Log the response data
            $('#teacherModal').modal('hide');
          swal('Teacher saved successfully!');

          })
          .catch(error => {
            console.error('Error:', error); // Log the error
          });
      }
    }
  };
  </script>
  