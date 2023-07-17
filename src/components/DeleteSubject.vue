<template>
  <div>
    <button type="submit" class="btn btn-danger" @click="deleteSubject">Delete Subject</button>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: "DeleteSubject",
  data() {
    return {
      subject_name: 'subject_name' 
    };
  },
  methods: {
    deleteSubject() {
      const subject_name = this.subject_name;

      axios
        .delete('http://localhost:3000/api/subject', {
          data: {
            subject_name: subject_name
          }
        })
        .then(response => {
          console.log('Response:', response.data);
          swal('Subject successfully deleted');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

