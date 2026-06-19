'use strict';
if (typeof THREE === 'undefined') { throw new Error('Three.js no cargó'); }

// ─── CONTENT ─────────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    eyebrow: 'Welcome',
    heading: "Hello, I'm John",
    body: '',
    speech: "Welcome! Walk freely in the hexagonal space — approach each glowing wall to explore a section of my career."
  },
  {
    eyebrow: 'About Me',
    heading: 'Senior Engineering Leader',
    body: `
      <div class="panel-section">
        <p>Seasoned engineering executive with 25+ years delivering software across five countries, including 12+ years in technical leadership. Experienced in driving AI adoption at an organizational level — from integrating AI-powered tooling into development pipelines to leading teams through technology modernization.</p>
        <br>
        <p>Currently leading AI implementation initiatives at Sightview, applying LLM-based solutions, intelligent automation, and vibe-coding methodologies to accelerate delivery. Combines deep full-stack engineering expertise with strong people leadership (teams up to 35), agile program management, and a track record of measurable outcomes.</p>
        <br>
        <div class="skill-grid" style="margin-bottom:12px;">
          <span class="skill-tag">AI Strategy & Implementation</span>
          <span class="skill-tag">Engineering Leadership (35+ HC)</span>
          <span class="skill-tag">Cloud Architecture</span>
          <span class="skill-tag">LLM Integration & Automation</span>
          <span class="skill-tag">CI/CD · DevOps</span>
          <span class="skill-tag">Agile Program Management</span>
          <span class="skill-tag">Stakeholder & Vendor Management</span>
          <span class="skill-tag">Team Building & Mentorship</span>
        </div>
        <p style="color:#4a7ab5;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;">Languages</p>
        <p style="margin-top:5px;">Spanish (Native) &nbsp;·&nbsp; English C1/C2 &nbsp;·&nbsp; Portuguese B1</p>
      </div>`,
    speech: "Engineering executive leading AI adoption, cloud modernization, and teams of up to 35 across five countries."
  },
  {
    eyebrow: 'Technical Skills',
    heading: 'Technology Stack',
    body: `
      <div class="panel-section">
        <h3>AI & LLMs</h3>
        <div class="skill-grid">
          <span class="skill-tag">LLM Integration</span><span class="skill-tag">AI-Assisted Dev</span>
          <span class="skill-tag">Vibe Coding</span><span class="skill-tag">Prompt Engineering</span>
          <span class="skill-tag">Claude API</span><span class="skill-tag">Python AI Frameworks</span>
        </div>
      </div>
      <div class="panel-section">
        <h3>Languages</h3>
        <div class="skill-grid">
          <span class="skill-tag">C# · .NET / .NET Core</span><span class="skill-tag">Python</span>
          <span class="skill-tag">JavaScript</span><span class="skill-tag">PHP</span>
          <span class="skill-tag">SQL</span><span class="skill-tag">Visual Basic</span>
        </div>
      </div>
      <div class="panel-section">
        <h3>Front-End</h3>
        <div class="skill-grid">
          <span class="skill-tag">React</span><span class="skill-tag">Angular</span>
          <span class="skill-tag">Xamarin</span><span class="skill-tag">ASP.NET</span>
          <span class="skill-tag">HTML / CSS</span>
        </div>
      </div>
      <div class="panel-section">
        <h3>Cloud & DevOps</h3>
        <div class="skill-grid">
          <span class="skill-tag">AWS (Cloud Practitioner)</span><span class="skill-tag">Azure DevOps</span>
          <span class="skill-tag">CI/CD</span><span class="skill-tag">SonarCloud</span>
          <span class="skill-tag">ARM Templates</span>
        </div>
      </div>
      <div class="panel-section">
        <h3>Databases</h3>
        <div class="skill-grid">
          <span class="skill-tag">SQL Server</span><span class="skill-tag">MySQL</span>
          <span class="skill-tag">PostgreSQL</span><span class="skill-tag">Oracle</span>
          <span class="skill-tag">IBM DB2</span>
        </div>
      </div>`,
    speech: "Full-stack from AI/LLMs to cloud infrastructure — React, .NET, Python, AWS, Azure and everything in between."
  },
  {
    eyebrow: 'Work History',
    heading: 'Experience',
    body: `
      <div class="panel-section">
        <div class="job">
          <div class="job-title">Lead .NET Engineer</div>
          <div class="job-company">Sightview · Remote · Sep 2024 – Present</div>
          <ul class="job-bullets">
            <li>Spearhead AI adoption, implementing LLM-assisted workflows and vibe-coding methodologies</li>
            <li>Lead legacy modernization from monolithic .NET Framework to cloud-native AWS architecture</li>
            <li>Deliver Twilio and SendGrid API integrations (SMS, Voice, Email) for enterprise clients via programmatic sub-account management</li>
          </ul>
        </div>
        <div class="job">
          <div class="job-title">Senior Consultant Engineer</div>
          <div class="job-company">Belvicto · Freelance · Mar 2024 – Aug 2024</div>
          <ul class="job-bullets">
            <li>End-to-end software consulting for clients across Colombia and the Americas</li>
            <li>Designed and deployed web platforms for four commercial clients</li>
          </ul>
        </div>
        <div class="job">
          <div class="job-title">Software Development Leader I</div>
          <div class="job-company">Kantar IBOPE Media · Bogotá · Jun 2021 – Feb 2024</div>
          <ul class="job-bullets">
            <li>Directed 11 direct reports + 30 indirect contributors across LATAM, USA, and Europe</li>
            <li>Built and led a new Colombia-based development team that absorbed and resolved backlogs from
other latam countries in record time</li>
          </ul>
        </div>
        <div class="job">
          <div class="job-title">Associate Director of Development</div>
          <div class="job-company">MERLOS.net · Badalona, Spain · Jan 2018 – Jun 2021</div>
          <ul class="job-bullets">
            <li>Led distributed teams in Spain and Colombia through full SDLC for ERP products</li>
            <li>Earned Sage50 Certified Developer designation</li>
          </ul>
        </div>
        <div class="job">
          <div class="job-title">Technical Director</div>
          <div class="job-company">Andina de Software S.A.S. · Cali · Dec 2015 – Dec 2017</div>
          <ul class="job-bullets">
            <li>Built Colombian Electronic Invoice module (C# + SQL Server)</li>
            <li>Recovered churned accounts within 12 months</li>
          </ul>
        </div>
      </div>`,
    speech: "From Colombia to Usa to Spain to LATAM — 25 years leading teams and shipping software that creates measurable impact."
  },
  {
    eyebrow: 'Education & Certifications',
    heading: 'Always Learning',
    body: `
      <div class="panel-section">
        <h3>Recent Certifications</h3>
        <div class="cert-item">AI Mastery Certificate Program — Coursiv, May 2026</div>
        <div class="cert-item">Claude Code 101 / Claude 101 — Anthropic Education, May 2026</div>
        <div class="cert-item">Mastering Jira Work Management — Sightview Software, Apr 2026</div>
        <div class="cert-item">Python Essentials 1 & 2 — Cisco Networking Academy, Oct–Dec 2025</div>
        <div class="cert-item">AWS Cloud Quest: Cloud Practitioner — Amazon Web Services, Jun 2025</div>
        <div class="cert-item">EF SET English Certificate 74/100 (C2 Proficient) — Jun 2024</div>
        <div class="cert-item">Microsoft Certified: Azure Fundamentals — Jan 2023</div>
        <div class="cert-item">Master Online — ThePowerMBA + Harvard Business Publishing, 2022–2023</div>
        <div class="cert-item">Sage50 Cloud Certified Developer — Jan 2020</div>
        <div class="cert-item">Microsoft Certified Professional — Jan 2013</div>
      </div>
      <div class="panel-section">
        <h3>Academic Background</h3>
        <div class="cert-item">Systems Engineering Technology — CCEP, Cali, 1993–1997</div>
        <div class="cert-item">Python Specialization — Universidad Austral + University of Michigan (Coursera)</div>
        <div class="cert-item">Artificial Intelligence — UNAM, Mexico (Coursera), 2020</div>
      </div>`,
    speech: "AWS, AI, Python, MBA — committed to staying sharp at every level of the stack and the business."
  },
  {
    eyebrow: 'Get In Touch',
    heading: "Let's Connect",
    body: `
      <div class="panel-section">
        <p>Committed to knowledge collaboration in software engineering and technical leadership, connecting with peers globally to share insights, experiences, and best practices.</p>
        <br>
        <div style="display:flex;flex-direction:column;gap:12px;margin-top:8px;">
          <div style="display:flex;align-items:center;gap:10px;background:#0d1422;border:1px solid #1a2a40;border-radius:8px;padding:10px 14px;">
            <span style="font-size:18px;">✉</span>
            <div>
              <div style="font-size:10px;color:#3a5a80;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:2px;">Email</div>
              <a href="mailto:jhbelalc@gmail.com" style="color:#6ea8e8;font-size:13px;text-decoration:none;">jhbelalc@gmail.com</a>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;background:#0d1422;border:1px solid #1a2a40;border-radius:8px;padding:10px 14px;">
            <span style="font-size:18px;">☎</span>
            <div>
              <div style="font-size:10px;color:#3a5a80;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:2px;">Phone / WhatsApp</div>
              <span style="color:#b0c8e8;font-size:13px;">+57 ### ### ##10</span>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;background:#0d1422;border:1px solid #1a2a40;border-radius:8px;padding:10px 14px;">
            <span style="font-size:18px;">⊙</span>
            <div>
              <div style="font-size:10px;color:#3a5a80;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:2px;">Location</div>
              <span style="color:#b0c8e8;font-size:13px;">Cali, Valle del Cauca, Colombia</span>
            </div>
          </div>
        </div>
      </div>`,
    speech: "Ready to lead your next project — remote-first, time-zone flexible, and passionate about quality delivery."
  }
];

// ─── WALL CONFIG ─────────────────────────────────────────────────────────────
const WALL_CFG = [
  { sIdx: 4, label: 'Education',  col: 0xb89420 },
  { sIdx: 5, label: 'Contact',    col: 0x20a0c0 },
  { sIdx:-1, label: '',           col: 0x304060 },
  { sIdx: 1, label: 'About',      col: 0x3a80d0 },
  { sIdx: 2, label: 'Skills',     col: 0x20c070 },
  { sIdx: 3, label: 'Experience', col: 0xb030d0 },
];

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const HEX_A    = 8;
const WALL_H   = 3.8;
const WALL_W   = HEX_A * 2 / Math.sqrt(3);
const PROX     = 3.0;
const P_RAD    = 0.35;
const MOV_SPD  = 0.08;
const TURN_SPD = 0.040;
const CAM_DIST = 5.5;
const CAM_H    = 2.8;

// ─── GLOBALS ─────────────────────────────────────────────────────────────────
let scene, camera, renderer, clock;
let avatar, avatarHead, avatarArm, legL, legR, playerGlow;
let waveArm = null; // { shoulder, elbow } — right arm hierarchy for wave emote
let wallData = [];
let pGeo, pPos;
let totalTime = 0;
let activeSection = 0;
let speechTO = null;

const P = { x: 0, z: 0, angle: 0, walkPhase: 0, moving: false };
const keys = {};

const emote = { type: 'none', t: 0, dur: 0 };
function triggerEmote(type) {
  emote.type = type;
  emote.t    = 0;
  emote.dur  = type === 'wave' ? 1.8 : type === 'jump' ? 0.7 : 0;
}

let camAngle = 0;
const camPos = new THREE.Vector3(0, CAM_H, -CAM_DIST);

// ─── INIT ────────────────────────────────────────────────────────────────────
function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x07101c);
  scene.fog = new THREE.FogExp2(0x07101c, 0.018);

  camera = new THREE.PerspectiveCamera(68, innerWidth / innerHeight, 0.1, 200);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  clock = new THREE.Clock();

  buildLights();
  buildArena();
  buildExterior();
  buildAvatar();
  buildParticles();

  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
  window.addEventListener('keydown', e => {
    keys[e.key] = true;
    if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) e.preventDefault();
  });
  window.addEventListener('keyup', e => { keys[e.key] = false; });

  initJoystick();

  document.querySelectorAll('.nav-btn').forEach(b =>
    b.addEventListener('click', () => teleport(+b.dataset.section))
  );
  document.querySelectorAll('.dot').forEach(d =>
    d.addEventListener('click', () => teleport(+d.dataset.section))
  );

  animate();
}

// ─── LIGHTS ──────────────────────────────────────────────────────────────────
function buildLights() {
  scene.add(new THREE.AmbientLight(0x1a2845, 0.9));

  const sun = new THREE.DirectionalLight(0x5090d0, 1.2);
  sun.position.set(6, 14, 5); sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = sun.shadow.camera.bottom = -16;
  sun.shadow.camera.right = sun.shadow.camera.top   =  16;
  sun.shadow.camera.far = 50;
  scene.add(sun);

  const fill = new THREE.DirectionalLight(0x2040a0, 0.4);
  fill.position.set(-5, 3, -5); scene.add(fill);
  const top = new THREE.PointLight(0x60aaff, 0.8, 20);
  top.position.set(0, 5, 0); scene.add(top);
}

// ─── LABEL TEXTURE ───────────────────────────────────────────────────────────
function makeLabel(text) {
  const cv = document.createElement('canvas');
  cv.width = 512; cv.height = 128;
  const ctx = cv.getContext('2d');
  ctx.clearRect(0, 0, 512, 128);
  ctx.shadowColor = '#88ccff'; ctx.shadowBlur = 30;
  ctx.fillStyle = '#d0eaff';
  ctx.font = 'bold 58px Segoe UI, Arial, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 64);
  return new THREE.CanvasTexture(cv);
}

// ─── HEX ARENA ───────────────────────────────────────────────────────────────
function buildArena() {
  const vR = HEX_A / Math.cos(Math.PI / 6);

  const floor = new THREE.Mesh(
    new THREE.CylinderGeometry(vR, vR, 0.12, 6),
    new THREE.MeshStandardMaterial({ color: 0x0a1828, roughness: 0.8, metalness: 0.2 })
  );
  floor.rotation.y = Math.PI / 6;
  floor.receiveShadow = true;
  scene.add(floor);

  const grid = new THREE.GridHelper(HEX_A * 2.2, 14, 0x1a3050, 0x0d1825);
  grid.position.y = 0.07; scene.add(grid);

  const disc = new THREE.Mesh(
    new THREE.CircleGeometry(1.1, 32),
    new THREE.MeshStandardMaterial({ color: 0x2060a0, emissive: 0x2060a0, emissiveIntensity: 0.7, transparent: true, opacity: 0.4 })
  );
  disc.rotation.x = -Math.PI / 2; disc.position.y = 0.08; scene.add(disc);

  const rim = new THREE.Mesh(
    new THREE.CylinderGeometry(vR + 0.06, vR + 0.06, 0.14, 6, 1, true),
    new THREE.MeshStandardMaterial({ color: 0x3070c0, emissive: 0x3070c0, emissiveIntensity: 1.2, transparent: true, opacity: 0.6, side: THREE.BackSide })
  );
  rim.rotation.y = Math.PI / 6; scene.add(rim);

  wallData = [];
  for (let i = 0; i < 6; i++) {
    const a   = i * Math.PI / 3;
    const wx  = HEX_A * Math.sin(a);
    const wz  = HEX_A * Math.cos(a);
    const cfg = WALL_CFG[i];

    const mat = new THREE.MeshStandardMaterial({
      color: cfg.col, emissive: cfg.col, emissiveIntensity: 0.15,
      roughness: 0.5, metalness: 0.3, transparent: true, opacity: 0.25
    });
    const wall = new THREE.Mesh(new THREE.BoxGeometry(WALL_W, WALL_H, 0.22), mat);
    wall.position.set(wx, WALL_H / 2, wz);
    wall.rotation.y = a;
    scene.add(wall);

    const barMat = new THREE.MeshStandardMaterial({ color: cfg.col, emissive: cfg.col, emissiveIntensity: 3.0 });
    const baseBar = new THREE.Mesh(new THREE.BoxGeometry(WALL_W, 0.08, 0.26), barMat);
    baseBar.position.set(wx, 0.08, wz);
    baseBar.rotation.y = a; scene.add(baseBar);

    const topBar = new THREE.Mesh(new THREE.BoxGeometry(WALL_W, 0.08, 0.26), barMat.clone());
    topBar.position.set(wx, WALL_H, wz);
    topBar.rotation.y = a; scene.add(topBar);

    if (cfg.label) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeLabel(cfg.label), transparent: true, opacity: 0.9 }));
      sp.position.set(wx * 0.84, WALL_H * 0.62, wz * 0.84);
      sp.scale.set(3.6, 0.9, 1);
      scene.add(sp);
    }

    const fg = new THREE.Mesh(
      new THREE.CircleGeometry(1.5, 24),
      new THREE.MeshStandardMaterial({ color: cfg.col, emissive: cfg.col, emissiveIntensity: 0.5, transparent: true, opacity: 0.2 })
    );
    fg.rotation.x = -Math.PI / 2;
    fg.position.set(wx * 0.72, 0.09, wz * 0.72);
    scene.add(fg);

    const pt = new THREE.PointLight(cfg.col, 0.0, 10);
    pt.position.set(wx * 0.78, WALL_H * 0.5, wz * 0.78);
    scene.add(pt);

    wallData.push({ mat, topBar: topBar.material, baseBar: barMat, pt, a, wx, wz, sIdx: cfg.sIdx });
  }
}

// ─── EXTERIOR ────────────────────────────────────────────────────────────────
function buildExterior() {
  const gnd = new THREE.Mesh(
    new THREE.PlaneGeometry(160, 160),
    new THREE.MeshStandardMaterial({ color: 0x060e18, roughness: 0.95 })
  );
  gnd.rotation.x = -Math.PI / 2; gnd.position.y = -0.06; scene.add(gnd);

  const bPos = [
    [-14,-15],[-9,-17],[9,-16],[15,-14],[-17,-11],[17,-11],
    [-12,-20],[12,-19],[1,-23],[-20,-17],[20,-16],[7,-25],[-7,-25],
    [21,-9],[-21,-9],[0,-28],[14,-28],[-14,-28]
  ];
  bPos.forEach(([bx, bz]) => {
    const h = 2 + Math.random() * 8, w = 0.35 + Math.random() * 0.6;
    const b = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, w * 1.1),
      new THREE.MeshStandardMaterial({ color: Math.random() > 0.5 ? 0x0e2040 : 0x091525, roughness: 0.85 })
    );
    b.position.set(bx + (Math.random()-0.5)*2, h/2, bz + (Math.random()-0.5)*2);
    b.castShadow = true; scene.add(b);

    const cap = new THREE.Mesh(
      new THREE.BoxGeometry(w+0.08, 0.04, w*1.1+0.08),
      new THREE.MeshStandardMaterial({ color: 0x2060a0, emissive: 0x2060a0, emissiveIntensity: 1.8 })
    );
    cap.position.set(b.position.x, h+0.02, b.position.z);
    scene.add(cap);
  });
}

// ─── AVATAR ──────────────────────────────────────────────────────────────────
function buildAvatar() {
  avatar = new THREE.Group();

  const M = (geo, col) => new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: col, roughness: 0.7 }));
  const skin = 0xd4956a, shirt = 0x1a3a6a, pants = 0x0d1a2e;
  const hair  = 0x1a1410, shoe  = 0x0a0a0a;

  const torso = M(new THREE.BoxGeometry(0.62, 0.76, 0.32), shirt);
  torso.position.set(0, 1.4, 0); torso.castShadow = true; avatar.add(torso);
  const collar = M(new THREE.BoxGeometry(0.22, 0.09, 0.34), 0xeeeeee);
  collar.position.set(0, 1.73, 0); avatar.add(collar);
  const neck = M(new THREE.CylinderGeometry(0.1, 0.1, 0.16, 8), skin);
  neck.position.set(0, 1.84, 0); avatar.add(neck);

  avatarHead = new THREE.Group();
  const head = M(new THREE.BoxGeometry(0.46, 0.5, 0.42), skin);
  head.position.set(0, 2.09, 0); head.castShadow = true; avatarHead.add(head);
  const hairTop = M(new THREE.BoxGeometry(0.48, 0.21, 0.44), hair);
  hairTop.position.set(0, 2.29, -0.01); avatarHead.add(hairTop);
  [[-0.26, 2.14],[0.26, 2.14]].forEach(([hx, hy]) => {
    const hs = M(new THREE.BoxGeometry(0.09, 0.32, 0.4), hair);
    hs.position.set(hx, hy, -0.01); avatarHead.add(hs);
  });

  const faceZ = 0.225;
  [[-0.11, 2.08],[0.11, 2.08]].forEach(([ex, ey]) => {
    const ew = M(new THREE.BoxGeometry(0.11, 0.08, 0.02), 0xf0f0f0);
    ew.position.set(ex, ey, faceZ); avatarHead.add(ew);
    const ei = M(new THREE.BoxGeometry(0.06, 0.06, 0.02), 0x3a6aaa);
    ei.position.set(ex, ey, faceZ + 0.005); avatarHead.add(ei);
    const ep = M(new THREE.BoxGeometry(0.03, 0.03, 0.02), 0x050508);
    ep.position.set(ex, ey, faceZ + 0.01); avatarHead.add(ep);
    const gl = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.006, 6, 20),
      new THREE.MeshStandardMaterial({ color: 0x222244, metalness: 0.9, roughness: 0.1 }));
    gl.position.set(ex, ey, faceZ + 0.015); avatarHead.add(gl);
    const eb = M(new THREE.BoxGeometry(0.11, 0.025, 0.02), hair);
    eb.position.set(ex, ey + 0.09, faceZ + 0.01); avatarHead.add(eb);
  });
  const bridge = M(new THREE.BoxGeometry(0.06, 0.012, 0.012), 0x111128);
  bridge.position.set(0, 2.08, faceZ + 0.015); avatarHead.add(bridge);
  const nose = M(new THREE.BoxGeometry(0.06, 0.09, 0.07), skin);
  nose.position.set(0, 2.00, faceZ + 0.01); avatarHead.add(nose);
  const smile = M(new THREE.BoxGeometry(0.18, 0.035, 0.03), 0x6a2a20);
  smile.position.set(0, 1.93, faceZ); avatarHead.add(smile);
  const teeth = M(new THREE.BoxGeometry(0.13, 0.025, 0.03), 0xeeeedd);
  teeth.position.set(0, 1.925, faceZ + 0.005); avatarHead.add(teeth);
  avatar.add(avatarHead);

  // Arms — left arm is flat (no wave), right arm has shoulder→elbow→hand hierarchy
  avatarArm = new THREE.Group();
  avatarArm.position.set(0, 1.55, 0);

  // Left arm (flat, walk swing only)
  const uAGeo = new THREE.BoxGeometry(0.19, 0.36, 0.19);
  const laUpper = M(uAGeo, shirt); laUpper.position.set(-0.43, 0, 0); laUpper.castShadow = true; avatarArm.add(laUpper);
  const laLower = M(uAGeo, skin);  laLower.position.set(-0.43, -0.36, 0); laLower.castShadow = true; avatarArm.add(laLower);
  const laHand  = M(new THREE.BoxGeometry(0.16, 0.13, 0.11), skin); laHand.position.set(-0.43, -0.56, 0.02); avatarArm.add(laHand);

  // Right arm — hierarchical: shoulder pivot → upper arm mesh + elbow pivot → forearm + hand
  const rShoulder = new THREE.Group(); // pivot at shoulder (0.43, 0, 0) relative to avatarArm
  rShoulder.position.set(0.43, 0, 0);
  avatarArm.add(rShoulder);

  const raUpper = M(uAGeo, shirt); raUpper.position.set(0, 0, 0); raUpper.castShadow = true; rShoulder.add(raUpper);

  const rElbow = new THREE.Group(); // pivot at bottom of upper arm
  rElbow.position.set(0, -0.18, 0);
  rShoulder.add(rElbow);

  const raLower = M(uAGeo, skin);  raLower.position.set(0, -0.18, 0); raLower.castShadow = true; rElbow.add(raLower);
  const raHand  = M(new THREE.BoxGeometry(0.16, 0.13, 0.11), skin); raHand.position.set(0, -0.38, 0.02); rElbow.add(raHand);

  waveArm = { shoulder: rShoulder, elbow: rElbow };
  avatar.add(avatarArm);

  legL = M(new THREE.BoxGeometry(0.23, 0.52, 0.23), pants);
  legL.position.set(-0.18, 0.77, 0); legL.castShadow = true; avatar.add(legL);
  legR = M(new THREE.BoxGeometry(0.23, 0.52, 0.23), pants);
  legR.position.set(0.18, 0.77, 0);  legR.castShadow = true; avatar.add(legR);
  const fGeo = new THREE.BoxGeometry(0.21, 0.11, 0.30);
  [[-0.18],[0.18]].forEach(([lx]) => {
    const f = M(fGeo, shoe); f.position.set(lx, 0.5, 0.04); avatar.add(f);
  });

  avatar.position.set(0, 0, 0); avatar.castShadow = true;
  avatar.rotation.y = P.angle;
  scene.add(avatar);

  playerGlow = new THREE.Mesh(
    new THREE.CircleGeometry(0.6, 24),
    new THREE.MeshStandardMaterial({ color: 0x3070c0, emissive: 0x3070c0, emissiveIntensity: 1.0, transparent: true, opacity: 0.35 })
  );
  playerGlow.rotation.x = -Math.PI / 2; playerGlow.position.y = 0.07; scene.add(playerGlow);
}

// ─── PARTICLES ───────────────────────────────────────────────────────────────
function buildParticles() {
  const N = 700;
  pPos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    pPos[i*3]   = (Math.random()-0.5) * 90;
    pPos[i*3+1] = Math.random() * 28;
    pPos[i*3+2] = (Math.random()-0.5) * 90;
  }
  pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({
    color: 0x4070b0, size: 0.07, transparent: true, opacity: 0.5, sizeAttenuation: true
  })));
}

// ─── HEX CONTAINMENT ─────────────────────────────────────────────────────────
function clampHex(x, z) {
  for (let i = 0; i < 6; i++) {
    const a = i * Math.PI / 3;
    const nx = Math.sin(a), nz = Math.cos(a);
    const d  = x * nx + z * nz;
    if (d > HEX_A - P_RAD) {
      const over = d - (HEX_A - P_RAD);
      x -= nx * over; z -= nz * over;
    }
  }
  return [x, z];
}

// ─── PLAYER UPDATE ───────────────────────────────────────────────────────────
function updatePlayer(dt) {
  const mspd = MOV_SPD  * 60 * dt;
  const tspd = TURN_SPD * 60 * dt;

  if (keys['ArrowLeft']  || keys['a'] || keys['A'] || keys['_joy_left'])  P.angle += tspd;
  if (keys['ArrowRight'] || keys['d'] || keys['D'] || keys['_joy_right']) P.angle -= tspd;

  let moved = false;
  const fx = Math.sin(P.angle), fz = Math.cos(P.angle);
  if (keys['ArrowUp']   || keys['w'] || keys['W'] || keys['_joy_fwd']) {
    [P.x, P.z] = clampHex(P.x + fx * mspd, P.z + fz * mspd); moved = true;
  }
  if (keys['ArrowDown'] || keys['s'] || keys['S'] || keys['_joy_back']) {
    [P.x, P.z] = clampHex(P.x - fx * mspd, P.z - fz * mspd); moved = true;
  }
  P.moving = moved;
  if (moved) P.walkPhase += dt * 9;

  if (emote.type !== 'none') {
    emote.t += dt;
    if (emote.t >= emote.dur) emote.type = 'none';
  }

  let baseY = moved ? Math.abs(Math.sin(P.walkPhase)) * 0.05 : 0;
  if (emote.type === 'jump') {
    const prog = emote.t / emote.dur;
    baseY = Math.sin(Math.PI * prog) * 0.9;
  }

  avatar.position.set(P.x, baseY, P.z);
  avatar.rotation.y = P.angle;

  if (emote.type === 'jump') {
    const prog = emote.t / emote.dur;
    const tuck = Math.sin(Math.PI * prog) * 0.3;
    legL.position.z =  tuck;
    legR.position.z = -tuck;
  } else {
    legL.position.z = moved ? Math.sin(P.walkPhase) * 0.14 : 0;
    legR.position.z = moved ? Math.sin(P.walkPhase + Math.PI) * 0.14 : 0;
  }

  if (avatarArm) {
    if (emote.type === 'wave' && waveArm) {
      // rotation.z positive = arm sweeps left = UP for right arm (which hangs down by default)
      waveArm.shoulder.rotation.z = Math.PI * 0.75;              // arm raised high
      waveArm.shoulder.rotation.x = Math.sin(emote.t * 7) * 0.1; // slight fore-aft sway
      waveArm.elbow.rotation.z    = Math.sin(emote.t * 7) * 0.6 - 0.4; // forearm waves
      avatarArm.rotation.x = 0;
    } else if (emote.type === 'jump' && waveArm) {
      const spread = Math.sin(Math.PI * emote.t / emote.dur) * 0.8;
      waveArm.shoulder.rotation.z =  spread;
      waveArm.shoulder.rotation.x = 0;
      waveArm.elbow.rotation.z    = 0;
      avatarArm.children[0].rotation.z = -spread; // left arm spreads opposite
      avatarArm.rotation.x = 0;
    } else {
      // Reset right arm hierarchy
      if (waveArm) {
        waveArm.shoulder.rotation.z = 0;
        waveArm.shoulder.rotation.x = 0;
        waveArm.elbow.rotation.z    = 0;
      }
      avatarArm.children[0].rotation.z = 0;
      avatarArm.rotation.x = moved ? Math.sin(P.walkPhase) * 0.25 : Math.sin(totalTime * 2) * 0.06;
    }
  }

  if (avatarHead) {
    avatarHead.rotation.y = Math.sin(totalTime * 0.55) * 0.1;
    avatarHead.rotation.x = Math.sin(totalTime * 0.7) * 0.03;
  }
  playerGlow.position.set(P.x, 0.07, P.z);
}

// ─── CAMERA UPDATE ───────────────────────────────────────────────────────────
function updateCamera(dt) {
  // Camera angle only follows player while moving — freezes when idle/at a section
  if (P.moving) {
    let diff = P.angle - camAngle;
    while (diff >  Math.PI) diff -= 2 * Math.PI;
    while (diff < -Math.PI) diff += 2 * Math.PI;
    camAngle += diff * Math.min(1, dt * 4.5);
  }

  const bx = P.x - Math.sin(camAngle) * CAM_DIST;
  const bz = P.z - Math.cos(camAngle) * CAM_DIST;
  const sp = Math.min(1, dt * 5);
  camPos.x += (bx    - camPos.x) * sp;
  camPos.y += (CAM_H - camPos.y) * sp;
  camPos.z += (bz    - camPos.z) * sp;
  camera.position.copy(camPos);
  camera.lookAt(P.x, 1.6, P.z);
}

// ─── PROXIMITY CHECK ─────────────────────────────────────────────────────────
function checkProximity() {
  let nearWall = -1, nearDist = PROX;

  for (let i = 0; i < 6; i++) {
    const { a, sIdx, mat, topBar, baseBar, pt } = wallData[i];
    const nx = Math.sin(a), nz = Math.cos(a);
    const dist = HEX_A - (P.x * nx + P.z * nz);
    const prox = Math.max(0, 1 - dist / PROX);

    mat.emissiveIntensity    = 0.15 + prox * 1.2;
    mat.opacity              = 0.22 + prox * 0.45;
    topBar.emissiveIntensity  = 3.0 + prox * 4;
    baseBar.emissiveIntensity = 3.0 + prox * 4;
    pt.intensity = prox * 2.0;

    if (sIdx >= 0 && dist < nearDist) { nearDist = dist; nearWall = i; }
  }

  const newSec = nearWall >= 0 ? wallData[nearWall].sIdx : 0;
  if (newSec !== activeSection) {
    activeSection = newSec;
    showSection(newSec);
  }
}

// ─── SHOW SECTION ────────────────────────────────────────────────────────────
function showSection(idx) {
  if (idx === 5) triggerEmote('jump');
  else if (idx !== 0) triggerEmote('wave');

  const s = SECTIONS[idx];
  const panel = document.getElementById('info-panel');
  panel.classList.add('hidden');

  setTimeout(() => {
    document.getElementById('panel-eyebrow').textContent = s.eyebrow;
    document.getElementById('panel-heading').textContent = s.heading;
    document.getElementById('panel-body').innerHTML = idx === 0 ? homeBody() : s.body;
    if (idx !== 0) panel.classList.remove('hidden');
  }, 280);

  document.getElementById('speech-bubble').classList.remove('hidden');
  document.getElementById('speech-text').textContent = s.speech;
  clearTimeout(speechTO);
  speechTO = setTimeout(() => document.getElementById('speech-bubble').classList.add('hidden'), 4500);

  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', +b.dataset.section === idx));
  document.querySelectorAll('.dot').forEach(d => d.classList.toggle('active', +d.dataset.section === idx));
  document.getElementById('hint').style.opacity = idx === 0 ? '1' : '0';
}

function homeBody() {
  return `
    <div style="font-size:22px;font-weight:700;color:#dce6f5;line-height:1.3;margin-bottom:12px;">
      Senior Lead Engineer<br><span style="color:#4a7ab5;">& Technical Manager</span>
    </div>
    <p>25+ años entregando software. 12+ años liderando equipos en 3 continentes.</p>
    <br>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px;">
      <span style="background:#0d1a2e;border:1px solid #1e3050;border-radius:4px;padding:4px 10px;font-size:11px;color:#6a9ad8;">AWS · Azure</span>
      <span style="background:#0d1a2e;border:1px solid #1e3050;border-radius:4px;padding:4px 10px;font-size:11px;color:#6a9ad8;">C# · .NET</span>
      <span style="background:#0d1a2e;border:1px solid #1e3050;border-radius:4px;padding:4px 10px;font-size:11px;color:#6a9ad8;">Python · AI</span>
      <span style="background:#0d1a2e;border:1px solid #1e3050;border-radius:4px;padding:4px 10px;font-size:11px;color:#6a9ad8;">React · Angular</span>
    </div>
    <br>
    <p style="color:#3a5a80;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;">← → girar · ↑ ↓ avanzar · acércate a una pared para leer</p>
  `;
}

// ─── TELEPORT ────────────────────────────────────────────────────────────────
function teleport(sIdx) {
  if (sIdx === 0) { P.x = 0; P.z = 0; P.angle = 0; return; }
  const wi = wallData.findIndex(w => w.sIdx === sIdx);
  if (wi < 0) return;
  const a = wi * Math.PI / 3;
  P.x = (HEX_A - 2.0) * Math.sin(a);
  P.z = (HEX_A - 2.0) * Math.cos(a);
  // Face back toward center (camera side) after arriving
  P.angle = a + Math.PI;
}

// ─── JOYSTICK ────────────────────────────────────────────────────────────────
function initJoystick() {
  const zone  = document.getElementById('joystick-zone');
  const knob  = document.getElementById('joystick-knob');
  if (!zone) return;

  const R = 33; // max knob travel radius (px)
  let active = false, tid = null, jx = 0, jy = 0;

  function onStart(e) {
    e.preventDefault();
    active = true; tid = e.touches ? e.touches[0].identifier : null;
    update(e);
  }
  function onMove(e) {
    e.preventDefault();
    if (!active) return;
    update(e);
  }
  function onEnd(e) {
    active = false; jx = 0; jy = 0;
    knob.style.transform = 'translate(-50%,-50%)';
    keys['_joy_fwd'] = false; keys['_joy_back'] = false;
    keys['_joy_left'] = false; keys['_joy_right'] = false;
  }
  function update(e) {
    const touch = e.touches ? e.touches[0] : e;
    const rect  = zone.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    let dx = touch.clientX - cx;
    let dy = touch.clientY - cy;
    const dist = Math.sqrt(dx*dx + dy*dy);
    if (dist > R) { dx = dx/dist*R; dy = dy/dist*R; }
    jx = dx / R; jy = dy / R;
    knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    // Map joystick to virtual keys
    keys['_joy_fwd']   = jy < -0.25;
    keys['_joy_back']  = jy >  0.25;
    keys['_joy_left']  = jx < -0.25;
    keys['_joy_right'] = jx >  0.25;
  }

  zone.addEventListener('touchstart', onStart, { passive: false });
  zone.addEventListener('touchmove',  onMove,  { passive: false });
  zone.addEventListener('touchend',   onEnd);
  zone.addEventListener('touchcancel',onEnd);
}

// ─── ANIMATE ─────────────────────────────────────────────────────────────────
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  totalTime += dt;

  updatePlayer(dt);
  checkProximity();
  updateCamera(dt);

  for (let i = 1; i < pPos.length; i += 3) { pPos[i] += 0.004; if (pPos[i] > 28) pPos[i] = 0; }
  pGeo.attributes.position.needsUpdate = true;

  renderer.render(scene, camera);
}

// ─── LOADING ─────────────────────────────────────────────────────────────────
let lp = 0;
const loadBar = document.getElementById('load-bar');
const loadEl  = document.getElementById('loading');
const lInt = setInterval(() => {
  lp += Math.random() * 18 + 5;
  if (lp >= 100) {
    lp = 100; clearInterval(lInt);
    loadBar.style.width = '100%';
    setTimeout(() => {
      loadEl.classList.add('fade');
      setTimeout(() => {
        loadEl.style.display = 'none';
        showSection(0);
        document.getElementById('speech-bubble').classList.remove('hidden');
      }, 800);
    }, 600);
  }
  loadBar.style.width = lp + '%';
}, 120);

try {
  init();
} catch(e) {
  document.getElementById('loading').style.display = 'flex';
  document.getElementById('loading').innerHTML = `<div style="color:#f88;font-size:13px;max-width:500px;padding:24px;line-height:1.7;text-align:left;background:#0a0e1a;border:1px solid #3a1010;border-radius:8px;">
    <b style="font-size:16px;color:#ff6666;">Error al inicializar la escena</b><br><br>
    ${e.message}<br><br>
    <pre style="font-size:11px;color:#aa6666;white-space:pre-wrap;">${e.stack}</pre>
  </div>`;
}
