$(window).on('load',function(){
    var locUrl = location.href;
    var setHash = locUrl.split('#');
    //現在のページURLに#が含まれる場合はスクロール移動
    if(setHash[1]){
        hashMove("#"+setHash[1]);
    }
    //#pagetop
    $('#pagetop a').on('click',function() {
        var href = $(this).attr("href");
        var clkUrl = href.split('#');
        hashMove("#"+clkUrl[1]);
        return false;
    });
    //#から始まるリンクはスクロール
    $('a[href^="#"]').on('click',function() {
        var href = $(this).attr("href");
        var clkUrl = href.split('#');
        hashMove("#"+clkUrl[1]);
    });
    //#を含むリンクは、リンク先と現在のページのURLを比較して判断
    $('a[href*="#"]').on('click',function() {
        var href = $(this).attr("href");
        var pageURL = location.pathname;
        reg = new RegExp(pageURL);
        //ページ名が同じならスクロール移動
        if (href.match(reg)) {
            var clkUrl = href.split('#');
            hashMove("#"+clkUrl[1]);
        }
    });

    function hashMove(trg){
        var position = $(trg).offset().top;
        if($('body').hasClass('admin-bar')){
            position = position - 50;
        }else{
            position = position - 20;
        }
        if($('body').width() <= 980){
            position = position - 50; //見出しの文字が切れるのを防ぐ
        }else{
            position = position - 150; //見出しの文字が切れるのを防ぐ
        }
        $('body,html').animate({scrollTop:position}, '800', 'swing');
    }
});