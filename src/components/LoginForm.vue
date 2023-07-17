<template>
    <div>


        <form  class="border border-5">
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3">
              </div>
            </div> 
            <div class="row mb-3">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3">
              </div>
            </div>
           
              
            
            <button type="submit" class="btn btn-primary">Sign in</button>
          </form>


    </div>
</template>

<script>
    export default {
        name: 'LoginForm'
    }
</script>

<style  scoped>
form {
width: 600px;
padding: 100px;
margin-top: 40px;
margin-left: 400px;

}
</style>