({
	getData: function(component, event, helper) {
		helper.setdashboard(component);
	},
    
    showSpinner : function (component, event, helper) {
         var toggleText = component.find("spinner");
		$A.util.removeClass(toggleText,'toggle');
    },
    
    hideSpinner : function (component, event, helper) {
      var toggleText = component.find("spinner");
	  $A.util.addClass(toggleText,'toggle');
    }
})