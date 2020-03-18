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
                var html = "<h4>Sorted By Name</h4>";
                html += "<table class='ui collapsing striped table'>";
                html += "<thead>";
                html += "<tr>";
                html += "<th>Name</th>";
                html += "<th>State</th>";
                html += "</tr>";
                html += "</thead>";
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
                var html = "<h4>Sorted By State</h4>";
                html += "<table class='ui collapsing striped table'>";
                html += "<thead>";
                html += "<tr>";
                html += "<th>Name</th>";
                html += "<th>State</th>";
                html += "</tr>";
                html += "</thead>";
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
