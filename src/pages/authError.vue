<template>
  <div class="content">
    <!--<form id="form_auth" method="post">-->
    <div class="blockBody container col-sm-4">
      <h1>Authorization</h1>

      <div class="col-sm-12 centerize">
        <div class="col-sm-12">
          <!--<<div class="frame">
           label style="min-width: 100px !important">Логин</label>
          </div>-->
          <div class="">
            <input
              type="text"
              class="form-control"
              style="text-align: left"
              id="auth_login"
              name="auth_login"
              placeholder="Login"
              required
            /><!--              v-bind:value="login"
            @input="inputLogin"-->
          </div>
        </div>
      </div>

      <div class="frame col-sm-12 centerize">
        <div class="col-sm-6"></div>
        <div class="col-sm-2"></div>
      </div>

      <div class="d-flex col-sm-6">
        <div class="d-inline-block col-sm-10">
          <input
            :type="showPassword ? 'text' : 'password'"
            class="form-control"
            style="text-align: left"
            id="auth_password"
            name="auth_password"
            placeholder="Password"
            required
          /><!--              v-bind:value="login"
            @input="inputLogin"-->
        </div>
        <div class="d-inline-block col-sm-2">
          <button class="btn" @click="showPassword = !showPassword">👁️</button>
        </div>
      </div>

      <div class="frame">
        <div class="text-sm-center" style="justify-content: space-between">
          <div class="frame pad">
            <router-link to="/registrationPage">
              <a>Registration</a>
            </router-link>
          </div>
          <div class="frame pad">
            <button type="submit" class="btn col-sm-12" name="login_user">
              <!--btn-primary-->
              Login
            </button>
          </div>
        </div>
        <div class="text-sm-center"></div>
      </div>
    </div>
    <!--</form>-->
    <!--Auth - form needed for POST js-php interaction-->
  </div>
  <!--flex-container-->
</template>

<script lang="ts">
export default {
  data() {
    return {
      showPassword: false,
    };
  },
};
import '/src/css/style.css';
</script>
