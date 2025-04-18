
const user_id = window.Telegram.WebApp.initDataUnsafe?.user?.id || Math.floor(Math.random() * 1000000);
const scoreEl = document.getElementById("score");
const tapBtn = document.getElementById("tap-btn");

async function updateScore() {
  const res = await fetch("http://localhost:8000/score", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id }),
  });
  const data = await res.json();
  scoreEl.innerText = data.score;
}

tapBtn.addEventListener("click", async () => {
  await fetch("http://localhost:8000/tap", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id }),
  });
  updateScore();
});

updateScore();
