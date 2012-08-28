/**
 * This file contains all scripts used to customize the layout
 * Remark: It can't use Bootstrap since it's loaded before!
 * Author: Amélie Husson
 * Author URI: http://ameliehusson.com
 */


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
    $search.find('input').addClass('input-medium');
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
 * Customize footer
 */
function ahCustomizeFooter() {
    // Add classes for responsive design
    $('#footer .bgl').addClass('container-fluid');
    $('#footer .bgr').addClass('row-fluid');

    // Add link to a.h website
    var footerContent = $('#footer .bgr').html();
    footerContent += ' - Design by <a href="http://ameliehusson.com" title="Am&eacute;lie Husson">Am&eacute;lie Husson</a>';
    $('#footer .bgr').html(footerContent);
}

/**
 * Inject classes that are used by bootstrap
 */
function ahInjectClasses() {

    // Use wells for boxes
    $('.box').addClass('well');

    // Use btn class for submit inputs
    $('input[type="submit"], input[type="button"]').addClass('btn');
    $('input[type="submit"]').addClass('btn-primary');
    $('.buttons a').wrap('<span class="btn"></span>');
    $('.tabs-buttons button').addClass('btn');

    // Reduce input size in contextual
    $('.contextual input').addClass('input-medium');

    // Set form inline and format some elements
    $('.action-projects #content form, .controller-users #content form').addClass('form-horizontal');
    $('.controller-users #content form #name').addClass('input-medium');

    // Use table classes
    $('table.list').addClass('table table-condensed table-hover table-bordered');
    $('table.list .btn').addClass('btn-small'); // Small buttons

    // Use red button for delete account link
    $('.action-account .icon-del').wrap('<span class="btn btn-danger"></span>');

    // Use progress bar classes
    $('table.progress').addClass('progress-success').addClass('progress-striped');
    $('table.progress .todo, table.progress .done, table.progress .closed').addClass('bar');

}

/**
 * Miscellaneous customizations
 */
function ahCustomizeMisc() {

    // Open help in new tab
    $('#top-menu .help').attr('target', '_blank');
}

$(document).ready(function () {

    /***** Customize the layout to use Bootstrap *****/
    ahSetFluidLayout();
    ahRebuildTopMenu();
    ahRebuildHeader();
    ahCustomizeMain();
    ahCustomizeFooter();
    ahInjectClasses();
    ahCustomizeMisc();
});


