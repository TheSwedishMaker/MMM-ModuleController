Module.register("MMM-ModuleController", {
  defaults: {
    // default config options
  },
  
  start: function () {
    Log.info("MMM-ModuleController: Module started");
  },

  notificationReceived: function (notification, payload, sender) {
    if (notification === "HIDE_MODULES") {
      this.hideOtherModules(payload.exceptionList);
    }
    
    if (notification === "SHOW_MODULES") {
      this.showOtherModules();
    }
  },

  hideOtherModules: function (exceptionList = []) {
    MM.getModules().enumerate((module) => {
      if (!exceptionList.includes(module.name)) {
        module.hide(1000);
      }
    });
  },

  showOtherModules: function () {
    MM.getModules().enumerate((module) => {
      module.show(1000);
    });
  },
});
