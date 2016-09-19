(function() {
    // body...
    'use strict';
    var bodyWidth;
    var bannerWrapper3dX;
    var banner = document.getElementsByClassName('banner-item');
    var dash = document.getElementsByClassName('dashnav-item');
    var dashprogress = document.getElementsByClassName('dashnav-progress');
    var autoplayX;
    var autoTime = 1500;
    var bannerWrapper = document.getElementsByClassName('banner-wrapper')[0];
    var l = banner.length;
    var index = 0;
    var previous = document.getElementById('previous');
    var next = document.getElementById('next');

    var initTransform = function() {
        bodyWidth = document.body.clientWidth;

        return bodyWidth;
    }

    initTransform();

    for (var i = 0; i < l; i++) {
        var bannerTrans = bodyWidth * i + 'px';
        banner[i].style.transform = 'translate3d(' + bannerTrans + ',0,0)';
    }

    // bannerWrapper3dX = -(l - 1) * bodyWidth + 'px';
    bannerWrapper.style.transform = 'translate3d(0,0,0)';
    //auto playing
    var dashN = 0;
    var dashIndex = dash.length;
    var dashauto = setInterval(function() {
        if (dashN === l) {
            dashN = 0;
            for(var i = 0; i <dashIndex; i++) {
                dash[i].className = dash[i].className.replace( /(?:^|\s)current(?!\S)/g,'');
                dashprogress[i].style.transform = 'scaleX(0)';
            }
            var dash0 = setTimeout(function(){
                dash[dashN].className += " current";
                dashprogress[dashN].style.transform = 'scaleX(1)';
                dashN++;
            },400);
        }else{
            clearTimeout(dash0);
            dash[dashN].className += " current";
            dashprogress[dashN].style.transform = 'scaleX(1)';
            dashN++;
        }
    }, autoTime);

    var bannerplay = function(){
        autoplayX = -index * bodyWidth + 'px';
        if (index % l === 0 && index !==0) {
            var n = index / l * 4;
            for (var i = 0; i < l; i++) {
                var nWidth = bodyWidth * n;
                var bannerTrans = bodyWidth * i + nWidth + 'px';
                banner[i].style.transform = 'translate3d(' + bannerTrans + ',0,0)';
            }
            // return;
        }
        index++;
        bannerWrapper.style.transform = 'translate3d(' + autoplayX + ',0,0)';
    };

    var backplay = function(){
        autoplayX = -index * bodyWidth + 'px';
        if (index % l === 0 && index !==0) {
            var n = index / l * 4;
            for (var i = 0; i < l; i++) {
                var nWidth = bodyWidth * n;
                var bannerTrans = bodyWidth * (l-i-1) + nWidth + 'px';

                banner[i].style.transform = 'translate3d(' + bannerTrans + ',0,0)';
            }
            // return;
        }
        index--;
        if (index < 0) {
             bannerWrapper.style.transform = 'translate3d(' + -autoplayX + ',0,0)';
        }

        bannerWrapper.style.transform = 'translate3d(' + autoplayX + ',0,0)';

    };

    var autoplay = setInterval(function() {
        bannerplay();
    }, autoTime);




    // autoplay();

    var initauto = setInterval(function() {
        initTransform();

    }, 200);

    previous.addEventListener('click',function(){
        for(var i = 0; i <dashIndex; i++) {
            dash[i].className = dash[i].className.replace( /(?:^|\s)current(?!\S)/g,'');
            dashprogress[i].style.transform = 'scaleX(0)';
        }
        clearInterval(autoplay);
        clearInterval(dashauto);
        // bannerplay();
    })

    next.addEventListener('click',function(){
        for(var i = 0; i <dashIndex; i++) {
            dash[i].className = dash[i].className.replace( /(?:^|\s)current(?!\S)/g,'');
            dashprogress[i].style.transform = 'scaleX(0)';
        }
        clearInterval(autoplay);
        clearInterval(dashauto);
        bannerplay();
    })




    // var getChildNodes = function(ele) {
    //    var childArr= ele.children || ele.childNodes;
    //     var childArrTem = new Array();
    //     for (var i = 0, len = childArr.length; i < len; i++) {
    //         if (childArr[i].nodeType == 1 && childArr[i].nodeName !== "#text" && childArr[i].nodeValue !== null ) {
    //             childArrTem.push(childArr[i]);
    //         }
    //     }
    //     return childArrTem;
    // }
})()
