sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "uk/me/seancampbell/model/models"
], function(UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("uk.me.seancampbell.Component", {

        metadata: {
            manifest: "json"
        },

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
        init: function() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
            var github = new Github({
                username: "emoticrab",
                password: "minimon11",
                auth: "basic"
            });


            var username = "slackUI5Controls"
            var reponame = "CustomControls"
            var repo = github.getRepo(username, reponame);
            
            repo.contents("experimental", "/", function(err, contents) {
                console.log(content)
            });
            
            repo.show(function(err, reps) {
                console.log(reps)
             });





            // set the device model
            this.setModel(models.createDeviceModel(), "device");
        }
    });

});