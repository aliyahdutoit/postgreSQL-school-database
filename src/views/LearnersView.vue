<template>
    <div>
  
      <H2>Learners of Cape Town</H2>
<h5>Here you can view all learners in Cape Town and the subjects they take!</h5>
      <AddLearner/>
      
      <table class="table">
        <thead>
          <tr>
            <th>#id</th>
            <th>name</th>
            <th>surname</th>
            <th>email</th>
            <th>grade ID</th>
            <th>Current School</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="learner in learners" :key="learner.id">
            <td>{{ learner.id }}</td>
            <td>{{ learner.first_name }}</td>
            <td>{{ learner.last_name }}</td>
            <td>{{ learner.email }}</td>
            <td>{{ learner.grade_id }}</td>
            <td>{{ learner.current_school }}</td>

            <td>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-dark float-end"
                data-bs-toggle="modal"
                :data-bs-target="'#modal-' + learner.id"
              >
                VIEW MORE
              </button>
  
              <!-- Modal -->
              <div
                class="modal fade"
                :id="'modal-' + learner.id"
                tabindex="-1"
                aria-labelledby="learnerModalLabel"
                aria-hidden="true"
                data-bs-backdrop="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="learnerModalLabel">{{ learner.first_name }} {{learner.last_name}}</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        
                      <SingleLearnerView :learner="learner" />
  
  
  
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-danger" v-on:click="deleteLearner">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  import SingleLearnerView from "../views/SingleLearnerView.vue";
  import AddLearner from "../components/AddLearner.vue";
  
  export default {
    components: {
    SingleLearnerView,
    AddLearner,
  },
  
    data() {
      return {
        learners: []
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get('http://localhost:3000/api/learner')
          .then(response => {
            this.learners = response.data;
            console.log(this.learners)
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>
  