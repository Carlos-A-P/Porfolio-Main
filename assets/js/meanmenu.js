/*!
* jQuery meanMenu v2.0.8
* @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
*
*/
/*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
* HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
* FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
* OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
* COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
* BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
* DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
*
* You should have received a copy of the GNU General Public License
* along with this program. If not, see <http://gnu.org/licenses/>.
*
* Find more information at http://www.meanthemes.com/plugins/meanmenu/
*
*/
!function(e){"use strict";e.fn.meanmenu=function(n){var a={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanRemoveAttrs:!1,onePage:!1,meanDisplay:"block",removeElements:""};n=e.extend(a,n);var t=window.innerWidth||document.documentElement.clientWidth;return this.each((function(){var e=n.meanMenuTarget,a=n.meanMenuContainer,r=n.meanMenuClose,i=n.meanMenuCloseSize,s=n.meanMenuOpen,u=n.meanRevealPosition,m=n.meanRevealPositionDistance,l=n.meanRevealColour,o=n.meanScreenWidth,c=n.meanNavPush,d=".meanmenu-reveal",v=n.meanShowChildren,h=n.meanExpandableChildren,y=n.meanExpand,j=n.meanRemoveAttrs,Q=n.onePage,f=n.meanDisplay,p=n.removeElements,g=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))&&(g=!0),(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var C="",w=function(){if("center"===u){var e=(window.innerWidth||document.documentElement.clientWidth)/2-22+"px";C="left:"+e+";right:auto;",g?jQuery(".meanmenu-reveal").animate({left:e}):jQuery(".meanmenu-reveal").css("left",e)}},A=!1,M=!1;"right"===u&&(C="right:"+m+";left:auto;"),"left"===u&&(C="left:"+m+";right:auto;"),w();var P="",E=function(){jQuery(".mean-bar,.mean-push").remove(),jQuery(a).removeClass("mean-container"),jQuery(e).css("display",f),A=!1,M=!1,jQuery(p).removeClass("mean-remove")},W=function(){var n="background:"+l+";color:"+l+";"+C;if(t<=o){jQuery(p).addClass("mean-remove"),M=!0,jQuery(a).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+n+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var u=jQuery(e).html();jQuery(".mean-nav").html(u),j&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each((function(){jQuery(this).is(".mean-remove")?jQuery(this).attr("class","mean-remove"):jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")})),jQuery(e).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",c),jQuery(e).hide(),jQuery(".meanmenu-reveal").show(),jQuery(d).html(s),P=jQuery(d),jQuery(".mean-nav ul").hide(),v?h?(jQuery(".mean-nav ul ul").each((function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+i+'">'+y+"</a>")})),jQuery(".mean-expand").on("click",(function(e){e.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).prev("ul").slideUp(300,(function(){})),jQuery(this).parent().removeClass("dropdown-opened")):(jQuery(this).prev("ul").slideDown(300,(function(){})),jQuery(this).parent().addClass("dropdown-opened")),jQuery(this).toggleClass("mean-clicked")}))):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),P.removeClass("meanclose"),jQuery(P).click((function(e){e.preventDefault(),!1===A?(P.css("text-align","center"),P.css("text-indent","0"),P.css("font-size",i),jQuery(".mean-nav ul:first").slideDown(),A=!0):(jQuery(".mean-nav ul:first").slideUp(),A=!1),P.toggleClass("meanclose"),jQuery(P).is(".meanmenu-reveal.meanclose")?P.html(r):P.html(s),jQuery(p).addClass("mean-remove")})),Q&&jQuery(".mean-nav ul > li > a:first-child").on("click",(function(){jQuery(".mean-nav ul:first").slideUp(),A=!1,jQuery(P).toggleClass("meanclose").html(s)}))}else E()};g||jQuery(window).resize((function(){t=window.innerWidth||document.documentElement.clientWidth,E(),t<=o?(W(),w()):E()})),jQuery(window).resize((function(){t=window.innerWidth||document.documentElement.clientWidth,g?(w(),t<=o?!1===M&&W():E()):(E(),t<=o&&(W(),w()))})),W()}))}}(jQuery);
