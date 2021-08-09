/*!
 * ArasJoomla Helper 
 *
 * Copyright 2014-2017, ArasJoomla
 * http://arasjoomla.ir
 * arasjoomla@gmail.com
 */
 jQuery.browser = {};
(function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)){
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();

function acfilter_jalali_to_gregorian(jy,jm,jd,arascode='-'){
	gy=(jy<=979)?621:1600;
	jy-=(jy<=979)?0:979;
	days=(365*jy) +((parseInt(jy/33))*8) +(parseInt(((jy%33)+3)/4)) +78 +jd +((jm<7)?(jm-1)*31:((jm-7)*30)+186);
	gy+=400*(parseInt(days/146097));
	days%=146097;
	if(days > 36524){
	gy+=100*(parseInt(--days/36524));
	days%=36524;
	if(days >= 365)days++;
	}
	gy+=4*(parseInt((days)/1461));
	days%=1461;
	gy+=parseInt((days-1)/365);
	if(days > 365)days=(days-1)%365;
	gd=days+1;
	sal_a=[0,31,((gy%4==0 && gy%100!=0) || (gy%400==0))?29:28,31,30,31,30,31,31,30,31,30,31];
	for(gm=0;gm<13;gm++){
	v=sal_a[gm];
	if(gd <= v)break;
	gd-=v;
	}
	if(gm<10) gm = '0'+gm;
	if(gd<10) gd = '0'+gd;
	return gy+arascode+gm+arascode+gd;  
}

function setInputDate(value){
        var arasjoomlaData = value.split("-");
        return acfilter_jalali_to_gregorian(parseInt(arasjoomlaData[0]),parseInt(arasjoomlaData[1]),parseInt(arasjoomlaData[2]));

}

function nicePrint() {
    for (var i in arguments) {
        document.write("<pre>");
        var temp = arguments[i];
        if (typeof temp == "object") {
            document.write("{ ")
            for (var j in temp) {
                document.write(j + ":" + temp[j]);
                if (j != temp.length - 1) {
                    document.write(" , ");
                }
            }
            document.write(" }")
        } else {
            document.write(temp + " &nbsp; &nbsp; ");
        }
        document.write("</pre>");
    }
    
}

