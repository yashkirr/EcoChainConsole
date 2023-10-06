<template>
    <div class = "content-wrapper">
      <SideNavBar />
      <div class="page-content">
        <v-container>
        <TopBar />
     </v-container>
     <v-container>
            <v-table>
                <thead>
                    <tr>
                        <td colspan="3">
                            <h1>Submission Information</h1>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <v-text-field
                             v-model="firstname"
                             :rules="nameRules"
                             :counter="10"
                             label="First name"
                             required
                             hide-details>
                            </v-text-field>
                        </td>
                        <td>
                            <v-text-field
                            v-model="lastname"
                            :rules="nameRules"
                            :counter="10"
                            label="Last name"
                            hide-details
                            required></v-text-field>
                        </td>
                        <td>
                            <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            hide-details
                            required></v-text-field>
                        </td>
                    </tr><br>
                    <tr>
                        <td>
                            <v-autocomplete
                            ref="country"
                            v-model="country"
                            :rules="[() => !!country || 'This field is required']"
                            :items="countries"
                            label="dd/mm/yyyy"
                            placeholder="Select..."
                            required></v-autocomplete>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </v-table>    
            <v-table>    
            <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="I hereby confirm that all metric scores provided are true and correct. In the case that audit findings reflect misconduct in this submission, I accept full responsibility for non-compliant 
reporting"
            required
      ></v-checkbox>
      <v-sheet width="300" class="mx-auto">
        <v-btn
          color="success"
          class="mt-4"
          block
          @click="validate"
        >
          Save and Continue
        </v-btn>
    </v-sheet>    
</v-table>
</v-container> 
</div>
</div>
</template>


<script>
import SideNavBar from './SideNavBar.vue';
import TopBar from './TopBar.vue';

    export default {
        name: 'BackgroundInfo',
        components: { SideNavBar, TopBar },
        methods: {
      validate() {
        this.$router.push('/PeoplePage');
      },
      },
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
  text-align: left;
}
</style>
