﻿/* http://keith-wood.name/calendars.html
   Farsi/Persian localisation for Islamic calendar for jQuery v2.0.0.
   Written by Keith Wood (kbwood{at}iinet.com.au) August 2009. */
// (function($) {
// 	$.calendars.calendars.islamic.prototype.regionalOptions['fa'] = {
// 		name: 'Islamic',
// 		epochs: ['BAM', 'AM'],
// 		monthNames: ['محرّم', 'صفر', 'ربيع الأول', 'ربيع الآخر أو ربيع الثاني', 'جمادى الاول', 'جمادى الآخر أو جمادى الثاني',
// 		'رجب', 'شعبان', 'رمضان', 'شوّال', 'ذو القعدة', 'ذو الحجة'],
// 		monthNamesShort: ['محرّم', 'صفر', 'ربيع الأول', 'ربيع الآخر أو ربيع الثاني', 'جمادى الاول', 'جمادى الآخر أو جمادى الثاني',
// 		'رجب', 'شعبان', 'رمضان', 'شوّال', 'ذو القعدة', 'ذو الحجة'],
// 		dayNames: ['يوم الأحد', 'يوم الإثنين', 'يوم الثلاثاء', 'يوم الأربعاء', 'يوم الخميس', 'يوم الجمعة', 'يوم السبت'],
// 		dayNamesShort: ['يوم الأحد', 'يوم الإثنين', 'يوم الثلاثاء', 'يوم الأربعاء', 'يوم الخميس', 'يوم الجمعة', 'يوم السبت'],
// 		dayNamesMin: ['يوم الأحد', 'يوم الإثنين', 'يوم الثلاثاء', 'يوم الأربعاء', 'يوم الخميس', 'يوم الجمعة', 'يوم السبت'],
// 		dateFormat: 'yyyy/mm/dd',
// 		firstDay: 6,
// 		isRTL: true
// 	};
// })(jQuery);


(function ($) { $.fn.datepicker.language['fa','ps'] = {
    days:  ['يکشنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنجشنبه','جمعه','شنبه'],
    daysShort: ['ي','د','س','چ','پ','ج', 'ش'],
    daysMin: ['ي','د','س','چ','پ','ج', 'ش'],
	months: ['حمل', 'ثور', 'جوزا', 'سرطان', 'اسد', 'سنبله', 'میزان', 'عقرب', 'قوس', 'جدی', 'دلو', 'حوت'],
	monthsShort: ['حمل', 'ثور', 'جوزا', 'سرطان', 'اسد', 'سنب', 'میز', 'عقرب', 'قوس', 'جدی', 'دلو', 'حوت'],
    today: 'امروز',
    clear: 'پاک',
    dateFormat: 'dd.mm.yyyy',
    timeFormat: 'hh:ii',
    firstDay: 6,
	isRTL: true
};
 })(jQuery);