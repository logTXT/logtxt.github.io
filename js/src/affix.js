// build time:Sat Mar 09 2019 16:46:38 GMT+0800 (中国标准时间)
!function(t){"use strict";var e=function(i,o){this.options=t.extend({},e.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(i),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(i){return this.each(function(){var o=t(this),f=o.data("bs.affix"),n="object"==typeof i&&i;f||o.data("bs.affix",f=new e(this,n)),"string"==typeof i&&f[i]()})}e.VERSION="3.3.5",e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0,target:window},e.prototype.getState=function(t,e,i,o){var f=this.$target.scrollTop(),n=this.$element.offset(),s=this.$target.height();if(null!=i&&"top"===this.affixed)return f<i&&"top";if("bottom"===this.affixed)return null!=i?!(f+this.unpin<=n.top)&&"bottom":!(f+s<=t-o)&&"bottom";var a=null==this.affixed,h=a?f:n.top;return null!=i&&f<=i?"top":null!=o&&h+(a?s:e)>=t-o&&"bottom"},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$target.scrollTop(),i=this.$element.offset();return this.pinnedOffset=i.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var i=this.$element.height(),o=this.options.offset,f=o.top,n=o.bottom,s=Math.max(t(document).height(),t(document.body).height());"object"!=typeof o&&(n=f=o),"function"==typeof f&&(f=o.top(this.$element)),"function"==typeof n&&(n=o.bottom(this.$element));var a=this.getState(s,i,f,n);if(this.affixed!==a){null!=this.unpin&&this.$element.css("top","");var h="affix"+(a?"-"+a:""),r=new t.Event(h+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"===a?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(h).trigger(h.replace("affix","affixed")+".bs.affix")}"bottom"===a&&this.$element.offset({top:s-i-n})}};var o=t.fn.affix;t.fn.affix=i,t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),o=e.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),i.call(e,o)})})}(jQuery);
//rebuild by neat 