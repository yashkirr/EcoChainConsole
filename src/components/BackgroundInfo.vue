<template>
    <div class = "content-wrapper">
      <SideNavBar />
      <div class="page-content">
        <!-- Dashboard content goes here -->
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        :counter="10"
                        label="First name"
                        required
                        hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                    v-model="lastname"
                    :rules="nameRules"
                    :counter="10"
                    label="Last name"
                    hide-details
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    hide-details
                    required
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
    <TopBar />
</div>
</div>
</template>


<script>
import SideNavBar from './SideNavBar.vue';
import TopBar from './TopBar.vue';

    export default {
        name: 'BackgroundInfo',
        components: { SideNavBar, TopBar },
        data: () => ({
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
          value => {
            if (value) return true
  
            return 'Name is required.'
          },
          value => {
            if (value?.length <= 10) return true
  
            return 'Name must be less than 10 characters.'
          },
        ],
        email: '',
        emailRules: [
          value => {
            if (value) return true
  
            return 'E-mail is requred.'
          },
          value => {
            if (/.+@.+\..+/.test(value)) return true
  
            return 'E-mail must be valid.'
          },
        ],
      }),
    }
  </script>

<style scoped>
.content-wrapper {
  display: flex;
  height: 100vh;
  background-color: #F1F5F9;
  overflow: hidden;
}

.page-content {
  flex: 1;
  overflow-y: auto; /* Add scroll if content overflows */
}
</style>
