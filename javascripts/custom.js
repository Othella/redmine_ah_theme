/**
 * Add classes to use bootstrap fluid layout
 */function ahSetFluidLayout(){$("#wrapper").addClass("row-fluid")}function ahRebuildTopMenu(){var e=$("#top-menu"),t=e.html();e.addClass("navbar navbar-fixed-top");var n='<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">';n+='<span class="icon-bar"></span>';n+='<span class="icon-bar"></span>';n+='<span class="icon-bar"></span>';n+="</a>";n+='<a class="brand" href="#">a.h Redmine</a>';e.empty();e.append(n);e.append('<div class="nav-collapse">'+t+"</div>");e.wrapInner('<div class="row-fluid"/>');e.wrapInner('<div class="container-fluid"/>');$(".nav-collapse").find("ul").addClass("nav")}function ahRebuildHeader(){var e=$("#header"),t=e.children("h1"),n=$("#quick-search"),r=$("#main-menu");e.empty();e.append(t);e.append(n);e.append(r);e.wrapInner('<div class="row-fluid"/>');e.wrapInner('<div class="container-fluid"/>');t.wrap('<div class="span8 pull-left"/>');n.wrap('<div class="span4 pull-right"/>');r.wrap('<div class="row-fluid pull-left"/>');r.children("ul").addClass("nav nav-pills clearfix");var i=n.children("form");i.addClass("form-search");i.find('input[type="text"]').addClass("search-query").attr("placeholder","Search...");i.find("label").addClass("hidden")}function ahCustomizeMain(){var e=$("#main"),t=$("#content"),n=$("#sidebar");e.empty();e.append(t);e.append(n);e.wrapInner('<div class="span12"/>');e.wrapInner('<div class="row-fluid"/>');e.wrapInner('<div class="container-fluid"/>');if(!e.hasClass("nosidebar")){t.addClass("span9");n.addClass("span3")}t.wrapInner('<div class="row-fluid"></div>');t.find(".splitcontentleft, .splitcontentright").addClass("span6");t.find(".row-fluid").children('[class*="span"]').first().addClass("noleftmargin")}function ahInjectClasses(){$(".box").addClass("well");$('input[type="submit"]').addClass("btn")}function ahCustomizeMisc(){$("#top-menu .help").attr("target","_blank")}$(document).ready(function(){ahSetFluidLayout();ahRebuildTopMenu();ahRebuildHeader();ahCustomizeMain();ahInjectClasses();ahCustomizeMisc()});