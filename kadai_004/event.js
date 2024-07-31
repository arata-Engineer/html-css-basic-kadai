// ロードイベントが発生された場合
$(window).on('load', ()=> {
    console.log('loadイベントが発生しました');
});

$(function() {
// ボックスがスクロールされた場合

    $(document).on('scroll', () => {
    console.log('scrollイベントが発生しました2');
    });
});