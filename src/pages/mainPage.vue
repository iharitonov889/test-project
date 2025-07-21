<template lang="">
  <div class="wrapper">
    <header
      class="flex-container blockBody pad"
      style="width: 100%; justify-content: space-between"
    >
      <!--flex-container (Row №1(Header)-->
      <div class="frame pad">
        <!--header part №1-->
        <a href="./index.php"
          ><img class="headerLogo mtmb" src="./images/logo.png" style="visibility: visible"
        /></a>
        <p class="headerTitle mtmb">Электронная регистратура <br />ГБУЗ «Калачевская ЦРБ»</p>
      </div>
      <!--frame pad-->

      <div class="frame">
        <!--header part №2-->
        <div class="frame pad">
          <!--header subpart №2.1-->
          <!--        if (isset($_SESSION['manager_login']) != null) {
          echo '<form method="post"> <button type="submit" class="btn btn-primary btn-lg" name="managerLogoutFromMain">Выйти из профиля</button> </form>
      ';//path
        } else if (isset($_SESSION['user_login']) != null) {
          echo '<form method="post"> <button type="submit" class="btn btn-primary btn-lg" name="userLogout">Выйти из профиля</button> </form>
      ';//path
        } else {
          echo '<a href="pages/patient/registration.php"><button class="btn btn-primary btn-lg"
       >Регистрация</button></a>';//'<button type="submit" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#RegModal">Регистрация</button>'
        }
        ;-->
        </div>

        <div class="frame pad">
          <!--header subpart №2.2-->
          <!--      <?php {
        if (isset($_SESSION['manager_login']) != null) {//echo '<a href="./pages/manager/profile.php" class="button btn btn-primary btn-lg">Профиль</a>';//path!
        } else if (isset($_SESSION['user_login']) != null) {
          echo '<a href="./pages/patient/profile.php" class="button btn btn-primary btn-lg">Профиль</a>';//path!
        } else {
          echo '<form method="post"><button type="submit" class="btn btn-primary btn-lg" name="loginUserButton">Авторизоваться</button></form>';
        }
        ;
      }
      ;
      ?>-->
        </div>
      </div>
      <!--frame header-combiner-->
    </header>
    <!--flex-container (Row №1(Header)-->

    <div class="flex-container blockBody">
      <!--flex-container (Row №2(Menu under header)-->
      <!--  <?php if (isset($_SESSION['user_id']) != null) { ?>-->

      <ul class="nav justify-content-center border-top pt-3 mt-3">
        <form method="post">
          <div class="frame" style="display: inline-block">
            <!-- color:green;-->
            <button type="submit" class="btn btn-primary btnlikelink px-5" name="sighUpButton">
              <img class="imgbutton headerLogo mtmb" src="./images/scedulePatient.png" />Записаться
              на приём
            </button>
          </div>
        </form>
      </ul>
      <!-- <?php } else if (isset($_SESSION['manager_id']) != null) { ?>-->

      <form method="post">
        <ul class="nav justify-content-center border-top pt-3 mt-3">
          <div class="frame" style="display: inline-block">
            <form method="post">
              <button
                type="submit"
                class="btn btn-primary btnlikelink px-5"
                name="sighupPatientManager"
              >
                <img class="imgbutton headerLogo mtmb" src="./images/scedulePatient.png" />Записать
                пациента на приём</button
              ><!--sighUpButtonManager-->
            </form>
          </div>
        </ul>

        <ul class="nav justify-content-center border-top pt-3 mt-3">
          <div class="frame" style="display: inline-block">
            <form method="post">
              <button type="submit" class="btn btn-primary btnlikelink px-5" name="indexSchedule">
                <img class="imgbutton headerLogo mtmb" src="./images/scedulePatient.png" />Добавить
                время приёма доктору
              </button>
            </form>
          </div>
        </ul>

        <ul class="nav justify-content-center border-top pt-3 mt-3">
          <div class="frame" style="display: inline-block">
            <form method="post">
              <button type="submit" class="btn btn-primary btnlikelink px-5" name="indexDoctors">
                <img class="imgbutton headerLogo mtmb" src="./images/homeCall.png" />Работа с
                докторами
              </button>
            </form>
          </div>
        </ul>

        <ul class="nav justify-content-center border-top pt-3 mt-3">
          <div class="frame" style="display: inline-block">
            <form method="post">
              <button type="submit" class="btn btn-primary btnlikelink px-5" name="indexPatients">
                <img class="imgbutton headerLogo mtmb" src="./images/patientIco.png" />Работа с
                пациентами
              </button>
            </form>
          </div>
        </ul>
      </form>
    </div>
    <!--flex-container (Row №2(Menu under header)-->

    <div class="content">
      <!--main content-->
      <div class="flex-container blockBody mb-5 mt-5">
        <div class="frame flex-element col-sm-12 col-lg-6 pad">
          <!--<?php include ('./siteComponents/homePage/carouselindex.php'); ?>-->
        </div>

        <div class="frame flex-element col-sm-12 col-lg-6 pad">
          <!--<?php include ('./siteComponents/homePage/historyindex.php'); ?>-->
        </div>
      </div>
    </div>
  </div>
  <!--wrapper-->
</template>
<script lang="ts">
import '/src/css/style.css';
export default {};
</script>
<style lang=""></style>
