requirejs.config({ 
    "baseUrl": "scripts", 
    "paths": {  
        jQuery: "components/jquery/dist/jquery.min",
        domReady: 'components/requirejs-domready/domReady',
        main: "main",
        Function: "function"
    },
    "shim": {
        main: {
            deps: ['jQuery']
        },
        Function: {
            deps: ['jQuery']
        }
    } 
}); 
requirejs(["main", "domReady"],
    function(Function, domReady) {
        'use strict';
        domReady(function() {
            alert("FUNCTION SCRIPT HAS BEEN LOADED");
        });
    }
);