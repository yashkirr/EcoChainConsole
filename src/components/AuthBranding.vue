<template>
  <div class="auth-branding">
    <!-- Company Logo -->
    <div class="logo-section">
      <v-img 
      src="@/assets/logo.png" alt="Company Logo" class="company-logo">
      </v-img>
    </div>

    <!-- Description -->
    <div class="description-section">
      <p class="company-description">EcoChain: Revolutionising compliance through innovation</p>
    </div>

    <!-- Picture -->
    <div class="picture-section">
    <v-img 
      src="@/assets/treephoto.png" alt="Company photo" class = "company-picture" >
    </v-img>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AuthBranding'
}
</script>

<style scoped>
.auth-branding {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;  
}

.company-logo {
  width: 240px; 
  height: 250px;
  margin-top: -190px;
}

.description-section {
  text-align: center;
  max-width: 250px; 
  height : 400px;
  color: #64748B
}

.company-picture {
  width: 400px; 
  height: 350px;
  margin-top: -350px;

}
</style>
