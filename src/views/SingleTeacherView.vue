<template>
    <div>
    
  
      <!-- add subjects button -->
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-dark float-end"
        data-bs-toggle="modal"
        data-bs-target="#linkSubjectModal"
      >
        Link Subject
      </button>
  
      <!-- Modal -->
      <div
        class="modal fade"
        id="linkSubjectModal"
        tabindex="-1"
        aria-labelledby="linkSubjectModalLabel"
        aria-hidden="true"
        data-bs-backdrop="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="linkSubjectModalLabel">
                Link a Subject to this Teacher!
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                v-on:click="saveSubjectLink"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
  
      <h3>Subjects available for this Teacher</h3>
  
      <ul v-for="subject in subjects" :key="subject.id">
        <li>{{ subject.filter_teachers }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "SingleTeacherView",
    props : ["teacher"],
    data() {
      return {
        subjects: [],
      };
    },
  
  
    mounted() {
      console.log(this.teacher.last_name);
      this.getData(this.teacher.last_name);
    },
    methods: {
      getData(teacher_last_name) {
        const API_ROOT = process.env.VUE_APP_API_URL;
        
  
        const API_URL = `${API_ROOT}/api/teachersubject?teacher_last_name=${teacher_last_name.trim()}`;
  
        // console.log(API_URL);
  
  
        axios
          .get(API_URL)
          .then((response) => {
  
            if(response.data.error) {
              //
            } else {
  
              this.teachers = response.data;
            }
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
  };
  </script>
  