// build time:Sun Mar 10 2019 04:06:26 GMT+0800 (中国标准时间)
$(document).ready(function(){var e=$(".sidebar-inner"),t=CONFIG.sidebar.offset||12;function i(){var i,o,a,f=$(".header-inner").height()+t,n=(i=$("#footer"),o=$(".footer-inner"),a=i.outerHeight()-o.outerHeight(),i.outerHeight()+a);f+($("#sidebar").height()+NexT.utils.getSidebarb2tHeight())<$("#content").height()&&(e.affix({offset:{top:f-t,bottom:n}}),e.affix("checkPosition")),$("#sidebar").css({"margin-top":f,"margin-left":"auto"})}i(),window.matchMedia("(min-width: 992px)").addListener(function(t){t.matches&&($(window).off(".affix"),e.removeData("bs.affix").removeClass("affix affix-top affix-bottom"),i())})});
//rebuild by neat 