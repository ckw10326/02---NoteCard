let currentTheme = 'tech';
let currentCardIndex = 0;

function buildChainBar(chain) {
    return chain.nodes.map((label, i) => {
        const isOn = chain.active.includes(i);
        const node = isOn
            ? `<span class="node on"><span>${label}</span></span>`
            : `<span class="node">${label}</span>`;
        return i < chain.nodes.length - 1 ? node + '<span class="arr">›</span>' : node;
    }).join('');
}

function buildCard(card, index, themeKey, visible) {
    const num = String(index + 1).padStart(2, '0');
    const chainHTML = card.chain
        ? `<div class="chain-bar accent">${buildChainBar(card.chain)}</div>`
        : '';
    const rulesHTML = card.rules.map(r => `
        <div class="rule-card">
            <div class="rule-tag">${r.tag}</div>
            <div class="rule-text">${r.text}</div>
            <div class="rule-desc">${r.desc}</div>
        </div>`).join('');

    return `
        <div id="${themeKey}-${index}"
             class="wallpaper-container ${card.colorClass}${visible ? '' : ' hidden'}">
            <div class="number-bg">${num}</div>
            <div class="gradient-overlay"></div>
            <div class="content">
                <div class="title-section">
                    <div class="main-title accent">${card.title}</div>
                    <div class="sub-title">${card.subtitle}</div>
                </div>
                ${chainHTML}
                ${rulesHTML}
                <div class="footer-note accent">BADMINTON ELITE ADVISOR</div>
            </div>
        </div>`;
}

function renderThemeSwitch() {
    const el = document.getElementById('themeSwitch');
    el.innerHTML = Object.entries(CARD_DATA).map(([key, theme]) => `
        <button class="theme-btn${key === currentTheme ? ' active' : ''}"
                onclick="showTheme('${key}', this)"
                aria-label="${theme.label}主題">
            ${theme.label}
        </button>`).join('');
}

function renderCards() {
    const container = document.getElementById('cardContainer');
    container.innerHTML = Object.entries(CARD_DATA).map(([themeKey, theme]) => {
        const isCurrentTheme = themeKey === currentTheme;
        const cardsHTML = theme.cards.map((card, i) =>
            buildCard(card, i, themeKey, isCurrentTheme && i === currentCardIndex)
        ).join('');
        return `<div class="theme-group${isCurrentTheme ? '' : ' hidden'}" data-theme="${themeKey}">${cardsHTML}</div>`;
    }).join('');
}

function renderNav() {
    const theme = CARD_DATA[currentTheme];
    const nav = document.getElementById('navButtons');
    nav.innerHTML = theme.cards.map((card, i) => `
        <button class="nav-btn${i === currentCardIndex ? ' active' : ''}"
                onclick="showCard(${i})"
                aria-label="第${i + 1}張卡：${card.navLabel}">
            ${card.navLabel}
        </button>`).join('');
}

function showCard(index) {
    currentCardIndex = index;
    document.querySelectorAll(`.theme-group[data-theme="${currentTheme}"] .wallpaper-container`)
        .forEach((el, i) => el.classList.toggle('hidden', i !== index));
    renderNav();
}

function showTheme(themeKey, btn) {
    currentTheme = themeKey;
    currentCardIndex = 0;

    document.querySelectorAll('.theme-group')
        .forEach(g => g.classList.toggle('hidden', g.dataset.theme !== themeKey));
    document.querySelectorAll(`.theme-group[data-theme="${themeKey}"] .wallpaper-container`)
        .forEach((el, i) => el.classList.toggle('hidden', i !== 0));

    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    renderNav();
}

document.addEventListener('keydown', (e) => {
    const cards = CARD_DATA[currentTheme].cards;
    if (e.key === 'ArrowRight' && currentCardIndex < cards.length - 1) showCard(currentCardIndex + 1);
    if (e.key === 'ArrowLeft'  && currentCardIndex > 0)                showCard(currentCardIndex - 1);
});

renderThemeSwitch();
renderCards();
renderNav();
