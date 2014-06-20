(function() {
    Handlebars.registerHelper('Italize', function (value) {
        return new Handlebars.SafeString(
            "<em>" + value + "</em>");
    });
})();


$(function() {
    var stemplate = $("#template").html();
    var tmpl = Handlebars.compile(stemplate);
    var xhr = $.ajax({
        url: 'Beers.json'
    });

    xhr.done(function (data) {
        var ctx = {};
        ctx.Beers = data;
        var html = tmpl(ctx);
        $("#content").append(html);
        $("#content").show();
    });
});

