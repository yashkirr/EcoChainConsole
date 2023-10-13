<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>Sign in to Ecochain</h2>
        </v-col>
      </v-row>

      <v-row>
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
      </v-row>

      <v-row>
        <v-col cols="12">
          <label>Password</label>
          <v-text-field
            class="rounded-border"
            v-model="password"
            type="password"
            :rules="passwordRules"
            placeholder="6 characters"
            append-inner-icon="mdi-lock-outline"
            v-bind="commonProps"
            required
          ></v-text-field>
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
            Sign In
          </v-btn>
          <p class="mt-3">
            Don't have an account?
            <router-link to="/login">Sign up</router-link>
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

        valid: false,

        password: '',
        passwordRules: [
          value => !!value || 'Please type your password.',
          value => (value && value.length >= 6) || 'minimum 6 characters',
        ],

        email: '',
        emailRules: [
          value => (value ? true : 'Email is required.'),
          value =>
            /.+@.+\..+/.test(value) ? true : 'Email entered is not valid.',
        ],
      }
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
  /* Modify the text color inside the input fields */
  ::v-deep .rounded-border .v-input__control input {
    color: #64748b;
  }
  /* Change the color of the icons */
  ::v-deep .rounded-border .v-icon {
    color: #64748b;
  }
</style>