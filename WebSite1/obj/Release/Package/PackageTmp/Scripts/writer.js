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
                var html = "<h2>Writer Sorted By Name</h2>";
                html += "<table class='ui celled striped table'>";
                html += "<tbody>";
                response.forEach(function (writer) {
                    html += "<tr>";
                    html += "<td>" + writer.Name + "</td>";
                    html += "<td>" + writer.HomeState + "</td>";
                    html += "</tr>";
                });
                html += "</tbody>";
                html += "</table>";
                $("#result").html(html);
            },
            error: function (jqXHR, exception) {
                console.log(jqXHR.status);
            }
        });
    } else if ($(this).val() == "2") {
        $.ajax({
            method: "GET",
            url: "http://webapi.com/writer/sortByState",
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                var html = "<h2>Writer Sorted By State</h2>";
                html += "<table class='ui celled striped table'>";
                html += "<tbody>";
                response.forEach(function (writer) {
                    html += "<tr>";
                    html += "<td>" + writer.Name + "</td>";
                    html += "<td>" + writer.HomeState + "</td>";
                    html += "</tr>";
                });
                html += "</tbody>";
                html += "</table>";
                $("#result").html(html);
            },
            error: function (jqXHR, exception) {
                console.log(jqXHR.status);
            }
        });
    }
});
