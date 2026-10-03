const MUSIC_FILE = "assets/beyond.m4a";

const enterBtn = document.querySelector("#enterBtn");
const card = document.querySelector("#card");
const bgm = document.querySelector("#bgm");
const soundToggle = document.querySelector("#soundToggle");
const soundLabel = document.querySelector("#soundLabel");

async function startCard() {
  document.body.classList.remove("gift-locked");
  card.removeAttribute("inert");
  card.removeAttribute("aria-hidden");
  if (MUSIC_FILE) {
    bgm.src = MUSIC_FILE;
    bgm.volume = 0.18;
    try {
      await bgm.play();
      soundToggle.hidden = false;
    } catch (error) {
      console.info("背景音乐未能自动播放，可以稍后用音乐按钮开启。", error);
      soundToggle.hidden = false;
      soundToggle.classList.add("off");
      soundLabel.textContent = "播放音乐";
    }
  }
  card.scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => card.focus({ preventScroll: true }), 700);
}

enterBtn.addEventListener("click", startCard);

// 首屏是礼物封面：拆开之前不允许滚动或通过键盘进入后续内容。
window.scrollTo(0, 0);
window.addEventListener("pageshow", () => {
  if (document.body.classList.contains("gift-locked")) window.scrollTo(0, 0);
});

soundToggle.addEventListener("click", async () => {
  if (bgm.paused) {
    await bgm.play();
    soundToggle.classList.remove("off");
    soundLabel.textContent = "音乐开着";
    soundToggle.setAttribute("aria-label", "暂停背景音乐");
  } else {
    bgm.pause();
    soundToggle.classList.add("off");
    soundLabel.textContent = "音乐已关";
    soundToggle.setAttribute("aria-label", "播放背景音乐");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -8%" });

document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
