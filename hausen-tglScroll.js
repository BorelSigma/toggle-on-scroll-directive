angular.module('hausen-tglScroll', function(){
	
}).directive('toggleOnScroll', function($timeout){
	function link(scope, element, attrs){
		var show_on_destroy = attrs.showOnDestroy === 'true'? true : false;
		//offset 
		var total_offset = 0;
		//element which should be hidden or displayed
		var toggle_elm = undefined;
		/**
		 * function for hiding or displaying element
		 * @return {undefined} 
		 */
		var toggle_logo_on_scroll = function(){
			if(typeof toggle_elm !== 'undefined'){
		        if(total_offset<$(this).scrollTop()){
		        	toggle_elm.show();
		        }else{
		        	toggle_elm.hide();
		        }
			}
		};

		/**
		 * workaround for preventing wrong offset when view is not correctly rendered yet
		 */
		$timeout(function(){
			toggle_elm = angular.element('#'+attrs.toggleElmId);
			total_offset = element.offset().top + element.prop('height'); 
			toggle_logo_on_scroll();
			$(document).scroll(toggle_logo_on_scroll);
		}, 50);

		//clear event listener on scope destroy
		scope.$on('$destroy', function(){
		    	if(typeof toggle_elm !== 'undefined' && show_on_destroy){
		    		toggle_elm.show();
		    	}
		    	$(document).off('scroll', toggle_logo_on_scroll);
		    });
	};
	return {
		restrict: 'A',
		link : link
	}
});