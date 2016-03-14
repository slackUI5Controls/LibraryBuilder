sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("uk.me.seancampbell.controller.Main", {
        onPressMasterBack : function() {
			this.getSplitContObj().backMaster();
		},
		onPressGoToMaster : function() {
			this.getSplitContObj().toMaster(this.createId("subList"));
		},
        getSplitContObj : function() {
			var result = this.byId("SplitCont");
			if (!result) {
				jQuery.sap.log.error("SplitApp object can't be found");
			}
			return result;
		}
	});

});