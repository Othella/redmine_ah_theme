var $win = $(window),
    $topMenu = $('#top-menu'),
    $mainMenu = $('#main-menu'),
    mainMenuTop = $mainMenu.length && $mainMenu.offset().top - $topMenu.height(),
    isFixed = false;

/**
 * Fix subnav on scroll
 */
function ahMainMenuScroll() {
    var scrollTop = $win.scrollTop();
    if ((scrollTop >= mainMenuTop) && !isFixed) {
        isFixed = true;
        $mainMenu.addClass('subnav-fixed');
        $mainMenu.css('top', $topMenu.height());
    } else if ((scrollTop < mainMenuTop) && isFixed) {
        isFixed = false;
        $mainMenu.removeClass('subnav-fixed');
    }
}

/**
 * Add classes to use bootstrap fluid layout
 */
function ahSetFluidLayout() {

    // Set fluid layout
    $('#wrapper').addClass('container-fluid');
    $('#wrapper2').addClass('row-fluid');
}

/**
 * Rebuild the top menu to use a bootstrap top-fixed responsive navbar
 */
function ahRebuildTopMenu() {
    // Use a responsive top-fixed navbar for the top menu
    $topMenu.addClass('navbar navbar-fixed-top');

    // add needed element to have a collapsible responsive navbar
    var $topMenuContent = $topMenu.html();
    var newTopMenuContent = '<div class="navbar-inner"><div class="container-fluid">';
    newTopMenuContent += '<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">';
    newTopMenuContent += '<span class="icon-bar"></span>';
    newTopMenuContent += '<span class="icon-bar"></span>';
    newTopMenuContent += '<span class="icon-bar"></span>';
    newTopMenuContent += '</a>';
    newTopMenuContent += '<a class="brand" href="#">a.h Redmine</a>';
    newTopMenuContent += '<div class="nav-collapse">';
    newTopMenuContent += $topMenuContent;
    newTopMenuContent += '</div></div></div>';
    $topMenu.html(newTopMenuContent);
    $('.nav-collapse').find('ul').addClass('nav');
}

/**
 * Customize the search query form to use bootstrap form properties
 */
function ahCustomizeSearchForm() {
    // Use Bootstrap search form layout
    var $queryForm = $('#quick-search form');
    $queryForm.addClass('form-search');
    $queryForm.find('input[type="text"]').addClass('search-query').attr('placeholder', 'Search...'); // use rounded corner
    $queryForm.find('label').addClass('hidden'); // hide label
}


/**
 * Rebuild the main menu to use a bootstrap pills responsive navbar
 */
function ahRebuildMainMenu() {
    $mainMenu.addClass('subnav');
    var $mainMenuContent = $mainMenu.html();
    var newMainMenuContent = '<div class="row-fluid">';
    newMainMenuContent += $mainMenuContent;
    newMainMenuContent += '</div>';
    $mainMenu.html(newMainMenuContent);
    $mainMenu.find('ul:first').addClass('nav nav-pills clearfix');

}

$(document).ready(function () {

    /***** Customize the layout to use Bootstrap *****/
    ahSetFluidLayout();
    ahRebuildTopMenu();
    ahCustomizeSearchForm();
    ahRebuildMainMenu();
});

$win.on('scroll', ahMainMenuScroll);

