<template>
  <div>

    <LinkTeacher/>

    <br/>
    <br/>

    <h3>Teachers available for subject</h3>


    <ul v-for="teacher in teachers" :key="teacher.id">
      <li>{{ teacher.filter_subjects }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import LinkTeacher from "../components/LinkTeacher.vue";

export default {
  name: "SingleSubjectView",
    components:{
    LinkTeacher,
  },
  props : ["subject"],

  data() {
    return {
      teachers: [],
    };
  },


  mounted() {
    console.log(this.subject.name);
    this.getData(this.subject.name);
  },
  methods: {
    getData(subject_name) {
      const API_ROOT = process.env.VUE_APP_API_URL;
      
      const API_URL = `${API_ROOT}/api/teachersubject?subject_name=${subject_name.trim()}`;



      axios
        .get(API_URL)
        .then((response) => {

          if(response.data.error) {
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
