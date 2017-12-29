$(document).ready(function () {
    $(".submitHref").attr("action","a.csv");
    setTimeout(function (args) {
        console.log('dddddddddd')
        $(".submitHref").submit();
    },3000)
});

