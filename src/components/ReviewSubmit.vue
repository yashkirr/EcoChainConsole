<template>
    <v-container>
      <v-table>
        <thead>
          <tr>
            <td colspan="4">
              <h1>Submission Information</h1>
            </td>
          </tr>
        </thead>
  
        <tbody>
          <tr>
            <td>Company</td>
            <td>[Name of Company]</td>
            <td>Submitted by</td>
            <td>[Name of Submitter]</td>
          </tr>
          <tr>
            <td>Submission Period</td>
            <td colspan="3">01 May 2022 - 30 April 2023</td>
          </tr>
          <tr>
            <td colspan="4">
              <v-table>
                <tbody>
                  <tr>
                    <td>Sections included in Submission</td>
                    <td></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>People</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Planet</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Prosperity</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Governance</td>
                    <td></td>
                  </tr>
                </tbody>
              </v-table>
            </td>
          </tr>
        </tbody>
      </v-table>
      Once Submitted, a PDF will be generated for the report, a record will be stored on the Blockchain, and an NFT will be minted as certification. Please note that this is irreversible.
    </v-container>
  </template>
  
  <script>
  export default {
    methods: {
      getSectionStatus(section) {
        // Determine the status of a section based on the page's data
        const pageData = this.$refs[section];
          return pageData.sectionStatus;
      },
    },
  };
  </script>
  