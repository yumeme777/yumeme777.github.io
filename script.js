// script.js

// テキストフィールドやテキストエリアの要素を取得
const yourNameInput = document.getElementById("your-name");
const yourEmailInput = document.getElementById("your-email");
const messageTextarea = document.getElementById("message");

// クリック時の動作を設定
yourNameInput.addEventListener("click", function () {
  if (this.value === "") {
    this.value = "あなたの名前を入力してください";
  }
});

yourEmailInput.addEventListener("click", function () {
  if (this.value === "") {
    this.value = "あなたのメールアドレスを入力してください";
  }
});

messageTextarea.addEventListener("click", function () {
  if (this.value === "") {
    this.value = "メッセージを入力してください";
  }
});

