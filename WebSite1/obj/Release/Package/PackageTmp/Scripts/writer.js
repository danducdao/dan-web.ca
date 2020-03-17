"use strict";

$("#sortWriter").on("change", function () {
    if ($(this).val() == "") {
        $("#result").html("");
        return;
    }

    if ($(this).val() == "1") {
        $.ajax({
            method: "GET",
            url: "http://webapi.com/writer/sortByName",
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                var table = "<table class='ui celled striped table'>";
                table += "<tbody>";
                response.forEach(function (writer) {
                    table += "<tr>";
                    table += "<td>" + writer.Name + "</td>";
                    table += "<td>" + writer.HomeState + "</td>";
                    table += "</tr>";
                });
                table += "</tbody>";
                table += "</table>";
                $("#result").html(table);
            },
            error: function (jqXHR, exception) {
                console.log(jqXHR.status);
                console.log(exception);
            }
        });
    }   
});
