const subjects = [
    {
      id: 'math', name: 'Math AA HL',
      accent: 'var(--subject-math)',
      exams: ['P1 Sun 31 May', 'P2 Mon 2 Jun'],
      examDates: ['2026-05-31'],
      blocks: [
        { code: 'M1', title: 'Sets & Functions (Basics)', topics: [
          'Real, rational, irrational, integer, natural number sets',
          'Relations vs functions',
          'Intervals: open, closed, half-open, half-closed',
          'Finding domain and range from sets',
          'Finding domain and range from graphs'
        ]},
        { code: 'M2', title: 'Linear & Quadratic Functions', topics: [
          'All forms of linear equations (slope-intercept, point-slope, standard)',
          'All forms of quadratic functions',
          'Completing the square',
          'Sketching quadratic functions',
          'Using the discriminant (0, 1, 2 roots relationship to x-axis)',
          'Finding a quadratic from its graph'
        ]},
        { code: 'M3', title: 'Intersections & Polynomials Intro', topics: [
          'Intersection of quadratic and linear graphs',
          'Intersection of two quadratic graphs',
          'Polynomial functions: definition, domain, range',
          'Radical functions: sketching, domain, range'
        ]},
        { code: 'M4', title: 'Functions with GDC & Function Types', topics: [
          'Graphing functions using the GDC',
          'Finding turning points using GDC',
          'Domain and range from GDC',
          'One-to-one functions',
          'Many-to-one functions',
          'Even functions',
          'Odd functions',
          'Radical functions (advanced)'
        ]},
        { code: 'M5', title: 'Composite & Inverse Functions', topics: [
          'Composite functions: definition and evaluation',
          'Inverse functions: finding analytically',
          'Inverse functions: graphical relationship (reflection in y=x)',
          'Finding x-intercepts using GDC',
          'Finding points of intersection between graphs using GDC'
        ]},
        { code: 'M6', title: 'Rational Functions (Core)', topics: [
          'Rational functions: numerator degree < denominator degree',
          'Vertical asymptotes',
          'Horizontal asymptotes',
          'x-intercepts and y-intercepts',
          'Domain and range',
          'Sketching rational functions'
        ]},
        { code: 'M7', title: 'Advanced Rationals & Absolute Value', topics: [
          'Rational functions: numerator degree > denominator degree (oblique asymptote)',
          'Oblique asymptote: finding by polynomial division',
          'Partial fractions',
          'Absolute value function: graph, domain, range',
          'Absolute value equations',
          'Absolute value inequalities',
          'Solving absolute value graphically'
        ]},
        { code: 'M8', title: 'Transformations & Special Graphs', topics: [
          'Vertical translation: y = f(x) + a',
          'Horizontal translation: y = f(x - a)',
          'Vertical stretch: y = af(x)',
          'Horizontal stretch: y = f(ax)',
          'Reflection in x-axis: y = -f(x)',
          'Reflection in y-axis: y = f(-x)',
          'Combinations of transformations',
          'Graph of y = (f(x))^2',
          'Graph of y = 1/f(x)',
          'Graph of y = f(|x|)'
        ]},
        { code: 'M9', title: 'Polynomials & Roots', topics: [
          'Polynomial long division',
          'Synthetic division',
          'Factor theorem',
          'Polynomial remainder theorem',
          'Fully factorising a polynomial using synthetic division',
          'Sum and product of polynomial roots',
          'Finding equation of cubic from its graph',
          'Sketching a cubic function'
        ]},
        { code: 'M10', title: 'Exponentials, Logs & Systems', topics: [
          'Laws of exponents (revision)',
          'Solving exponential equations',
          'Exponential functions: domain, range, graphs',
          'Growth and decay models',
          'Logarithmic functions: domain, range, graphs',
          'Laws of logarithms',
          'Solving systems of 3x3 linear equations',
          'Types of solutions: unique, infinitely many, no solution'
        ]},
        { code: 'M11', title: 'Sequences, Series & Financial Math', topics: [
          'Arithmetic sequences: term formula, common difference',
          'Arithmetic series: sum formula',
          'Geometric sequences: term formula, common ratio',
          'Writing series using sigma notation',
          'Geometric series: sum formula',
          'Financial math: compound interest',
          'Financial math: annuities and loans',
          'Binomial theorem'
        ]},
        { code: 'M12', title: 'Trigonometry', topics: [
          'Bearings',
          'Sine rule',
          'Cosine rule',
          'Ambiguous case (sine rule)',
          'Unit circle: angles and coordinates',
          'Trig functions and their graphs (sin, cos, tan)',
          'Solving trigonometric equations (general and restricted)',
          'Compound angle identities',
          'Modelling using trig functions',
          'Inverse trig functions'
        ]},
        { code: 'M13', title: 'Calculus', topics: [
          'Power rule for differentiation',
          'Sum/difference rule',
          'Product rule',
          'Quotient rule',
          'Chain rule',
          'Derivatives of trig functions',
          'Finding equations of tangents to curves',
          'Finding equations of normals to curves',
          'Basic differential equations'
        ]}
      ]
    },
    {
      id: 'physics', name: 'Physics HL',
      accent: 'var(--subject-physics)',
      exams: ['P1 Wed 3 Jun', 'P2 Thu 4 Jun'],
      examDates: ['2026-06-03'],
      blocks: [
        { code: 'P1', title: 'Kinematics (Theme A)', topics: [
          'Displacement, velocity, acceleration definitions',
          'Constant-acceleration equations (SUVAT)',
          'Displacement-time graph analysis (gradient = velocity)',
          'Velocity-time graph analysis (gradient = acceleration, area = displacement)',
          'Projectile motion: horizontal and vertical components',
          'Projectile motion: range and maximum height'
        ]},
        { code: 'P2', title: 'Forces & Momentum (Theme A)', topics: [
          'Free-body diagrams',
          'Weight, normal force, friction, tension',
          "Newton's first law",
          "Newton's second law (F = ma)",
          "Newton's third law",
          'Impulse and change in momentum (J = Delta p)',
          'Conservation of momentum (1D)',
          'Conservation of momentum (2D)',
          'Elastic vs inelastic collisions'
        ]},
        { code: 'P3', title: 'Work, Energy & Power (Theme A)', topics: [
          'Work done by a constant force',
          'Work-energy theorem',
          'Kinetic energy',
          'Gravitational potential energy',
          'Conservation of mechanical energy',
          'Power: average and instantaneous',
          'Efficiency'
        ]},
        { code: 'P4', title: 'Advanced Mechanics (Theme A)', topics: [
          'Circular motion: centripetal acceleration',
          'Circular motion: centripetal force',
          'Applications of circular motion (banked tracks, satellites)',
          'Special relativity: time dilation (HL)',
          'Special relativity: length contraction (HL)'
        ]},
        { code: 'P5', title: 'Thermal Energy (Theme B)', topics: [
          'Specific heat capacity: formula and calorimetry problems',
          'Specific latent heat: fusion and vaporisation',
          'Phase change diagrams (heating curves)',
          'Conduction, convection, radiation mechanisms',
          'Black-body radiation concept'
        ]},
        { code: 'P6', title: 'Gases & Thermodynamics (Theme B)', topics: [
          'Ideal gas law: PV = nRT',
          "Boyle's law, Charles's law, Gay-Lussac's law",
          'Kinetic theory: pressure from microscopic model',
          'Internal energy',
          "First law of thermodynamics (Delta U = Q - W)",
          'Isobaric, isochoric, isothermal, adiabatic processes',
          'P-V diagrams',
          'Thermal efficiency basics'
        ]},
        { code: 'P7', title: 'Gravitational Fields (Theme D)', topics: [
          'Gravitational field strength g',
          "Newton's law of gravitation",
          'Gravitational field lines and equipotential surfaces',
          'Gravitational potential',
          'Orbital mechanics: centripetal force = gravitational force',
          'Geostationary and polar orbits'
        ]},
        { code: 'P8', title: 'Electric & Magnetic Fields (Theme D)', topics: [
          "Coulomb's law",
          'Electric field strength: E = F/q',
          'Electric field lines and equipotential surfaces',
          'Electric potential',
          'Uniform electric fields',
          'Magnetic field around a straight wire',
          'Magnetic field inside a solenoid',
          'Force on a current-carrying conductor (F = BIL)',
          'Force on a moving charge (F = qvB)'
        ]}
      ]
    },
    {
      id: 'cs', name: 'Computer Science HL',
      accent: 'var(--subject-cs)',
      exams: ['P1 Sun 7 Jun', 'P2 Mon 8 Jun'],
      examDates: ['2026-06-07'],
      blocks: [
        { code: 'C1', title: 'Hardware & Operating Systems (A1)', topics: [
          'CPU components: ALU, CU, registers, cache, clock',
          'Memory hierarchy: registers, cache, RAM, secondary storage',
          'Secondary storage types (HDD, SSD, optical)',
          'Input/output devices',
          'GPU and parallel processing concepts',
          'OS functions: process/memory/file/I/O management',
          'Multitasking and scheduling',
          'Control systems: sensors and actuators'
        ]},
        { code: 'C2', title: 'Data Representation & Logic (A1)', topics: [
          'Binary number system and conversion',
          'Hexadecimal and conversion',
          "Two's complement representation",
          'Fixed-point and floating-point concepts',
          'Basic logic gates: AND, OR, NOT, NAND, NOR, XOR',
          'Truth tables',
          'Simple Boolean expressions',
          'Boolean simplification basics'
        ]},
        { code: 'C3', title: 'Computational Thinking (B1)', topics: [
          'Problem specification and requirements',
          'Decomposition',
          'Abstraction',
          'Pattern recognition',
          'Algorithm design: inputs, outputs, pre/post-conditions',
          'Trace tables',
          'Pseudocode conventions'
        ]},
        { code: 'C4', title: 'Core Programming (B2)', topics: [
          'Variables and data types',
          'Expressions and operators',
          'Selection: if/else, nested if, case/switch',
          'Iteration: for loops, while loops, repeat-until',
          'Procedures and functions',
          'Parameters: passing by value',
          'Local vs global variables',
          'Error types: syntax, logic, runtime'
        ]},
        { code: 'C5', title: 'Data Structures (B2)', topics: [
          'Arrays: declaration, access, traversal',
          '2D arrays',
          'Lists vs arrays (static vs dynamic)',
          'Stacks: push, pop, peek, isEmpty, LIFO principle',
          'Queues: enqueue, dequeue, peek, isEmpty, FIFO principle',
          'Use cases for stacks (call stack, undo)',
          'Use cases for queues (print queue, scheduling)'
        ]},
        { code: 'C6', title: 'Algorithms (B2)', topics: [
          'Linear search: algorithm and trace',
          'Binary search: algorithm, trace, requirement (sorted)',
          'Bubble sort: algorithm, trace, comparisons',
          'Insertion sort: algorithm, trace',
          'Selection sort: algorithm, trace',
          'Merge sort: concept and divide/conquer idea',
          'Big-O: O(1), O(n), O(n^2), O(n log n) - which algorithm maps to which'
        ]},
        { code: 'C7', title: 'File Handling (B2)', topics: [
          'Opening files (read, write, append modes)',
          'Reading lines from a text file',
          'Writing to a text file',
          'EOF detection',
          'Error handling in file I/O',
          'Combining file I/O with loops and conditionals'
        ]},
        { code: 'C8', title: 'OOP & Abstract Data Types (B3.1 + B4.1)', topics: [
          'Classes and objects',
          'Attributes and methods',
          'Constructors',
          'Encapsulation (private vs public)',
          'Instantiating objects',
          'Calling methods on objects',
          'Conceptual linked lists: nodes, head pointer, traversal',
          'Conceptual binary trees: nodes, left/right children, root',
          'Advantages of linked lists over arrays',
          'Advantages of trees for searching'
        ]}
      ]
    },
    {
      id: 'econ', name: 'Economics HL',
      accent: 'var(--subject-econ)',
      exams: ['P3 Sun 14 Jun', 'P2 Sun 14 Jun'],
      examDates: ['2026-06-14'],
      blocks: [
        { code: 'E1', title: 'Introduction to Economics (Chapter 1)', topics: [
          'Scarcity and the economic problem',
          'Choice and opportunity cost',
          'Production possibility curve (PPC): shape and shifts',
          'Economic systems: free market, planned, mixed',
          'Positive vs normative economics',
          'Rational choice exercise concepts'
        ]},
        { code: 'E2', title: 'Competitive Markets (Chapter 2)', topics: [
          "Law of demand and demand curve",
          'Determinants of demand (shifters)',
          "Law of supply and supply curve",
          'Determinants of supply (shifters)',
          'Market equilibrium: price and quantity',
          'Excess demand and excess supply',
          'Effects of shifts in demand on equilibrium',
          'Effects of shifts in supply on equilibrium'
        ]},
        { code: 'E3', title: 'Elasticities (Chapter 3)', topics: [
          'Price elasticity of demand (PED): formula and calculation',
          'PED determinants',
          'PED and total revenue relationship',
          'Price elasticity of supply (PES): formula and calculation',
          'PES determinants',
          'Cross elasticity of demand (XED): formula, substitutes vs complements',
          'Income elasticity of demand (YED): formula, normal vs inferior goods',
          'Applications of elasticity in policy'
        ]},
        { code: 'E4', title: 'Government Intervention (Chapter 4)', topics: [
          'Price ceilings: diagram, effects, stakeholders',
          'Price floors: diagram, effects, stakeholders',
          'Specific taxes: effect on supply, diagram, incidence',
          'Subsidies: effect on supply, diagram, consumer/producer surplus',
          'Welfare effects: consumer surplus, producer surplus, deadweight loss',
          'Evaluation of government intervention'
        ]},
        { code: 'E5', title: 'Market Failure (Chapter 5)', topics: [
          'Categories of goods: private, public, common access, club',
          'Positive externalities: diagram, underproduction, government responses',
          'Negative externalities: diagram, overproduction, government responses',
          'Public goods: non-excludable, non-rival, free-rider problem',
          'Common access resources and overuse',
          'Government responses to market failure (taxes, subsidies, regulation, provision)'
        ]},
        { code: 'E6', title: 'Level of Overall Economic Activity (Chapter 8)', topics: [
          'Circular flow of income (households, firms, government, banks, foreign sector)',
          'Injections and leakages',
          'GDP definition',
          'GDP measurement: output, income, expenditure approaches',
          'Real vs nominal GDP',
          'GNI vs GDP',
          'Limitations of GDP as a welfare measure',
          'HDI and alternative welfare indicators'
        ]},
        { code: 'E7', title: 'Aggregate Demand & Supply (Chapter 9)', topics: [
          'Components of AD (C + I + G + X - M)',
          'Factors shifting AD',
          'Short-run aggregate supply (SRAS): shape, shifters',
          'Long-run aggregate supply (LRAS): shape, full employment',
          'Macroeconomic equilibrium (AD-SRAS)',
          'Demand-side shocks: inflationary and deflationary gaps',
          'Supply-side shocks',
          'Keynesian multiplier concept',
          'Monetarist vs Keynesian views on LRAS and policy'
        ]},
        { code: 'E8', title: 'Macroeconomic Objectives & Growth (Chapter 10 + Cases)', topics: [
          'Economic growth: definition, actual vs potential',
          'Benefits and costs of economic growth',
          'Unemployment: definition, types (cyclical, structural, frictional, seasonal)',
          'Costs of unemployment',
          'Inflation: definition, CPI measurement',
          'Costs of inflation (unanticipated vs anticipated)',
          'Equity in income distribution: Lorenz curve, Gini coefficient',
          'Macroeconomic policy trade-offs',
          'The Great Depression: causes and AD-AS analysis',
          'Iceland macroeconomy case: applying macro concepts'
        ]}
      ]
    }
  ];
const LS_KEY = 'ibStudyChecklist';
const THEME_KEY = 'ibStudyTheme';
const state = {
  checked: readJson(LS_KEY, {}),
  filter: 'all',
  openBlocks: new Set(subjects.flatMap(subject => subject.blocks.map(block => blockKey(subject.id, block.code))))
};

const els = {
  content: document.getElementById('contentArea'),
  filters: document.getElementById('filterChips'),
  overallPercent: document.getElementById('overallPercent'),
  overallText: document.getElementById('overallText'),
  overallBar: document.getElementById('overallBar'),
  heroSubjectCount: document.getElementById('heroSubjectCount'),
  heroBlockCount: document.getElementById('heroBlockCount'),
  heroTopicCount: document.getElementById('heroTopicCount'),
  activeLabel: document.getElementById('activeLabel'),
  resetModal: document.getElementById('resetModal'),
  resetAllBtn: document.getElementById('resetAllBtn'),
  cancelReset: document.getElementById('cancelReset'),
  confirmReset: document.getElementById('confirmReset'),
  themeToggle: document.getElementById('themeToggle'),
  themeIcon: document.getElementById('themeIcon')
};

function readJson(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; }
  catch (error) { return fallback; }
}
function saveProgress() { localStorage.setItem(LS_KEY, JSON.stringify(state.checked)); }
function blockKey(subjectId, blockCode) { return subjectId + '::' + blockCode; }
function itemKey(blockCode, index) { return blockCode + '_' + index; }
function escapeHtml(value) { const div = document.createElement('div'); div.textContent = value; return div.innerHTML; }
function daysUntil(dateString) { return Math.ceil((new Date(dateString) - new Date()) / 86400000); }
function countdownText(subject) {
  const days = daysUntil(subject.examDates[0]);
  if (Number.isNaN(days)) return '';
  if (days > 0) return days + 'd left';
  if (days === 0) return 'today';
  return Math.abs(days) + 'd ago';
}
function subjectStats(subject) {
  let total = 0;
  let done = 0;
  subject.blocks.forEach(block => {
    total += block.topics.length;
    block.topics.forEach((topic, index) => { if (state.checked[itemKey(block.code, index)]) done += 1; });
  });
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
}
function blockStats(block) {
  const done = block.topics.filter((topic, index) => state.checked[itemKey(block.code, index)]).length;
  return { total: block.topics.length, done, complete: done === block.topics.length };
}
function globalStats() {
  return subjects.reduce((acc, subject) => {
    const stats = subjectStats(subject);
    acc.total += stats.total;
    acc.done += stats.done;
    return acc;
  }, { total: 0, done: 0 });
}
function accentVar(subject) { return subject.accent || 'var(--accent)'; }

function renderFilters() {
  const chips = [{ id: 'all', name: 'All', count: subjects.length, accent: 'var(--accent)' }].concat(
    subjects.map(subject => {
      const stats = subjectStats(subject);
      return { id: subject.id, name: subject.name.replace(' HL', ''), count: stats.done + '/' + stats.total, accent: accentVar(subject) };
    })
  );
  els.filters.innerHTML = chips.map(chip => `
    <button class="tab-button ${state.filter === chip.id ? 'active' : ''}" type="button" data-filter="${chip.id}">
      <span class="tab-dot" style="background:${chip.accent}"></span>
      <span>${escapeHtml(chip.name)}</span>
      <span class="tab-count">${chip.count}</span>
    </button>
  `).join('');
}

function renderSubjects() {
  els.content.innerHTML = subjects.map(subject => {
    const stats = subjectStats(subject);
    const blocks = subject.blocks.map(block => {
      const key = blockKey(subject.id, block.code);
      const open = state.openBlocks.has(key);
      const blockProgress = blockStats(block);
      const topics = block.topics.map((topic, index) => {
        const key = itemKey(block.code, index);
        const checked = !!state.checked[key];
        return `
          <label class="topic-item ${checked ? 'done' : ''}" data-topic-key="${key}">
            <input class="topic-input" type="checkbox" data-subject="${subject.id}" data-block="${block.code}" data-topic-key="${key}" ${checked ? 'checked' : ''}>
            <span class="topic-text">${escapeHtml(topic)}</span>
          </label>`;
      }).join('');
      return `
        <article class="block-card ${open ? 'open' : ''} ${blockProgress.complete ? 'done' : ''}" data-subject="${subject.id}" data-block="${block.code}">
          <button class="block-header" type="button" data-toggle-block="${key}">
            <span class="block-code">${block.code}</span>
            <span><span class="block-title">${escapeHtml(block.title)}</span><span class="block-subtitle">${block.topics.length} topics</span></span>
            <span class="block-count">${blockProgress.done}/${blockProgress.total}</span>
            <span class="chevron" aria-hidden="true">›</span>
          </button>
          <div class="block-body"><div class="block-body-inner"><div class="topic-list">${topics}</div></div></div>
        </article>`;
    }).join('');
    return `
      <section class="subject-section" id="subject-${subject.id}" data-subject="${subject.id}" style="--accent:${accentVar(subject)}">
        <div class="subject-header">
          <div>
            <h2 class="subject-title">${escapeHtml(subject.name)}</h2>
            <div class="subject-meta"><span>${escapeHtml(subject.exams.join(' / '))}</span><span>${stats.done}/${stats.total} topics</span><span>${countdownText(subject)}</span></div>
          </div>
          <div class="subject-progress">
            <div class="subject-progress-label"><span>${stats.pct}% complete</span><span>${subject.blocks.length} blocks</span></div>
            <div class="progress-track"><div class="progress-fill" style="width:${stats.pct}%"></div></div>
            <div class="subject-actions"><button class="text-button" type="button" data-next="${subject.id}">Next</button><button class="text-button" type="button" data-toggle-all="${subject.id}">Collapse / Expand</button></div>
          </div>
        </div>
        <div class="group-list">${blocks}</div>
      </section>`;
  }).join('');
}

function updateOverall() {
  const stats = globalStats();
  const pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
  els.overallPercent.textContent = pct + '%';
  els.overallText.textContent = stats.done + ' / ' + stats.total + ' topics';
  els.overallBar.style.width = pct + '%';
}
function updateShowcase() {
  const blockCount = subjects.reduce((sum, subject) => sum + subject.blocks.length, 0);
  const topicCount = subjects.reduce((sum, subject) => sum + subject.blocks.reduce((total, block) => total + block.topics.length, 0), 0);
  els.heroSubjectCount.textContent = subjects.length;
  els.heroBlockCount.textContent = blockCount;
  els.heroTopicCount.textContent = topicCount;
}
function updateSubject(subjectId) {
  const subject = subjects.find(item => item.id === subjectId);
  const section = document.querySelector('[data-subject="' + subjectId + '"]');
  if (!subject || !section) return;
  const stats = subjectStats(subject);
  section.querySelector('.subject-meta').children[1].textContent = stats.done + '/' + stats.total + ' topics';
  section.querySelector('.subject-progress-label span:first-child').textContent = stats.pct + '% complete';
  section.querySelector('.subject-progress .progress-fill').style.width = stats.pct + '%';
  subject.blocks.forEach(block => updateBlock(subjectId, block.code));
}
function updateBlock(subjectId, blockCode) {
  const subject = subjects.find(item => item.id === subjectId);
  const block = subject && subject.blocks.find(item => item.code === blockCode);
  const card = document.querySelector('.block-card[data-subject="' + subjectId + '"][data-block="' + blockCode + '"]');
  if (!block || !card) return;
  const stats = blockStats(block);
  card.classList.toggle('done', stats.complete);
  card.querySelector('.block-count').textContent = stats.done + '/' + stats.total;
}
function updateFilters() {
  document.querySelectorAll('[data-filter]').forEach(button => {
    const id = button.dataset.filter;
    button.classList.toggle('active', id === state.filter);
    if (id !== 'all') {
      const subject = subjects.find(item => item.id === id);
      const stats = subjectStats(subject);
      button.querySelector('.tab-count').textContent = stats.done + '/' + stats.total;
    }
  });
}
function applyFilter() {
  document.querySelectorAll('.subject-section').forEach(section => {
    section.classList.toggle('hidden', state.filter !== 'all' && section.dataset.subject !== state.filter);
  });
  const activeSubject = subjects.find(subject => subject.id === state.filter);
  els.activeLabel.textContent = activeSubject ? activeSubject.name : 'All subjects';
  updateFilters();
}
function handleTopicChange(event) {
  const input = event.target.closest('.topic-input');
  if (!input) return;
  state.checked[input.dataset.topicKey] = input.checked;
  if (!input.checked) delete state.checked[input.dataset.topicKey];
  input.closest('.topic-item').classList.toggle('done', input.checked);
  saveProgress();
  updateBlock(input.dataset.subject, input.dataset.block);
  updateSubject(input.dataset.subject);
  updateOverall();
  updateFilters();
}
function toggleBlock(key) {
  const [subjectId, blockCode] = key.split('::');
  const card = document.querySelector('.block-card[data-subject="' + subjectId + '"][data-block="' + blockCode + '"]');
  if (!card) return;
  if (state.openBlocks.has(key)) state.openBlocks.delete(key); else state.openBlocks.add(key);
  card.classList.toggle('open', state.openBlocks.has(key));
}
function toggleAll(subjectId) {
  const cards = Array.from(document.querySelectorAll('.block-card[data-subject="' + subjectId + '"]'));
  const shouldOpen = cards.some(card => !card.classList.contains('open'));
  cards.forEach(card => {
    const key = blockKey(subjectId, card.dataset.block);
    if (shouldOpen) state.openBlocks.add(key); else state.openBlocks.delete(key);
    card.classList.toggle('open', shouldOpen);
  });
}
function jumpToNext(subjectId) {
  const subject = subjects.find(item => item.id === subjectId);
  if (!subject) return;
  for (const block of subject.blocks) {
    for (let index = 0; index < block.topics.length; index += 1) {
      if (!state.checked[itemKey(block.code, index)]) {
        const key = blockKey(subjectId, block.code);
        state.openBlocks.add(key);
        const card = document.querySelector('.block-card[data-subject="' + subjectId + '"][data-block="' + block.code + '"]');
        if (card) { card.classList.add('open'); card.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        return;
      }
    }
  }
}
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  els.themeIcon.textContent = theme === 'dark' ? '☀' : '◐';
  localStorage.setItem(THEME_KEY, theme);
}
function showResetModal(show) { els.resetModal.hidden = !show; }
function resetProgress() {
  state.checked = {};
  saveProgress();
  document.querySelectorAll('.topic-input').forEach(input => { input.checked = false; });
  document.querySelectorAll('.topic-item').forEach(item => item.classList.remove('done'));
  subjects.forEach(subject => updateSubject(subject.id));
  updateOverall();
  updateFilters();
  showResetModal(false);
}
function init() {
  applyTheme(localStorage.getItem(THEME_KEY) || 'light');
  renderFilters();
  renderSubjects();
  updateShowcase();
  updateOverall();
  applyFilter();
  els.filters.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    state.filter = button.dataset.filter;
    applyFilter();
  });
  els.content.addEventListener('change', handleTopicChange);
  els.content.addEventListener('click', event => {
    const blockButton = event.target.closest('[data-toggle-block]');
    if (blockButton) toggleBlock(blockButton.dataset.toggleBlock);
    const nextButton = event.target.closest('[data-next]');
    if (nextButton) jumpToNext(nextButton.dataset.next);
    const allButton = event.target.closest('[data-toggle-all]');
    if (allButton) toggleAll(allButton.dataset.toggleAll);
  });
  els.themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
  els.resetAllBtn.addEventListener('click', () => showResetModal(true));
  els.cancelReset.addEventListener('click', () => showResetModal(false));
  els.confirmReset.addEventListener('click', resetProgress);
  els.resetModal.addEventListener('click', event => { if (event.target === els.resetModal) showResetModal(false); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') showResetModal(false); });
}
init();
