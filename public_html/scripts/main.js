define(["Function"], function() { 
    requireInclusion();
    jqueryPromises();
    manageAsyncEvent();
}); 




function requireInclusion(){
    $("button#requireInclusion").on("click", function(){
        appendElementToBody($("<div>ELEMENT APPENDED TO BODY</div>"));
    });
}

function jqueryPromises(){
    $("button#jQueryPromises").on("click", function () {
        $("p").append("Started...");
        $("div.promisesDiv").each(function (i) {
            $(this).fadeIn().fadeOut(1000 * (i + 1));
        });
        $("div").promise().done(function () {
            $("p").append(" Finished! ");
        });
    });
}

function manageAsyncEvent(){
    $("button#asyncEventButton").on("click", function(){
        startAsyncEvent();
    });
}


function asyncEvent() {
    var dfd = new jQuery.Deferred();

    // Resolve after a random interval
    setTimeout(function () {
        dfd.resolve("hurray");
    }, Math.floor(400 + Math.random() * 2000));

    // Reject after a random interval
    setTimeout(function () {
        dfd.reject("sorry");
    }, Math.floor(400 + Math.random() * 2000));

    // Show a "working..." message every half-second
    setTimeout(function working() {
        if (dfd.state() === "pending") {
            dfd.notify("working... ");
            setTimeout(working, 500);
        }
    }, 1);

    // Return the Promise so caller can't change the Deferred
    return dfd.promise();
}

function startAsyncEvent(){
    // Attach a done, fail, and progress handler for the asyncEvent
    $.when(asyncEvent()).then(
        function (status) {
            console.log(status + ", things are going well");
        },
        function (status) {
            console.log(status + ", you fail this time");
        },
        function (status) {
            $("#asyncEventLegend").append(status);
        }
    );
}
