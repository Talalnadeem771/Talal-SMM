// Case study content. Edit text here. Drop images in /images using the names shown in the placeholders.
// Media helpers. {i} in a path becomes 1, 2, 3...  Images with no extension try .jpg, .png, .webp, .jpeg automatically.
// The number is a MAXIMUM. Files that don't exist are dropped automatically, and the layout
// (single item, row, or auto-playing carousel) adapts to however many really load. Just drop files in the folder.
// The optional ratio (e.g. '16/9') is only a fallback until the real file loads.
const vid = (src,n,r) => ({t:'video',src,n,r});
// vids([...files], ratio): specific named video files. Leave the extension off and mp4/mov/webm/m4v are tried automatically.
const vids = (files,r) => ({t:'video',src:files.join('|'),n:files.length,r});
const img = (src,n,r) => ({t:'image',src,n,r});
const car = (src,n,r) => ({t:'carousel',src,n,r});

const CASES = {
muhammadi: {
  title: 'Muhammadi Electronics', emoji: '', hook: 'Who said home appliances are boring? 👀',
  tag: 'Taking a traditional electronics business from offline to online.',
  meta: [['My role','Creative Director'],['Duration','3 months'],['Industry','Home Appliances & Electronics'],['Location','Islamabad, Pakistan']],
  sections: [
   {l:'The challenge 🎯', h:'Years in business. Zero social presence.', p:[
    'Muhammadi Electronics had experience, products, and an established offline business. But on social media? It was a blank canvas.',
    'No content. No digital personality. No real way for people to discover the brand while scrolling. That’s where I stepped in.',
    'The mission was simple: <em>build a digital presence that didn’t look like every other electronics store.</em>',
    'Because let’s be honest, another picture of a fridge with its features written underneath isn’t exactly breaking the internet. 👀']},
   {l:'The creative idea ⚡', h:'Less “BUY NOW!” More “WAIT, LET ME WATCH THIS.”', p:[
    'I wanted to make Muhammadi Electronics more than a page that simply displayed products.',
    'The creative direction focused on mixing useful information, relatable humour, cinematic visuals, and product storytelling, giving people different reasons to stop, watch, and remember the brand.',
    'The idea was to make appliances interesting without losing the trust and credibility people expect from an electronics retailer.'],
    media:[car('Muhammadi Electronics/creative-{i}',10)]},
   {l:'What went into the mix? 🎬', h:'Four ingredients.', items:[
    ['Education that actually helps','From refrigerator buying tips to washing machine capacity guides, we turned technical product information into simple content people could use when making buying decisions.',[vids(['Muhammadi Electronics/invertor vs non part 2.mov','Muhammadi Electronics/0801.mov'],'9/16')]],
    ['Humour that feels relatable','Everyday situations, familiar Pakistani household moments, and playful concepts brought a little personality into a traditionally product-focused niche.',[car('Muhammadi Electronics/humour-{i}',10)]],
    ['Products with main-character energy','Through creative shooting, cinematic visuals, editing, and AI-assisted concepts, I explored ways to present ordinary appliances in a more engaging and unexpected way.'],
    ['Content that supports sales','Promotional creatives and product-focused videos highlighted features, offers, and buying considerations without making every post feel like a hard sell.',[vids(['Muhammadi Electronics/0807(3).mov'],'9/16'),img('Muhammadi Electronics/sales-{i}',6)]]]},
   {l:'Behind the scenes 🎥', h:'From “What if we tried this?” to the final edit.', p:[
    'As Creative Director, I shaped the creative direction from the first spark of an idea to its final execution.',
    'My work included concept development, scriptwriting, visual planning, shooting, editing, and exploring AI-powered creative possibilities.',
    'Every piece of content had a purpose: grab attention, make something easier to understand, entertain the audience, or help them make a smarter buying decision.',
    '<em>Not just content for the sake of posting. Creative with a reason behind it.</em>']},
   {l:'The outcome 🚀', h:'A blank canvas became a starting point.', p:[
    'Over three months, we established Muhammadi Electronics’ social media presence from scratch and introduced a structured approach to creative content.',
    'The project created a foundation for the brand to show up consistently online through educational reels, entertaining concepts, product showcases, and promotional content.',
    'It was the first step in bringing an established offline business into the digital conversation, with a clearer creative direction and a stronger way to communicate with its audience.']}
  ],
  take:{h:'Don’t just show the product. Give people a reason to care.', p:'That was the thinking behind Muhammadi Electronics: turn everyday appliances into engaging content, make buying information easier to understand, and give a traditional retailer a digital personality.', lines:[['My role','Creative Director'],['My mission','Make the ordinary worth watching.']]},
  end:{l:'Watch the intro 🎬', h:'Meet Muhammadi Electronics.', p:'The brand intro film that sums up the look and feel of the project.', media:[vids(['Muhammadi Electronics/ME intro final.mov'],'9/16')]}
},
islamabad: {
  title: 'Islamabad Electronics', hook: 'A logo is just the beginning. 👀',
  tag: 'Building a brand that looks smarter, feels trustworthy, and stands out in the electronics game.',
  meta: [['My role','Creative Director'],['Industry','Home Appliances & Electronics'],['Location','G-15 & G-8, Islamabad']],
  sections: [
   {l:'The challenge 🎯', h:'Selling appliances is one thing. Building a brand is another.', p:[
    'In a market full of electronics stores competing for attention, simply showing products isn’t enough.',
    'Islamabad Electronics needed more than attractive posts. It needed a clear identity, a memorable look, and a positioning that gave customers a reason to remember the name.',
    'The goal? Build a brand that communicates value, earns trust, and feels consistent everywhere customers interact with it.'],
    media:[img('Islamabad Electronics/challenge-{i}',6)]},
   {l:'The big idea ⚡', h:'Smart Choice. Smart Savings.', p:[
    'Every strong brand needs a reason to exist in people’s minds. I developed the creative direction around one simple idea: <em>make smart appliance shopping feel easier and more accessible.</em>',
    'That thinking shaped the brand’s positioning, visual identity, communication style, and creative execution.',
    'Not just another electronics store. A brand built around making smarter choices without stretching your budget.']},
   {l:'From identity to execution 🎨', h:'Making the brand look the part, and play the part.', items:[
    ['Brand identity development','A cohesive visual direction that gave Islamabad Electronics a recognizable and consistent brand presence.'],
    ['Logo design','A distinctive logo that works across social media, promotional creatives, and other brand touchpoints.'],
    ['Brand positioning','With “Smart Choice, Smart Savings” as the central message, the communication centres on value, practical decisions, and customer needs.'],
    ['Creative execution','From visual concepts to campaign creatives and social content, translating the identity into work people can see, recognize, and connect with.']]},
   {l:'Leading the creative game 🎬', h:'Good ideas need good execution.', p:[
    'As Creative Director, my role went beyond coming up with concepts. I led a team, guided the creative process, and brought the different pieces together, making sure identity, messaging, and content worked toward the same vision.',
    'From the initial brand direction to the final creative output, the focus was on maintaining consistency while giving the team room to execute ideas effectively.',
    '<em>One vision. One brand. A team bringing it to life.</em>']},
   {l:'The outcome 🚀', h:'More than a logo. A foundation for recognition.', p:[
    'The project brought together brand identity, positioning, and creative execution under one direction. It gave Islamabad Electronics a clearer visual language and a defined message to carry across its customer-facing content.',
    'Because the real goal isn’t just to make a brand look good once. It’s to make it recognizable every time someone sees it.'],
    media:[vids(['Islamabad Electronics/AI-powered cinematic video_1','Islamabad Electronics/AI-powered cinematic video'],'9/16')]}
  ],
  take:{h:'Make it look smart. Make the message stick.', p:'This project brought together the parts of branding I enjoy most: building identities, finding the right positioning, directing creative work, and leading a team to turn ideas into execution.', lines:[['My contribution','Creative Direction · Brand Identity · Logo Design · Brand Positioning · Team Leadership · Creative Execution'],['The philosophy','A good brand gets noticed. A well-directed brand gets remembered.']]}
},
musketeers: {
  title: 'The 3 Musketeers 🍔', hook: 'Three Musketeers. One big appetite for bold ideas.',
  tag: 'Giving a fast-food brand a visual personality that hits harder than the first bite.',
  meta: [['My role','Creative Direction & Visual Content'],['Industry','Food & Beverage']],
  sections: [
   {l:'The mission 🎯', h:'Good food deserves good content.', p:[
    'Fast food is a competitive game. Everyone has burgers, everyone has deals, and everyone is fighting for attention.',
    'So the challenge wasn’t just to make food look delicious. It was to create visuals that made people stop scrolling, feel hungry, and remember the brand.',
    'I explored a bold, funky visual direction built around energetic layouts, punchy creatives, and food visuals that refused to look ordinary.']},
   {l:'The creative sauce ⚡', h:'Less ordinary. Extra flavour.', p:[
    'I leaned into a playful, high-energy aesthetic inspired by the bold attitude of modern fast-food branding. The direction combined striking compositions, strong typography, appetite-driven visuals, and creative concepts designed to give the brand more character.',
    '<em>The idea? Make the content feel as exciting as the food itself.</em>']},
   {l:'What went on the menu? 🎬', h:'Four dishes.', items:[
    ['Static designs that pop','Bold social media designs that brought products and promotions to life through punchy layouts and attention-grabbing visuals.',[img('Musketeers/static-{i}',10)]],
    ['AI-powered cinematic video','AI-assisted video creation to develop cinematic food visuals that added drama, movement, and a fresh creative angle.',[vids(['Musketeers/AI-powered cinematic video'],'16/9')]],
    ['Campaign & ad creatives','Promotional creatives designed to highlight offers, showcase products, and bring more energy to the brand’s digital presence.',[img('Musketeers/campaign-{i}',10)]],
    ['Special-day content','Themed content for occasions like Quaid-e-Azam Day and New Year, adapting the visual direction while keeping the brand front and center.',[img('Musketeers/special-{i}',8)]]]},
   {l:'From idea to feed 🚀', h:'Not just making food look good. Making the brand feel alive.', p:[
    'My focus was on turning creative ideas into a consistent stream of visual content, from the first concept to the final design or video.',
    'Each execution offered a different way to present the brand, whether through bold static artwork, promotional campaigns, or cinematic AI-assisted visuals.',
    'Because in fast food, the product might get the first look. <em>But the creative makes people look twice.</em>']}
  ],
  take:{h:'Big flavour needs big visuals.', p:'The 3 Musketeers gave me the opportunity to experiment with bold food branding, high-energy design, promotional storytelling, and AI-powered video concepts.', lines:[['My contribution','Creative Direction · Visual Design · Campaign Creatives · AI Video · Special-Day Content'],['The philosophy','Make it bold. Make it hungry-making. Make it memorable.']]}
}};

const dlg = document.getElementById('case-dialog'), body = document.getElementById('case-body');
const pad = n => String(n).padStart(2,'0');
const EXTS = ['jpg','png','webp','jpeg'];
const GAP = 12, AUTOPLAY_MS = 4500;
const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v,a,b) => Math.min(b, Math.max(a, v));
const fmt = s => isFinite(s) && s > 0 ? Math.floor(s/60) + ':' + pad(Math.floor(s%60)) : '';
const ratioOf = r => { if (!r) return 0; const [a,b] = String(r).split('/').map(Number); return b ? a/b : a; };
let cleanups = [];

const PLAY_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';

/* ---------- one media slot (image or video) ---------- */
function makeSlot(kind, path, i, cb){
  const el = document.createElement('figure'), s = {el, ratio:0, ready:false, failed:false};
  el.className = 'slot loading' + (kind === 'video' ? ' vid' : '');
  const ok = ratio => { if (s.ready || s.failed) return; s.ready = true; s.ratio = ratio; el.classList.remove('loading'); el.classList.add('ok'); cb(); };
  const fail = () => { if (s.ready || s.failed) return; s.failed = true; el.remove(); cb(); };

  if (kind === 'video') {
    const v = document.createElement('video');
    v.preload = 'metadata'; v.playsInline = true; v.setAttribute('playsinline','');
    const btn = document.createElement('button'), dur = document.createElement('span');
    btn.type = 'button'; btn.className = 'play'; btn.setAttribute('aria-label', 'Play video ' + i); btn.innerHTML = PLAY_SVG;
    dur.className = 'dur mono';
    v.addEventListener('loadedmetadata', () => { dur.textContent = fmt(v.duration); ok(v.videoWidth && v.videoHeight ? v.videoWidth / v.videoHeight : 0); });
    const VEXT = ['mp4','mov','webm','m4v'], vHasExt = /\.\w{2,4}$/.test(path); let ve = 0;
    v.addEventListener('error', () => { if (!vHasExt && ++ve < VEXT.length) v.src = path + '.' + VEXT[ve] + '#t=0.001'; else fail(); });
    v.addEventListener('play',  () => el.classList.add('playing'));
    v.addEventListener('pause', () => el.classList.remove('playing'));
    v.addEventListener('ended', () => el.classList.remove('playing'));
    btn.addEventListener('click', () => { v.controls = true; v.play().catch(() => {}); });
    v.src = (vHasExt ? path : path + '.' + VEXT[0]) + '#t=0.001';
    el.append(v, btn, dur);
  } else {
    const m = document.createElement('img'), hasExt = /\.\w{2,4}$/.test(path);
    let e = 0;
    m.alt = 'Project image ' + i; m.draggable = false; m.decoding = 'async';
    m.addEventListener('load', () => ok(m.naturalWidth && m.naturalHeight ? m.naturalWidth / m.naturalHeight : 0));
    m.addEventListener('error', () => { if (!hasExt && ++e < EXTS.length) m.src = path + '.' + EXTS[e]; else fail(); });
    m.src = hasExt ? path : path + '.' + EXTS[0];
    el.append(m);
  }
  return s;
}

/* ---------- a group of media: adapts to how many files really exist ---------- */
function initGroup(el){
  const d = el.dataset, kind = d.t === 'video' ? 'video' : 'image', forced = d.t === 'carousel';
  const fallbackR = ratioOf(d.r) || (kind === 'video' ? 9/16 : 4/5), baseVis = +d.vis || 0;
  const track = document.createElement('div'); track.className = 'mg-track';
  track.tabIndex = 0; track.setAttribute('role','group');
  const srcs = d.src.split('|');
  const slots = Array.from({length:+d.n}, (_,k) => makeSlot(kind, srcs.length > 1 ? srcs[k] : d.src.replace('{i}', k + 1), k + 1, refresh));
  slots.forEach(s => track.append(s.el));
  el.append(track);
  el.style.setProperty('--dur', AUTOPLAY_MS + 'ms');
  el.classList.add('settling');                       // hide the brief "counting files" flicker
  if (REDUCE) el.classList.add('noauto');

  const st = {count:slots.length, ratio:fallbackR};
  let pages = 1, idx = 0, lock = null, lockT = 0, raf = 0, ui = null, layout = '';
  const flags = new Set();
  const stopTimers = [];

  const live = () => slots.filter(s => !s.failed);
  const step = () => { const f = live()[0]; return f ? f.el.offsetWidth + GAP : 1; };
  const pause = (k,on) => { on ? flags.add(k) : flags.delete(k); el.classList.toggle('paused', flags.size > 0); };

  function refresh(){
    const l = live();
    if (!l.length) { (el.closest('.cs-gallery-car') || el).remove(); return; }
    const first = l.find(s => s.ready && s.ratio);
    st.count = l.length;
    st.ratio = clamp(first ? first.ratio : fallbackR, .5, 2);
    el.style.setProperty('--r', st.ratio);
    fit();
  }

  function fit(){
    const {count, ratio} = st, land = ratio >= 1.2, w = el.clientWidth || 640;
    const minW = land ? 300 : kind === 'video' ? 220 : 170;
    const fitCols = Math.max(1, Math.floor((w + GAP) / (minW + GAP)));
    const vis = Math.max(1, Math.min(baseVis || (land ? 2 : 3), fitCols));
    const cap = Math.max(land ? 2 : 4, vis);
    const asCar = (forced || count > cap) && count > vis;

    if (asCar) {
      layout = 'car';
      el.style.setProperty('--n', vis);
      setPages(count - vis + 1);
    } else {
      layout = 'grid';
      const cols = Math.min(count, fitCols, cap);
      el.style.setProperty('--cols', cols);
      el.style.setProperty('--iw', (cols > 1 || land) ? '1fr' : '380px');   // rows fill the full width; only a lone portrait item is capped
      setPages(1);
    }
    el.dataset.layout = layout;
    track.setAttribute('aria-roledescription', layout === 'car' ? 'carousel' : '');
  }

  /* ----- carousel UI (segments + arrows) ----- */
  function setPages(p){
    if (p === pages && (p > 1) === !!ui) return;
    pages = p;
    if (ui) { ui.remove(); ui = null; }
    if (p <= 1) { idx = 0; return; }
    idx = clamp(idx, 0, p - 1);
    ui = document.createElement('div'); ui.className = 'mg-ui';
    ui.innerHTML = '<div class="segs" role="tablist"></div><div class="mg-nav">' +
      '<button type="button" class="prev" aria-label="Previous">‹</button>' +
      '<button type="button" class="next" aria-label="Next">›</button></div>';
    const segs = ui.querySelector('.segs');
    for (let k = 0; k < p; k++) {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'seg'; b.setAttribute('aria-label', 'Go to slide ' + (k + 1));
      b.innerHTML = '<i></i>'; b.addEventListener('click', () => go(k)); segs.append(b);
    }
    segs.addEventListener('animationend', e => { if (e.target.parentElement.classList.contains('on')) go(idx + 1); });
    ui.querySelector('.prev').addEventListener('click', () => go(idx - 1));
    ui.querySelector('.next').addEventListener('click', () => go(idx + 1));
    el.append(ui);
    paint();
  }
  function paint(){
    if (!ui) return;
    ui.querySelectorAll('.seg').forEach((b,k) => { b.classList.toggle('done', k < idx); b.classList.toggle('on', k === idx); b.setAttribute('aria-selected', k === idx); });
    const i = ui.querySelector('.seg.on i');
    if (i) { i.style.animation = 'none'; void i.offsetWidth; i.style.animation = ''; }   // restart the progress fill
  }
  function go(i){
    if (pages <= 1) return;
    i = i >= pages ? 0 : i < 0 ? pages - 1 : i;      // wrap around
    lock = i; clearTimeout(lockT); lockT = setTimeout(() => { lock = null; }, 900);
    idx = i; paint();
    track.scrollTo({left: i * step(), behavior: REDUCE ? 'auto' : 'smooth'});
  }
  track.addEventListener('scroll', () => {
    if (raf || pages <= 1) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      if (lock !== null) { if (Math.abs(track.scrollLeft - lock * step()) < 2) lock = null; else return; }
      const i = clamp(Math.round(track.scrollLeft / step()), 0, pages - 1);
      if (i !== idx) { idx = i; paint(); }
    });
  }, {passive:true});
  track.addEventListener('keydown', e => {
    if (pages <= 1) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); go(idx - 1); }
  });

  /* ----- mouse drag (touch already scrolls natively) ----- */
  let drag = null, swallow = false;
  track.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse') { if (e.button !== 0 || pages <= 1 || e.target.closest('video[controls]')) return; drag = {x:e.clientX, s:track.scrollLeft, moved:false}; }
    pause('press', true);
  });
  const onMove = e => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (!drag.moved && Math.abs(dx) > 5) { drag.moved = true; track.classList.add('drag'); }
    if (drag.moved) track.scrollLeft = drag.s - dx;
  };
  const onUp = () => {
    pause('press', false);
    if (!drag) return;
    const moved = drag.moved; drag = null;
    if (moved) { track.classList.remove('drag'); swallow = true; setTimeout(() => { swallow = false; }, 0); go(clamp(Math.round(track.scrollLeft / step()), 0, pages - 1)); }
  };
  addEventListener('pointermove', onMove); addEventListener('pointerup', onUp); addEventListener('pointercancel', onUp);
  track.addEventListener('click', e => { if (swallow) { e.stopPropagation(); e.preventDefault(); } }, true);

  /* ----- autoplay pauses: hover, keyboard focus, press, playing video, off-screen, hidden tab ----- */
  el.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') pause('hover', true); });
  el.addEventListener('pointerleave', () => pause('hover', false));
  el.addEventListener('focusin',  e => { if (e.target.matches(':focus-visible')) pause('focus', true); });
  el.addEventListener('focusout', () => pause('focus', false));
  const media = e => {
    if (e.type === 'play') document.querySelectorAll('#case-body video').forEach(v => { if (v !== e.target) v.pause(); });
    pause('media', [...el.querySelectorAll('video')].some(v => !v.paused && !v.ended));
  };
  ['play','pause','ended'].forEach(t => el.addEventListener(t, media, true));
  const io = new IntersectionObserver(([en]) => pause('offscreen', !en.isIntersecting), {threshold:.25});
  io.observe(el);
  const vis = () => pause('hidden', document.hidden);
  document.addEventListener('visibilitychange', vis);
  const ro = new ResizeObserver(() => fit());
  ro.observe(el);
  setTimeout(() => el.classList.remove('settling'), 350);

  cleanups.push(() => {
    io.disconnect(); ro.disconnect(); clearTimeout(lockT);
    document.removeEventListener('visibilitychange', vis);
    removeEventListener('pointermove', onMove); removeEventListener('pointerup', onUp); removeEventListener('pointercancel', onUp);
  });
  fit();
}

function mediaHTML(groups){
  return (groups || []).map(g => `<div class="mg" data-t="${g.t}" data-src="${g.src}" data-n="${g.n}" data-r="${g.r || ''}"></div>`).join('');
}

// Gallery strip shown under section 2 of every case. Same auto-fit rules; up to 4 visible.
const GALLERY = {
  muhammadi:  'Muhammadi Electronics/img {i}',
  islamabad:  'Islamabad Electronics/img {i}',
  musketeers: 'Musketeers/img {i}'
};

function openCase(key){
  const c = CASES[key]; if (!c) return;
  const gallery = GALLERY[key]
    ? `<div class="cs-gallery-car"><div class="mg" data-t="carousel" data-src="${GALLERY[key]}" data-n="12" data-r="3/4" data-vis="3"></div></div>` : '';
  body.innerHTML = `
   <header class="cs-head">
     <p class="mono cs-kicker">Case study</p>
     <h2>${c.title}</h2>
     <p class="cs-hook">${c.hook}</p>
     <p class="cs-tag">${c.tag}</p>
     <dl class="cs-meta">${c.meta.map(([k,v])=>`<div><dt class="mono">${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
   </header>
   ${c.sections.map((s,i)=>`
   <section class="cs-sec">
     <div class="cs-num" aria-hidden="true">${pad(i+1)}</div>
     <div class="cs-txt">
       <p class="mono cs-label">${s.l}</p>
       <h3>${s.h}</h3>
       ${(s.p||[]).map(t=>`<p>${t}</p>`).join('')}
       ${mediaHTML(s.media)}
       ${s.items?`<div class="cs-items${s.items.some(x=>x[2])?' stack':''}">${s.items.map(([t,d,m])=>`<div><h4>${t}</h4><p>${d}</p>${mediaHTML(m)}</div>`).join('')}</div>`:''}
     </div>
   </section>
   ${i===1?gallery:''}`).join('')}
   <section class="cs-take">
     <p class="mono cs-label">The takeaway 💡</p>
     <h3>${c.take.h}</h3>
     <p>${c.take.p}</p>
     <dl>${c.take.lines.map(([k,v])=>`<div><dt class="mono">${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
   </section>
   ${c.end?`<section class="cs-end">
     <div>
       <p class="mono cs-label">${c.end.l}</p>
       <h3>${c.end.h}</h3>
       <p>${c.end.p}</p>
     </div>
     ${mediaHTML(c.end.media)}
   </section>`:''}`;
  dlg.showModal(); dlg.scrollTop = 0; document.body.style.overflow = 'hidden';
  body.querySelectorAll('.mg').forEach(initGroup);
}
document.querySelectorAll('[data-case]').forEach(b => b.addEventListener('click', () => openCase(b.dataset.case)));
document.getElementById('case-close').addEventListener('click', () => dlg.close());
dlg.addEventListener('close', () => {
  cleanups.forEach(f => f()); cleanups = [];
  document.body.style.overflow = ''; body.innerHTML = '';   // clearing also stops any playing video
});
