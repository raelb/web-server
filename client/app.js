
$(function () {

    $("#target").text("[jQuery Initialized]");


    function doRequest(useToken) {
        var tokens = "@cookie" + ":" + "@form";
        var url = "http://localhost:3000/data";

        var config = {
            url: url,
            type: 'get',
            success: function (data) {
                $('#result').text(JSON.stringify(data));
            },
            error: function (err) {
                $("#result").text(err.status + " - " + err.statusText +
                    " (" + err.responseText + ")");
            }
        };

        // if (useToken) {
        //     config.headers = {
        //         "AntiForgeryToken": tokens
        //     };
        // }

        $.ajax(config).done(function(data){
            console.log(data);
        });
    }

    // $("#btnNo").click(function () {
    //     doRequest(false);
    // });

    $("#btnYes").click(function() {
        doRequest(true);
    });

    $("#btnClear").click(function() {
        $("#result").text("");
    });
});

