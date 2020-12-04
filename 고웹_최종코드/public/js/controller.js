(function(){
    var current = 0;
    var max = 0;
    var container;
    var interval;
    var animateTarget = null;
    function init() {
        container = $(".slide ul");

        max = container.children().length;
        events();
        container.css("margin-left","-600px");//각각의 사진들을 -600px로 이동
        container.prepend(container.children()[max-1]);//맨마지막 사진을 맨처음으로 배치
        interval=setInterval(next,3000);

    }
    
    
    function events() {
        $("button.prev").on("click", prev);
        $("button.next").on("click", next);
        $(window).on("keydown",keydown);
    }
    function prev(e) {
        current--;
        if (current < 0) current = 0;
        animate("prev");
    }
    function next(e) {
        current++;
        if (current > max - 1) current = max - 1;
        animate("next");
    }
    function animate($direction) {
       /* var moveX = current * 600;
        TweenMax.to(container, 0.8, { marginLeft: -moveX, ease: Expo.easeOut });
        clearInterval(interval);//이벤트가 쌓이는 것을 방지
        interval=setInterval(next,3000);*/
        if(animateTarget!=null){
            TweenMax.killTweensOf(animateTarget);
            animateTarget.css("margin-left","0");
        }
        if($direction=="next"){
            $(container.children()[1]).css("margin-left","600px");
            container.append(container.children()[0]);//맨처음 사진을 제일 마지막으로 보낸다.
        }else if($direction=="prev"){
            container.prepend(container.children()[max-1]);//맨 마지막 사진을 제일 처음으로 보낸다
            $(container.children()[0]).css("margin-left","600px");
            
        }
        animateTarget=$(container.children()[0]);
        TweenMax.to(animateTarget,0.8,{marginLeft:0,ease:Expo.easeOut})
        clearInterval(interval);//이벤트가 쌓이는 것을 방지
        interval=setInterval(next,3000)
    }
    function keydown(e){
        if(e.which==39/*right*/){
            next();
        }else if(e.which ==37/*left*/)
            prev();
    }
    $(document).ready(init);
    
})();