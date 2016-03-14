sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("uk.me.seancampbell.controller.controller", {
       getControls : function (collectionName) {
            if(this.github == undefined){
                this.github = new Github({
                username: "emoticrab",
                password: "minimon11",
                auth: "basic"
            });
            }
            
            
            var username = "slackUI5Controls"
            var reponame = "CustomControls"
            var repo = this.github.getRepo(username, reponame);
            
           repo.read(collectionName, "Controls", $.proxy(function(err, contents) {
                  this.getView().setModel(new sap.ui.model.json.JSONModel({items:contents}),"initialList")
            },this));
       }
	});

});