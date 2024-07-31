$(function () {
    //cange-colorボタンがクリックされた場合
  $('#change-color').on('click',function(){
    //テキストの色を赤にする
    $('#target').css('color','red');
  });

    //change-textボタンがクリックされた場合
  $('#change-text').on('click',function(){
    //テキストの内容を変更する
    $('#target').text('Hello');
  });

  
    // id属性がfadeoutの要素がクリックされたら
    $('#fade-out').on('click', function() {
      // フェードアウトする
      $('#target').fadeOut();
    });

      // id属性がfadeinの要素がクリックされたら
   $('#fade-in').on('click', function() {
    // フェードインする
    $('#target').fadeIn();
  });

  });