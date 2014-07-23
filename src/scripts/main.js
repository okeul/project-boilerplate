;(function($){

  $.controller = {
    $body : $('body'),

    initFunctions: function(){
      this.initNewFunction();
    },

    initNewFunction: function(){
      // do stuff
    }

  };

  $(function(){
    $.controller.initFunctions();
  });

})(jQuery);