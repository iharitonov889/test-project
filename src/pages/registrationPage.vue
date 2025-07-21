<template>
   <router-view />
  <div class="wrapper">
    <div class="content">
      <div class="flex-container blockBody col-sm-4 marginHorizontal">
        <div class="col-sm-12 mb-2">
          <h1 class="textCenter">Registration</h1>

        <div class="col-sm-12 mb-2">

          <div class="marginHorizontal col-sm-6 blockVerticalCenter blockHorizontalCenter mb-2">
            <div class="col-sm-4">
              <label>Login</label>
            </div>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control col-sm-12"
                style="text-align: left"
                id="reg_login"
                name="reg_login"
                placeholder=""
                required
              />
            </div>
          </div>

          <div class="marginHorizontal col-sm-6 blockVerticalCenter blockHorizontalCenter mb-2">
            <div class="col-sm-4">
              <label>Password</label>
            </div>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control col-sm-12"
                style="text-align: left"
                id="reg_password"
                name="reg_password"
                placeholder=""
                required
              />
            </div>
          </div>

          <div class="marginHorizontal col-sm-6 blockVerticalCenter blockHorizontalCenter mb-2">
            <div class="col-sm-4">
              <label>E-mail</label>
            </div>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="email" placeholder="E-mail" required />
            </div>
          </div>

          <div class="marginHorizontal col-sm-6 blockVerticalCenter blockHorizontalCenter mb-2">
            <div class="col-sm-4">
              <label>Phone</label>
            </div>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="phone" placeholder="Phone" required />
            </div>
          </div>

        </div>

        <div class="marginHorizontal col-sm-6 blockVerticalCenter blockHorizontalCenter mb-2">
          <div class="col-sm-6">
            <router-link to="/" class="col-sm-6">
              <button type="button" class="btn col-sm-10">Cancel</button>
            </router-link>
          </div>

          <div class="col-sm-6">
            <button type="button" class="btn col-sm-10" id="ok-btn">OK</button>
          </div>
        </div>

      </div>
    </div>
  </div>
   </div>
</template>

<script lang="ts">
import 'https://code.jquery.com/jquery-3.7.1.min.js';
import '/src/scripts/registration.js';
export default {};
/*
export default {//works but break router-link
  mounted() {
    const jqueryscript = document.createElement("script");
    jqueryscript.src = "https://code.jquery.com/jquery-3.7.1.min.js";
    jqueryscript.async = true;
    document.body.appendChild(jqueryscript);

    const registrationScript = document.createElement("script");
    registrationScript = "/src/scripts/registration.js";
    registrationScript.async = true;
    document.body.appendChild(registrationScript);
  },
};*/
</script>
