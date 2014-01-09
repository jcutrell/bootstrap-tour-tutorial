(function(){
	var name = "Friend";
	var tour = new Tour({
		storage : false
	});

	tour.addSteps([
	  {
	    element: ".tour-step.tour-step-one",
	    placement: "bottom",
	    title: "Welcome to our landing page!",
	    content: "What's your name? <br><input class='form-control' type='text' name='your_name'>",
	    onNext : function(tour){
	    	var nameProvided = $("input[name=your_name]").val();
	    	if ($.trim(nameProvided) !== ""){
	    		name = nameProvided;
	    	}
	    }
	  },
	  {
	    element: ".tour-step.tour-step-two",
	    placement: "bottom",
	    title: function(){ return "Welcome, " + name; },
	    content: "Here are the sections of this page, easily laid out."
	  },
	  {
	    element: ".tour-step.tour-step-three",
	    placement: "top",
	    backdrop: true,
	    title: "Main section",
	    content: "This is a section that you can read. It has valuable information."
	  },
	  {
	    element: ".tour-step.tour-step-four",
	    placement: "top",
	    orphan: true,
	    title: "Thank you.",
	    content: function(){ return "We can't wait to see what you think, "+name+"!" }
	  },

	]);

	// Initialize the tour
	tour.init();

	// Start the tour
	tour.start();

}());