
function getFigmaProductIconHtml(name, category) {
  const n = (name || '').toLowerCase();
  if (n.includes('teh') || n.includes('tea')) {
    return `<img src="assets/icon_tea.png" alt="Teh" style="width: 48px; height: 48px; border-radius: 12px; object-fit: contain;">`;
  } else if (n.includes('yogurt') || n.includes('bio')) {
    return `<img src="assets/icon_yogurt.png" alt="Yogurt" style="width: 48px; height: 48px; border-radius: 12px; object-fit: contain;">`;
  } else if (n.includes('biskuit') || n.includes('snack') || category === 'camilan') {
    return `<img src="assets/icon_biscuit.png" alt="Biskuit" style="width: 48px; height: 48px; border-radius: 12px; object-fit: contain;">`;
  } else {
    return `<img src="assets/icon_tea.png" alt="Minuman" style="width: 48px; height: 48px; border-radius: 12px; object-fit: contain;">`;
  }
}


// ============================================================
// CLEAN VECTOR SVG HELPERS (ANTI-SLOP STANDARD)
// ============================================================
function getProductSvgIcon(name, category) {
  const n = (name || '').toLowerCase();
  const c = (category || '').toLowerCase();

  if (n.includes('kopi') || n.includes('coffee')) {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`;
  } else if (n.includes('yogurt') || n.includes('bio')) {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 12V7a5 5 0 0 1 10 0v5"/><circle cx="12" cy="7" r="1.5"/></svg>`;
  } else if (n.includes('biskuit') || n.includes('snack') || c.includes('camilan')) {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9333EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="8.5" cy="8.5" r="1.5" fill="#9333EA"/><circle cx="15.5" cy="9.5" r="1.5" fill="#9333EA"/><circle cx="10" cy="15" r="1.5" fill="#9333EA"/><circle cx="15" cy="14" r="1.5" fill="#9333EA"/></svg>`;
  } else if (n.includes('susu') || n.includes('milk') || n.includes('uht')) {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2h10l1 4H6l1-4Z"/><rect x="6" y="6" width="12" height="15" rx="2"/><line x1="10" y1="11" x2="14" y2="11"/></svg>`;
  } else {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8v4H8z"/><path d="M6 6h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`;
  }
}

function getProductIconBg(name, category) {
  const n = (name || '').toLowerCase();
  const c = (category || '').toLowerCase();
  if (n.includes('kopi')) return '#FEF3C7';
  if (n.includes('yogurt')) return '#EFF6FF';
  if (n.includes('biskuit') || c.includes('camilan')) return '#F3E8FF';
  if (n.includes('susu')) return '#FEE2E2';
  return '#ECFDF5';
}

function getNotifSvgIcon(title, tag) {
  const t = (title || '').toLowerCase();
  if (t.includes('camilan') || t.includes('scan') || tag === 'Kamera') {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/></svg>`;
  } else if (t.includes('pencapaian') || tag === 'Pencapaian') {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`;
  } else {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
  }
}

/**
 * SweetLimits - Main Application Controller
 * Handles Routing, State, Real-time calculations, and UI interactions
 */

// App State (merged with localStorage if available)
let appState = {
  activeScreen: "screen-home",
  previousScreen: null,
  user: { ...window.SWEET_LIMIT_DATA.user },
  todayStats: { ...window.SWEET_LIMIT_DATA.todayStats },
  historyItems: [ ...window.SWEET_LIMIT_DATA.historyItems ],
  notifications: [ ...window.SWEET_LIMIT_DATA.notifications ],
  schedules: [ ...window.SWEET_LIMIT_DATA.schedules ],
  currentScannedProduct: window.SWEET_LIMIT_DATA.productsCatalog[0],
  activeCategoryFilter: "all",
  activeTimeFilter: "today",
  trendPeriod: "week"
};

// ============================================================
// 1. ROUTING & SCREEN NAVIGATION
// ============================================================
function navigateTo(screenId) {
  const screens = document.querySelectorAll('.screen-view');
  screens.forEach(screen => {
    screen.classList.remove('active');
  });

  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    appState.activeScreen = screenId;

    // Reset scroll of viewport
    const wrapper = document.getElementById('screensWrapper');
    if (wrapper) wrapper.scrollTop = 0;

    // Sync select dropdown in toolbar
    const select = document.getElementById('screenSelect');
    if (select && select.value !== screenId) {
      select.value = screenId;
    }

    // Manage bottom navigation bar visibility
    const bottomNav = document.getElementById('bottomNav');
    const immersiveScreens = ['screen-splash', 'screen-onboarding', 'screen-auth', 'screen-limit-settings', 'screen-smartscan', 'screen-product-analysis'];
    if (bottomNav) {
      if (immersiveScreens.includes(screenId)) {
        bottomNav.style.display = 'none';
      } else {
        bottomNav.style.display = 'grid';
      }
    }

    // Sync bottom navigation active icon
    updateBottomNavActive(screenId);

    // Trigger screen-specific initializers
    if (screenId === 'screen-home') renderHomeDashboard();
    if (screenId === 'screen-history') renderHistoryScreen();
    if (screenId === 'screen-notifications') renderNotificationsScreen();
    if (screenId === 'screen-profile') renderProfileScreen();
    if (screenId === 'screen-calculator') updateCalculatorSimulation();
    if (screenId === 'screen-limit-settings') syncLimitSettingsUI();
  }
}

function updateBottomNavActive(screenId) {
  const navItems = document.querySelectorAll('.nav5-item');
  navItems.forEach(item => item.classList.remove('active'));

  if (screenId === 'screen-home') {
    const el = document.getElementById('navHome');
    if (el) el.classList.add('active');
  } else if (screenId === 'screen-smartscan') {
    const el = document.getElementById('navScan');
    if (el) el.classList.add('active');
  } else if (screenId === 'screen-calculator') {
    const el = document.getElementById('navCalc');
    if (el) el.classList.add('active');
  } else if (screenId === 'screen-history' || screenId === 'screen-trends') {
    const el = document.getElementById('navHistory');
    if (el) el.classList.add('active');
  }
}

// ============================================================
// 2. DEVICE FRAME & TOOLBAR HELPERS
// ============================================================
function toggleDeviceFrame() {
  const container = document.getElementById('deviceContainer');
  const btnText = document.getElementById('frameToggleText');
  if (container) {
    container.classList.toggle('mode-responsive');
    if (container.classList.contains('mode-responsive')) {
      btnText.innerText = "Phone Frame Mode";
    } else {
      btnText.innerText = "Full Width Mode";
    }
  }
}

function updateLiveClock() {
  const clockEl = document.getElementById('liveClock');
  if (clockEl) {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    clockEl.innerText = `${hrs}:${mins}`;
  }
}

// ============================================================
// 3. AUTH & ONBOARDING ACTIONS
// ============================================================
function switchAuthTab(type) {
  const tabMasuk = document.getElementById('tabMasuk');
  const tabDaftar = document.getElementById('tabDaftar');
  if (type === 'login') {
    tabMasuk.classList.add('active');
    tabDaftar.classList.remove('active');
  } else {
    tabDaftar.classList.add('active');
    tabMasuk.classList.remove('active');
  }
}

function togglePasswordVisibility() {
  const input = document.getElementById('authPassword');
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}


function navigateBackFromLimitSettings() {
  if (appState.previousScreen && !['screen-auth', 'screen-splash', 'screen-onboarding'].includes(appState.previousScreen)) {
    navigateTo(appState.previousScreen);
  } else {
    navigateTo('screen-home');
  }
}

function savePersonalLimitAndGoHome() {
  const limit = appState.user.calculatedLimit || 30.0;
  appState.user.dailyTarget = limit;
  appState.todayStats.target = limit;

  // Sync health focus title tag
  const focus = appState.user.healthFocus || 'diabetes_prevention';
  const focusTitles = {
    'diabetes_prevention': 'Pencegahan Diabetes',
    'pradiabetes': 'Target Khusus Pradiabetes',
    'low_calorie': 'Diet Rendah Kalori',
    'general_fitness': 'Umum & Kebugaran'
  };
  appState.user.title = focusTitles[focus] || 'Pola Sehat Rendah Gula';

  renderHomeDashboard();
  renderProfileScreen();
  navigateTo('screen-home');
}

function handleSocialAuth(provider) {
  // Direct authentication into Home dashboard
  renderHomeDashboard();
  navigateTo('screen-home');
}

function handleAuthSubmit(e) {
  e.preventDefault();
  renderHomeDashboard();
  navigateTo('screen-home');
}

function handleLogout() {
  if (confirm("Apakah Anda yakin ingin keluar dari akun?")) {
    navigateTo('screen-auth');
  }
}

// ============================================================
// 4. PERSONAL SUGAR LIMIT ALGORITHM
// ============================================================
function selectGender(gender) {
  appState.user.gender = gender;
  const btnMale = document.getElementById('btnGenderMale');
  const btnFemale = document.getElementById('btnGenderFemale');
  if (gender === 'pria') {
    btnMale.classList.add('active');
    btnFemale.classList.remove('active');
  } else {
    btnFemale.classList.add('active');
    btnMale.classList.remove('active');
  }
  calculatePersonalLimit();
}

function selectActivity(level) {
  appState.user.activityLevel = level;
  ['sedentari', 'ringan', 'sedang', 'aktif'].forEach(act => {
    const el = document.getElementById(`act-${act}`);
    if (el) {
      if (act === level) el.classList.add('active');
      else el.classList.remove('active');
    }
  });
  calculatePersonalLimit();
}

function selectHealthFocus(focusId) {
  appState.user.healthFocus = focusId;
  const focuses = ['diabetes_prevention', 'pradiabetes', 'low_calorie', 'general_fitness'];
  focuses.forEach(f => {
    const el = document.getElementById(`focus-${f}`);
    if (el) {
      if (f === focusId) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }
  });
  calculatePersonalLimit();
}

function syncLimitSettingsUI() {
  const user = appState.user;
  const ageEl = document.getElementById('inputAge');
  if (ageEl && user.age) ageEl.value = user.age;
  const weightEl = document.getElementById('inputWeight');
  if (weightEl && user.weight) weightEl.value = user.weight;
  const heightEl = document.getElementById('inputHeight');
  if (heightEl && user.height) heightEl.value = user.height;

  selectGender(user.gender || 'pria');
  selectActivity(user.activityLevel || 'sedang');
  selectHealthFocus(user.healthFocus || 'diabetes_prevention');
}

function calculatePersonalLimit() {
  const age = parseFloat(document.getElementById('inputAge')?.value) || 28;
  const weight = parseFloat(document.getElementById('inputWeight')?.value) || 64;
  const height = parseFloat(document.getElementById('inputHeight')?.value) || 172;

  // Calculate BMI = kg / (m^2)
  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  const bmiBadge = document.getElementById('bmiBadge');
  let bmiCategory = "Normal";
  if (bmi < 18.5) bmiCategory = "Kurang";
  else if (bmi >= 23 && bmi < 25) bmiCategory = "Batas Atas Normal";
  else if (bmi >= 25) bmiCategory = "Kelebihan Berat";

  if (bmiBadge) {
    bmiBadge.innerText = `Indeks Massa Tubuh (IMT): ${bmi} (${bmiCategory})`;
  }

  // Sugar Calculation based on Kemenkes / WHO
  let baseLimit = 30.0;
  if (appState.user.gender === 'wanita') baseLimit -= 2.0;
  if (appState.user.activityLevel === 'aktif') baseLimit += 4.0;
  if (appState.user.activityLevel === 'sedentari') baseLimit -= 3.0;
  if (bmi >= 25) baseLimit -= 3.0;

  // Health focus adjustment
  const focus = appState.user.healthFocus || 'diabetes_prevention';
  if (focus === 'pradiabetes') {
    baseLimit -= 5.0; // Stricter threshold for prediabetes
  } else if (focus === 'low_calorie') {
    baseLimit -= 4.0; // Lower target for low calorie diet
  } else if (focus === 'general_fitness') {
    baseLimit += 2.0; // General fitness & active lifestyle
  }

  baseLimit = Math.max(18.0, Math.min(45.0, baseLimit));

  const numEl = document.getElementById('suggestedLimitNum');
  const personalLimitDisplay = document.getElementById('personalLimitDisplay');
  const spoonsEl = document.getElementById('suggestedSpoons');
  const personalLimitSpoons = document.getElementById('personalLimitSpoons');

  if (numEl) numEl.innerText = baseLimit.toFixed(1);
  if (personalLimitDisplay) personalLimitDisplay.innerText = baseLimit.toFixed(1);

  const spoons = (baseLimit / 12).toFixed(1);
  if (spoonsEl) spoonsEl.innerText = `~${spoons} sendok makan gula pasir`;
  if (personalLimitSpoons) personalLimitSpoons.innerText = `~${spoons} sdm gula`;

  appState.user.calculatedLimit = baseLimit;
}

function savePersonalLimitAndProceed() {
  const limit = appState.user.calculatedLimit || 30.0;
  appState.user.dailyTarget = limit;
  appState.todayStats.target = limit;
  renderHomeDashboard();
  navigateTo('screen-home');
}

// ============================================================
// 5. HOME DASHBOARD RENDERING
// ============================================================
function renderHomeDashboard() {
  const consumed = appState.todayStats.consumed;
  const target = appState.todayStats.target;
  const percent = Math.min(100, Math.round((consumed / target) * 100));
  const remaining = Math.max(0, (target - consumed)).toFixed(1);
  const spoons = (remaining / 12).toFixed(1);

  // Text values
  const consumedEl = document.getElementById('sugarConsumedVal');
  const targetEl = document.getElementById('sugarTargetVal');
  const percentEl = document.getElementById('sugarPercentVal');
  const ringPercentEl = document.getElementById('sugarCirclePercent');
  const remainingEl = document.getElementById('quotaRemainingVal');
  const spoonEl = document.getElementById('spoonEquivVal');
  const statusBadge = document.getElementById('sugarStatusBadge');

  if (consumedEl) consumedEl.innerText = consumed.toFixed(1);
  if (targetEl) targetEl.innerText = `${target.toFixed(1)} g`;
  if (percentEl) percentEl.innerText = `${percent}%`;
  if (ringPercentEl) ringPercentEl.innerText = `${percent}%`;
  if (remainingEl) remainingEl.innerText = `${remaining} g`;
  if (spoonEl) spoonEl.innerText = `± ${spoons} sdm`;

  // Status Badge Logic
  if (statusBadge) {
    if (percent < 75) {
      statusBadge.innerText = "Kondisi Aman";
      statusBadge.className = "pill-badge pill-success";
    } else if (percent <= 100) {
      statusBadge.innerText = "Mendekati Batas";
      statusBadge.className = "pill-badge pill-warning";
    } else {
      statusBadge.innerText = "Melebihi Batas!";
      statusBadge.className = "pill-badge pill-danger";
    }
  }

  // Circle Gauge SVG Stroke Dashoffset
  // Circumference = 2 * PI * 66 ≈ 414.7
  const circleFill = document.getElementById('sugarCircleFill');
  if (circleFill) {
    const circumference = 414.7;
    const offset = circumference - (percent / 100) * circumference;
    circleFill.style.strokeDashoffset = offset;
    circleFill.style.stroke = percent > 100 ? '#EF4444' : (percent > 75 ? '#F59E0B' : '#00A86B');
  }

  // Render Today's Log
  const container = document.getElementById('homeRecentLogsContainer');
  if (container) {
    const todayLogs = appState.historyItems.filter(item => item.dayGroup === 'Hari Ini');
    container.innerHTML = todayLogs.map(item => {
      const iconHtml = getFigmaProductIconHtml(item.name, item.category);
      let badgeBg = '#D1FAE5';
      let badgeColor = '#065F46';
      let dotColor = '#00A86B';
      let sugarColor = '#00A86B';

      if (item.level === 'Sedang') {
        badgeBg = '#FEF3C7';
        badgeColor = '#B45309';
        dotColor = '#D97706';
        sugarColor = '#B45309';
      } else if (item.level === 'Tinggi') {
        badgeBg = '#FEE2E2';
        badgeColor = '#DC2626';
        dotColor = '#EF4444';
        sugarColor = '#DC2626';
      }

      return `
        <div class="log-item-card" style="background: #FFFFFF; border-radius: 20px; padding: 14px 16px; border: 1px solid #E2E8F0; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.02);">
          <div style="display: flex; align-items: center; gap: 14px;">
            ${iconHtml}
            <div>
              <h5 style="font-family: var(--font-heading); font-size: 14px; font-weight: 800; color: #0F172A; margin-bottom: 4px;">${item.name}</h5>
              <div style="display: flex; align-items: center; gap: 6px; font-size: 11.5px; color: #64748B;">
                <span>${item.time}</span>
                <span>•</span>
                <span style="background: ${badgeBg}; color: ${badgeColor}; font-size: 10.5px; font-weight: 700; padding: 2px 8px; border-radius: 10px; display: flex; align-items: center; gap: 4px;">
                  <span style="width: 5px; height: 5px; border-radius: 50%; background: ${dotColor};"></span>
                  ${item.level}
                </span>
              </div>
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-family: var(--font-heading); font-size: 18px; font-weight: 800; color: ${sugarColor}; line-height: 1;">${item.sugar.toFixed(1)} g</div>
            <span style="font-size: 11px; color: #64748B;">gula</span>
          </div>
        </div>
      `;
    }).join('');
  }
}

// ============================================================
// 6. SMARTSCAN & KAMERA OCR SIMULATION
// ============================================================
function switchScanSample(productId) {
  const prod = window.SWEET_LIMIT_DATA.productsCatalog.find(p => p.id === productId);
  if (!prod) return;

  appState.currentScannedProduct = prod;

  const ocrServing = document.getElementById('ocrTagServing');
  const ocrSugar = document.getElementById('ocrTagSugar');
  const prodName = document.getElementById('scanProductName');
  const sugarVal = document.getElementById('scanSugarValue');
  const percentText = document.getElementById('scanPercentageText');
  const servingText = document.getElementById('scanServingText');

  if (ocrServing) ocrServing.innerText = `Takaran Saji: ${prod.servingSize} (Terbaca Jelas)`;
  if (ocrSugar) ocrSugar.innerText = `Gula Total: ${prod.sugarPerServing}g`;
  if (prodName) prodName.innerText = prod.name;
  if (sugarVal) {
    sugarVal.innerText = `${prod.sugarPerServing}g Gula`;
    sugarVal.style.color = prod.gradeColor;
  }
  if (percentText) percentText.innerText = `• ${prod.warningPercentage}% Batas Harian (${appState.user.dailyTarget}g)`;
  if (servingText) servingText.innerText = prod.servingDetails;
}

function triggerScanSimulation() {
  const laser = document.querySelector('.scanner-laser');
  if (laser) {
    laser.style.animation = 'none';
    void laser.offsetWidth;
    laser.style.animation = 'laserScan 1.2s ease-in-out';
  }
  setTimeout(() => {
    alert("SmartScan berhasil mengenali tabel nutrisi BPOM kemasan!");
  }, 800);
}

function toggleFlashlight() {
  const vf = document.getElementById('cameraViewfinder');
  if (vf) {
    if (vf.style.filter === 'brightness(1.3)') {
      vf.style.filter = 'none';
    } else {
      vf.style.filter = 'brightness(1.3)';
    }
  }
}

function viewScannedProductDetail() {
  loadProductAnalysisScreen(appState.currentScannedProduct);
  navigateTo('screen-product-analysis');
}

// ============================================================
// 7. PRODUCT ANALYSIS SCREEN
// ============================================================
function loadProductAnalysisScreen(prod) {
  if (!prod) prod = window.SWEET_LIMIT_DATA.productsCatalog[0];

  document.getElementById('prodAnalysisCat').innerText = prod.categoryName;
  document.getElementById('prodAnalysisTitle').innerText = prod.name;
  document.getElementById('prodAnalysisServing').innerText = `Takaran saji: ${prod.servingSize}`;

  const gradeBadge = document.getElementById('prodGradeBadge');
  const gradeBanner = document.getElementById('prodGradeBanner');
  const sugarAmt = document.getElementById('prodSugarAmount');
  const packaging = document.getElementById('prodPackagingLabel');

  if (gradeBadge) {
    gradeBadge.innerText = prod.grade;
    gradeBadge.style.background = prod.gradeColor;
  }
  if (gradeBanner) {
    gradeBanner.style.background = prod.gradeBg;
    gradeBanner.style.borderColor = prod.gradeColor;
  }
  if (sugarAmt) {
    sugarAmt.innerText = `${prod.sugarPerServing}g`;
    sugarAmt.style.color = prod.gradeColor;
  }
  if (packaging) {
    packaging.innerText = prod.packaging;
    packaging.style.color = prod.gradeColor;
  }

  // Warning & Spoons
  document.getElementById('prodWarningPercent').innerText = `${prod.warningPercentage}% Batas`;
  document.getElementById('prodWarningDesc').innerHTML = prod.description;
  document.getElementById('prodSpoonDesc').innerText = `Setara dengan ${prod.spoonEquiv} sendok teh gula pasir (1 sdt ≈ 4g)`;

  // Nutrition Table
  document.getElementById('tableServing').innerText = prod.servingDetails;
  document.getElementById('tableCalories').innerText = `${prod.calories} kkal`;
  document.getElementById('tableSodium').innerText = `${prod.sodium} mg`;
  document.getElementById('tableSugarTotal').innerText = `${prod.sugarPerServing} g`;
  document.getElementById('tableSucrose').innerText = `${prod.sucrose} g`;
  document.getElementById('tableGlucose').innerText = `${prod.naturalGlucose} g`;
}

function addCurrentProductToTodayLog() {
  const prod = appState.currentScannedProduct || window.SWEET_LIMIT_DATA.productsCatalog[0];
  const newLog = {
    id: `log-${Date.now()}`,
    name: prod.name,
    brand: prod.categoryName,
    time: "Baru Saja",
    date: "2024-05-24",
    dayGroup: "Hari Ini",
    category: "minuman",
    sugar: prod.sugarPerServing,
    serving: prod.servingSize,
    level: prod.sugarPerServing > 20 ? "Tinggi" : (prod.sugarPerServing > 10 ? "Sedang" : "Rendah"),
    color: prod.gradeColor
  };

  appState.historyItems.unshift(newLog);
  appState.todayStats.consumed += prod.sugarPerServing;

  renderHomeDashboard();
  alert(`Berhasil menambahkan "${prod.name}" (+${prod.sugarPerServing}g gula) ke catatan hari ini!`);
  navigateTo('screen-home');
}

// ============================================================
// 8. INTERACTIVE SUGAR CALCULATOR
// ============================================================
const CALC_RECIPES = {
  boba: { name: "Teh Susu Boba Sedang", baseSugar: 18.0, baseMl: 250 },
  kopi: { name: "Kopi Susu Gula Aren", baseSugar: 16.0, baseMl: 250 },
  soda: { name: "Minuman Soda Cola", baseSugar: 26.0, baseMl: 250 },
  donut: { name: "Donat Cokelat Tabur Gula", baseSugar: 14.0, baseMl: 100 },
  jus: { name: "Jus Jeruk Kotak Kemasan", baseSugar: 20.0, baseMl: 250 }
};

function updateCalculatorSimulation() {
  const prodKey = document.getElementById('calcProductSelect')?.value || 'boba';
  const portion = parseFloat(document.getElementById('portionRangeSlider')?.value) || 1.5;
  const recipe = CALC_RECIPES[prodKey] || CALC_RECIPES.boba;

  const totalSugar = (recipe.baseSugar * portion).toFixed(1);
  const totalMl = Math.round(recipe.baseMl * portion);
  const spoons = (totalSugar / 4).toFixed(1);

  // Update labels
  const portionText = document.getElementById('portionValueText');
  if (portionText) portionText.innerText = `${portion} gelas (${totalMl}ml)`;

  const sugarNum = document.getElementById('calcEstimatedSugar');
  if (sugarNum) sugarNum.innerHTML = `${totalSugar} <span style="font-size: 18px;">gram</span>`;

  const spoonEq = document.getElementById('calcSpoonEquivalent');
  if (spoonEq) spoonEq.innerText = `Setara ~${spoons} sendok teh gula pasir`;

  // Warning thresholds
  const remainingQuota = Math.max(0, appState.todayStats.target - appState.todayStats.consumed);
  const isOver = totalSugar > remainingQuota;
  const overAmount = (totalSugar - remainingQuota).toFixed(1);

  const container = document.getElementById('calcResultContainer');
  const pill = document.getElementById('calcWarningPill');
  const msg = document.getElementById('calcOverLimitMsg');

  if (isOver) {
    if (container) {
      container.style.borderColor = '#F87171';
      container.style.background = '#FFF5F5';
    }
    if (pill) {
      pill.innerText = "OVER LIMIT";
      pill.className = "pill-badge pill-danger";
    }
    if (msg) {
      msg.innerHTML = `<strong>Melebihi Jatah Aman Harian!</strong> Melebihi sisa jatah harian Anda sebesar ${overAmount} gram.`;
    }
  } else {
    if (container) {
      container.style.borderColor = 'rgba(16, 185, 129, 0.4)';
      container.style.background = '#F0FDF4';
    }
    if (pill) {
      pill.innerText = "DALAM BATAS SEHAT";
      pill.className = "pill-badge pill-success";
    }
    if (msg) {
      msg.innerHTML = `<strong>Aman Dikonsumsi!</strong> Masih muat di dalam sisa jatah harian (${remainingQuota.toFixed(1)}g).`;
    }
  }
}

function logCalculatorResult() {
  const prodKey = document.getElementById('calcProductSelect')?.value || 'boba';
  const portion = parseFloat(document.getElementById('portionRangeSlider')?.value) || 1.5;
  const recipe = CALC_RECIPES[prodKey];
  const sugar = parseFloat((recipe.baseSugar * portion).toFixed(1));

  const newLog = {
    id: `log-${Date.now()}`,
    name: `${recipe.name} (${portion} porsi)`,
    brand: "Kalkulator Asupan",
    time: "Baru Saja",
    date: "2024-05-24",
    dayGroup: "Hari Ini",
    category: "minuman",
    sugar: sugar,
    serving: `${portion} porsi`,
    level: sugar > 20 ? "Tinggi" : (sugar > 10 ? "Sedang" : "Rendah"),
    color: sugar > 20 ? "#EF4444" : "#F59E0B"
  };

  appState.historyItems.unshift(newLog);
  appState.todayStats.consumed += sugar;
  renderHomeDashboard();
  alert(`Berhasil mencatat "${newLog.name}" (+${sugar}g) ke riwayat konsumsi!`);
  navigateTo('screen-history');
}

function resetCalculator() {
  const slider = document.getElementById('portionRangeSlider');
  if (slider) slider.value = 1.0;
  updateCalculatorSimulation();
}

// ============================================================
// 9. HISTORY SCREEN
// ============================================================
function filterHistoryByCategory(category, btn) {
  appState.activeCategoryFilter = category;
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderHistoryScreen();
}

function filterHistoryByTime(period) {
  appState.activeTimeFilter = period;
  ['today', 'week', 'month'].forEach(t => {
    const el = document.getElementById(`tabHist${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (el) {
      if (t === period) el.classList.add('active');
      else el.classList.remove('active');
    }
  });
  renderHistoryScreen();
}

function filterHistoryLogs() {
  renderHistoryScreen();
}

function renderHistoryScreen() {
  const container = document.getElementById('historyLogsListContainer');
  if (!container) return;

  const searchQuery = (document.getElementById('historySearchInput')?.value || '').toLowerCase();
  
  let filtered = appState.historyItems.filter(item => {
    const matchesCat = appState.activeCategoryFilter === 'all' || item.category === appState.activeCategoryFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery) || item.brand.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  // Group by dayGroup
  const groups = {};
  filtered.forEach(item => {
    if (!groups[item.dayGroup]) groups[item.dayGroup] = [];
    groups[item.dayGroup].push(item);
  });

  if (Object.keys(groups).length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 12px;">Tidak ada riwayat produk yang cocok.</div>`;
    return;
  }

  container.innerHTML = Object.entries(groups).map(([groupName, items]) => {
    const totalSugar = items.reduce((acc, cur) => acc + cur.sugar, 0).toFixed(1);
    const dateSubtext = groupName === 'Hari Ini' ? '24 Mei 2024' : '23 Mei 2024';
    return `
      <div style="margin-bottom: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="width: 7px; height: 7px; border-radius: 50%; background: ${groupName === 'Hari Ini' ? 'var(--primary)' : '#94A3B8'};"></span>
            <strong style="font-size: 13px; font-weight: 700; color: var(--text-main);">${groupName}</strong>
            <span style="font-size: 11px; color: var(--text-muted);">${dateSubtext}</span>
          </div>
          <span style="font-size: 11.5px; color: ${groupName === 'Hari Ini' ? 'var(--primary-dark)' : 'var(--text-muted)'}; font-weight: 700;">Total: ${totalSugar}g</span>
        </div>
        ${items.map(item => {
          const svgIcon = getProductSvgIcon(item.name, item.category);
          const iconBg = getProductIconBg(item.name, item.category);
          const badgeClass = item.level === 'Rendah' ? 'pill-success' : (item.level === 'Sedang' ? 'pill-warning' : 'pill-danger');
          return `
            <div class="log-item-card">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div class="log-icon-thumb" style="background: ${iconBg}; width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                  ${svgIcon}
                </div>
                <div class="log-item-details">
                  <h5>${item.name}</h5>
                  <div class="log-item-meta">
                    <span>${item.serving}</span>
                    <span>•</span>
                    <span>${item.time}</span>
                  </div>
                </div>
              </div>
              <div class="log-sugar-amount">
                <span class="val" style="color: ${item.level === 'Tinggi' ? '#DC2626' : (item.level === 'Sedang' ? '#B45309' : '#0F172A')};">${item.sugar.toFixed(1)} g</span>
                <span class="pill-badge ${badgeClass}" style="font-size: 9px; padding: 2px 6px; margin-top: 3px;">${item.level}</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }).join('');
}

// ============================================================
// 10. TRENDS SCREEN
// ============================================================
function switchTrendPeriod(period) {
  appState.trendPeriod = period;
  const btnWeek = document.getElementById('tabTrendWeek');
  const btnMonth = document.getElementById('tabTrendMonth');
  if (period === 'week') {
    btnWeek.classList.add('active');
    btnMonth.classList.remove('active');
  } else {
    btnMonth.classList.add('active');
    btnWeek.classList.remove('active');
  }
}

// ============================================================
// 11. NOTIFICATIONS & REMINDERS SCREEN
// ============================================================
function renderNotificationsScreen() {
  const notifContainer = document.getElementById('notificationsListContainer');
  if (notifContainer) {
    notifContainer.innerHTML = appState.notifications.map(n => {
      const svgIcon = getNotifSvgIcon(n.title, n.tag);
      let borderLeft = "3px solid #F59E0B";
      if (n.title.includes("Camilan") || n.tag === "Kamera") {
        borderLeft = "3px solid var(--primary)";
      } else if (n.title.includes("Pencapaian") || n.tag === "Pencapaian") {
        borderLeft = "3px solid var(--primary)";
      }

      return `
        <div class="notif-item-card" style="border-left: ${borderLeft};">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="display: flex; align-items: center;">${svgIcon}</span>
              <h5 style="font-family: var(--font-heading); font-size: 13px; font-weight: 700; color: var(--text-main);">${n.title}</h5>
            </div>
            <span style="font-size: 10px; color: var(--text-muted);">${n.time}</span>
          </div>
          <p style="font-size: 11.5px; color: var(--text-body); line-height: 1.4; margin-bottom: 6px;">${n.body || n.desc || ""}</p>
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 10.5px;">
            <span class="pill-badge pill-neutral" style="font-size: 9.5px; padding: 1px 7px;">${n.tag}</span>
            <span style="color: var(--primary); font-weight: 600; cursor: pointer;" onclick="alert('Notifikasi ditandai sudah dibaca')">Tandai Dibaca</span>
          </div>
        </div>
      `;
    }).join('');
  }

  const schContainer = document.getElementById('schedulesListContainer');
  if (schContainer) {
    schContainer.innerHTML = appState.schedules.map(s => `
      <div class="setting-list-row" style="padding: 10px 0;">
        <div>
          <div style="font-size: 12.5px; font-weight: 600;">${s.name}</div>
          <div style="font-size: 10.5px; color: var(--text-muted);">${s.desc}</div>
        </div>
        <label class="toggle-switch-ios">
          <input type="checkbox" ${s.active ? 'checked' : ''} onchange="toggleSchedule('${s.id}', this.checked)">
          <span class="toggle-track"></span>
        </label>
      </div>
    `).join('');
  }
}

function toggleSchedule(id, active) {
  const item = appState.schedules.find(s => s.id === id);
  if (item) item.active = active;
}

function markAllNotificationsRead() {
  appState.notifications.forEach(n => n.read = true);
  renderNotificationsScreen();
}

function handleNotificationAction(notifId) {
  if (notifId === 'notif-2') {
    navigateTo('screen-smartscan');
  } else if (notifId === 'notif-3') {
    navigateTo('screen-trends');
  } else {
    navigateTo('screen-home');
  }
}

// ============================================================
// 12. PROFILE & SETTINGS
// ============================================================
function renderProfileScreen() {
  const targetText = document.getElementById('profileDailyTargetText');
  if (targetText) targetText.innerText = appState.user.dailyTarget.toFixed(1);

  const unitBadge = document.getElementById('profileUnitBadge');
  if (unitBadge) {
    unitBadge.innerText = appState.user.unit === 'g' ? 'Gram (g)' : (appState.user.unit === 'sdt' ? 'Sendok Teh (sdt)' : 'Sendok Makan (sdm)');
  }

  const tagEl = document.getElementById('profileHealthTagText');
  if (tagEl && appState.user.title) {
    tagEl.innerText = appState.user.title;
  }
}

function cycleMeasuringUnit() {
  if (appState.user.unit === 'g') appState.user.unit = 'sdt';
  else if (appState.user.unit === 'sdt') appState.user.unit = 'sdm';
  else appState.user.unit = 'g';
  renderProfileScreen();
}

// ============================================================
// 13. MODALS (MANUAL LOG, REMINDER, FIGMA COMPARE)
// ============================================================
function openManualLogModal() {
  document.getElementById('manualLogModal').classList.add('active');
}

function closeManualLogModal() {
  document.getElementById('manualLogModal').classList.remove('active');
}

function handleManualLogSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('manualLogName').value;
  const sugar = parseFloat(document.getElementById('manualLogSugar').value);
  const cat = document.getElementById('manualLogCategory').value;
  const time = document.getElementById('manualLogTime').value || "Baru Saja";

  const newLog = {
    id: `log-${Date.now()}`,
    name: name,
    brand: "Catatan Manual",
    time: time,
    date: "2024-05-24",
    dayGroup: "Hari Ini",
    category: cat,
    sugar: sugar,
    serving: "1 porsi",
    level: sugar > 20 ? "Tinggi" : (sugar > 10 ? "Sedang" : "Rendah"),
    color: sugar > 20 ? "#EF4444" : (sugar > 10 ? "#F59E0B" : "#10B981")
  };

  appState.historyItems.unshift(newLog);
  appState.todayStats.consumed += sugar;

  closeManualLogModal();
  renderHomeDashboard();
  alert(`Berhasil mencatat "${name}" (${sugar}g) ke hari ini!`);
  navigateTo('screen-home');
}

function openAddReminderModal() {
  document.getElementById('addReminderModal').classList.add('active');
}

function closeAddReminderModal() {
  document.getElementById('addReminderModal').classList.remove('active');
}

function handleAddReminderSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('reminderTitle').value;
  const time = document.getElementById('reminderTime').value;

  appState.schedules.push({
    id: `sch-${Date.now()}`,
    name: title,
    desc: `Jadwal otomatis ${time} WIB`,
    active: true
  });

  closeAddReminderModal();
  renderNotificationsScreen();
  alert(`Jadwal pengingat "${title}" pada ${time} WIB berhasil diaktifkan!`);
}

function openFigmaCompareModal() {
  document.getElementById('figmaCompareModal').classList.add('active');
}

function closeFigmaCompareModal() {
  document.getElementById('figmaCompareModal').classList.remove('active');
}

function updateFigmaCompareImage(screenKey) {
  const img = document.getElementById('figmaComparisonImg');
  if (img) {
    img.src = `assets/screens/${screenKey}.png`;
  }
}

// ============================================================
// 14. APP INITIALIZATION ON DOM READY
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  updateLiveClock();
  setInterval(updateLiveClock, 30000);

  // Initialize data and start on Splash or Home
  loadProductAnalysisScreen(window.SWEET_LIMIT_DATA.productsCatalog[0]);
  renderHomeDashboard();
  renderHistoryScreen();
  renderNotificationsScreen();
  renderProfileScreen();
  updateCalculatorSimulation();

  // Set default view (Home screen or Splash)
  navigateTo('screen-home');
});
