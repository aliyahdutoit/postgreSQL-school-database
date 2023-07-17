<template>
  <div>
    <h1>CAPE TOWN SCHOOLS DATABASE</h1>
    <!-- <h2>Subject Table</h2>

 <AddSubject/>

    <SubjectTable/>
    <br/> -->

    <h2>School Table</h2>
    
    <AddSchool/>
    <SchoolTable/>
    <br/>
    <br/>

    <!-- <h2>Teacher-Subject Table</h2> -->
    <!-- <AssignTeacherSubject/> -->
    <!-- <SubjectFilterDropDown/> -->
    <!-- <TeacherSubjectTable/> -->
  </div>
</template>

<script>

// import AddSubject from "../components/AddSubject.vue";
// import SubjectTable from "../components/SubjectTable.vue";
import AddSchool from "../components/AddSchool.vue";
import SchoolTable from "../components/SchoolTable.vue";
// import AssignTeacherSubject from "../components/AssignTeacherSubject.vue";
// import SubjectFilterDropDown from "../components/SubjectFilterDropDown.vue";
// import TeacherSubjectTable from "../components/TeacherSubjectTable.vue";

  export default {
    components: {
          // AddSubject,
      // SubjectTable,
      AddSchool,
    SchoolTable,
    // AssignTeacherSubject,
    // SubjectFilterDropDown,
    // TeacherSubjectTable,
  }, 
   }
</script>

<style  scoped>

</style>