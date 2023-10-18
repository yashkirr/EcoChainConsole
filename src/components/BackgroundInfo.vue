<template>
  <v-container>

    <v-form>
    <v-row>
  <v-col cols="6">

      <label>First Name </label>
      <v-text-field
        v-model="firstName"
        placeholder="Enter your first name"
        variant = "outlined" 
        required
      ></v-text-field>
      </v-col>
  
 <v-col cols="6" >
      <label>Last Name </label>
      <v-text-field
        v-model="lastName"
         placeholder="Enter your last name"
         variant = "outlined" 
        required
      ></v-text-field>
       </v-col>


</v-row>

      <p>Please select your reporting period</p>

      <label>Start Date</label>
      <v-text-field v-model="startDate" type="date"  variant = "outlined" ></v-text-field>

      <label>End Date</label>
      <v-text-field v-model="endDate" 
       type="date"  variant = "outlined" 
    
       >
       </v-text-field >

      <v-checkbox v-model="checkbox">
        <template v-slot:label>
          <div>
            I hereby confirm that all metric scores provided are true and correct. In the case that audit findings reflect misconduct in this submission, I accept full responsibility for non-compliant reporting.
          </div>
        </template>
      </v-checkbox>
       
    
    </v-form>

  </v-container>
</template>


<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      startDate: null,
      endDate: null,
      checkbox: false,
    };
  },
  methods: {
    submitForm() {
      console.log('Form Submitted!', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        startDate: this.startDate,
        endDate: this.endDate
      });
    }
  }
};
</script>

