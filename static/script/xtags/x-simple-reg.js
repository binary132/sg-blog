xtag.register('simple-reg', {
  lifecycle: {
    created: function() {
      this.xtag.textEl = document.createElement('input');
      this.ready();
    },

    inserted: function() {
    },
  },
  methods: {
    ready: function() {
      console.log("ready");
    }
  }
});
