    // btnというidを持つHTML要素を取得し、定数に代入する
    const btn = document.getElementById('btn');

    // HTML要素がクリックされたときにイベント処理を実行する
    btn.addEventListener('click', () => {

        setTimeout(() => {
        // textというidを持つHTML要素を取得し、定数に代入する。
        const text = document.getElementById('text')

    // textContentを使用
    text.textContent = "ボタンをクリックしました。";

    }, 2000);
    });