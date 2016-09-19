(function() {
    // body...
    'use strict';
    var bodyWidth;
    var bannerWrapper3dX;
    var banner = document.getElementsByClassName('banner-item');
    var autoplayX;
    var bannerWrapper = document.getElementsByClassName('banner-wrapper')[0];
    var l = banner.length;
    var index = 0;

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
    var autoplay = function() {

        setInterval(function() {
            autoplayX = -index * bodyWidth + 'px';

            if (index % l === 0) {
                var n = index / l * 4;
                for (var i = 0; i < l; i++) {
                    var nWidth = bodyWidth * n;
                    var bannerTrans = bodyWidth * i + nWidth + 'px';
                    banner[i].style.transform = 'translate3d(' + bannerTrans + ',0,0)';
                }
            }
            index++;
            bannerWrapper.style.transform = 'translate3d(' + autoplayX + ',0,0)';
        }, 1000);
    }

    autoplay();

    setInterval(function() {
        initTransform();

    }, 200);


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
