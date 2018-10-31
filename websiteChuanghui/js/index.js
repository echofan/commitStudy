    $('.head li').on('mouseenter',function(){
        $(this).addClass('actives_bot').siblings().removeClass('actives_bot')    
    })
    $('.head li').on('mouseenter',function(){
        $(this).find('.li_hideBox').show()
    })
    $('.head li').on('mouseleave',function(){
        $('.li_hideBox').hide()
    })
    $('.li_hideBox span').on('mouseenter',function(){
        $(this).addClass('li_hideBox_active').siblings().removeClass('li_hideBox_active')
        $(this).find('b').css('opacity',1).parent().siblings().find('b').css('opacity',0)
    })
    $('.advantage_box div img').on('mouseenter',function(){
        // $(this).css('transform','rotate(180deg)')
    })
