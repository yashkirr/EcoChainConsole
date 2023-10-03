<template>
    <img class="logo" alt="Vue logo" src="../assets/logo.svg">
    <div class="container">
      <button @click="login">Login</button>
      <button @click="signUp">Sign Up</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      login() {
        this.$router.push('/dashboard');
      },
      signUp() {
        // Logic for sign up goes here
        alert('Sign Up button clicked');
      }
    }
  }
  </script>

  <style>
  .logo {
    height: 25vh;
    pointer-events: none;
    /* align to left of screeb=n */
    position: absolute;
    left: 0;
    /* center vertically */
    top: 35%;
    transform: translateY(-50%);

  }
  /* place container next to .logo on the right side */

  .container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  </style>