<template>
  <router-view />
  <div class="wrapper">
    <div class="content">
      <div class="flex-container blockBody col-sm-4 marginHorizontal">
        <div class="col-sm-12">
          <h1 class="textCenter">Authorization</h1></div>
        <!--form-control-->

        <div class="col-sm-12 mb-2">
          <div class="marginHorizontal col-sm-6">
            <!--part-->
            <input
              type="text"
              class="form-control"
              style="text-align: left"
              id="auth_login"
              name="auth_login"
              placeholder="Login"
              required
            />
          </div>
        </div>
        <!--first row-->

        <div class="col-sm-12 mb-2">
          <div class="marginHorizontal col-sm-6 blockVerticalCenter">
            <!--blockCenter allows to build elements in one row-->

            <input
              :type="showPassword ? 'text' : 'password'"
              class="form-control"
              style="text-align: left"
              id="auth_password"
              name="auth_password"
              placeholder="Password"
              required
            />
            <button class="btn" @click="showPassword = !showPassword">👁️</button>
            <!--two elements in same div with same COL prmtrs-->
          </div>
        </div>
        <!--secont row-->

        <div class="col-sm-12 mb-2">
          <div class="marginHorizontal col-sm-6 blockVerticalCenter blockHorizontalCenter">
            <router-link to="/registrationPage" class="col-sm-6">
              <div class="">
                <a>Registration</a>
              </div>
            </router-link>
            <button type="submit" class="btn col-sm-6" name="login_user">
              <!--btn-primary-->
              Login
            </button>
          </div>
          <!--
          <div class="marginHorizontal col-sm-6">
            <button type="submit" class="btn col-sm-6" name="login_user">


              Login
            </button>
          </div>-->
        </div>
        <!--third row-->
      </div>
      <!--flex-container-->
    </div>
    <!--content-->
  </div>
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
