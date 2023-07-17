<template>
  <div>
<H2>Subjects Available</H2>
<h5>Here you can view all subjects available in Cape Town and the teachers available teaching them!</h5>
    <AddSubject/>
    
    <table class="table">
      <thead>
        <tr>
          <th>#id</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="subject in subjects" :key="subject.id">
          <td>{{ subject.id }}</td>
          <td>{{ subject.name }}</td>
          <td>
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-dark float-end"
              data-bs-toggle="modal"
              :data-bs-target="'#modal-' + subject.id"
            >
              VIEW MORE
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              :id="'modal-' + subject.id"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              data-bs-backdrop="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ subject.name }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    
                    <SingleSubjectView :subject="subject" />



                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <DeleteSubject/>
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
import SingleSubjectView from "../views/SingleSubjectView.vue";
import AddSubject from "../components/AddSubject.vue";
import DeleteSubject from "../components/DeleteSubject.vue";

export default {
  components: {
  SingleSubjectView,
  AddSubject,
  DeleteSubject,
},

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
