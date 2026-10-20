// ==================== ЯЗЫКИ ====================
const translations = {
  ru: {
    title: "🎮 МИССИЯ:<br>ПОЗДРАВИТЬ АНФИСУ 🎂",
    subtitle: "Анфиса, это не просто поздравление. Это ИГРА.<br>Лови <strong>17 своих фоток</strong> и не попадись на бомбы! 😈<br><br>📸 = +10 очков · 💣 = −5 очков · ⏰ = +3 секунды<br><small>(время на всё — 40 секунд)</small>",
    startBtn: "🚀 НАЧАТЬ ИГРУ",
    hudScore: "Очки",
    hudCollected: "Собрано",
    hudSeconds: "с",
    winTitle: "🎉 ПОБЕДА! 🎉",
    winIntro: "Анфиса, ты справилась! Все 17 фоток собраны, все бомбы обойдены. Это официально доказывает: ты — не гей! 🏆",
    statsTitle: "📊 Твоя статистика:",
    statsCollected: "Собрано фоток",
    statsBombs: "Наступила на бомбы",
    statsScore: "Итоговые очки",
    statsTime: "Осталось времени",
    realCongrats: "А теперь — настоящее поздравление:",
    meme1: "«Анфисик, поздравляем тебя с днем рождения! Ты уже не мелкий penis, а достаточно большой. Пусть у тебя все будет хорошо и ты никогда не расстраивалась из-за того что не поздравили в 00. Мы тебя любим ❤️ ». 🍰",
    meme2: "Желаю тебе:\n✅ Чтобы бабаки всегда были в кармане»\n✅ Чтобы в шараге ток позитивчик\n✅ Чтобы шмотки продавались\n✅ Чтобы твои приколы всегда всех смешили\n✅ И чтобы 17-й год был самый насыщенный и вайбовый 🔥",
    finalLine: "Анфиса, ты — лучшая! Зажги этот год так, чтобы все запомнили! 💃🔥",
    playAgain: "🔁 СЫГРАТЬ ЕЩЁ РАЗ",
    loseTitle: "⏰ ВРЕМЯ ВЫШЛО!",
    loseHigh: "Ты собрала {n} своих фоток — это почти победа! Но время вышло. Попробуй ещё раз, ты справишься! 💪",
    loseMid: "Собрано {n} фоток. Неплохо, но можно лучше! Давай ещё разок? 😉",
    loseLow: "Собрано {n} фоток. Бомбы коварны! Попробуй снова — у тебя получится! 💪"
  },
 en: {
  title: "🎮 MISSION:<br>CONGRATULATE ANFISA 🎂",
  subtitle: "Anfisa, this isn't just a greeting. It's a GAME.<br>Catch <strong>17 of your photos</strong> and dodge the bombs! 😈<br><br>📸 = +10 points · 💣 = −5 points · ⏰ = +3 seconds<br><small>(you have 40 seconds)</small>",
  startBtn: "🚀 START GAME",
  hudScore: "Score",
  hudCollected: "Collected",
  hudSeconds: "s",
  winTitle: "🎉 VICTORY! 🎉",
  winIntro: "Anfisa, you did it! All 17 photos collected, all bombs dodged. This officially proves: you're not a loser! 🏆",
  statsTitle: "📊 Your stats:",
  statsCollected: "Photos collected",
  statsBombs: "Bombs hit",
  statsScore: "Final score",
  statsTime: "Time left",
  realCongrats: "And now — the real greeting:",
  meme1: "«Anfisa, happy birthday! You're no longer a tiny penis, but a pretty big one. May everything go well for you and may you never be upset that nobody congratulated you at 00:00. We love you ❤️». 🍰",
  meme2: "I wish you:\n✅ Money always in your pocket\n✅ Only good vibes at college\n✅ Your clothes selling well\n✅ Your jokes always making everyone laugh\n✅ And your 17th year to be the most vibrant and vibey one 🔥",
  finalLine: "Anfisa, you're the best! Light up this year so everyone remembers! 💃🔥",
  playAgain: "🔁 PLAY AGAIN",
  loseTitle: "⏰ TIME'S UP!",
  loseHigh: "You collected {n} of your photos — almost a victory! But time ran out. Try again, you've got this! 💪",
  loseMid: "{n} photos collected. Not bad, but you can do better! One more round? 😉",
  loseLow: "{n} photos collected. Bombs are tricky! Try again — you'll make it! 💪"
},
ua: {
  title: "🎮 МІСІЯ:<br>ПРИВІТАТИ АНФІСУ 🎂",
  subtitle: "Анфісо, це не просто привітання. Це ГРА.<br>Лови <strong>17 своїх фото</strong> і не попадись на бомби! 😈<br><br>📸 = +10 очок · 💣 = −5 очок · ⏰ = +3 секунди<br><small>(на все — 40 секунд)</small>",
  startBtn: "🚀 ПОЧАТИ ГРУ",
  hudScore: "Очки",
  hudCollected: "Зібрано",
  hudSeconds: "с",
  winTitle: "🎉 ПЕРЕМОГА! 🎉",
  winIntro: "Анфісо, ти впоралася! Усі 17 фото зібрано, усі бомби обійдено. Це офіційно доводить: ти — не гей! 🏆",
  statsTitle: "📊 Твоя статистика:",
  statsCollected: "Зібрано фото",
  statsBombs: "Наступила на бомби",
  statsScore: "Підсумкові очки",
  statsTime: "Залишилось часу",
  realCongrats: "А тепер — справжнє привітання:",
  meme1: "«Анфісику, вітаємо тебе з днем народження! Ти вже не дрібний пеніс, а достатньо великий. Нехай у тебе все буде добре і ти ніколи не засмучувалася через те, що не привітали в 00:00. Ми тебе любимо ❤️». 🍰",
  meme2: "Бажаю тобі:\n✅ Щоб гроші завжди були в кишені\n✅ Щоб у шарагівському закладі лише позитивчик\n✅ Щоб шмотки продавалися\n✅ Щоб твої приколи завжди всіх смішили\n✅ І щоб 17-й рік був найбільш насичений та вайбовий 🔥",
  finalLine: "Анфісо, ти — найкраща! Запали цей рік так, щоб усі запам'ятали! 💃🔥",
  playAgain: "🔁 ЗІГРАТИ ЩЕ РАЗ",
  loseTitle: "⏰ ЧАС ВИЙШОВ!",
  loseHigh: "Ти зібрала {n} своїх фото — це майже перемога! Але час вийшов. Спробуй ще раз, ти впораєшся! 💪",
  loseMid: "Зібрано {n} фото. Непогано, але можна краще! Давай ще разок? 😉",
  loseLow: "Зібрано {n} фото. Бомби підступні! Спробуй знову — у тебе вийде! 💪"
}
};

let currentLang = 'ru';

// ==================== ФОТКИ ====================
// ⚠️ Меняй тут пути, если у тебя другие имена файлов!
// Минимум 1 фотка — но лучше 3-5 разных, чтобы было веселее
const PHOTOS = [
  'img/fica1.png',
  'img/fica2.png',
  'img/fica3.png',
  'img/fica4.png',
  'img/fica5.png'
];

// ==================== ПЕРЕМЕННЫЕ ====================
let score = 0;
let collected = 0;
let bombsHit = 0;
let timeLeft = 40;
let gameInterval = null;
let spawnInterval = null;
let gameActive = false;
const WIN_TARGET = 17;

const gameArea = document.getElementById('game-area');
const hud = document.getElementById('hud');
const scoreEl = document.getElementById('score');
const collectedEl = document.getElementById('collected');
const timerEl = document.getElementById('timer');

// Бомбы и часы — остаются эмодзи
const ITEMS = {
  bomb:  { emojis: ['💣', '☠️', '🤡', '👹'], points: -5, isBomb: true },
  clock: { emojis: ['⏰', '⌛'], points: 0, isBomb: false, timeBonus: 3 }
};

// ==================== ЯЗЫКИ ====================
function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('#lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  if (document.getElementById('lose-screen').classList.contains('active')) {
    updateLoseText();
  }
}
document.querySelectorAll('#lang-switch button').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// ==================== КОНФЕТТИ ====================
const colors = ['#ff4081', '#ff9800', '#ffeb3b', '#4caf50', '#2196f3', '#9c27b0'];
const confettiContainer = document.getElementById('confetti-container');
for (let i = 0; i < 60; i++) {
  const conf = document.createElement('div');
  conf.className = 'confetti';
  conf.style.left = Math.random() * 100 + 'vw';
  conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  conf.style.animationDuration = (Math.random() * 3 + 4) + 's';
  conf.style.animationDelay = Math.random() * 5 + 's';
  conf.style.width = (Math.random() * 8 + 5) + 'px';
  conf.style.height = conf.style.width;
  if (Math.random() > 0.5) conf.style.borderRadius = '50%';
  confettiContainer.appendChild(conf);
}

// ==================== ЭКРАНЫ ====================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

// ==================== СТАРТ ====================
function startGame() {
  score = 0;
  collected = 0;
  bombsHit = 0;
  timeLeft = 40;
  gameActive = true;

  scoreEl.textContent = '0';
  collectedEl.textContent = '0';
  timerEl.textContent = '40';
  timerEl.style.color = '#4caf50';

  showScreen(null);
  hud.style.display = 'flex';
  gameArea.innerHTML = '';

  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    timerEl.style.color = timeLeft <= 10 ? '#ff4081' : '#4caf50';
    if (timeLeft <= 0) endGame(false);
  }, 1000);

  clearInterval(spawnInterval);
  spawnInterval = setInterval(spawnItem, 650);
  spawnItem();
  spawnItem();
}

// ==================== СПАВН ====================
function spawnItem() {
  if (!gameActive) return;

  const rand = Math.random();
  let type;
  if (rand < 0.65) type = 'photo';   // 65% — фотки Анфисы
  else if (rand < 0.85) type = 'bomb';
  else type = 'clock';

  const el = document.createElement('div');
  el.className = 'item';

  // -------- ФОТКА --------
  if (type === 'photo') {
    const src = PHOTOS[Math.floor(Math.random() * PHOTOS.length)];
    el.classList.add('photo-item');

    // 10% шанс — "золотая" фотка (больше очков)
    const isGolden = Math.random() < 0.1;
    if (isGolden) el.classList.add('photo-golden');

    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Anfisa';
    // Если фотки нет — покажем заглушку-эмодзи
    img.onerror = () => {
      el.classList.remove('photo-item');
      el.classList.add('emoji-item');
      el.innerHTML = '📸';
    };
    el.appendChild(img);

    el.dataset.type = isGolden ? 'golden' : 'photo';
    el.dataset.isGolden = isGolden ? '1' : '0';
  }
  // -------- БОМБА / ЧАСЫ --------
  else {
    const config = ITEMS[type];
    const emoji = config.emojis[Math.floor(Math.random() * config.emojis.length)];
    el.classList.add('emoji-item');
    el.textContent = emoji;
    el.dataset.type = type;
  }

  const maxX = window.innerWidth - 120;
  const maxY = window.innerHeight - 120;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY + 70;
  el.style.left = x + 'px';
  el.style.top = y + 'px';

  const lifetime = 2800 + Math.random() * 1500;
  const driftX = (Math.random() - 0.5) * 200;
  const driftY = -Math.random() * 150;

  el.animate([
    { transform: 'translate(0, 0)' },
    { transform: `translate(${driftX}px, ${driftY}px)` }
  ], { duration: lifetime, easing: 'ease-out', fill: 'forwards' });

  const removeTimer = setTimeout(() => { if (el.parentNode) el.remove(); }, lifetime);

  el.addEventListener('click', (e) => {
    if (!gameActive) return;
    e.stopPropagation();
    clearTimeout(removeTimer);
    handleClick(el);
  });

  gameArea.appendChild(el);
  setTimeout(() => { if (el.parentNode) el.remove(); }, lifetime + 100);
}

// ==================== КЛИК ====================
function handleClick(el) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const type = el.dataset.type;

  if (type === 'photo' || type === 'golden') {
    const isGolden = type === 'golden';
    const pts = isGolden ? 20 : 10;
    score += pts;
    collected++;
    collectedEl.textContent = collected;
    showPopup('+' + pts, cx, cy, isGolden ? 'gold' : '#ffeb3b');
    burstEmojis(isGolden ? ['🌟', '💖', '✨', '👑'] : ['✨', '📸', '💖', '🎉'], cx, cy);
    if (isGolden) shakeScreen();
  } 
  else if (type === 'bomb') {
    score -= 5;
    bombsHit++;
    showPopup('-5', cx, cy, '#ff4081');
    shakeScreen();
    burstEmojis(['💥', '💣', '🔥'], cx, cy);
  } 
  else if (type === 'clock') {
    timeLeft += 3;
    timerEl.textContent = timeLeft;
    showPopup('+3' + translations[currentLang].hudSeconds, cx, cy, '#4caf50');
    burstEmojis(['⏰', '✨'], cx, cy);
  }

  scoreEl.textContent = score;
  el.remove();

  if (collected >= WIN_TARGET) endGame(true);
}

// ==================== ЭФФЕКТЫ ====================
function showPopup(text, x, y, color) {
  const pop = document.createElement('div');
  pop.className = 'popup';
  pop.textContent = text;
  pop.style.left = x + 'px';
  pop.style.top = y + 'px';
  pop.style.color = color;
  pop.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
  document.body.appendChild(pop);
  setTimeout(() => pop.remove(), 1000);
}

function burstEmojis(emojis, x, y) {
  for (let i = 0; i < 6; i++) {
    const em = document.createElement('div');
    em.className = 'emoji-pop';
    em.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    em.style.left = x + 'px';
    em.style.top = y + 'px';
    em.style.fontSize = '1.5em';
    document.body.appendChild(em);
    setTimeout(() => em.remove(), 2000);
  }
}

function shakeScreen() {
  document.body.animate([
    { transform: 'translate(0, 0)' },
    { transform: 'translate(-10px, 5px)' },
    { transform: 'translate(10px, -5px)' },
    { transform: 'translate(-5px, 3px)' },
    { transform: 'translate(0, 0)' }
  ], { duration: 300 });
}

function bigEmojiRain(emojis, count) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const em = document.createElement('div');
      em.className = 'emoji-pop';
      em.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      em.style.left = Math.random() * 100 + 'vw';
      em.style.top = Math.random() * 60 + 'vh';
      document.body.appendChild(em);
      setTimeout(() => em.remove(), 2000);
    }, i * 40);
  }
}

// ==================== КОНЕЦ ====================
function endGame(win) {
  gameActive = false;
  clearInterval(gameInterval);
  clearInterval(spawnInterval);
  hud.style.display = 'none';
  gameArea.innerHTML = '';

  if (win) {
    document.getElementById('final-collected').textContent = collected;
    document.getElementById('final-bombs').textContent = bombsHit;
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-time').textContent = timeLeft;
    showScreen('win-screen');
    bigEmojiRain(['🎉', '📸', '🎁', '🎈', '🥳', '💖', '✨', '🌟'], 50);
  } else {
    updateLoseText();
    showScreen('lose-screen');
  }
}

function updateLoseText() {
  const t = translations[currentLang];
  const el = document.getElementById('lose-text');
  let key = 'loseLow';
  if (collected >= 10) key = 'loseHigh';
  else if (collected >= 5) key = 'loseMid';
  el.textContent = t[key].replace('{n}', collected);
}

function playAgain() {
  showScreen(null);
  startGame();
}

// ==================== КЛИК В ПУСТОТУ ====================
document.addEventListener('click', (e) => {
  if (!gameActive) return;
  if (e.target.closest('.item') || e.target.closest('.btn') || e.target.closest('#lang-switch')) return;
  const em = document.createElement('div');
  em.textContent = '✨';
  em.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;font-size:1.5em;pointer-events:none;z-index:9999;transition:all 0.8s ease-out;`;
  document.body.appendChild(em);
  requestAnimationFrame(() => {
    em.style.transform = 'translateY(-80px) scale(1.5)';
    em.style.opacity = '0';
  });
  setTimeout(() => em.remove(), 800);
});

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
applyLanguage('ru');