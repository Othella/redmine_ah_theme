$(document).ready(function () {
    // Add meta tag to head
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0">');

    // Add scripts before closing body tag
    $('body')
        .append('<script src="/themes/ah/javascripts/custom.js" type="text/javascript"></script>') // Added before for better performances
        .append('<script src="/themes/ah/javascripts/bootstrap.min.js" type="text/javascript"></script>');
});
