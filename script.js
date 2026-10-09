const ICONS = {
  calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/>',
  baby:'<circle cx="12" cy="8" r="4"/><path d="M5 21c0-4.2 3-6.5 7-6.5s7 2.3 7 6.5"/><path d="M10.5 8h.01M13.5 8h.01"/>',
  heart:'<path d="M12 20s-7.5-4.6-7.5-10.4A4.1 4.1 0 0 1 12 7.4a4.1 4.1 0 0 1 7.5 2.2C19.5 15.4 12 20 12 20z"/>',
  apple:'<path d="M12 8.5c-2-2-7-1.2-7 3.8 0 4.200 3 8.200 5 8.200 1 0 1.400-.5 2-.5s1 .5 2 .5c2 0 5-4 5-8.200 0-5-5-5.800-7-3.800z"/><path d="M12 8.500c0-2.300 1.200-4 3.200-4.500"/>',
  bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.800 10.600c.7.700 1.100 1.500 1.100 2.400h5.400c0-.9.400-1.700 1.100-2.400A6 6 0 0 0 12 3z"/>',
  feet:'<ellipse cx="8" cy="15" rx="3" ry="4.500"/><ellipse cx="16.500" cy="11" rx="2.600" ry="4"/><path d="M6 8.500h.01M8.200 8h.01M10.200 8.800h.01M15.500 5.500h.01M17.300 5.400h.01M19 6.200h.01"/>',
  steth:'<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v2a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="11" r="2"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z"/><path d="M8.500 12l2.500 2.500 4.500-4.500"/>',
  chat:'<path d="M4 5h16v11H9l-5 4z"/>',
  book:'<path d="M5 4h14v16H7a2 2 0 0 1-2-2z"/><path d="M5 18a2 2 0 0 1 2-2h12"/>',
  milk:'<path d="M9 3h6M10 3v3h4V3"/><path d="M8 8h8v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/><path d="M8 13h8"/>',
  thermo:'<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  users:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.500 3-5 6-5s6 1.500 6 5"/><circle cx="17" cy="9" r="2.500"/><path d="M17 14.500c2.500 0 4 1.300 4 4"/>',
  pin:'<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.500"/>',
  phone:'<path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  insta:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.500 6.500h.01"/>',
  whatsapp:'<path d="M4 20l1.300-4A8 8 0 1 1 8 18.700z"/><path d="M9 9c0 3 3 6 6 6l1-2-2-1-1 1c-1-.5-2-1.500-2.500-2.500l1-1-1-2z"/>',
  pencil:'<path d="M4 20h4L19 9l-4-4L4 16z"/>',
  map:'<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.500 9.500a2.500 2.500 0 1 1 3.500 2.300c-.7.400-1 .9-1 1.700M12 17h.01"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>'
};
const ICON_LABELS = {calendar:'Calendário',baby:'Bebê',heart:'Coração',apple:'Maçã',bulb:'Lâmpada',feet:'Pezinhos',steth:'Estetoscópio',shield:'Proteção',chat:'Conversa',book:'Livro',milk:'Mamadeira',thermo:'Termômetro',clock:'Relógio',users:'Pessoas'};
const icon = (n,cls='') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]||ICONS.heart}</svg>`;

const DEFAULTS = {
  clinic:{
    name:'NeoCare', tagline:'Clínica Pediátrica',
    phone:'(27) 3208-5888', whatsapp:'(27) 99287-6334',
    email:'neocareclinicapediatrica@gmail.com',
    instagram:'neocare.clinicapediatrica', followers:'6,4 mil',
    waMessage:'Olá! Gostaria de agendar uma consulta na NeoCare.',
    mapsUrl:'https://www.google.com/maps/search/?api=1&query=NeoCare+Cl%C3%ADnica+Pedi%C3%A1trica+Vila+Velha',
    footerText:'Pediatria e neonatologia com cuidado delicado e informação confiável para toda a família.'
  },
  hero:{
    where:'Pediatria e neonatologia em Vila Velha',
    title:'Cuidado delicado para cada fase do seu bebê',
    text:'Na NeoCare, a Dra. Lorena Tonetto acompanha recém-nascidos, bebês e crianças com escuta atenta e orientação clara para mães e pais, desde os primeiros dias de vida.',
    cta:'Agendar pelo WhatsApp', cta2:'Conhecer a clínica', image:'',
    differentials:[
      {icon:'baby', title:'Foco em recém-nascidos', text:'Atendimento especializado em neonatologia e nos primeiros meses de vida.'},
      {icon:'heart', title:'Acolhimento de verdade', text:'Consultas com tempo para ouvir suas dúvidas e orientar com carinho.'},
      {icon:'bulb', title:'Informação confiável', text:'Conteúdos para pais e mães, de introdução alimentar a sinais de alerta.'}
    ]
  },
  cta:{
    title:'Pronto para agendar a consulta?',
    text:'Fale com a nossa equipe pelo WhatsApp e escolha o melhor horário para você e seu bebê.'
  },
  about:{
    title:'Uma clínica pensada para quem está começando a cuidar',
    text:'A NeoCare nasceu para oferecer pediatria com olhar afetivo e forte base médica. Aqui, cada família é acolhida com tempo e atenção: acompanhamos o crescimento, o desenvolvimento e a alimentação do seu filho, tirando dúvidas em cada etapa.',
    button:'Conheça a nossa história', image:'',
    stats:[
      {value:'6,4 mil', label:'famílias que acompanham a clínica no Instagram'},
      {value:'281', label:'conteúdos educativos publicados'}
    ]
  },
  doctors:{
    title:'Corpo clínico',
    text:'Conheça quem cuida do seu filho.',
    button:'Ver todos os profissionais',
    items:[
      {name:'Dra. Lorena Tonetto', role:'Pediatra e neonatologista', bio:'Atua em pediatria e neonatologia, acompanhando o crescimento e o desenvolvimento de bebês e crianças com cuidado e orientação próxima às famílias.', photo:''}
    ]
  },
  specialties:{
    title:'Especialidades',
    text:'Do recém-nascido à infância, cuidado completo em um só lugar.',
    button:'Ver todas as especialidades',
    items:[
      {icon:'baby', title:'Neonatologia', text:'Acompanhamento do recém-nascido nos primeiros dias e meses de vida.'},
      {icon:'steth', title:'Pediatria geral', text:'Consultas de rotina e atendimento das queixas do dia a dia da criança.'},
      {icon:'feet', title:'Puericultura', text:'Acompanhamento do crescimento e do desenvolvimento em cada fase.'},
      {icon:'apple', title:'Introdução alimentar', text:'Orientação para começar a alimentação do bebê com segurança.'}
    ]
  },
  exams:{
    title:'Exames e procedimentos',
    text:'O que é feito na clínica e como se preparar para cada atendimento.',
    button:'Ver todos os exames e procedimentos',
    items:[
      {icon:'calendar', title:'Consulta de puericultura', text:'Avaliação periódica de peso, altura e desenvolvimento.'},
      {icon:'baby', title:'Avaliação do recém-nascido', text:'Primeira consulta com orientações sobre amamentação e cuidados em casa.'},
      {icon:'shield', title:'Orientação de exames de rotina', text:'Quando e quais exames pedir em cada fase da infância.'},
      {icon:'heart', title:'Acompanhamento do desenvolvimento', text:'Observação dos marcos motores, da fala e do comportamento.'}
    ]
  },
  insurance:{
    title:'Convênios',
    button:'Ver lista completa de convênios',
    items:[{name:'Particular'},{name:'Unimed'},{name:'Bradesco Saúde'},{name:'SulAmérica'}],
    note:'Consulte a cobertura do seu plano pelo WhatsApp antes de agendar.'
  },
  hours:{
    title:'Horários de atendimento',
    button:'Ver agenda e informações de atendimento',
    items:[
      {day:'Segunda a sexta', time:'8h às 18h'},
      {day:'Sábado', time:'8h às 12h'},
      {day:'Domingo e feriados', time:'Fechado'}
    ],
    note:'Atendimento com hora marcada.'
  },
  convenios:{ text:'Confira os planos atendidos e os horários de funcionamento.' },
  location:{
    title:'Onde estamos',
    text:'Fácil de chegar e com acolhimento desde a recepção.',
    address:'Endereço da clínica, Vila Velha, ES',
    reference:'Ponto de referência (edite no painel)',
    button:'Como chegar e estacionamento'
  },
  content:{
    title:'Dicas para pais e mães',
    text:'Os conteúdos que a Dra. Lorena compartilha no Instagram, organizados em um só lugar.',
    button:'Ver todos os conteúdos do blog',
    posts:[
      {icon:'apple', tag:'Introdução alimentar', title:'Por onde começar a introdução alimentar', text:'Os primeiros passos para apresentar novos alimentos ao bebê.', url:''},
      {icon:'thermo', tag:'Sinais de alerta', title:'Febre no bebê: quando procurar ajuda', text:'Aprenda a reconhecer os sinais que pedem atendimento.', url:''},
      {icon:'feet', tag:'Primeiros meses', title:'Rotina de sono nos primeiros meses', text:'O que esperar do sono do recém-nascido e como ajudar.', url:''},
      {icon:'milk', tag:'Amamentação', title:'Dúvidas comuns sobre amamentação', text:'Orientações para mães e pais nas primeiras semanas.', url:''}
    ]
  },
  faq:{
    title:'Dúvidas frequentes',
    button:'Ver todas as dúvidas',
    items:[
      {q:'Com que idade devo levar meu bebê à primeira consulta?', a:'O ideal é agendar a primeira consulta nos primeiros dias de vida. Fale com a nossa equipe pelo WhatsApp para encontrar o melhor horário.'},
      {q:'Como sei se meu bebê já pode começar a introdução alimentar?', a:'Depende de cada criança. Na consulta, a pediatra avalia os sinais de prontidão e orienta o passo a passo para a sua família.'},
      {q:'Quais sinais pedem atendimento imediato?', a:'Febre em recém-nascidos, dificuldade para respirar e recusa de alimento exigem atenção rápida. Em caso de urgência, procure um pronto-atendimento.'},
      {q:'Como agendo uma consulta?', a:'Pelo WhatsApp ou pelo telefone da clínica. Respondemos em horário comercial.'}
    ]
  }
};

const KEY = 'neocare_cms_v1';
const clone = o => JSON.parse(JSON.stringify(o));
function merge(base, over){
  for(const k in over){
    if(Array.isArray(over[k])) base[k] = over[k];
    else if(over[k] && typeof over[k]==='object' && base[k] && typeof base[k]==='object') merge(base[k], over[k]);
    else base[k] = over[k];
  }
  return base;
}
function load(){
  try{ const s = localStorage.getItem(KEY); if(s) return merge(clone(DEFAULTS), JSON.parse(s)); }catch(e){}
  return clone(DEFAULTS);
}
let data = load();
let saveTimer;
function save(){
  try{ localStorage.setItem(KEY, JSON.stringify(data)); flashSaved(); }
  catch(e){ toast('Não foi possível salvar: a imagem pode ser grande demais. Use uma imagem menor.'); }
}
const getPath = (o,p) => p.split('.').reduce((a,k)=> a==null?a:a[k], o);
function setPath(o,p,v){
  const ks = p.split('.'); const last = ks.pop();
  const t = ks.reduce((a,k)=>a[k], o); t[last] = v;
}

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug = s => String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const digits = s => String(s||'').replace(/\D/g,'');
function waLink(){
  let d = digits(data.clinic.whatsapp); if(d.length<=11) d = '55'+d;
  return `https://wa.me/${d}?text=${encodeURIComponent(data.clinic.waMessage)}`;
}
const telLink = () => 'tel:+55'+digits(data.clinic.phone);
const chip = tab => `<button type="button" class="edit-chip" data-edit="${tab}">${icon('pencil')} Editar esta seção</button>`;
const pageBtn = (label, page, cls='btn-ghost') => `<a class="btn ${cls}" href="#" data-page="${esc(page)}">${esc(label)}</a>`;
const ph = ic => `<div class="ph">${icon(ic)}</div>`;

const NAV = [
  ['Sobre','#sobre'],['Corpo clínico','#corpo-clinico'],['Especialidades','#especialidades'],
  ['Exames','#exames'],['Convênios e horários','#convenios'],['Localização','#localizacao'],['Blog','#conteudos']
];
const MAPA = [
  ['heart','Sobre a clínica','#sobre'],['steth','Corpo clínico','#corpo-clinico'],['baby','Especialidades','#especialidades'],
  ['calendar','Exames','#exames'],['shield','Convênios e horários','#convenios'],['pin','Onde estamos','#localizacao'],
  ['bulb','Dicas e blog','#conteudos'],['help','Dúvidas','#duvidas']
];

function logo(){
  const c = data.clinic;
  return `<span class="logo">
    <svg class="logo-heart" viewBox="0 0 200 180" fill="none" stroke="#D6BCC8" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M100 164S18 114 18 62A42 42 0 0 1 100 46a42 42 0 0 1 82 16c0 52-82 102-82 102z"/><circle cx="100" cy="82" r="15"/><path d="M70 132c4-18 15-26 30-26s26 8 30 26"/></svg>
    <span class="logo-t"><b>${esc(c.name)}</b><i>${esc(c.tagline)}</i></span></span>`;
}

function header(){
  return `<header class="hdr"><div class="wrap hdr-in">
    <a class="brand" href="#inicio" aria-label="${esc(data.clinic.name)} ${esc(data.clinic.tagline)} – início">${logo()}</a>
    <nav class="nav" aria-label="Menu principal">${NAV.map(n=>`<a href="${n[1]}">${n[0]}</a>`).join('')}</nav>
    <a class="btn btn-wa hdr-cta" href="${waLink()}" target="_blank" rel="noopener">${icon('whatsapp')} Agendar</a>
    <button class="burger" type="button" aria-label="Abrir menu" aria-expanded="false">${icon('menu')}</button>
  </div></header>`;
}

function hero(){
  const h = data.hero, c = data.clinic;
  const art = h.image
    ? `<img class="art-img" src="${esc(h.image)}" alt="${esc(c.name)}">`
    : `<div class="art-bg"></div>
       <svg class="art-svg" viewBox="0 0 200 180" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M100 164S18 114 18 62A42 42 0 0 1 100 46a42 42 0 0 1 82 16c0 52-82 102-82 102z"/><circle cx="100" cy="82" r="15"/><path d="M70 132c4-18 15-26 30-26s26 8 30 26"/></svg>`;
  return `<section class="hero" id="inicio">${chip('inicio')}
    <div class="wrap hero-in">
      <div class="hero-copy">
        <p class="hero-where">${esc(h.where)}</p>
        <h1>${esc(h.title)}</h1>
        <p class="lead">${esc(h.text)}</p>
        <div class="btns">
          <a class="btn btn-wa btn-lg" href="${waLink()}" target="_blank" rel="noopener">${icon('whatsapp')} ${esc(h.cta)}</a>
          <a class="btn btn-ghost btn-lg" href="#sobre">${esc(h.cta2)}</a>
        </div>
        <p class="hero-meta">Prefere ligar? <a href="${telLink()}">${esc(c.phone)}</a></p>
      </div>
      <div class="art" aria-hidden="${h.image?'false':'true'}">${art}
        <span class="orb o1">${icon('feet')}</span><span class="orb o2">${icon('apple')}</span><span class="orb o3">${icon('steth')}</span>
      </div>
    </div>
    <div class="wrap">
      <div class="diffs">${h.differentials.map(d=>`<div class="diff"><span class="ic-c">${icon(d.icon)}</span><div><h3>${esc(d.title)}</h3><p>${esc(d.text)}</p></div></div>`).join('')}</div>
      <nav class="map" aria-label="Mapa da clínica">
        <p class="map-t">Tudo o que você precisa saber, em um só lugar</p>
        <div class="map-row">${MAPA.map(m=>`<a class="map-it" href="${m[2]}"><span class="c">${icon(m[0])}</span>${m[1]}</a>`).join('')}</div>
      </nav>
    </div></section>`;
}

function ctaBand(){
  const c = data.cta;
  return `<section class="cta-band" id="agendar">${chip('inicio')}<div class="wrap cta-in">
    <div><h2>${esc(c.title)}</h2><p>${esc(c.text)}</p></div>
    <div class="btns">
      <a class="btn btn-light btn-lg" href="${waLink()}" target="_blank" rel="noopener">${icon('whatsapp')} Chamar no WhatsApp</a>
      <a class="btn btn-ghost btn-lg" href="${telLink()}">${icon('phone')} ${esc(data.clinic.phone)}</a>
    </div></div></section>`;
}

function about(){
  const a = data.about;
  return `<section class="sec" id="sobre">${chip('sobre')}<div class="wrap split">
    <div class="media">${a.image?`<img src="${esc(a.image)}" alt="Sobre a ${esc(data.clinic.name)}">`:ph('heart')}</div>
    <div class="txt"><h2>${esc(a.title)}</h2><p>${esc(a.text)}</p>
      <ul class="stats">${a.stats.map(s=>`<li><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></li>`).join('')}</ul>
      ${pageBtn(a.button,'/sobre','btn-primary')}
    </div></div></section>`;
}

function doctors(){
  const d = data.doctors;
  const cards = d.items.map(m=>`<article class="doc">
    <div class="doc-photo">${m.photo?`<img src="${esc(m.photo)}" alt="${esc(m.name)}">`:ph('baby')}</div>
    <div class="doc-b"><h3>${esc(m.name)}</h3><p class="role">${esc(m.role)}</p><p class="bio">${esc(m.bio)}</p>
      ${pageBtn('Ver perfil completo','/corpo-clinico/'+slug(m.name),'btn-ghost')}</div></article>`).join('');
  return `<section class="sec tint" id="corpo-clinico">${chip('medicos')}<div class="wrap">
    <div class="sec-h center"><h2>${esc(d.title)}</h2><p>${esc(d.text)}</p></div>
    <div class="docs">${cards}</div>
    <div class="sec-foot">${pageBtn(d.button,'/corpo-clinico','btn-primary')}</div></div></section>`;
}

function specialties(){
  const s = data.specialties;
  return `<section class="sec" id="especialidades">${chip('especialidades')}<div class="wrap">
    <div class="sec-h"><h2>${esc(s.title)}</h2><p>${esc(s.text)}</p></div>
    <div class="spec">${s.items.map(i=>`<div class="spec-it"><span class="c">${icon(i.icon)}</span><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></div>`).join('')}</div>
    <div class="sec-foot">${pageBtn(s.button,'/especialidades','btn-primary')}</div></div></section>`;
}

function exams(){
  const e = data.exams;
  return `<section class="sec tint" id="exames">${chip('exames')}<div class="wrap">
    <div class="sec-h center"><h2>${esc(e.title)}</h2><p>${esc(e.text)}</p></div>
    <div class="rows">${e.items.map(i=>`<div class="row">${icon(i.icon)}<div><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></div></div>`).join('')}</div>
    <div class="sec-foot">${pageBtn(e.button,'/exames-e-procedimentos','btn-primary')}</div></div></section>`;
}

function insuranceHours(){
  const i = data.insurance, h = data.hours;
  return `<section class="sec" id="convenios">${chip('convenios')}<div class="wrap">
    <div class="sec-h"><h2>Convênios e horários</h2><p>${esc(data.convenios.text)}</p></div>
    <div class="duo">
      <div class="pnl a"><h3>${esc(i.title)}</h3>
        <div class="chips">${i.items.map(x=>`<span class="chip">${esc(x.name)}</span>`).join('')}</div>
        <p class="note">${esc(i.note)}</p>${pageBtn(i.button,'/convenios','btn-primary')}</div>
      <div class="pnl b"><h3>${esc(h.title)}</h3>
        <ul class="hours">${h.items.map(x=>`<li><b>${esc(x.day)}</b><span>${esc(x.time)}</span></li>`).join('')}</ul>
        <p class="note">${esc(h.note)}</p>${pageBtn(h.button,'/horarios','btn-ghost')}</div>
    </div></div></section>`;
}

function mapArt(){
  return `<svg viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="500" height="400" fill="#F4EAEF"/>
    <path d="M0 300C120 280 200 330 320 290S460 250 500 270V400H0z" fill="#E9D8E1"/>
    <g stroke="#fff" stroke-width="16" stroke-linecap="round" fill="none"><path d="M-10 120L520 160"/><path d="M130-10L190 410"/><path d="M340-10L300 410"/><path d="M-10 250L520 230"/></g>
    <g stroke="#fff" stroke-width="7" stroke-linecap="round" fill="none"><path d="M60-10L90 410"/><path d="M420-10L450 410"/><path d="M-10 60L520 80"/><path d="M-10 340L520 330"/></g>
    <g transform="translate(250 205)"><ellipse cx="0" cy="78" rx="30" ry="9" fill="#8E5F77" opacity=".18"/>
      <path d="M0 78C0 78 -50 26 -50-8a50 50 0 0 1 100 0C50 26 0 78 0 78z" fill="#8E5F77"/><circle cx="0" cy="-8" r="19" fill="#fff"/>
      <path d="M0 3s-11-6-11-13a6 6 0 0 1 11-3 6 6 0 0 1 11 3c0 7-11 13-11 13z" fill="#D6BCC8"/></g></svg>`;
}

function location_(){
  const l = data.location, c = data.clinic;
  return `<section class="sec tint" id="localizacao">${chip('local')}<div class="wrap split">
    <div class="txt"><h2>${esc(l.title)}</h2><p>${esc(l.text)}</p>
      <ul class="loc-list">
        <li>${icon('pin')}<div>${esc(l.address)}<small>${esc(l.reference)}</small></div></li>
        <li>${icon('phone')}<div><a href="${telLink()}">${esc(c.phone)}</a><small>WhatsApp: <a href="${waLink()}" target="_blank" rel="noopener">${esc(c.whatsapp)}</a></small></div></li>
        <li>${icon('mail')}<div><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></div></li>
      </ul>
      <div class="btns"><a class="btn btn-primary" href="${esc(c.mapsUrl)}" target="_blank" rel="noopener">Abrir no Google Maps</a>${pageBtn(l.button,'/localizacao','btn-ghost')}</div>
    </div>
    <div class="mapcard">${mapArt()}</div></div></section>`;
}

function posts(){
  const c = data.content, ig = 'https://www.instagram.com/'+esc(data.clinic.instagram);
  return `<section class="sec" id="conteudos">${chip('conteudos')}<div class="wrap">
    <div class="sec-h"><h2>${esc(c.title)}</h2><p>${esc(c.text)}</p></div>
    <div class="posts">${c.posts.map(p=>`<a class="post" href="${esc(p.url||ig)}" target="_blank" rel="noopener">
      <div class="post-i">${icon(p.icon)}<em>${esc(p.tag)}</em></div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></a>`).join('')}</div>
    <div class="sec-foot"><div class="btns">${pageBtn(c.button,'/blog','btn-primary')}
      <a class="btn btn-ghost" href="${ig}" target="_blank" rel="noopener">${icon('insta')} @${esc(data.clinic.instagram)}</a></div></div></div></section>`;
}

function faq(){
  const f = data.faq;
  return `<section class="sec tint" id="duvidas">${chip('faq')}<div class="wrap">
    <div class="sec-h center"><h2>${esc(f.title)}</h2></div>
    <div class="faq">${f.items.map(i=>`<details><summary>${esc(i.q)}</summary><p>${esc(i.a)}</p></details>`).join('')}</div>
    <div class="sec-foot">${pageBtn(f.button,'/duvidas-frequentes','btn-primary')}</div></div></section>`;
}

function footer(){
  const c = data.clinic;
  return `<footer class="foot">${chip('geral')}<div class="wrap">
    <div class="foot-g">
      <div>${logo()}<p style="margin-top:18px">${esc(c.footerText)}</p></div>
      <div><h4>Contato</h4><ul>
        <li><a href="${telLink()}">${esc(c.phone)}</a></li>
        <li><a href="${waLink()}" target="_blank" rel="noopener">WhatsApp ${esc(c.whatsapp)}</a></li>
        <li><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li></ul></div>
      <div><h4>Navegação</h4><ul>${NAV.map(n=>`<li><a href="${n[1]}">${n[0]}</a></li>`).join('')}</ul></div>
      <div><h4>Redes</h4><ul><li><a href="https://www.instagram.com/${esc(c.instagram)}" target="_blank" rel="noopener">Instagram @${esc(c.instagram)}</a></li>
        <li>${esc(c.followers)} seguidores</li></ul></div>
    </div>
    <p class="foot-note">© ${new Date().getFullYear()} ${esc(c.name)} ${esc(c.tagline)}. Protótipo de alta fidelidade, ainda não publicado.</p>
  </div></footer>`;
}

function renderSite(){
  document.getElementById('site').innerHTML =
    header() + '<main>' + hero() + ctaBand() + about() + doctors() + specialties() + exams() + insuranceHours() + location_() + posts() + faq() + '</main>' + footer();
  const fw = document.getElementById('fab-wa');
  fw.href = waLink(); fw.innerHTML = icon('whatsapp') + '<span>Agendar consulta</span>';
}

const IC = {k:'icon', l:'Ícone', t:'icon'};
const SCHEMA = [
  {id:'geral', label:'Geral', fields:[
    {p:'clinic.name', l:'Nome da clínica', t:'text'},
    {p:'clinic.tagline', l:'Subtítulo do logotipo', t:'text'},
    {p:'clinic.phone', l:'Telefone', t:'text'},
    {p:'clinic.whatsapp', l:'WhatsApp para agendamento', t:'text'},
    {p:'clinic.waMessage', l:'Mensagem inicial do WhatsApp', t:'area'},
    {p:'clinic.email', l:'E-mail', t:'text'},
    {p:'clinic.instagram', l:'Instagram (sem @)', t:'text'},
    {p:'clinic.followers', l:'Seguidores', t:'text'},
    {p:'clinic.footerText', l:'Texto do rodapé', t:'area'}
  ]},
  {id:'inicio', label:'Topo e agendamento', fields:[
    {p:'hero.where', l:'Linha acima do título', t:'text'},
    {p:'hero.title', l:'Título principal', t:'text'},
    {p:'hero.text', l:'Texto de apresentação', t:'area'},
    {p:'hero.cta', l:'Botão principal (WhatsApp)', t:'text'},
    {p:'hero.cta2', l:'Botão secundário', t:'text'},
    {p:'hero.image', l:'Foto do topo (opcional)', t:'image'},
    {p:'cta.title', l:'Faixa de agendamento: título', t:'text'},
    {p:'cta.text', l:'Faixa de agendamento: texto', t:'area'}
  ], lists:[
    {p:'hero.differentials', l:'Diferenciais', titleKey:'title', blank:{icon:'heart',title:'Novo diferencial',text:''},
     item:[IC,{k:'title',l:'Título',t:'text'},{k:'text',l:'Descrição',t:'area'}]}
  ]},
  {id:'sobre', label:'Sobre a clínica', fields:[
    {p:'about.title', l:'Título', t:'text'},
    {p:'about.text', l:'Texto', t:'area'},
    {p:'about.button', l:'Texto do botão', t:'text'},
    {p:'about.image', l:'Foto da clínica', t:'image'}
  ], lists:[
    {p:'about.stats', l:'Números de destaque', titleKey:'value', blank:{value:'0',label:'descrição'},
     item:[{k:'value',l:'Número',t:'text'},{k:'label',l:'Descrição',t:'text'}]}
  ]},
  {id:'medicos', label:'Corpo clínico', fields:[
    {p:'doctors.title', l:'Título', t:'text'},
    {p:'doctors.text', l:'Texto', t:'area'},
    {p:'doctors.button', l:'Texto do botão', t:'text'}
  ], lists:[
    {p:'doctors.items', l:'Profissionais (um card por pessoa)', titleKey:'name', blank:{name:'Novo profissional',role:'Especialidade',bio:'',photo:''},
     item:[{k:'name',l:'Nome',t:'text'},{k:'role',l:'Especialidade',t:'text'},{k:'bio',l:'Resumo',t:'area'},{k:'photo',l:'Foto',t:'image'}]}
  ]},
  {id:'especialidades', label:'Especialidades', fields:[
    {p:'specialties.title', l:'Título', t:'text'},
    {p:'specialties.text', l:'Texto', t:'area'},
    {p:'specialties.button', l:'Texto do botão', t:'text'}
  ], lists:[
    {p:'specialties.items', l:'Especialidades', titleKey:'title', blank:{icon:'heart',title:'Nova especialidade',text:''},
     item:[IC,{k:'title',l:'Título',t:'text'},{k:'text',l:'Descrição',t:'area'}]}
  ]},
  {id:'exames', label:'Exames', fields:[
    {p:'exams.title', l:'Título', t:'text'},
    {p:'exams.text', l:'Texto', t:'area'},
    {p:'exams.button', l:'Texto do botão', t:'text'}
  ], lists:[
    {p:'exams.items', l:'Exames e procedimentos', titleKey:'title', blank:{icon:'calendar',title:'Novo item',text:''},
     item:[IC,{k:'title',l:'Título',t:'text'},{k:'text',l:'Descrição',t:'area'}]}
  ]},
  {id:'convenios', label:'Convênios e horários', fields:[
    {p:'convenios.text', l:'Texto da seção', t:'area'},
    {p:'insurance.title', l:'Título dos convênios', t:'text'},
    {p:'insurance.note', l:'Aviso sobre convênios', t:'area'},
    {p:'insurance.button', l:'Botão dos convênios', t:'text'},
    {p:'hours.title', l:'Título dos horários', t:'text'},
    {p:'hours.note', l:'Aviso sobre horários', t:'text'},
    {p:'hours.button', l:'Botão dos horários', t:'text'}
  ], lists:[
    {p:'insurance.items', l:'Convênios atendidos', titleKey:'name', blank:{name:'Novo convênio'}, item:[{k:'name',l:'Nome',t:'text'}]},
    {p:'hours.items', l:'Horários', titleKey:'day', blank:{day:'Dia',time:'Horário'}, item:[{k:'day',l:'Dia(s)',t:'text'},{k:'time',l:'Horário',t:'text'}]}
  ]},
  {id:'local', label:'Localização', fields:[
    {p:'location.title', l:'Título', t:'text'},
    {p:'location.text', l:'Texto', t:'area'},
    {p:'location.address', l:'Endereço', t:'area'},
    {p:'location.reference', l:'Ponto de referência', t:'text'},
    {p:'clinic.mapsUrl', l:'Link do Google Maps', t:'text'},
    {p:'location.button', l:'Texto do botão', t:'text'}
  ]},
  {id:'conteudos', label:'Conteúdos do Instagram', fields:[
    {p:'content.title', l:'Título', t:'text'},
    {p:'content.text', l:'Texto', t:'area'},
    {p:'content.button', l:'Texto do botão', t:'text'}
  ], lists:[
    {p:'content.posts', l:'Conteúdos', titleKey:'title', blank:{icon:'bulb',tag:'Tema',title:'Novo conteúdo',text:'',url:''},
     item:[IC,{k:'tag',l:'Tema',t:'text'},{k:'title',l:'Título',t:'text'},{k:'text',l:'Resumo',t:'area'},{k:'url',l:'Link do post (opcional)',t:'text'}]}
  ]},
  {id:'faq', label:'Dúvidas', fields:[
    {p:'faq.title', l:'Título', t:'text'},
    {p:'faq.button', l:'Texto do botão', t:'text'}
  ], lists:[
    {p:'faq.items', l:'Perguntas e respostas', titleKey:'q', blank:{q:'Nova pergunta',a:''},
     item:[{k:'q',l:'Pergunta',t:'text'},{k:'a',l:'Resposta',t:'area'}]}
  ]}
];
const LISTS = SCHEMA.flatMap(t => t.lists || []);
let currentTab = 'geral', openKey = null;

const panel = document.getElementById('panel');
const pbody = document.getElementById('pbody');
const tabsEl = document.getElementById('tabs');

function fieldHTML(def, path, titleKey){
  const v = getPath(data, path);
  const label = esc(def.l);
  if(def.t === 'area') return `<label class="f"><span>${label}</span><textarea data-p="${path}">${esc(v)}</textarea></label>`;
  if(def.t === 'icon') return `<label class="f"><span>${label}</span><select data-p="${path}">${Object.keys(ICON_LABELS).map(k=>`<option value="${k}" ${k===v?'selected':''}>${ICON_LABELS[k]}</option>`).join('')}</select></label>`;
  if(def.t === 'image') return `<div class="f"><span>${label}</span><div class="imgrow">
      <div class="thumb" style="${v?`background-image:url('${esc(v)}')`:''}"></div>
      <label class="btn-s">Enviar imagem<input type="file" accept="image/*" data-img="${path}" hidden></label>
      ${v?`<button type="button" class="btn-s danger" data-act="clear-img" data-p="${path}">Remover</button>`:''}</div></div>`;
  return `<label class="f"><span>${label}</span><input type="text" data-p="${path}" ${titleKey?'data-title="1"':''} value="${esc(v)}"></label>`;
}

function listHTML(L){
  const arr = getPath(data, L.p) || [];
  let h = `<div class="list"><div class="list-h"><strong>${esc(L.l)}</strong><button type="button" class="btn-s" data-act="add" data-list="${L.p}">+ Adicionar</button></div>`;
  arr.forEach((it,i)=>{
    const key = `${L.p}.${i}`;
    h += `<details class="item" ${openKey===key?'open':''}><summary><span>${esc(it[L.titleKey]||'(sem título)')}</span></summary><div class="item-b">`;
    L.item.forEach(f => { h += fieldHTML(f, `${key}.${f.k}`, f.k===L.titleKey); });
    h += `<div class="ctl">
      <button type="button" class="btn-s" data-act="up" data-list="${L.p}" data-i="${i}" ${i===0?'disabled':''}>Subir</button>
      <button type="button" class="btn-s" data-act="down" data-list="${L.p}" data-i="${i}" ${i===arr.length-1?'disabled':''}>Descer</button>
      <button type="button" class="btn-s danger" data-act="del" data-list="${L.p}" data-i="${i}">Remover</button></div>`;
    h += `</div></details>`;
  });
  return h + '</div>';
}

function renderTabs(){
  tabsEl.innerHTML = SCHEMA.map(t=>`<button type="button" role="tab" data-tab="${t.id}" class="${t.id===currentTab?'on':''}" aria-selected="${t.id===currentTab}">${t.label}</button>`).join('');
}
function renderPanel(){
  const top = pbody.scrollTop;
  const t = SCHEMA.find(x => x.id === currentTab);
  let h = `<h3>${t.label}</h3><p class="hint">As mudanças aparecem na página na hora e ficam salvas neste navegador.</p>`;
  (t.fields||[]).forEach(f => { h += fieldHTML(f, f.p); });
  (t.lists||[]).forEach(L => { h += listHTML(L); });
  pbody.innerHTML = h;
  pbody.scrollTop = top;
}
function openPanel(tab){
  if(tab) currentTab = tab;
  renderTabs(); renderPanel();
  panel.classList.add('open'); panel.setAttribute('aria-hidden','false');
  document.body.classList.add('editing');
}
function closePanel(){
  panel.classList.remove('open'); panel.setAttribute('aria-hidden','true');
  document.body.classList.remove('editing');
}

function persist(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(()=>{ save(); renderSite(); }, 150);
}
function flashSaved(){
  const s = document.getElementById('saved');
  s.textContent = '✓ Salvo'; s.style.opacity = 1;
}

function fileToDataURL(file, max=900){
  return new Promise((res, rej)=>{
    const r = new FileReader();
    r.onload = () => {
      const img = new Image();
      img.onload = () => {
        const s = Math.min(1, max/Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.round(img.width*s); c.height = Math.round(img.height*s);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        res(c.toDataURL('image/jpeg', .82));
      };
      img.onerror = rej; img.src = r.result;
    };
    r.onerror = rej; r.readAsDataURL(file);
  });
}

pbody.addEventListener('input', e=>{
  const el = e.target, p = el.dataset.p;
  if(!p) return;
  setPath(data, p, el.value);
  if(el.dataset.title){
    const s = el.closest('details')?.querySelector('summary span');
    if(s) s.textContent = el.value || '(sem título)';
  }
  persist();
});
pbody.addEventListener('change', async e=>{
  const el = e.target;
  if(el.dataset.img){
    const f = el.files[0]; if(!f) return;
    try{ setPath(data, el.dataset.img, await fileToDataURL(f)); save(); renderSite(); renderPanel(); }
    catch(err){ toast('Não foi possível ler essa imagem. Tente outro arquivo.'); }
  }
});
pbody.addEventListener('click', e=>{
  const b = e.target.closest('[data-act]'); if(!b) return;
  const act = b.dataset.act;
  if(act === 'clear-img'){ setPath(data, b.dataset.p, ''); save(); renderSite(); renderPanel(); return; }
  const L = LISTS.find(x => x.p === b.dataset.list); if(!L) return;
  const arr = getPath(data, L.p), i = +b.dataset.i;
  if(act === 'add'){ arr.push(clone(L.blank)); openKey = `${L.p}.${arr.length-1}`; }
  if(act === 'del'){ if(!confirm('Remover este item?')) return; arr.splice(i,1); openKey = null; }
  if(act === 'up' && i>0){ [arr[i-1],arr[i]] = [arr[i],arr[i-1]]; openKey = `${L.p}.${i-1}`; }
  if(act === 'down' && i<arr.length-1){ [arr[i+1],arr[i]] = [arr[i],arr[i+1]]; openKey = `${L.p}.${i+1}`; }
  save(); renderSite(); renderPanel();
});
tabsEl.addEventListener('click', e=>{
  const b = e.target.closest('[data-tab]'); if(!b) return;
  currentTab = b.dataset.tab; openKey = null; renderTabs(); renderPanel();
});
document.getElementById('panel-close').addEventListener('click', closePanel);
document.getElementById('fab-edit').addEventListener('click', ()=> openPanel());
document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closePanel(); });

document.getElementById('btn-export').addEventListener('click', ()=>{
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = 'neocare-conteudo.json'; a.click();
  URL.revokeObjectURL(a.href);
});
document.getElementById('file-import').addEventListener('change', e=>{
  const f = e.target.files[0]; if(!f) return;
  const r = new FileReader();
  r.onload = () => {
    try{ data = merge(clone(DEFAULTS), JSON.parse(r.result)); save(); renderSite(); renderPanel(); toast('Conteúdo importado.'); }
    catch(err){ toast('Arquivo inválido. Use um JSON exportado por este painel.'); }
  };
  r.readAsText(f); e.target.value = '';
});
document.getElementById('btn-reset').addEventListener('click', ()=>{
  if(!confirm('Voltar todo o conteúdo ao original? As edições feitas serão perdidas.')) return;
  data = clone(DEFAULTS); try{ localStorage.removeItem(KEY); }catch(e){}
  renderSite(); renderPanel(); toast('Conteúdo original restaurado.');
});

let toastTimer;
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(()=> t.classList.remove('show'), 3800);
}
function setMenu(open){
  document.body.classList.toggle('menu-open', open);
  const b = document.querySelector('.burger');
  if(b){ b.setAttribute('aria-expanded', open); b.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); }
}
document.addEventListener('click', e=>{
  const t = e.target;
  const page = t.closest('[data-page]');
  if(page){
    e.preventDefault();
    toast(`Aqui o botão levaria à página interna "${page.dataset.page}". Ela fica fora do protótipo, mas já está no mapa do site.`);
    return;
  }
  const ed = t.closest('[data-edit]');
  if(ed){ openPanel(ed.dataset.edit); return; }
  if(t.closest('.burger')){ setMenu(!document.body.classList.contains('menu-open')); return; }
  if(t.closest('.nav a')) setMenu(false);
});

renderSite();