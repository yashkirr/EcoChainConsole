<template>
    <v-container>
      <!-- Form -->
      <v-form ref="form">
        <!-- Name -->
        <v-text-field
          label="Name"
          v-model="name"
          required
        ></v-text-field>
  
        <!-- Last Name -->
        <v-text-field
          label="Last Name"
          v-model="lastName"
          required
        ></v-text-field>
  
        <!-- Email -->
        <v-text-field
          label="Email"
          v-model="email"
          :rules="[emailRules]"
          required
        ></v-text-field>
  
        <!-- Reporting Period (Date Range Picker) -->
        <v-row>
          <v-col cols="6">
            <v-menu
              v-model="menuStartDate"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-bind="attrs"
                  v-on="on"
                  label="Start Date"
                  v-model="startDate"
                  readonly
                  required
                ></v-text-field>
              </template>
              <v-date-picker v-model="startDate" @input="menuStartDate = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="6">
            <v-menu
              v-model="menuEndDate"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-bind="attrs"
                  v-on="on"
                  label="End Date"
                  v-model="endDate"
                  readonly
                  required
                ></v-text-field>
              </template>
              <v-date-picker v-model="endDate" @input="menuEndDate = false"></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
  
        <!-- Terms and Conditions -->
        <v-checkbox
          v-model="termsAccepted"
          label="I accept the terms and conditions"
          required
        ></v-checkbox>
  
        <!-- Submit Button -->
        <v-btn @click="submitForm">Submit</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        lastName: '',
        email: '',
        startDate: null,
        endDate: null,
        menuStartDate: false,
        menuEndDate: false,
        termsAccepted: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
      };
    },
    methods: {
      submitForm() {
        if (this.$refs.form.validate()) {
          // Handle submission logic here
          console.log('Form submitted');
        } else {
          console.log('Form validation failed');
        }
      }
    }
  };
  </script>