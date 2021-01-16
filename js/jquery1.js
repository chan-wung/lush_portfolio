$(function(){


    /*section3*/
    var autoSwap = setInterval(swap,3000);
    $('ul,span').hover(
        function(){
            clearInterval(autoSwap);
        },
        function(){
            autoSwap = setInterval(swap,3000);
        });

    var itemCount =$('.section03-inner-wrap .display-wrap .display ul >li').length;


    function swap(action){
        var direction = action;

        if(direction == 'counter-clockwise'){

            console.log('---- counter-clockwise ----');
            var leftitem = $('.left-pos').attr('id') - 1;
            console.log('leftitem : ',leftitem);
            if(leftitem === 0){
                leftitem = itemCount;
            }
            $('.right-pos').removeClass('right-pos').addClass('back-pos');
            $('.main-pos').removeClass('main-pos').addClass('right-pos');
            $('.left-pos').removeClass('left-pos').addClass('main-pos');
            $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');


        }
        else{
            console.log('---- clockwise ----');
            var rightitem = parseInt($('.right-pos').attr('id')) +1;
            console.log('rightitem :',rightitem);

            if(rightitem > itemCount){
                rightitem = 1;
            }

            $('.left-pos').removeClass('left-pos').addClass('back-pos');
            $('.main-pos').removeClass('main-pos').addClass('left-pos');
            $('.right-pos').removeClass('right-pos').addClass('main-pos');
            $('#'+rightitem+'').removeClass('back-pos').addClass('right-pos');

        }
    }




   $('.display-after').click(function(){
       swap('clockwise');
   }) ;
    $('.display-before').click(function(){
            swap('counter-clockwise');
        });





})
