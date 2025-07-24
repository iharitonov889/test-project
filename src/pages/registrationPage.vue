<template>
  <router-view />
  <div class="wrapper">
    <div class="content">
      <form id="registration">
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
                    id="login"
                    name="login"
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
                    id="password"
                    name="password"
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
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    required
                  />
                </div>
              </div>

              <div class="marginHorizontal col-sm-6 blockVerticalCenter blockHorizontalCenter mb-2">
                <div class="col-sm-4">
                  <label>Phone</label>
                </div>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    required
                  />
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
                <button type="button" onclick="submitForm()" class="btn col-sm-10">OK</button
                ><!--submit-->
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import '/src/css/style.css';
/*
function submitForm(event) {
  const form = document.getElementById('registration');
  const formData = new FormData(form);
  const formDataObj = {} | String;
  formData.forEach((value, key) => (formDataObj[key] = value));
}*/
//JST(!)

/*
const form = document.getElementById('registration');
form.addEventListener('submit', function (e) {
  e.preventDefault();
});
*/

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
