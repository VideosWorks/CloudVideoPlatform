!function(a,b){"function"==typeof define&&define.amd?define(["is"],function(c){return a.is=b(c)}):"object"==typeof exports?module.exports=b(require("is_js")):a.is=b(a.is)}(this,function(a){function b(a){return function(){return!a.apply(null,j.call(arguments))}}function c(b){return function(){var c=j.call(arguments),d=c.length;1===d&&a.array(c[0])&&(c=c[0],d=c.length);for(var e=0;d>e;e++)if(!b.call(null,c[e]))return!1;return!0}}function d(b){return function(){var c=j.call(arguments),d=c.length;1===d&&a.array(c[0])&&(c=c[0],d=c.length);for(var e=0;d>e;e++)if(b.call(null,c[e]))return!0;return!1}}function e(b,c){a[b]=function(a){return c[b].test(a)}}function f(){var e=a;for(var f in e)if(k.call(e,f)&&a["function"](e[f]))for(var g=e[f].api||["not","all","any"],h=0;h<g.length;h++)"not"===g[h]&&(a.not[f]=b(a[f])),"all"===g[h]&&(a.all[f]=c(a[f])),"any"===g[h]&&(a.any[f]=d(a[f]))}var g=this||global,h=g.is;a={},a.VERSION="0.7.4",a.not={},a.all={},a.any={};var i=Object.prototype.toString,j=Array.prototype.slice,k=Object.prototype.hasOwnProperty;a.arguments=function(b){return a.not["null"](b)&&("[object Arguments]"===i.call(b)||"object"==typeof b&&"callee"in b)},a.array=Array.isArray||function(a){return"[object Array]"===i.call(a)},a["boolean"]=function(a){return a===!0||a===!1||"[object Boolean]"===i.call(a)},a.date=function(a){return"[object Date]"===i.call(a)},a.error=function(a){return"[object Error]"===i.call(a)},a["function"]=function(a){return"[object Function]"===i.call(a)||"function"==typeof a},a.nan=function(a){return a!==a},a["null"]=function(a){return null===a},a.number=function(b){return a.not.nan(b)&&"[object Number]"===i.call(b)},a.object=function(a){var b=typeof a;return"function"===b||"object"===b&&!!a},a.json=function(a){return"[object Object]"===i.call(a)},a.regexp=function(a){return"[object RegExp]"===i.call(a)},a.sameType=function(b,c){return a.nan(b)||a.nan(c)?a.nan(b)===a.nan(c):i.call(b)===i.call(c)},a.sameType.api=["not"],a.string=function(a){return"[object String]"===i.call(a)},a["char"]=function(b){return a.string(b)&&1===b.length},a.undefined=function(a){return void 0===a},a.empty=function(b){if(a.object(b)){var c=Object.getOwnPropertyNames(b).length;return 0===c||1===c&&a.array(b)||2===c&&a.arguments(b)?!0:!1}return""===b},a.existy=function(a){return null!==a&&void 0!==a},a.truthy=function(b){return a.existy(b)&&b!==!1&&a.not.nan(b)&&""!==b&&0!==b},a.falsy=b(a.truthy),a.space=function(b){if(a["char"](b)){var c=b.charCodeAt(0);return c>8&&14>c||32===c}return!1},a.equal=function(b,c){return a.all.number(b,c)?b===c&&1/b===1/c:a.all.string(b,c)||a.all.regexp(b,c)?""+b==""+c:a.all["boolean"](b,c)?b===c:!1},a.equal.api=["not"],a.even=function(b){return a.number(b)&&b%2===0},a.odd=function(b){return a.number(b)&&b%2!==0},a.positive=function(b){return a.number(b)&&b>0},a.negative=function(b){return a.number(b)&&0>b},a.above=function(b,c){return a.all.number(b,c)&&b>c},a.above.api=["not"],a.under=function(b,c){return a.all.number(b,c)&&c>b},a.under.api=["not"],a.within=function(b,c,d){return a.all.number(b,c,d)&&b>c&&d>b},a.within.api=["not"],a.decimal=function(b){return a.number(b)&&b%1!==0},a.integer=function(b){return a.number(b)&&b%1===0},a.finite=isFinite||function(b){return b!==1/0&&b!==-(1/0)&&a.not.nan(b)},a.infinite=b(a.finite);var l={url:/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,creditCard:/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,alphaNumeric:/^[A-Za-z0-9]+$/,timeString:/^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,dateString:/^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,usZipCode:/^[0-9]{5}(?:-[0-9]{4})?$/,caPostalCode:/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,ukPostCode:/^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,nanpPhone:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,eppPhone:/^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,socialSecurityNumber:/^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,affirmative:/^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,hexadecimal:/^[0-9a-fA-F]+$/,hexColor:/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,ipv4:/^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,ipv6:/^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,ip:/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/};for(var m in l)l.hasOwnProperty(m)&&e(m,l);a.include=function(a,b){return a.indexOf(b)>-1},a.include.api=["not"],a.upperCase=function(b){return a.string(b)&&b===b.toUpperCase()},a.lowerCase=function(b){return a.string(b)&&b===b.toLowerCase()},a.startWith=function(b,c){return a.string(b)&&0===b.indexOf(c)},a.startWith.api=["not"],a.endWith=function(b,c){return a.string(b)&&b.indexOf(c)>-1&&b.indexOf(c)===b.length-c.length},a.endWith.api=["not"],a.capitalized=function(b){if(a.not.string(b))return!1;for(var c=b.split(" "),d=[],e=0;e<c.length;e++)d.push(c[e][0]===c[e][0].toUpperCase());return a.all.truthy.apply(null,d)},a.palindrome=function(b){return a.string(b)&&b==b.split("").reverse().join("")};var n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=["january","february","march","april","may","june","july","august","september","october","november","december"];if(a.today=function(b){var c=new Date,d=c.toDateString();return a.date(b)&&b.toDateString()===d},a.yesterday=function(b){var c=new Date,d=new Date(c.setDate(c.getDate()-1)).toDateString();return a.date(b)&&b.toDateString()===d},a.tomorrow=function(b){var c=new Date,d=new Date(c.setDate(c.getDate()+1)).toDateString();return a.date(b)&&b.toDateString()===d},a.past=function(b){var c=new Date;return a.date(b)&&b.getTime()<c.getTime()},a.future=b(a.past),a.day=function(b,c){return a.date(b)&&c.toLowerCase()===n[b.getDay()]},a.day.api=["not"],a.month=function(b,c){return a.date(b)&&c.toLowerCase()===o[b.getMonth()]},a.month.api=["not"],a.year=function(b,c){return a.date(b)&&a.number(c)&&c===b.getFullYear()},a.year.api=["not"],a.leapYear=function(b){return a.number(b)&&(b%4===0&&b%100!==0||b%400===0)},a.weekend=function(b){return a.date(b)&&(6===b.getDay()||0===b.getDay())},a.weekday=b(a.weekend),a.inDateRange=function(b,c,d){if(a.not.date(b)||a.not.date(c)||a.not.date(d))return!1;var e=b.getTime(),f=c.getTime(),g=d.getTime();return e>f&&g>e},a.inDateRange.api=["not"],a.inLastWeek=function(b){return a.inDateRange(b,new Date((new Date).setDate((new Date).getDate()-7)),new Date)},a.inLastMonth=function(b){return a.inDateRange(b,new Date((new Date).setMonth((new Date).getMonth()-1)),new Date)},a.inLastYear=function(b){return a.inDateRange(b,new Date((new Date).setFullYear((new Date).getFullYear()-1)),new Date)},a.inNextWeek=function(b){return a.inDateRange(b,new Date,new Date((new Date).setDate((new Date).getDate()+7)))},a.inNextMonth=function(b){return a.inDateRange(b,new Date,new Date((new Date).setMonth((new Date).getMonth()+1)))},a.inNextYear=function(b){return a.inDateRange(b,new Date,new Date((new Date).setFullYear((new Date).getFullYear()+1)))},a.quarterOfYear=function(b,c){return a.date(b)&&a.number(c)&&c===Math.floor((b.getMonth()+3)/3)},a.quarterOfYear.api=["not"],a.dayLightSavingTime=function(a){var b=new Date(a.getFullYear(),0,1),c=new Date(a.getFullYear(),6,1),d=Math.max(b.getTimezoneOffset(),c.getTimezoneOffset());return a.getTimezoneOffset()<d},"undefined"!=typeof window){var p="navigator"in window&&"userAgent"in navigator&&navigator.userAgent.toLowerCase()||"",q="navigator"in window&&"vendor"in navigator&&navigator.vendor.toLowerCase()||"",r="navigator"in window&&"appVersion"in navigator&&navigator.appVersion.toLowerCase()||"";a.chrome=function(){return/chrome|chromium/i.test(p)&&/google inc/.test(q)},a.chrome.api=["not"],a.firefox=function(){return/firefox/i.test(p)},a.firefox.api=["not"],a.ie=function(a){return a?a>=11?"ActiveXObject"in window:new RegExp("msie "+a).test(p):/msie/i.test(p)||"ActiveXObject"in window},a.ie.api=["not"],a.opera=function(){return/^Opera\//.test(p)||/\x20OPR\//.test(p)},a.opera.api=["not"],a.safari=function(){return/safari/i.test(p)&&/apple computer/i.test(q)},a.safari.api=["not"],a.ios=function(){return a.iphone()||a.ipad()||a.ipod()},a.ios.api=["not"],a.iphone=function(){return/iphone/i.test(p)},a.iphone.api=["not"],a.ipad=function(){return/ipad/i.test(p)},a.ipad.api=["not"],a.ipod=function(){return/ipod/i.test(p)},a.ipod.api=["not"],a.android=function(){return/android/i.test(p)},a.android.api=["not"],a.androidPhone=function(){return/android/i.test(p)&&/mobile/i.test(p)},a.androidPhone.api=["not"],a.androidTablet=function(){return/android/i.test(p)&&!/mobile/i.test(p)},a.androidTablet.api=["not"],a.blackberry=function(){return/blackberry/i.test(p)||/BB10/i.test(p)},a.blackberry.api=["not"],a.desktop=function(){return a.not.mobile()&&a.not.tablet()},a.desktop.api=["not"],a.linux=function(){return/linux/i.test(r)},a.linux.api=["not"],a.mac=function(){return/mac/i.test(r)},a.mac.api=["not"],a.windows=function(){return/win/i.test(r)},a.windows.api=["not"],a.windowsPhone=function(){return a.windows()&&/phone/i.test(p)},a.windowsPhone.api=["not"],a.windowsTablet=function(){return a.windows()&&a.not.windowsPhone()&&/touch/i.test(p)},a.windowsTablet.api=["not"],a.mobile=function(){return a.iphone()||a.ipod()||a.androidPhone()||a.blackberry()||a.windowsPhone()},a.mobile.api=["not"],a.tablet=function(){return a.ipad()||a.androidTablet()||a.windowsTablet()},a.tablet.api=["not"],a.online=function(){return navigator.onLine},a.online.api=["not"],a.offline=b(a.online),a.offline.api=["not"],a.touchDevice=function(){return"ontouchstart"in window||"DocumentTouch"in window&&document instanceof DocumentTouch},a.touchDevice.api=["not"]}return a.propertyCount=function(b,c){if(!a.object(b)||!a.number(c))return!1;if(Object.keys)return Object.keys(b).length===c;var d,e=[];for(d in b)k.call(b,d)&&e.push(d);return e.length===c},a.propertyCount.api=["not"],a.propertyDefined=function(b,c){return a.object(b)&&a.string(c)&&c in b},a.propertyDefined.api=["not"],a.windowObject=function(a){return"object"==typeof a&&"setInterval"in a},a.domNode=function(b){return a.object(b)&&b.nodeType>0},a.inArray=function(b,c){if(a.not.array(c))return!1;for(var d=0;d<c.length;d++)if(c[d]===b)return!0;return!1},a.inArray.api=["not"],a.sorted=function(b){if(a.not.array(b))return!1;for(var c=0;c<b.length;c++)if(b[c]>b[c+1])return!1;return!0},f(),a.setRegexp=function(a,b){for(var c in l)k.call(l,c)&&b===c&&(l[c]=a)},a.setNamespace=function(){return g.is=h,this},a});