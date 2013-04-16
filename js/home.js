var HomeView = function(store) {
	// RENDER HOME SCREEN
	this.render = function() {
	    this.el.html(HomeView.template());
	    return this;
	},

	this.initialize = function() {
		// Define a div wrapper for the view. The div wrapper is used to attach events.
		this.el = $('<div/>');
		this.el.on('keyup', '.search-key', this.findByName);
		
		delete this.initialize;
	};

	this.initialize(); 
}
 
HomeView.template = Handlebars.compile($("#home-tpl").html());
