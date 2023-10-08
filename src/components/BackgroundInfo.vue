<template>
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
</template>


<script>

    export default {
        name: 'BackgroundInfo',
        methods: {
      validate() {
        this.$router.push('/PeoplePage');
      }
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
