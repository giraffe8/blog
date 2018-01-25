$(function(){
    Time.install();
});

Time = {
    counter:0,
    install:function(){
        this.setSeconds();
        this.setMinutes();
        this.setHours();
        this.setAnimation();
    },
    setSeconds:function(){
        setInterval(function(){
            var seconds = new Date().getSeconds();
            var sdegree = seconds * 6;
            var srotate = "rotate(" + sdegree + "deg)";
            $('.second').css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
        },1000);
    },
    setMinutes:function(){
        setInterval(function(){
            var mins = new Date().getMinutes();
            var mdegree = mins * 6;
            var mrotate = "rotate(" + mdegree + "deg)";
            $('.minute').css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});
        },1000);
    },
    setHours:function(){
        setInterval(function(){
            var hours = new Date().getHours();
            var mins = new Date().getMinutes();
            var hdegree = hours * 30 + (mins / 2);
            var hrotate = "rotate(" + hdegree + "deg)";
            $('.hour').css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
        },1000);
    },
    setAnimation:function(){
        setInterval(function(){
            if(Time.counter==10){
                $('.time-wrap').removeClass('zoomIn').addClass('zoomOut');
                $('.time-wrap').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',function(){
                    $('.time-wrap').hide();
                });
            }
            if(Time.counter==1){
                $('.time-wrap').show();
                $('.time-wrap').removeClass('zoomOut').addClass('zoomIn');
                $('.time-wrap').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',function(){
                    $('.time-wrap').show();
                });
            }
            if(Time.counter==10)Time.counter=0;

            Time.counter+=1;
        },1000);
    }
}