var Mash=function(){function a(a){for(var b={},c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");b[e[0]]=e[1]}return b}var b={},c={};return c.loadTemplate=function(a,c,d){a in b&&!d?c&&"function"==typeof c&&c(b[a]):$.get(a,function(d){Mustache.parse(d),b[a]=d,c&&"function"==typeof c&&c(d)})},c.loadAndRender=function(a,b,d,e){c.loadTemplate(a,function(a){var c=Mustache.render(a,b);d&&"function"==typeof d&&d(c)},e)},c.getUrlParams=function(a){for(var b=window.location.search.substring(1),c=b.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(e[0]==a)return e[1]}},c.editUrlParams=function(b,c){b=encodeURI(b);var d=window.location.search.substr(1),e=null!==d&&""!==d?a(d):{};return 0===Object.keys(e).length?c!==!1?"?"+b+"="+encodeURI(c):"":(c!==!1?e[b]=encodeURI(c):delete e[b],0===Object.keys(e).length?"":"?"+$.map(e,function(a,b){return b+"="+a}).join("&"))},c.isPathAbsolute=function(a){return/^(?:\/|[a-z]+:\/\/)/.test(a)},c.getAbsoluteUrl=function(a){var b=document.createElement("a");return b.href=a,a=b.href},c.showFloat=function(){$(".float_view").addClass("show")},c.hideFloat=function(){$(".float_view").removeClass("show")},c}();window.Mash=Mash,window._M=Mash,function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(){"use strict";$(function(){var a=window.History,b=!1;if(!a.enabled)return!1;var c=$("#ajax-container");a.Adapter.bind(window,"statechange",function(){var d=a.getState();$.get(d.url,function(a){var d=$(a),e=$("#ajax-container",d).contents();document.title=d.filter("title").text(),c.fadeOut(500,function(){c.html(e),c.fadeIn(),b=!1,NProgress.done()})})}),$("body").on("click",".js-ajax-links",function(c){if(c.preventDefault(),b===!1){var d=$(this).attr("href"),e=a.getState(),f=$(this).attr("title")||" ";d=_M.getAbsoluteUrl(d),d.replace(/\/$/,"")!==e.url.replace(/\/$/,"")&&(b=!0,NProgress.start(),a.pushState({},f,d))}})})},{}]},{},[1]);