
const tg = window.Telegram.WebApp;
const user_id = tg.initDataUnsafe?.user?.id || 123456;

const scoreEl = document.getElementById("score");
const tapSound = document.getElementById("tap-sound");

async function fetchScore() {
  try {
    const res = await fetch("http://localhost:8000/api/score", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user_id})
    });
    const data = await res.json();
    scoreEl.innerText = data.score.toLocaleString();
  } catch (err) {
    scoreEl.innerText = "0";
  }
}

async function handleTap() {
  tapSound.play();
  try {
    const res = await fetch("http://localhost:8000/api/tap", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user_id})
    });
    const data = await res.json();
    scoreEl.innerText = data.score.toLocaleString();
  } catch (err) {
    console.error(err);
  }
}

fetchScore();
