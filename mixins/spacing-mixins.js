export default {
  data: () => ({
    largeMarginClass: "mt-12 mb-6",
    flexCenterRowClass: "d-flex align-center justify-space-between",
  }),
  computed: {
      pageSectionClass: function(){
          return{
              "pa-4 pa-sm-12": true,
              'mx-2': this.$vuetify.breakpoint.smAndDown
          }
      }
  }
};
