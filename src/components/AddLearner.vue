<template>
    <div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-dark float-end" data-bs-toggle="modal" data-bs-target="#learnerModal">
        Add Learner
      </button>
  
      <!-- Modal -->
      <div class="modal fade" id="learnerModal" tabindex="-1" aria-labelledby="learnerModalLabel" aria-hidden="true" data-bs-backdrop="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="learnerModalLabel">Add A New Learner!</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="modalCloseButton"></button>
            </div>
            <div class="modal-body">
              <form @submit="saveLearner">
                <div class="row g-3">
                  <div class="col">
                    <input v-model="learner_first_name" type="text" class="form-control" placeholder="Learner name" aria-label="Learner first name">
                  </div>
                 </div>
                  <br/>
                 
                <div class="row g-3">
                  <div class="col">
                    <input v-model="learner_last_name" type="text" class="form-control" placeholder="Learner surname" aria-label="Learner last name" >
                  </div>
                </div>
                <br/>
                <div class="row g-3">
                <div class="col">
                    <input v-model="learner_email" type="text" class="form-control" placeholder="Learner email" aria-label="Learner email">
                  </div>
                  </div>
                  <br/>
                  <div class="row g-3">
                    <div class="col">
                        <input v-model="learner_grade_id" type="text" class="form-control" placeholder="Learner grade" aria-label="Learner grade">
                      </div>
                      </div>
                      <br/>
                      <div class="row g-3">
                        <div class="col">
                            <input v-model="learner_current_school" type="text" class="form-control" placeholder="Learner current school" aria-label="Learner current school">
                          </div>
                          </div>
                
            
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" v-on:click="saveLearner">Save</button>
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
    name: "AddLearner",
    data() {
      return {
        learner_first_name: "",
        learner_last_name: "",
        learner_email: ""
      };
    },
    methods: {
      saveLearner() {
        console.log('The learner is being saved');
  
        const learnerData = {
          learner_first_name: this.learner_first_name,
          learner_last_name: this.learner_last_name,
          learner_email: this.learner_email,
        };
  
        const API_ROOT = process.env.VUE_APP_API_URL;
        const API_URL = `${API_ROOT}/api/learner`;
  
        axios.post(API_URL, learnerData)
          .then(response => {
            console.log('Response:', response.data); // Log the response data
            $('#learnerModal').modal('hide');
          swal('Learner saved successfully!');

          })
          .catch(error => {
            console.error('Error:', error); // Log the error
          });
      }
    }
  };
  </script>
