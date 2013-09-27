/*
 * Embedly JQuery v2.2.0
 * http://github.com/embedly/embedly-jquery
 *
 */
(function(c){window.embedlyURLre=/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;c.embedly=c.embedly||{};c.embedly.version||(c.extend({embedly:function(d,g,k){var m=[],l="http://api.embed.ly/",a;g=g?g:{};a=c.extend({},c.embedly.defaults,g);a.urlRe||(a.urlRe=window.embedlyURLre);"string"===typeof d&&(d=Array(d));"undefined"!==typeof k&&(a.success=k);a.secure&&(l="https://api.embed.ly/");a.success||(a.success=function(b,d){var e,p=c(d.node);if(!b)return null;if("replace"===
(e=a.method))return p.replaceWith(b.code);if("after"===e)return p.after(b.code);if("afterParent"===e)return p.parent().after(b.code);if("replaceParent"===e)return p.parent().replaceWith(b.code)});a.error||(a.error=function(a,c){});var r=function(b){b="urls="+b;a.maxWidth?b+="&maxwidth="+a.maxWidth:"undefined"!==typeof dimensions&&(b+="&maxwidth="+dimensions.width);a.maxHeight&&(b+="&maxheight="+a.maxHeight);a.chars&&(b+="&chars="+a.chars);a.words&&(b+="&words="+a.words);a.secure&&(b+="&secure=true");
a.frame&&(b+="&frame=true");b+="&wmode="+a.wmode;"string"===typeof a.key&&(b+="&key="+a.key);if("string"===typeof a.autoplay||"boolean"===typeof a.autoplay)b+="&autoplay="+a.autoplay;a.width&&(b+="&width="+a.width);return b},s=function(){if("string"===typeof a.key){if(0<=a.endpoint.search(/objectify/i))return l+"2/objectify";if(0<=a.endpoint.search(/preview/i))return l+"1/preview"}return l+"1/oembed"},q=function(){var b=[];a.addImageStyles&&(a.maxWidth&&(units=isNaN(parseInt(a.maxWidth,10))?"":"px",
b.push("max-width: "+a.maxWidth+units)),a.maxHeight&&(units=isNaN(parseInt(a.maxHeight,10))?"":"px",b.push("max-height: "+a.maxHeight+units)));return b.join(";")};g=function(b){var d,e;d=c.map(b,function(a,b){0===b&&null!==a.node&&(e=c(a.node),e.parent().width(),e.parent().height());return encodeURIComponent(a.url)}).join(",");c.ajax({url:s(),dataType:"jsonp",data:r(d),success:function(d){return c.each(d,function(d,f){var e;if("error"!==f.type){e=b[d];if("oembed"===a.endpoint){var g,h,k,l;"photo"===
(g=f.type)?(h=f.title||"",h="<a href='"+e.url+"' target='_blank'><img style='"+q()+"' src='"+f.url+"' alt='"+h+"' /></a>"):"video"===g?h=f.html:"rich"===g?h=f.html:(h=f.title||e.url,k=f.thumbnail_url?"<img src='"+f.thumbnail_url+"' class='thumb' style='"+q()+"'/>":"",l=f.description?'<div class="description">'+f.description+"</div>":"",g=f.provider_name?"<a href='"+f.provider_url+"' class='provider'>"+f.provider_name+"</a>":"",h=k+"<a href='"+e.url+"'>"+h+"</a>",h=h+g+l);a.wrapElement&&"div"===a.wrapElement&&
c.browser.msie&&9>c.browser.version&&(a.wrapElement="span");a.wrapElement&&(h="<"+a.wrapElement+' class="'+a.className+'">'+h+"</"+a.wrapElement+">");f.code=h;"undefined"!==typeof e.node&&c(e.node).data("oembed",f).trigger("embedly-oembed",[f])}e=a.success(f,e)}else e=a.error(b[d].node,f);return e})}})};c.each(d,function(b,d){var e="undefined"!==typeof a.elems?a.elems[b]:null;"undefined"===typeof e||a.urlRe.test(d)||c(e).data("oembed",!1);var g={url:d,error_code:400,error_message:"HTTP 400: Bad Request",
type:"error"};return d&&a.urlRe.test(d)?m.push({url:d,node:e}):a.error(e,g)});d=[];k=m.length;for(var n=0;0<=k?n<k:n>k;n+=20)d=d.concat(g(m.slice(n,n+20)));return a.elems?a.elems:this}}),c.embedly.version="2.2.0",c.embedly.defaults={endpoint:"oembed",secure:!1,frame:!1,wmode:"opaque",method:"replace",addImageStyles:!0,wrapElement:"div",className:"embed",elems:[]},c.fn.embedly=function(d,g){var k="undefined"!==typeof d?d:{};"undefined"!==typeof g&&(d.success=g);var m=[],l=[];this.each(function(){"undefined"!==
typeof c(this).attr("href")?(m.push(c(this).attr("href")),l.push(c(this))):c(this).find("a").each(function(){m.push(c(this).attr("href"));l.push(c(this))});k.elems=l});c.embedly(m,k);return this})})(jQuery);