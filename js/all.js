$(document).ready(function () {
    var showSkill = false;
    //點擊選單滑動
    $('.scrollTop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html, body').animate({ scrollTop: targetPos }, 1000);
    });




    $(window).scroll(function () {
        //視窗焦點
        var scrollPos = $(window).scrollTop();
        //視窗高度
        var windowHeight = $(window).height();
        //console.log(wondowHeight);  
        //滑動加入class      
        $('.scrollTop').each(function () {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                $('.scrollTop').removeClass('active')
                $(this).addClass('active');
            } else {
                $(this).removeClass('active')
            }
        });

        //進度調動畫        
        var skillTop = $('#skills').position().top;
        if (skillTop <= (scrollPos + windowHeight / 2) && !showSkill) {
            showSkill = true;
            $('#skills .progress-bar').each(function () {
                var thisValue = $(this).data('progress');
                $(this).css('width', thisValue + '%');
                //console.log(thisValue)
            });
        }
        //滑動套用CSS效果
        $('.animoted').each(function () {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });
        //背景滑動
        $('#profiles').css('background-position-y', -(scrollPos / 2) + 'px')
        $('#header-ele').css('transform', 'translateY( ' + (scrollPos / 2) + 'px )')
    });
});