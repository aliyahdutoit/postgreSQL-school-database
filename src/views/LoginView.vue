<template>
    <div>

    <h2>PLEASE LOGIN</h2>
        <LoginForm/>
    </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
    export default {
    components:  {
            LoginForm,
        }
    }

</script>

<style scoped>
h2 {
    margin-left: 600px;
}
</style>