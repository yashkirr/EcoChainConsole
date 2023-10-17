<template>
  <v-container class = "auth-container">
    <v-row>
      <!-- Image on the left -->
      <v-col >
        <v-img src="@/assets/successphoto.png" alt="Company Logo" class="company-logo" style="width: 400px margin-left: 100px;"></v-img>
      </v-col>

      <!-- Content on the right -->
      <v-col >
      <h2 style="margin-bottom: 20px;">Submission Successful!</h2>

        <p style="margin-bottom: 20px;">Your submission has successfully been submitted and stored on the Blockchain. A summary email has been sent as reference for the report and an NFT has been minted as certification.</p>
        
        <div style="margin-bottom: 20px;"> <strong>Report ID:</strong> {{ reportId }}</div>
        <div style="margin-bottom: 20px;"><strong>NFT TXID:</strong> {{ nftTxid }}</div>
        <div style="margin-bottom: 20px;"><strong>Report TXID:</strong> {{ reportTxid }}</div>

      
        <v-row class="mt-3">
          <v-col cols="6">
            <v-btn block elevation="2"  outlined color="#3056D3" class="text-none" >
              View Submission 
            </v-btn> 
          </v-col>
          <v-col cols="6">
            <v-btn block color="#3056D3" class="text-none">
              View NFT
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>




<style scoped>


.auth-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  align-items: center;
  height: 100vh;
}

</style>
