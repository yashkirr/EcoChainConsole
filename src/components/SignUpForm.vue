/*
<template>
  <v-form v-model="valid">
    <v-container>

    <v-row>
    <v-col cols="12">
    <h2>SignUp for Ecochain</h2>
    </v-col>
    </v-row>
  
      <v-row>
        <v-col cols="12">
          <label> Organisation Name</label>
          <v-text-field
            class="rounded-border"
            v-model="firstname"
            :rules="nameRules"
            placeholder="Enter your organisation name"
            v-bind="commonProps"
            append-inner-icon="mdi-account-outline"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <label>Email</label>
          <v-text-field
          class="rounded-border"
            v-model="email"
            :rules="emailRules"
            placeholder="Enter your email"
            append-inner-icon="mdi-email-outline"
            v-bind="commonProps"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <label>Password</label>
          <v-text-field
            class="rounded-border"
            v-model="password"
            type="password"
            :rules="passwordRules"
            placeholder="Enter your password"
            append-inner-icon="mdi-lock-outline"
            v-bind="commonProps"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <label> Re-type Password</label>
          <v-text-field
            class="rounded-border"
            v-model="confirmPassword"
            type="password"
            :rules="confirmPasswordRules"
            placeholder="Re-enter your password"
            append-inner-icon="mdi-lock-outline"
            v-bind="commonProps"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <label>User Type</label>
          <v-radio-group v-model="userType" column>
            <v-radio label="Employee" value="radio-1"></v-radio>
            <v-radio label="Investor" value="radio-2"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-row class="mt-3">
        <v-col cols="12">
          <v-btn
            block
            @click="submitForm"
            :disabled="!valid"
            variant="flat"
            :color="'#3056D3'"
            class="text-none"
          >
            Create Account
          </v-btn>
          <p class="mt-3">
            Already have an account?
            <router-link to="/login">Sign in</router-link>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data() {
      return {
        commonProps: {
          variant: 'outlined',
          color: '#3C7931',
          class: 'custom-border',
        },
        userType: null,
        valid: false,
        Organisation_name: '',
        nameRules: [value => (value ? true : 'Name is required.')],
        email: '',
        emailRules: [
          value => (value ? true : 'Email is required.'),
          value =>
            /.+@.+\..+/.test(value) ? true : 'Email entered is not valid.',
        ],
        password: '',
        confirmPassword: '',
        passwordRules: [
          value => !!value || 'Please type password.',
          value => (value && value.length >= 6) || 'minimum 6 characters',
        ],
      }
    },
    computed: {
      confirmPasswordRules() {
        return [
          value => !!value || 'Please confirm your password',
          value =>
            value === this.password ||
            'The password confirmation does not match.',
        ]
      },
    },
    methods: {
      submitForm() {
        if (this.valid) {
          console.log('Form is valid, proceed with submission')
        } else {
          console.log('Form is not valid')
        }
      },
    },
  }
</script>

<style scoped>
/* Targeting the specific class for more direct styling */
::v-deep .rounded-border {
    border-color: #E2E8F0 ;
    border-radius: 10px ;
}

/* Modify the text color inside the input fields */
::v-deep .rounded-border .v-input__control input {
    color: #64748B 
}

/* Change the color of the icons */
::v-deep .rounded-border .v-icon {
    color: #64748B ;
}
</style>



