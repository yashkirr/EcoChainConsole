<template>
    <div class="container">
      <h1>EcoChain</h1>
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
  