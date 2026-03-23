function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

var IncreaseFont = function () {
    $('#IncreaseFont').click(function () {
        var current_size_content_Node = $(".content_Node").css("font-size");
        var currentFontSizeNum = parseFloat(current_size_content_Node, 10);
        if ( ++currentFontSizeNum >= 30)
            currentFontSizeNum = 30;
        $(".content_Node").css("font-size", (currentFontSizeNum) + "px");
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        var current_size_h4 = $("h4").css("font-size");
        var currentFontSizeNum = parseFloat(current_size_h4, 10);
        if ( ++currentFontSizeNum >= 30)
            currentFontSizeNum = 30;
        $("h4").css("font-size", (currentFontSizeNum) + "px");
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        var current_size_h3 = $("h3").css("font-size");
        var currentFontSizeNum = parseFloat(current_size_h3, 10);
        if ( ++currentFontSizeNum >= 30)
            currentFontSizeNum = 30;
        $("h3").css("font-size", ( currentFontSizeNum) + "px");
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        var current_size_h2 = $("h2").css("font-size");
        var currentFontSizeNum = parseFloat(current_size_h2, 10);
        if ( ++currentFontSizeNum >= 30)
            currentFontSizeNum = 30;
        $("h2").css("font-size", ( currentFontSizeNum) + "px");
        $("h2").height((currentFontSizeNum) + "px");
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        var current_size_content_Node_li = $(".content_Node li").css("font-size");
        var currentFontSizeNum = parseFloat(current_size_content_Node_li, 10);
        if ( ++currentFontSizeNum >= 30)
            currentFontSizeNum = 30;
        $(".content_Node li").css("font-size", ( currentFontSizeNum) + "px");
		//////////////////////////////////////////////////////////////////////////////////////////////////////
        var current_size_li = $("li").css("font-size");
        var currentFontSizeNum = parseFloat(current_size_li, 10);
        if ( ++currentFontSizeNum>= 30)
            currentFontSizeNum = 30;
        $("li").css("font-size", (currentFontSizeNum) + "px");
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        var current_size_column_content = $(".column_content").height();
        var currentFontSizeNum = parseFloat(current_size_column_content, 10);
        if ( ++currentFontSizeNum >= 40)
            currentFontSizeNum = 40;
        $(".column_content").height((currentFontSizeNum) + "px");
<!--        $(".column_content").css("font-size", (currentFontSizeNum) + "px");-->
	   //////////////////////////////////////////////////////////////////////////////////////////////////////
        var content_Node_a = $(".content_Node a").css("font-size");
        var currentFontSizeNum = parseFloat(content_Node_a, 10);
        if ( ++currentFontSizeNum >= 30)
            currentFontSizeNum = 30;
        $(".content_Node a").css("font-size", (currentFontSizeNum) + "px");
  	 //////////////////////////////////////////////////////////////////////////////////////////////////////
      /*  var content_tabs_a = $("#tabs a").css("font-size");
        var currentFontSizeNum = parseFloat(content_tabs_a, 10);
        if ( ++currentFontSizeNum >= 30)
            currentFontSizeNum = 30;
        $("#tabs a").css("font-size", (currentFontSizeNum) + "px");*/

        //////////////////////////////////////////////////////////////////////////////////////////////////////

		var  value = parseInt(getCookie("FontSize"));
        if (!value) {
            value = 1;
            // and save it
            setCookie("FontSize", value, 365);
        } else {
            value = value + 1;
            //if (value > 3) value = 3;
            setCookie("FontSize", value, 365);
        }
    });
};

var DecreaseFont = function () {
    $('#DecreaseFont').click(function () {
        var current_size = $(".content_Node").css("font-size");
        var currentFontSizeNum = parseFloat(current_size, 10);
        if (Math.floor(--currentFontSizeNum) < 12)
            currentFontSizeNum = 12;
        $(".content_Node").css("font-size", currentFontSizeNum + "px");
        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        var current_size_h4 = $("h4").css("font-size");
        var currentFontSizeNum = parseFloat(current_size_h4, 10);
        if (--currentFontSizeNum < 12)
            currentFontSizeNum = 12;
        $("h4").css("font-size", ( currentFontSizeNum) + "px");
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        var current_size_h3 = $("h3").css("font-size");
        var currentFontSizeNum = parseFloat(current_size_h3, 10);
        if (--currentFontSizeNum < 12)
            currentFontSizeNum = 12;
        $("h3").css("font-size", ( currentFontSizeNum) + "px");
       //////////////////////////////////////////////////////////////////////////////////////////////////////
        var current_size_h2 = $("h2").css("font-size");
        var currentFontSizeNum = parseFloat(current_size_h2, 10);
        if (--currentFontSizeNum < 14)
            currentFontSizeNum = 14;
        $("h2").css("font-size", ( currentFontSizeNum) + "px");
		$("h2").height((currentFontSizeNum) + "px");
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        var current_size_li = $("li").css("font-size");
        var currentFontSizeNum = parseFloat(current_size_li, 10);
        if (--currentFontSizeNum < 12)
            currentFontSizeNum = 12;
        $("li").css("font-size", (currentFontSizeNum) + "px");
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        var current_size_column_content = $(".column_content").height();
        var currentFontSizeNum = parseFloat(current_size_column_content, 10);
        if (--currentFontSizeNum < 20)
            currentFontSizeNum = 20;
        $(".column_content").height(( currentFontSizeNum) + "px");
		/////////////////////////////////////////////////////////////////////////////////////////////////////
        var current_size_a = $(".content_Node a").css("font-size");
        var currentFontSizeNum = parseFloat(current_size_a, 10);
        if (--currentFontSizeNum < 12)
            currentFontSizeNum = 12;
        $(".content_Node a").css("font-size", ( currentFontSizeNum) + "px");
		/////////////////////////////////////////////////////////////////////////////////////////////////////
     /*   var content_tabs_a = $("#tabs a").css("font-size");
        var currentFontSizeNum = parseFloat(content_tabs_a, 10);
        if (--currentFontSizeNum < 12)
            currentFontSizeNum = 12;
        $("#tabs a").css("font-size", ( currentFontSizeNum) + "px");*/
        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        var value = parseInt(getCookie("FontSize"));
        if (!value)
        {
            value = -1;
            // and save it
            setCookie("FontSize", value, 365);
        } else
        {
            value = value - 1;
            //if (value < -3)
              //  value = -3;
            setCookie("FontSize", value, 365);
        }
    });
};

function WriteResult(content_div, result, maxlenght) {
    $("#" + content_div).html(result);
    $("#" + content_div).css('max-height', maxlenght);
    return true;
};

function setMaxHeight(content_div, maxlenght) {
    var maxlenghtInt = parseInt(maxlenght, 10);
    $('.content').css('max-height', maxlenght + 'px');
    return true;
};

function SetLoadingClass(content_div) {
    var content_div = $("#" + content_div);
    content_div.addClass("loading");
    return true;
};

function UnSetLoadingClass(content_div) {
    var content_div = $("#" + content_div);
    if (content_div.is(":hidden")) {
        content_div.slideToggle();
    }
    content_div.removeClass("loading");
    return true;
};

var SlideNodeFN = function () {
    $('img[id^="slide_img"]').click(function () {
        var content_div = $(this).parent().next();
        $(this).parent().parent().css({ "border": "1px #aaaaaa", "border-style": "solid " });
        if (content_div.is(":visible")) {
            //Open
            $(this).attr('src', 'images/down_win.png');
        } else {
            //Close
            $(this).attr('src', 'images/up_win.png');
        }

        $(this).parent().next().slideToggle("slow", "swing", function () {
            $(this).parent().css({ "border": "1px solid #aaaaaa" });
        });
    });
};


$(document).ready(function(){
   $('input[id^="CloseNode"]').click(function(){
	    $(this).parent().parent().remove()
	  });
	});


function WriteResult(content_div, result, maxlenght) {
    $("#" + content_div).html(result);
    $("#" + content_div).css('max-height', maxlenght);
    return true;
};

function setMaxHeight(content_div, maxlenght) {
    var maxlenghtInt = parseInt(maxlenght, 10);
    $('.content').css('max-height', maxlenght + 'px');
    return true;
};

function SetLoadingClass(content_div) {
    var content_div = $("#" + content_div);
    content_div.addClass("loading");
    return true;
};

function UnSetLoadingClass(content_div) {
    var content_div = $("#" + content_div);
    if (content_div.is(":hidden")) {
        content_div.slideToggle();
    }
    content_div.removeClass("loading");
    return true;
};

var SlideSliderFN = function () {
    window_width = ($(window).width() - 1345);
    show_container_width = 1145 + window_width;
    Hide_container_width = 1345 + window_width;

    $('#Hide_Sidebar').click(function () {
        $('#sidebar').slideToggle();
        $(this).hide(1000);
        $('#Show_Sidebar').show(1000);
        $('.Node').hide();
        $('#container').animate({
            width: String(Hide_container_width) + 'px'
        }, 100, function () {
        }
		);
        $('.Node').show();
    });
    $('#Show_Sidebar').click(function () {
        $('#sidebar').slideToggle();
        $(this).hide(1000);
        $('#Hide_Sidebar').show(1000);
        $('.Node').hide();
        $('#container').animate({
            width: String(show_container_width) + 'px'
        }, 100, function () {
        }
		);
        $('.Node').show();
    });
};

var SlidePageFN = function () {
    $('img[id^="Page_slide_img"]').click(function () {
/*        var content_div2 = $(this).parent().children('.column');*/
		var content_div2 = $('.column');
        if (content_div2.is(":visible")) {
            $(this).attr('src', 'images/carousel-down-arrow-page.png');
        } else {
            $(this).attr('src', 'images/carousel-up-arrow-page.png');
        }
        content_div2.slideToggle();
    });
};

var RefreshPageFN = function () {
    $('img[id^="Page_refresh"]').click(function () {
        var content_div2 = $(this).parent().children('.colum').children().children('.content_Node');
        content_div2.each(function () {
            var content_div = $(this).parent().next();
            if ($(this).is(":hidden")) {
                $(this).slideToggle();
            }
            var id = $(this).attr('id').replace("content_Node_", "RefreshNode_");
            var div_ = $(this);
            $(this).load("Pages/" + id + ".html", function () {
            });
        });

        var colum_div = $(this).parent().children('.colum');
        if (colum_div.is(":hidden")) {
            colum_div.slideToggle();
            $(this).prev('img').attr('src', 'images/carousel-up-arrow.png');
        }
    });
};

$(document).ready(
	function () 
	{
    ////Set AR width

    window_width = ($(window).width() - 1345);

    container_width = $('#container').width();
    sidebar_width = $('#sidebar').css('left');
    $('#container').css('width', container_width + window_width);
    $('#sidebar').css('left', $(window).width() - $('#sidebar').width());

    SlideNodeFN();

    SlideSliderFN();

    SlidePageFN();

    IncreaseFont();

    DecreaseFont();

		  
    var value = parseInt(getCookie("FontSize"));
    if (!value) {
        value = 0;
        setCookie("FontSize", value, 365);
    } else {
        if (value > 0) {
            while (value > 0) {
                var current_size_content_Node = $(".content_Node").css("font-size");
                var currentFontSizeNum = parseFloat(current_size_content_Node, 10);
                if ( ++currentFontSizeNum >= 30)
                    currentFontSizeNum = 30;
                $(".content_Node").css("font-size", (currentFontSizeNum) + "px");
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                var current_size_h4 = $("h4").css("font-size");
                var currentFontSizeNum = parseFloat(current_size_h4, 10);
                if ( ++currentFontSizeNum>= 30)
                    currentFontSizeNum = 30;
                $("h4").css("font-size", (currentFontSizeNum) + "px");
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                var current_size_h3 = $("h3").css("font-size");
                var currentFontSizeNum = parseFloat(current_size_h3, 10);
                if ( ++currentFontSizeNum>= 30)
                    currentFontSizeNum = 30;
                $("h3").css("font-size", (currentFontSizeNum) + "px");
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                var current_size_h2 = $("h2").css("font-size");
                var currentFontSizeNum = parseFloat(current_size_h2, 10);
                if ( ++currentFontSizeNum>= 30)
                    currentFontSizeNum = 30;
                $("h2").css("font-size", (currentFontSizeNum) + "px");
				 $("h2").height((currentFontSizeNum) + "px");
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                var current_size_li = $("li").css("font-size");
                var currentFontSizeNum = parseFloat(current_size_li, 10);
                if ( ++currentFontSizeNum>= 30)
                    currentFontSizeNum = 30;
                $("li").css("font-size", (currentFontSizeNum) + "px");
				//////////////////////////////////////////////////////////////////////////////////////////////////////
				var current_size_content_Node_li = $(".content_Node li").css("font-size");
				var currentFontSizeNum = parseFloat(current_size_content_Node_li, 10);
				if ( ++currentFontSizeNum >= 30)
					currentFontSizeNum = 30;
				$(".content_Node li").css("font-size", ( currentFontSizeNum) + "px");
				//////////////////////////////////////////////////////////////////////////////////////////////////////
				var current_size_content_Node_a = $(".content_Node a").css("font-size");
				var currentFontSizeNum = parseFloat(current_size_content_Node_a, 10);
				if ( ++currentFontSizeNum >= 30)
					currentFontSizeNum = 30;
				$(".content_Node a").css("font-size", ( currentFontSizeNum) + "px");
                //////////////////////////////////////////////////////////////////////////////////////////////////////
                var current_size_column_content = $(".column_content").height();
                var currentFontSizeNum = parseFloat(current_size_column_content, 10);
                if ( ++currentFontSizeNum >= 40)
                    currentFontSizeNum = 40;
                $(".column_content").height((currentFontSizeNum) + "px");
                //////////////////////////////////////////////////////////////////////////////////////////////////////

                value = value - 1;
            }
        }else if (value < 0) {
            while (value < 0) {
                var current_size = $(".content_Node").css("font-size");
                var currentFontSizeNum = parseFloat(current_size, 10);
                if (Math.floor( --currentFontSizeNum) <= 15)
                    currentFontSizeNum = 15;
                $(".content_Node").css("font-size", currentFontSizeNum + "px");
                ////////////////////////////////////////////////////////////////////////////////////////////////////////
                var current_size_h4 = $("h4").css("font-size");
                var currentFontSizeNum = parseFloat(current_size_h4, 10);
                if (Math.floor(--currentFontSizeNum) <= 15)
                    currentFontSizeNum = 15;
                $("h4").css("font-size", (currentFontSizeNum) + "px");
                ////////////////////////////////////////////////////////////////////////////////////////////////////////
                var current_size_h3 = $("h3").css("font-size");
                var currentFontSizeNum = parseFloat(current_size_h3, 10);
                if (Math.floor(--currentFontSizeNum) <= 15)
                    currentFontSizeNum = 15;
                $("h3").css("font-size", (currentFontSizeNum) + "px");
                ////////////////////////////////////////////////////////////////////////////////////////////////////////
				var current_size_h2 = $("h2").css("font-size");
                var currentFontSizeNum = parseFloat(current_size_h2, 10);
                if (Math.floor(--currentFontSizeNum) <= 15)
                    currentFontSizeNum = 15;
                $("h2").css("font-size", (currentFontSizeNum) + "px");
				 $("h2").height((currentFontSizeNum) + "px");
                ////////////////////////////////////////////////////////////////////////////////////////////////////////
                var current_size_li = $("li").css("font-size");
                var currentFontSizeNum = parseFloat(current_size_li, 10);
                if (Math.floor(--currentFontSizeNum) <= 15)
                    currentFontSizeNum = 15;
                $("li").css("font-size", (currentFontSizeNum) + "px");
                ////////////////////////////////////////////////////////////////////////////////////////////////////////
                var current_size_column_content = $(".column_content").height();
                var currentFontSizeNum = parseFloat(current_size_column_content, 10);
                if (Math.floor(--currentFontSizeNum) <= 20)
                    currentFontSizeNum = 20;
                $(".column_content").height((currentFontSizeNum) + "px");
				
				//////////////////////////////////////////////////////////////////////////////////////////////////////
                var current_size_content_Node_a = $(".content_Node a").css("font-size");
                var currentFontSizeNum = parseFloat(current_size_content_Node_a, 10);
                if (Math.floor(--currentFontSizeNum) <= 15)
                    currentFontSizeNum = 15;
                $(".content_Node a").css("font-size", (currentFontSizeNum) + "px");


                value = value + 1;
            }
        }
		
    }
	//------------ movable div ---------------------//
	  $('.column').sortable({
		connectWith: '.column',
		handle: '.column_content',
		cursor: 'move',
		placeholder: 'placeholder',
		forcePlaceholderSize: true,
		opacity: 0.4,
			/*
			
			start: function(event, ui)
			{
				position2 = ui.placeholder.index();
				var content_div = $(this).children();
				for (var i = 1; i < position2; i++) 
				{
					content_div = content_div.next();
				}
				content_div2 = content_div.children('.column_content').attr('id');
				
			},
			
			change: function(event, ui)
			{
			    

				position = ui.placeholder.index();
				
				var data = content_div2 +'_'+ position;
        	    $('#OrderNodes').text(data);
			}
			
			stop: function(event, ui)
			{
			    

				position = ui.placeholder.index();
				
				var data = $(this).sortable('serialize');
        	    $('#OrderNodes').text(data);
			}
			*/
			/*
			stop: function(event, ui)
			{
				var i =0;
				var str1 = '';
				position = ui.placeholder.index();
				var data = $(this).sortable('serialize');
				var l = data.indexOf("=", 1);
				while( l >0)
				{
					l = data.indexOf("=", l+1);
					i++;
				}
				
				var content_div = $(this).children();
				var content_divt = '';
				var content_div2 = '';
				
				l = 0;
				while (  l < i)
				{
					content_divt = content_div.children('.column_content').children('.CloseNode').attr('id');
					l++;
					if( content_div2 != '')
						content_div2 += ',\n';
					str1 = content_divt.substring( content_divt.indexOf("{"));
					
					content_div2 += str1;
					content_div = content_div.next();
					
				}
				position = ui.placeholder.index();
				data = i + "##\n" + position+ "##" + content_div2;
				
        	    $('#OrderNodes').text(data);
				

			}
			*/
			
	})
	.disableSelection();
	//------------ movable div ---------------------//


	//------------ Top Tabs ---------------------//
	$(function() {
	$( "#Page" ).tabs();
	});
	//------------ Top Tabs ---------------------//

	//------------ Side Tabs ---------------------//


	jQuery(function (){
	jQuery("#caution1").hover(function(){ 
	jQuery('#caution1').css('z-index',101009);
	jQuery(this).stop(true,false).animate({right:  0}, 500); },
	function(){ 
		jQuery('#caution1').css('z-index',10000);
		jQuery("#caution1").stop(true,false).animate({right: -260}, 500); });
	});
	
	jQuery(function (){
	jQuery("#todo1").hover(function(){ 
	jQuery('#todo1').css('z-index',101009);
	jQuery(this).stop(true,false).animate({right:  0}, 500); },
	function(){ 
		jQuery('#todo1').css('z-index',10000);
		jQuery("#todo1").stop(true,false).animate({right: -260}, 500); });
	});
	
	jQuery(function (){
	jQuery("#support1").hover(function(){ 
	jQuery('#support1').css('z-index',101009);
	jQuery(this).stop(true,false).animate({right:  0}, 500); },
	function(){ 
		jQuery('#support1').css('z-index',10000);
		jQuery("#support1").stop(true,false).animate({right: -260}, 500); });
	});

	//------------ Side Tabs ---------------------//
	
//------------ Scroll Bar ---------------------//

(function($) {

    jQuery.fn.extend({
        slimScroll: function(o) {

            var ops = o;
            //do it for every element that matches selector
            this.each(function(){

            var isOverPanel, isOverBar, isDragg, queueHide, barHeight,
                divS = '<div></div>',
                minBarHeight = 30,
                wheelStep = 30,
                o = ops || {},
                cwidth = o.width || 'auto',
                cheight = o.height || 'auto',
                size = o.size || '6px',
                color = o.color || '#000',
                position = o.position || 'left',
                opacity = o.opacity || .3,
                alwaysVisible = o.alwaysVisible === true;
            
                //used in event handlers and for better minification
                var me = $(this);

                //wrap content
                var wrapper = $(divS).css({
                    position: 'relative',
                    overflow: 'hidden',
                    width: cwidth,
                    height: cheight
                }).attr({ 'class': 'slimScrollDiv' });

                //update style for the div
                me.css({
                    overflow: 'hidden',
                    width: cwidth,
                    height: cheight
                });

                //create scrollbar rail
                var rail  = $(divS).css({
                    width: '15px',
                    height: '100%',
                    position: 'absolute',
                    top: 0
                });

                //create scrollbar
                var bar = $(divS).attr({ 
                    'class': 'slimScrollBar ', 
                    style: 'border-radius: ' + size 
                    }).css({
                        background: color,
                        width: size,
                        position: 'absolute',
                        top: 0,
                        opacity: opacity,
                        display: alwaysVisible ? 'block' : 'none',
                        BorderRadius: size,
                        MozBorderRadius: size,
                        WebkitBorderRadius: size,
                        zIndex: 99
                });

                //set position
                var posCss = (position == 'right') ? { right: '1px' } : { left: '1px' };
                rail.css(posCss);
                bar.css(posCss);

                //wrap it
                me.wrap(wrapper);

                //append to parent div
                me.parent().append(bar);
                me.parent().append(rail);

                //make it draggable
                bar.draggable({ 
                    axis: 'y', 
                    containment: 'parent',
                    start: function() { isDragg = true; },
                    stop: function() { isDragg = false; hideBar(); },
                    drag: function(e) 
                    { 
                        //scroll content
                        scrollContent(0, $(this).position().top, false);
                    }
                });

                //on rail over
                rail.hover(function(){
                    showBar();
                }, function(){
                    hideBar();
                });

                //on bar over
                bar.hover(function(){
                    isOverBar = true;
                }, function(){
                    isOverBar = false;
                });

                //show on parent mouseover
                me.hover(function(){
                    isOverPanel = true;
                    showBar();
                    hideBar();
                }, function(){
                    isOverPanel = false;
                    hideBar();
                });

                var _onWheel = function(e)
                {
                    //use mouse wheel only when mouse is over
                    if (!isOverPanel) { return; }

                    var e = e || window.event;

                    var delta = 0;
                    if (e.wheelDelta) { delta = -e.wheelDelta/120; }
                    if (e.detail) { delta = e.detail / 3; }

                    //scroll content
                    scrollContent(0, delta, true);

                    //stop window scroll
                    if (e.preventDefault) { e.preventDefault(); }
                    e.returnValue = false;
                }

                var scrollContent = function(x, y, isWheel)
                {
                    var delta = y;

                    if (isWheel)
                    {
                        //move bar with mouse wheel
                        delta = bar.position().top + y * wheelStep;

                        //move bar, make sure it doesn't go out
                        delta = Math.max(delta, 0);
                        var maxTop = me.outerHeight() - bar.outerHeight();
                        delta = Math.min(delta, maxTop);

                        //scroll the scrollbar
                        bar.css({ top: delta + 'px' });
                    }

                    //calculate actual scroll amount
                    percentScroll = parseInt(bar.position().top) / (me.outerHeight() - bar.outerHeight());
                    delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

                    //scroll content
                    me.scrollTop(delta);

                    //ensure bar is visible
                    showBar();
                }

                var attachWheel = function()
                {
                    if (window.addEventListener)
                    {
                        this.addEventListener('DOMMouseScroll', _onWheel, false );
                        this.addEventListener('mousewheel', _onWheel, false );
                    } 
                    else
                    {
                        document.attachEvent("onmousewheel", _onWheel)
                    }
                }

                //attach scroll events
                attachWheel();

                var getBarHeight = function()
                {
                    //calculate scrollbar height and make sure it is not too small
                    barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
                    bar.css({ height: barHeight + 'px' });
                }

                //set up initial height
                getBarHeight();

                var showBar = function()
                {
                    //recalculate bar height
                    getBarHeight();
                    clearTimeout(queueHide);
                    
                    //show only when required
                    if(barHeight >= me.outerHeight()) {
                        return;
                    }
                    bar.fadeIn('fast');
                }

                var hideBar = function()
                {
                    //only hide when options allow it
                    if (!alwaysVisible)
                    {
                        queueHide = setTimeout(function(){
                            if (!isOverBar && !isDragg) { bar.fadeOut('slow'); }
                        }, 1000);
                    }
                }

            });
            
            //maintain chainability
            return this;
        }
    });

    jQuery.fn.extend({
        slimscroll: jQuery.fn.slimScroll
    });

})(jQuery);

	//invalid name call
              $('#list').slimscroll({
                  color: '#000',
                  width: '228px',
                  height: '265px'                  
              });
			   $('#todo_list').slimscroll({
                  color: '#000',
                  width: '228px',
                  height: '265px'                  
              });
			  $('.content_Node').slimscroll({
                  color: '#000',

              });

//------------ Scroll Bar ---------------------//

    $('#navigation li a').on('click', function () {
        $('#navigation li a.active').removeClass('active');
        var href = $(this).attr('href').substring(1);
        $('.page').not('#' + href).hide();
        $('#' + href).show();
        $('#FirstPage').show();
        $(this).addClass('active');
    });
});
