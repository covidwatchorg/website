export default {
  data: () => ({
    largeMarginClass: "mt-12 mb-6",
    flexCenterRowClass: "d-flex align-center justify-space-between",
    pageSectionClass: "pa-4 pa-sm-12",
  }),
  computed: {
      mobileMarginsClass: function(){
          return {
              'mx-2': this.$vuetify.breakpoint.smAndDown
          }
      }
  }
};
