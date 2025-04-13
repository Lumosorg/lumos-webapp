
const tg = window.Telegram.WebApp;
const user_id = tg.initDataUnsafe?.user?.id || 123456;

const scoreEl = document.getElementById("score");
let score = 0;

function handleTap() {
  score += 1;
  scoreEl.innerText = score.toLocaleString();
  // TODO: connect to backend
}
