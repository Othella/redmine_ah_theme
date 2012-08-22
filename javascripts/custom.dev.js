/**
 * Add classes to use bootstrap fluid layout
 */
function ahSetFluidLayout() {
    // Wrap wrapper to make it fluid
    $('#wrapper').addClass('row-fluid');
}

/**
 * Rebuild the top menu to use a bootstrap top-fixed responsive navbar
 */
function ahRebuildTopMenu() {
    var $topMenu = $('#top-menu'),
        topMenuHtml = $topMenu.html();

    // Use a responsive top-fixed navbar for the top menu
    $topMenu.addClass('navbar navbar-fixed-top');

    // Add needed tags to have a collapsible responsive navbar
    var newTopMenuElements = '<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">';
    newTopMenuElements += '<span class="icon-bar"></span>';
    newTopMenuElements += '<span class="icon-bar"></span>';
    newTopMenuElements += '<span class="icon-bar"></span>';
    newTopMenuElements += '</a>';
    newTopMenuElements += '<a class="brand" href="#">a.h Redmine</a>';

    // Rebuild top menu
    $topMenu.empty();
    $topMenu.append(newTopMenuElements);
    $topMenu.append('<div class="nav-collapse">' + topMenuHtml + '</div>');

    // Wrap top menu to make it fluid
    $topMenu.wrapInner('<div class="row-fluid"/>');
    $topMenu.wrapInner('<div class="container-fluid"/>');

    $('.nav-collapse').find('ul').addClass('nav');
}

/**
 * Rebuild the header to use bootstrap classes
 */
function ahRebuildHeader() {
    var $header = $('#header'),
        $title = $header.children('h1'),
        $search = $('#quick-search'),
        $mainMenu = $('#main-menu');

    // Reorder header elements
    $header.empty();
    $header.append($title);
    $header.append($search);
    $header.append($mainMenu);

    // Wrap header to make it fluid
    $header.wrapInner('<div class="row-fluid"/>');
    $header.wrapInner('<div class="container-fluid"/>');

    // Add classes
    $title.wrap('<div class="span8 pull-left"/>');
    $search.wrap('<div class="span4 pull-right"/>');
    $mainMenu.wrap('<div class="row-fluid pull-left"/>');
    $mainMenu.children('ul').addClass('nav nav-pills clearfix');

    // Customize the search query form to use bootstrap form properties
    var $queryForm = $search.children('form');
    $queryForm.addClass('form-search');
    $queryForm.find('input[type="text"]').addClass('search-query').attr('placeholder', 'Search...'); // use rounded corner
    $queryForm.find('label').addClass('hidden'); // hide label
}

function ahCustomizeMain() {
    var $main = $('#main'),
        $content = $('#content'),
        $sidebar = $('#sidebar');

    // Reorder elements
    $main.empty();
    $main.append($content);
    $main.append($sidebar);

    // Wrap main to make it fluid
    $main.wrapInner('<div class="span12"/>');
    $main.wrapInner('<div class="row-fluid"/>');
    $main.wrapInner('<div class="container-fluid"/>');

    // Add classes
    if (!$main.hasClass('nosidebar')) {
        $content.addClass('span9');
        $sidebar.addClass('span3');
    }

    // Wrap content to make it fluid
    $content.wrapInner('<div class="row-fluid"></div>');
    $content.find('.splitcontentleft, .splitcontentright').addClass('span6');

    // There's a bug with the :first-child selector, so we add a class to remove left margin
    $content.find('.row-fluid').children('[class*="span"]').first().addClass('noleftmargin');

}

/**
 * Inject classes that are used by bootstrap
 */
function ahInjectClasses() {

    // Use wells for boxes
    $('.box').addClass('well');

    // Use btn class for submit inputs
    $('input[type="submit"]').addClass('btn');
}

$(document).ready(function () {

    /***** Customize the layout to use Bootstrap *****/
    ahSetFluidLayout();
    ahRebuildTopMenu();
    ahRebuildHeader();
    ahCustomizeMain();
    ahInjectClasses();
});


