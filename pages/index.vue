<template>
<div>
<div class="phone">
<div class="sb"><div class="notch"></div><span class="stt" id="sb-time">9:41</span><div style="display:flex;align-items:center;gap:6px;z-index:102"><button id="lang-btn" @click="toggleLang()" style="background:#F0F0EC;border:none;border-radius:7px;padding:3px 8px;font-size:10px;font-weight:800;cursor:pointer;font-family:'DM Sans',sans-serif;color:#111;letter-spacing:.02em">{{ lang==='en'?'हिं':'EN' }}</button><span class="sic">●●● 🔋</span></div></div>

<!-- ===== LANGUAGE SELECT ===== -->
<div class="scr" :class="{on: screen==='langselect'}" style="background:linear-gradient(160deg,#0B2E6E,#071B45)">
  <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 28px;text-align:center">
    <div style="font-size:64px;margin-bottom:20px">🐾</div>
    <div style="font-family:'Sora',sans-serif;font-size:30px;font-weight:800;color:#fff;margin-bottom:6px">Petly</div>
    <div style="font-size:13px;color:rgba(255,255,255,.4);margin-bottom:48px;letter-spacing:.08em;text-transform:uppercase">Greater Noida</div>
    <div style="font-size:14px;color:rgba(255,255,255,.55);margin-bottom:20px;line-height:1.8">
      Choose your language<br>
      <span style="font-size:15px;color:rgba(255,255,255,.75);font-weight:600">अपनी भाषा चुनें</span>
    </div>
    <div @click="chooseLang('en')" :style="{width:'100%',background: selectedLang==='en'?'rgba(255,255,255,.18)':'rgba(255,255,255,.08)',border: selectedLang==='en'?'2px solid rgba(255,255,255,.5)':'2px solid rgba(255,255,255,.15)',borderRadius:'18px',padding:'18px 20px',display:'flex',alignItems:'center',gap:'14px',cursor:'pointer',marginBottom:'12px',transition:'all .15s'}">
      <div style="width:44px;height:44px;border-radius:14px;background:rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#fff;font-family:'Sora',sans-serif;flex-shrink:0">EN</div>
      <div style="text-align:left;flex:1">
        <div style="font-family:'Sora',sans-serif;font-size:17px;font-weight:700;color:#fff">English</div>
        <div style="font-size:12px;color:rgba(255,255,255,.45);margin-top:2px">Continue in English</div>
      </div>
      <div :style="{width:'22px',height:'22px',borderRadius:'50%',border:'2px solid rgba(255,255,255,.3)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,background: selectedLang==='en'?'#fff':'transparent'}"></div>
    </div>
    <div @click="chooseLang('hi')" :style="{width:'100%',background: selectedLang==='hi'?'rgba(255,255,255,.18)':'rgba(255,255,255,.08)',border: selectedLang==='hi'?'2px solid rgba(255,255,255,.5)':'2px solid rgba(255,255,255,.15)',borderRadius:'18px',padding:'18px 20px',display:'flex',alignItems:'center',gap:'14px',cursor:'pointer',marginBottom:'36px',transition:'all .15s'}">
      <div style="width:44px;height:44px;border-radius:14px;background:rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#fff;font-family:'Sora',sans-serif;flex-shrink:0">IN</div>
      <div style="text-align:left;flex:1">
        <div style="font-family:'Sora',sans-serif;font-size:17px;font-weight:700;color:#fff">हिंदी</div>
        <div style="font-size:12px;color:rgba(255,255,255,.45);margin-top:2px">हिंदी में जारी रखें</div>
      </div>
      <div :style="{width:'22px',height:'22px',borderRadius:'50%',border:'2px solid rgba(255,255,255,.15)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,background: selectedLang==='hi'?'#fff':'transparent'}"></div>
    </div>
    <button @click="confirmLang()" :disabled="!selectedLang" :style="{width:'100%',background:'#fff',color:'#0B2E6E',border:'none',borderRadius:'16px',padding:'16px',fontSize:'15px',fontWeight:'700',cursor:'pointer',fontFamily:'Sora,sans-serif',opacity: selectedLang?1:.4,pointerEvents: selectedLang?'auto':'none',transition:'all .2s'}">
      {{ selectedLang ? (selectedLang==='en'?'Continue in English':'हिंदी में जारी रखें') : 'Select a language' }}
    </button>
    <div style="margin-top:16px;font-size:11px;color:rgba(255,255,255,.25);line-height:1.7">You can change this anytime<br>आप इसे बाद में भी बदल सकते हैं</div>
  </div>
</div>

<!-- ===== SPLASH ===== -->
<div class="scr" :class="{on: screen==='splash'}" style="background:linear-gradient(160deg,#0B2E6E,#071B45)">
  <div class="splash-bg">
    <div class="splash-icon">🐾</div>
    <div class="splash-title">{{ t('welcomeTitle') }}</div>
    <div class="splash-sub">{{ t('welcomeSub') }}</div>
    <div class="splash-features">
      <div class="sf"><div class="sf-icon">🐕‍🦺</div><div class="sf-label">{{ t('walking') }}</div></div>
      <div class="sf"><div class="sf-icon">✂️</div><div class="sf-label">{{ t('grooming') }}</div></div>
      <div class="sf"><div class="sf-icon">🩺</div><div class="sf-label">{{ t('vets') }}</div></div>
      <div class="sf"><div class="sf-icon">🛒</div><div class="sf-label">{{ t('stores') }}</div></div>
    </div>
    <button class="splash-btn" @click="go('signup')">{{ t('createAccount') }}</button>
    <button class="splash-btn outline" @click="go('login')">{{ t('alreadyHaveAccount') }}</button>
    <div style="margin-top:16px;font-size:11px;color:rgba(255,255,255,.3);cursor:pointer" @click="isLoggedIn=true;go('home')">{{ t('continueAsGuest') }}</div>
  </div>
</div>

<!-- ===== SIGN UP ===== -->
<div class="scr" :class="{on: screen==='signup'}" style="background:#FAFAF8">
  <div class="auth-top">
    <div class="auth-back" @click="isLoggedIn?go('home'):go('splash')">{{ t('back') }}</div>
    <div class="auth-title">{{ t('createAccountTitle') }}</div>
    <div class="auth-subtitle">{{ t('joinPetOwners') }}</div>
  </div>
  <div class="auth-body">
    <div class="error-msg" :style="{display: suErr?'block':'none'}">{{ t('fillFieldsError') }}</div>
    <label class="inp-label">{{ t('fullName') }}</label>
    <input class="inp" v-model="suName" type="text" placeholder="Your name">
    <label class="inp-label">{{ t('phoneNumber') }}</label>
    <input class="inp" v-model="suPhone" type="tel" placeholder="+91 98765 43210">
    <label class="inp-label">{{ t('emailAddress') }}</label>
    <input class="inp" v-model="suEmail" type="email" placeholder="you@email.com">
    <label class="inp-label">{{ t('password') }}</label>
    <input class="inp" v-model="suPass" type="password" placeholder="Min 8 characters">
    <button class="auth-btn" @click="doSignup()">{{ t('createAccountBtn') }}</button>
    <div class="divider"><span>{{ t('orSignUpWith') }}</span></div>
    <button class="soc-btn" @click="socialLogin('Google')"><span style="font-size:18px">G</span> Continue with Google</button>
    <button class="soc-btn" @click="socialLogin('Phone OTP')"><span style="font-size:18px">📱</span> Continue with OTP</button>
    <div class="auth-switch">{{ t('alreadyHaveAccountQ') }} <span @click="go('login')">{{ t('signIn') }}</span></div>
    <div style="margin-top:16px;font-size:10px;color:#bbb;text-align:center;line-height:1.6">{{ t('termsNotice') }}</div>
    <div style="margin-top:12px;text-align:center">
      <div style="font-size:12px;color:#888;margin-bottom:8px;font-weight:600">{{ t('areYouPetBusiness') }}</div>
      <button style="background:#F0F0EC;color:#111;border:none;border-radius:10px;padding:9px 18px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif" @click="go('addbiz')">{{ t('listYourBusiness') }}</button>
    </div>
  </div>
</div>

<!-- ===== LOGIN ===== -->
<div class="scr" :class="{on: screen==='login'}" style="background:#FAFAF8">
  <div class="auth-top">
    <div class="auth-back" @click="isLoggedIn?go('home'):go('splash')">{{ t('back') }}</div>
    <div class="auth-title">{{ t('welcomeBack') }}</div>
    <div class="auth-subtitle">{{ t('signInToAccount') }}</div>
  </div>
  <div class="auth-body">
    <div class="error-msg" :style="{display: liErr?'block':'none'}">{{ t('loginError') }}</div>
    <div class="success-msg" :style="{display: liSuc?'block':'none'}">{{ t('loginSuccess') }}</div>
    <label class="inp-label">{{ t('emailOrPhone') }}</label>
    <input class="inp" v-model="liEmail" type="email" placeholder="you@email.com">
    <label class="inp-label">{{ t('password') }}</label>
    <input class="inp" v-model="liPass" type="password" placeholder="Your password">
    <div class="forgot" @click="toast('📧 Reset link sent to your email!')">{{ t('forgotPassword') }}</div>
    <button class="auth-btn" @click="doLogin()">{{ t('signInBtn') }}</button>
    <div class="divider"><span>{{ t('orContinueWith') }}</span></div>
    <button class="soc-btn" @click="socialLogin('Google')"><span style="font-size:18px">G</span> Continue with Google</button>
    <button class="soc-btn" @click="socialLogin('Phone OTP')"><span style="font-size:18px">📱</span> Sign in with OTP</button>
    <div class="auth-switch">{{ t('dontHaveAccount') }} <span @click="go('signup')">{{ t('signUp') }}</span></div>
    <div style="margin-top:16px;text-align:center">
      <button style="background:#F0F0EC;color:#111;border:none;border-radius:10px;padding:9px 18px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif" @click="go('addbiz')">{{ t('listYourBusiness') }}</button>
    </div>
  </div>
</div>

<!-- ===== ADD BUSINESS FLOW ===== -->
<div class="scr" :class="{on: screen==='addbiz'}" style="background:#FAFAF8">
  <div class="auth-top" style="background:#0B2E6E">
    <div class="auth-back" @click="goBackFromBiz()">← Back</div>
    <div class="auth-title">{{ t('listBusiness') }}</div>
    <div class="auth-subtitle">{{ t('joinAsPartner') }}</div>
    <div style="display:flex;gap:8px;margin-top:16px">
      <div style="background:rgba(255,255,255,.15);border-radius:10px;padding:8px 12px;text-align:center;flex:1"><div style="font-size:18px">🆓</div><div style="font-size:10px;color:rgba(255,255,255,.7);margin-top:3px;font-weight:700">{{ t('threeMonthsFree') }}</div></div>
      <div style="background:rgba(255,255,255,.15);border-radius:10px;padding:8px 12px;text-align:center;flex:1"><div style="font-size:18px">⚡</div><div style="font-size:10px;color:rgba(255,255,255,.7);margin-top:3px;font-weight:700">{{ t('twentyFourHrApproval') }}</div></div>
      <div style="background:rgba(255,255,255,.15);border-radius:10px;padding:8px 12px;text-align:center;flex:1"><div style="font-size:18px">📈</div><div style="font-size:10px;color:rgba(255,255,255,.7);margin-top:3px;font-weight:700">{{ t('moreBookings') }}</div></div>
    </div>
  </div>
  <div class="auth-body">
    <!-- Step 1 -->
    <div v-show="bizStep===1">
      <div class="step-indicator"><div class="si-dot on"></div><div class="si-dot"></div><div class="si-dot"></div><div class="si-dot"></div></div>
      <div style="font-family:'Sora',sans-serif;font-size:16px;font-weight:700;color:#111;margin-bottom:4px">{{ t('whatTypeBusiness') }}</div>
      <div style="font-size:12px;color:#aaa;margin-bottom:14px">{{ t('selectAllApply') }}</div>
      <div v-for="bt in bizTypes" :key="bt.icon" class="sel-card" :class="{on: bt.selected}" @click="bt.selected=!bt.selected">
        <span class="sel-icon">{{ bt.icon }}</span>
        <div><div class="sel-name">{{ t(bt.nameKey) }}</div><div class="sel-desc">{{ t(bt.descKey) }}</div></div>
        <div class="sel-check"></div>
      </div>
      <button class="auth-btn" @click="bizStep=2">{{ t('continueBtn') }}</button>
    </div>
    <!-- Step 2 -->
    <div v-show="bizStep===2">
      <div class="step-indicator"><div class="si-dot"></div><div class="si-dot on"></div><div class="si-dot"></div><div class="si-dot"></div></div>
      <div style="font-family:'Sora',sans-serif;font-size:16px;font-weight:700;color:#111;margin-bottom:14px">{{ t('basicInfo') }}</div>
      <label class="inp-label">{{ t('businessName') }}</label>
      <input class="inp" v-model="bizName" type="text" placeholder="e.g. Suraj Dog Walker">
      <label class="inp-label">{{ t('phoneNumber') }}</label>
      <input class="inp" v-model="bizPhone" type="tel" placeholder="+91 98765 43210">
      <label class="inp-label">{{ t('emailAddress') }}</label>
      <input class="inp" v-model="bizEmail" type="email" placeholder="business@email.com">
      <label class="inp-label">{{ t('areaLocation') }}</label>
      <input class="inp" v-model="bizArea" type="text" placeholder="e.g. Gaur City, Sector 16">
      <label class="inp-label">{{ t('yearsExperience') }}</label>
      <input class="inp" v-model="bizExp" type="number" placeholder="e.g. 3">
      <button class="auth-btn" @click="bizStep=3">{{ t('continueBtn') }}</button>
      <button class="auth-btn secondary" @click="bizStep=1">← Back</button>
    </div>
    <!-- Step 3 -->
    <div v-show="bizStep===3">
      <div class="step-indicator"><div class="si-dot"></div><div class="si-dot"></div><div class="si-dot on"></div><div class="si-dot"></div></div>
      <div style="font-family:'Sora',sans-serif;font-size:16px;font-weight:700;color:#111;margin-bottom:4px">{{ t('verificationDocs') }}</div>
      <div style="font-size:12px;color:#aaa;margin-bottom:14px">{{ t('requiredForVerified') }}</div>
      <div class="info-card" style="background:#FFFBEB;border-color:#FDE68A">
        <div style="display:flex;gap:8px;align-items:center"><span style="font-size:16px">ℹ️</span><div style="font-size:12px;color:#92400E;font-weight:600">{{ t('uploadDocsInfo') }}</div></div>
      </div>
      <label class="inp-label">{{ t('aadhaarFront') }}</label>
      <div style="background:#F5F5F3;border:1.5px dashed #ddd;border-radius:13px;padding:20px;text-align:center;margin-bottom:12px;cursor:pointer" @click="toast('📷 Camera/gallery opening...')">
        <div style="font-size:28px;margin-bottom:6px">📷</div>
        <div style="font-size:13px;font-weight:600;color:#888">{{ t('tapUploadAadhaar') }}</div>
        <div style="font-size:11px;color:#bbb;margin-top:3px">JPG, PNG · Max 5MB</div>
      </div>
      <label class="inp-label">{{ t('selfieAadhaar') }}</label>
      <div style="background:#F5F5F3;border:1.5px dashed #ddd;border-radius:13px;padding:20px;text-align:center;margin-bottom:12px;cursor:pointer" @click="toast('📷 Camera opening for selfie...')">
        <div style="font-size:28px;margin-bottom:6px">🤳</div>
        <div style="font-size:13px;font-weight:600;color:#888">{{ t('tapSelfieAadhaar') }}</div>
      </div>
      <label class="inp-label">{{ t('policeVerification') }}</label>
      <div style="background:#F0F8FF;border:1.5px dashed #B5D4F4;border-radius:13px;padding:20px;text-align:center;margin-bottom:12px;cursor:pointer" @click="toast('📷 Upload your police verification certificate')">
        <div style="font-size:28px;margin-bottom:6px">🛡️</div>
        <div style="font-size:13px;font-weight:600;color:#1246A8">{{ t('uploadPoliceVerif') }}</div>
        <div style="font-size:11px;color:#6080B0;margin-top:3px">{{ t('earnsEliteBadge') }}</div>
      </div>
      <button class="auth-btn" @click="bizStep=4">{{ t('continueBtn') }}</button>
      <button class="auth-btn secondary" @click="bizStep=2">← Back</button>
    </div>
    <!-- Step 4 -->
    <div v-show="bizStep===4 && !bizSuccess">
      <div class="step-indicator"><div class="si-dot"></div><div class="si-dot"></div><div class="si-dot"></div><div class="si-dot on"></div></div>
      <div style="font-family:'Sora',sans-serif;font-size:16px;font-weight:700;color:#111;margin-bottom:4px">{{ t('choosePlan') }}</div>
      <div style="font-size:12px;color:#aaa;margin-bottom:14px">{{ t('firstThreeMonthsFree') }}</div>
      <div v-for="p in plans" :key="p.id" class="sel-card" :class="{on: selectedPlan===p.id}" @click="selectedPlan=p.id">
        <span class="sel-icon">{{ p.icon }}</span>
        <div style="flex:1">
          <div class="sel-name">{{ p.name }}</div>
          <div class="sel-desc">{{ t(p.descKey) }}</div>
          <div v-if="p.popular" style="font-size:10px;background:#E6F1FB;color:#0A45C2;padding:2px 7px;border-radius:99px;font-weight:700;display:inline-block;margin-top:4px">{{ t('mostPopular') }}</div>
        </div>
        <div class="sel-check" :style="{background: selectedPlan===p.id?'#111':'transparent', borderColor: selectedPlan===p.id?'#111':'#ddd'}"></div>
      </div>
      <div style="background:#EDFAF3;border-radius:12px;padding:10px 14px;margin-bottom:14px;font-size:12px;color:#16A34A;font-weight:600;display:flex;gap:8px;align-items:center"><span>🎁</span><span>{{ t('noCreditCard') }}</span></div>
      <button class="auth-btn" @click="bizSuccess=true">{{ t('submitApplication') }}</button>
      <button class="auth-btn secondary" @click="bizStep=3">← Back</button>
    </div>
    <!-- Success -->
    <div v-if="bizSuccess" style="text-align:center;padding:20px 0">
      <div style="font-size:64px;margin-bottom:16px">🎉</div>
      <div style="font-family:'Sora',sans-serif;font-size:20px;font-weight:800;color:#111;margin-bottom:8px">{{ t('applicationSubmitted') }}</div>
      <div style="font-size:13px;color:#888;line-height:1.7;margin-bottom:24px">{{ t('reviewMessage') }}</div>
      <div class="info-card">
        <div class="ict">{{ t('whatHappensNext') }}</div>
        <div class="icr"><span class="ick">Step 1</span><span class="icv">{{ t('verifyDocs') }}</span></div>
        <div class="icr"><span class="ick">Step 2</span><span class="icv">{{ t('whatsappConfirm') }}</span></div>
        <div class="icr"><span class="ick">Step 3</span><span class="icv">{{ t('profileGoesLive') }}</span></div>
        <div class="icr"><span class="ick">Step 4</span><span class="icv">{{ t('startGettingBookings') }}</span></div>
      </div>
      <button class="auth-btn" @click="isLoggedIn=true;go('home')">{{ t('goToDashboard') }}</button>
    </div>
  </div>
</div>

<!-- ===== HOME ===== -->
<div class="scr" :class="{on: screen==='home'}">
  <div class="hdr">
    <div class="row"><div class="hgr">{{ t('greeting', {name: userName}) }}</div><div style="display:flex;gap:7px;align-items:center"><button @click="go('emergency')" style="background:#DC2626;color:#fff;border:none;border-radius:11px;padding:7px 11px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;display:flex;align-items:center;gap:4px">🚨 SOS</button><div class="hnotif" @click="go('notifications')">🔔</div></div></div>
    <div class="pet-banner">
      <div class="pav">🐕</div>
      <div><div class="pnm">Bruno</div><div class="pbr">{{ t('brunoDets') }}</div><div class="ptgs"><span class="ptg">{{ t('active') }}</span><span class="ptg">{{ t('vaccinated') }}</span></div></div>
      <div class="vbdg"><div class="vbl">{{ t('vaccine') }}</div><div class="vbv">14d</div></div>
    </div>
  </div>
  <div class="scroll">
    <div class="row"><div class="stit">{{ t('services') }}</div><div class="slnk" @click="go('explore')">{{ t('seeAll') }}</div></div>
    <div class="bento">
      <div class="bb dk" @click="go('explore');activeFilter='walking'"><div class="bb-i">🐕‍🦺</div><div class="bb-n">{{ t('dogWalking') }}</div><div class="bb-c">{{ t('nearbyCount', {n:2}) }}</div></div>
      <div class="bb" @click="go('explore');activeFilter='grooming'"><div class="bb-i">✂️</div><div class="bb-n">{{ t('grooming') }}</div><div class="bb-c">{{ t('nearbyCount', {n:4}) }}</div></div>
      <div class="bb" @click="go('explore');activeFilter='stores'"><div class="bb-i">🛒</div><div class="bb-n">{{ t('petStores') }}</div><div class="bb-c">{{ t('nearbyCount', {n:4}) }}</div></div>
      <div class="bb" @click="go('explore');activeFilter='vets'"><div class="bb-i">🩺</div><div class="bb-n">{{ t('vets') }}</div><div class="bb-c">{{ t('nearbyCount', {n:3}) }}</div></div>
      <div class="bb" @click="go('emergency')" style="background:#FFF5F5;border-color:#FED7D7;grid-column:span 2"><div style="display:flex;align-items:center;gap:10px"><div style="font-size:26px">🚨</div><div><div style="font-size:12px;font-weight:700;color:#DC2626">{{ t('emergencyVet') }}</div><div style="font-size:10px;color:#EF4444;margin-top:1px">{{ t('tapToCallVet') }}</div></div><div style="margin-left:auto;background:#DC2626;color:#fff;font-size:10px;font-weight:700;padding:4px 10px;border-radius:99px">24/7</div></div></div>
    </div>
    <div class="row"><div class="stit">{{ t('nearbyPartners') }}</div><div class="slnk" @click="go('explore')">View all</div></div>
    <!-- Provider cards -->
    <div v-for="p in filteredProviders" :key="p.name" class="card" @click="book(p)">
      <div class="cav" :style="{background: p.avBg||'#F5F5F3'}">{{ p.icon }}</div>
      <div>
        <div class="cn">{{ p.name }}</div>
        <div class="ct">{{ p.sub }}</div>
        <div class="cm">
          <span class="cst">{{ p.rating }}</span>
          <span class="cdst">{{ p.dist }}</span>
          <span class="cvtg">{{ p.policeVerified ? '✓ Police Verified' : '✓ Verified' }}</span>
        </div>
      </div>
      <div class="cr">
        <div class="cp">{{ p.isStore ? t('open') : p.price }}</div>
        <div class="cu">{{ p.unit }}</div>
        <button class="cbtn" :style="p.isStore?{background:'#fff',color:'#111',border:'1.5px solid #111'}:{}" @click.stop="p.isStore?visit(p):p.isVet?vetAppt(p):book(p)">{{ p.isStore ? t('visitBtn') : t('bookBtn') }}</button>
      </div>
    </div>
    <!-- Business CTA -->
    <div style="background:#0B2E6E;border-radius:16px;padding:14px;display:flex;align-items:center;gap:12px;margin-top:4px;cursor:pointer" @click="go('addbiz')">
      <div style="font-size:28px">🏪</div>
      <div style="flex:1"><div style="font-size:13px;font-weight:700;color:#fff">{{ t('ownPetBusiness') }}</div><div style="font-size:11px;color:rgba(255,255,255,.5);margin-top:2px">{{ t('listOnPetly') }}</div></div>
      <div style="font-size:18px;color:rgba(255,255,255,.4)">→</div>
    </div>
  </div>
  <div class="nav">
    <div class="ni on" @click="go('home')"><div class="ni-i">🏠</div><div class="ni-l">{{ t('navHome') }}</div></div>
    <div class="ni" @click="go('explore')"><div class="ni-i">🔍</div><div class="ni-l">{{ t('navExplore') }}</div></div>
    <div class="ni" @click="go('petprofile')"><div class="ni-i">🐾</div><div class="ni-l">{{ t('navMyPet') }}</div></div>
    <div class="ni" @click="go('community')"><div class="ni-i">👥</div><div class="ni-l">{{ t('navCommunity') }}</div></div>
    <div class="ni" @click="go('account')"><div class="ni-i">👤</div><div class="ni-l">{{ t('navAccount') }}</div></div>
  </div>
</div>

<!-- ===== EXPLORE ===== -->
<div class="scr" :class="{on: screen==='explore'}">
  <div style="padding:50px 18px 14px;background:#FAFAF8">
    <div style="font-family:'Sora',sans-serif;font-size:20px;font-weight:800;color:#111;margin-bottom:12px">{{ t('findServices') }}</div>
    <div class="srch"><span>🔍</span><input v-model="searchQ" :placeholder="t('searchPlaceholder')" style="background:none;border:none;outline:none;font-size:13px;color:#111;font-family:'DM Sans',sans-serif;flex:1"></div>
    <div class="chips">
      <button v-for="f in filters" :key="f.key" class="chip" :class="activeFilter===f.key?'c-on':'c-off'" @click="activeFilter=f.key">{{ t(f.labelKey) }}</button>
    </div>
  </div>
  <div class="scroll">
    <div v-for="p in exploreResults" :key="p.name" class="card" @click="p.isStore?visit(p):p.isVet?vetAppt(p):book(p)">
      <div class="cav" :style="{background: p.avBg||'#F5F5F3'}">{{ p.icon }}</div>
      <div>
        <div class="cn">{{ p.name }}</div>
        <div class="ct">{{ p.sub }}</div>
        <div class="cm">
          <span class="cst">{{ p.rating }}</span>
          <span class="cdst">{{ p.dist }}</span>
          <span class="cvtg">{{ p.policeVerified ? '✓ Police Verified' : '✓ Verified' }}</span>
        </div>
      </div>
      <div class="cr">
        <div class="cp">{{ p.isStore ? t('open') : p.price }}</div>
        <div class="cu">{{ p.unit }}</div>
        <button class="cbtn" :style="p.isStore?{background:'#fff',color:'#111',border:'1.5px solid #111'}:{}" @click.stop="p.isStore?visit(p):p.isVet?vetAppt(p):book(p)">{{ p.isStore ? t('visitBtn') : t('bookBtn') }}</button>
      </div>
    </div>
    <div v-if="exploreResults.length===0" class="empty"><div class="empty-icon">🔍</div>{{ t('noResults') }}</div>
  </div>
  <div class="nav">
    <div class="ni" @click="go('home')"><div class="ni-i">🏠</div><div class="ni-l">{{ t('navHome') }}</div></div>
    <div class="ni on" @click="go('explore')"><div class="ni-i">🔍</div><div class="ni-l">{{ t('navExplore') }}</div></div>
    <div class="ni" @click="go('petprofile')"><div class="ni-i">🐾</div><div class="ni-l">{{ t('navMyPet') }}</div></div>
    <div class="ni" @click="go('community')"><div class="ni-i">👥</div><div class="ni-l">{{ t('navCommunity') }}</div></div>
    <div class="ni" @click="go('account')"><div class="ni-i">👤</div><div class="ni-l">{{ t('navAccount') }}</div></div>
  </div>
</div>

<!-- ===== BOOKING ===== -->
<div class="scr" :class="{on: screen==='booking'}">
  <div class="bktop">
    <div class="bkbk" @click="go(prevScreen||'home')">← Back</div>
    <div class="bkav">{{ currentProvider?.icon }}</div>
    <div class="bknm">{{ currentProvider?.name }}</div>
    <div class="bksb">{{ currentProvider?.sub }}</div>
    <div class="bksts">
      <div class="bkst"><div class="bksv">{{ currentProvider?.rating }}</div><div class="bksl">RATING</div></div>
      <div class="bkst"><div class="bksv">{{ currentProvider?.reviews }}</div><div class="bksl">REVIEWS</div></div>
      <div class="bkst"><div class="bksv">{{ currentProvider?.exp }}</div><div class="bksl">EXP</div></div>
    </div>
  </div>
  <div class="bkbdy">
    <div class="bksec">{{ t('selectDate') }}</div>
    <div class="dgrid">
      <div v-for="d in datePicks" :key="d.num" class="dchip" :class="{on: selectedDate===d.num}" @click="selectedDate=d.num">
        <div class="dchip-day">{{ d.day }}</div>
        <div class="dchip-num">{{ d.num }}</div>
      </div>
    </div>
    <div class="bksec">{{ t('selectTime') }}</div>
    <div class="tgrid">
      <div v-for="ts in timeSlots" :key="ts" class="ts" :class="{on: selectedTime===ts}" @click="selectedTime=ts">{{ ts }}</div>
    </div>
    <div class="bksec">{{ t('selectPackage') }}</div>
    <div v-for="pk in packages" :key="pk.name" class="pkcard" :class="{on: selectedPackage===pk.name}" @click="selectedPackage=pk.name">
      <div class="pkdot"></div>
      <div><div class="pkn">{{ pk.name }}</div><div class="pkd">{{ pk.desc }}</div></div>
      <div class="pkp">{{ pk.price }}</div>
    </div>
    <button class="bookcta" @click="confirmBooking()">{{ t('confirmBooking') }} →</button>
  </div>
</div>

<!-- ===== BOOKING CONFIRMED ===== -->
<div class="scr" :class="{on: screen==='confirmed'}">
  <div class="confbdy">
    <div class="confcirc">✓</div>
    <div class="conftit">{{ t('bookingConfirmed') }}</div>
    <div class="confsb">{{ t('bookingConfirmedSub') }}</div>
    <div class="confcard">
      <div class="ccr"><span class="cck">{{ t('provider') }}</span><span class="ccv">{{ currentProvider?.name }}</span></div>
      <div class="ccr"><span class="cck">{{ t('date') }}</span><span class="ccv">{{ selectedDate }} Apr 2026</span></div>
      <div class="ccr"><span class="cck">{{ t('time') }}</span><span class="ccv">{{ selectedTime }}</span></div>
      <div class="ccr"><span class="cck">{{ t('package') }}</span><span class="ccv">{{ selectedPackage }}</span></div>
      <div class="ccr"><span class="cck">{{ t('pet') }}</span><span class="ccv">Bruno (Labrador)</span></div>
    </div>
    <button class="confbtn" @click="go('home')">{{ t('backToHome') }}</button>
  </div>
</div>

<!-- ===== STORE VISIT ===== -->
<div class="scr" :class="{on: screen==='visit'}">
  <div class="vstop">
    <div class="vsbk" @click="go(prevScreen||'home')">← Back</div>
    <div class="vsav">{{ currentProvider?.icon }}</div>
    <div class="vsnm">{{ currentProvider?.name }}</div>
    <div class="vssb">{{ currentProvider?.sub }}</div>
    <div class="vssts">
      <div class="vsst"><div class="vssv">{{ currentProvider?.rating }}</div><div class="vssl">RATING</div></div>
      <div class="vsst"><div class="vssv">{{ currentProvider?.reviews }}</div><div class="vssl">REVIEWS</div></div>
      <div class="vsst"><div class="vssv">{{ currentProvider?.hours }}</div><div class="vssl">HOURS</div></div>
    </div>
  </div>
  <div class="vsbdy">
    <div class="info-card">
      <div class="ict">{{ t('contactInfo') }}</div>
      <div class="icr"><span class="ick">{{ t('phone') }}</span><span class="icv">{{ currentProvider?.phone }}</span></div>
      <div class="icr"><span class="ick">{{ t('hours') }}</span><span class="icv">{{ currentProvider?.hours }}</span></div>
      <div class="icr"><span class="ick">{{ t('area') }}</span><span class="icv">{{ currentProvider?.area }}</span></div>
    </div>
    <div class="info-card">
      <div class="ict">{{ t('available') }}</div>
      <div class="tagrow">
        <span v-for="tag in (currentProvider?.tags||[])" :key="tag" class="tg">{{ tag }}</span>
      </div>
    </div>
    <button class="drbtn" @click="toast('📍 Opening directions...')">{{ t('getDirections') }}</button>
    <button class="clbtn" @click="toast('📞 Calling...')">{{ t('callNow') }}</button>
  </div>
</div>

<!-- ===== PET PROFILE ===== -->
<div class="scr" :class="{on: screen==='petprofile'}">
  <div class="pptop">
    <div class="ppav">🐕</div>
    <div class="ppnm">Bruno</div>
    <div class="ppsb">{{ t('brunoDets') }}</div>
    <div class="ppsts">
      <div class="ppst"><div class="ppsv">28kg</div><div class="ppsl">{{ t('weight') }}</div></div>
      <div class="ppst"><div class="ppsv">3yr</div><div class="ppsl">{{ t('age') }}</div></div>
      <div class="ppst"><div class="ppsv">12</div><div class="ppsl">{{ t('visits') }}</div></div>
      <div class="ppst"><div class="ppsv">5</div><div class="ppsl">{{ t('vaccines') }}</div></div>
    </div>
  </div>
  <div class="scroll">
    <div class="info-card">
      <div class="ict">{{ t('healthInfo') }}</div>
      <div class="icr"><span class="ick">{{ t('breed') }}</span><span class="icv">Labrador Retriever</span></div>
      <div class="icr"><span class="ick">{{ t('gender') }}</span><span class="icv">Male</span></div>
      <div class="icr"><span class="ick">{{ t('color') }}</span><span class="icv">Golden</span></div>
      <div class="icr"><span class="ick">{{ t('microchip') }}</span><span class="icv">Yes — #PLT-2847</span></div>
    </div>
    <div class="info-card">
      <div class="ict">{{ t('vaccinations') }}</div>
      <div v-for="v in vaccinations" :key="v.name" class="vacc">
        <div class="vdot" :style="{background: v.status==='done'?'#16A34A':v.status==='scheduled'?'#F59E0B':'#D1D5DB'}"></div>
        <div class="vnm">{{ v.name }}</div>
        <div class="vdt">{{ v.date }}</div>
        <span class="vtg" :class="{'vt-d':v.status==='done','vt-s':v.status==='scheduled','vt-u':v.status==='upcoming'}">{{ v.status==='done'?'Done':v.status==='scheduled'?'Scheduled':'Upcoming' }}</span>
      </div>
    </div>
  </div>
  <div class="nav">
    <div class="ni" @click="go('home')"><div class="ni-i">🏠</div><div class="ni-l">{{ t('navHome') }}</div></div>
    <div class="ni" @click="go('explore')"><div class="ni-i">🔍</div><div class="ni-l">{{ t('navExplore') }}</div></div>
    <div class="ni on" @click="go('petprofile')"><div class="ni-i">🐾</div><div class="ni-l">{{ t('navMyPet') }}</div></div>
    <div class="ni" @click="go('community')"><div class="ni-i">👥</div><div class="ni-l">{{ t('navCommunity') }}</div></div>
    <div class="ni" @click="go('account')"><div class="ni-i">👤</div><div class="ni-l">{{ t('navAccount') }}</div></div>
  </div>
</div>

<!-- ===== COMMUNITY ===== -->
<div class="scr" :class="{on: screen==='community'}">
  <div class="cmtop">
    <div class="cmtit">{{ t('community') }}</div>
    <div class="cmsb">{{ t('communitySub') }}</div>
  </div>
  <div class="scroll">
    <div class="alcard" @click="toast('🐕 Viewing lost pet alert...')">
      <div style="font-size:28px">🚨</div>
      <div><div class="altit">Lost Dog — Golden Retriever near Gaur City</div><div class="alsb">Posted 2 hours ago · Sector 16</div></div>
    </div>
    <div v-for="post in communityPosts" :key="post.id" class="pcard2">
      <div class="phdr">
        <div class="pav2">{{ post.avatar }}</div>
        <div><div class="pusr">{{ post.user }}</div><div class="ptim">{{ post.time }}</div></div>
        <div class="parea">{{ post.area }}</div>
      </div>
      <div class="ptxt">{{ post.text }}</div>
      <div class="pacts">
        <span class="pact" @click="post.liked=!post.liked">{{ post.liked?'❤️':'🤍' }} {{ post.likes + (post.liked?1:0) }}</span>
        <span class="pact">💬 {{ post.comments }}</span>
        <span class="pact">↗ Share</span>
      </div>
    </div>
  </div>
  <div class="nav">
    <div class="ni" @click="go('home')"><div class="ni-i">🏠</div><div class="ni-l">{{ t('navHome') }}</div></div>
    <div class="ni" @click="go('explore')"><div class="ni-i">🔍</div><div class="ni-l">{{ t('navExplore') }}</div></div>
    <div class="ni" @click="go('petprofile')"><div class="ni-i">🐾</div><div class="ni-l">{{ t('navMyPet') }}</div></div>
    <div class="ni on" @click="go('community')"><div class="ni-i">👥</div><div class="ni-l">{{ t('navCommunity') }}</div></div>
    <div class="ni" @click="go('account')"><div class="ni-i">👤</div><div class="ni-l">{{ t('navAccount') }}</div></div>
  </div>
</div>

<!-- ===== EMERGENCY ===== -->
<div class="scr" :class="{on: screen==='emergency'}">
  <div style="padding:50px 18px 14px;background:#FFF5F5">
    <div class="auth-back" style="color:#DC2626" @click="go('home')">← Back to safety</div>
    <div style="font-family:'Sora',sans-serif;font-size:22px;font-weight:800;color:#DC2626;margin-bottom:4px">🚨 {{ t('emergencyVet') }}</div>
    <div style="font-size:12px;color:#EF4444">{{ t('callNearestVet') }}</div>
  </div>
  <div class="scroll">
    <div v-for="v in emergencyVets" :key="v.name" class="vet-card">
      <div class="vet-hdr">
        <div class="vet-av">{{ v.icon }}</div>
        <div><div class="vet-nm">{{ v.name }}</div><div class="vet-loc">{{ v.loc }}</div></div>
        <span class="vet-badge vb-open">{{ t('open') }}</span>
      </div>
      <div class="vet-specs">
        <span v-for="s in v.specs" :key="s" class="vet-sp">{{ s }}</span>
      </div>
      <div class="vet-foot">
        <div><span class="vet-fee">{{ v.fee }}</span><span class="vet-feeunit"> /consult</span></div>
        <button class="vet-btn" @click="toast('📞 Calling ' + v.name + '...')">📞 Call Now</button>
      </div>
    </div>
  </div>
</div>

<!-- ===== NOTIFICATIONS ===== -->
<div class="scr" :class="{on: screen==='notifications'}">
  <div style="padding:50px 18px 14px;background:#FAFAF8">
    <div class="auth-back" style="color:#111" @click="go('home')">← Back</div>
    <div style="font-family:'Sora',sans-serif;font-size:20px;font-weight:800;color:#111">{{ t('notifications') }}</div>
  </div>
  <div class="scroll">
    <div v-for="n in notifications" :key="n.id" class="card" style="cursor:default">
      <div class="cav">{{ n.icon }}</div>
      <div><div class="cn">{{ n.title }}</div><div class="ct">{{ n.time }}</div><div style="font-size:11px;color:#888;margin-top:2px">{{ n.body }}</div></div>
    </div>
    <div v-if="notifications.length===0" class="empty"><div class="empty-icon">🔔</div>No notifications yet</div>
  </div>
</div>

<!-- ===== ACCOUNT ===== -->
<div class="scr" :class="{on: screen==='account'}">
  <div class="actop">
    <div class="acrow">
      <div class="acav">👤</div>
      <div><div class="acnm">{{ userName }}</div><div class="acem">{{ userEmail || 'arjun@petly.in' }}</div></div>
    </div>
  </div>
  <div class="scroll">
    <div class="accard">
      <div class="acitem" @click="go('petprofile')"><div class="acicon">🐾</div><div class="aclbl">{{ t('myPets') }}</div><div class="acarr">›</div></div>
      <div class="acitem" @click="toast('📋 Opening bookings...')"><div class="acicon">📋</div><div class="aclbl">{{ t('myBookings') }}</div><div class="acarr">›</div></div>
      <div class="acitem" @click="toast('💳 Opening payments...')"><div class="acicon">💳</div><div class="aclbl">{{ t('payments') }}</div><div class="acarr">›</div></div>
    </div>
    <div class="accard">
      <div class="acitem" @click="toast('⚙️ Opening settings...')"><div class="acicon">⚙️</div><div class="aclbl">{{ t('settings') }}</div><div class="acarr">›</div></div>
      <div class="acitem" @click="toggleLang()"><div class="acicon">🌐</div><div class="aclbl">{{ t('language') }}</div><div class="acval">{{ lang==='en'?'English':'हिंदी' }}</div><div class="acarr">›</div></div>
      <div class="acitem" @click="toast('❓ Opening help...')"><div class="acicon">❓</div><div class="aclbl">{{ t('helpSupport') }}</div><div class="acarr">›</div></div>
    </div>
    <button class="soBtn" @click="isLoggedIn=false;go('splash')">{{ t('signOut') }}</button>
  </div>
  <div class="nav">
    <div class="ni" @click="go('home')"><div class="ni-i">🏠</div><div class="ni-l">{{ t('navHome') }}</div></div>
    <div class="ni" @click="go('explore')"><div class="ni-i">🔍</div><div class="ni-l">{{ t('navExplore') }}</div></div>
    <div class="ni" @click="go('petprofile')"><div class="ni-i">🐾</div><div class="ni-l">{{ t('navMyPet') }}</div></div>
    <div class="ni" @click="go('community')"><div class="ni-i">👥</div><div class="ni-l">{{ t('navCommunity') }}</div></div>
    <div class="ni on" @click="go('account')"><div class="ni-i">👤</div><div class="ni-l">{{ t('navAccount') }}</div></div>
  </div>
</div>

</div><!-- /phone -->

<!-- TOAST -->
<div id="toast" :style="{display: toastMsg?'block':'none'}">{{ toastMsg }}</div>
</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// ── STATE ──
const screen = ref('langselect')
const prevScreen = ref('home')
const lang = ref('en')
const selectedLang = ref('')
const isLoggedIn = ref(false)
const userName = ref('Arjun')
const userEmail = ref('')
const toastMsg = ref('')
const searchQ = ref('')
const activeFilter = ref('all')

// Auth
const suName = ref(''), suPhone = ref(''), suEmail = ref(''), suPass = ref(''), suErr = ref(false)
const liEmail = ref(''), liPass = ref(''), liErr = ref(false), liSuc = ref(false)

// Business
const bizStep = ref(1)
const bizSuccess = ref(false)
const bizName = ref(''), bizPhone = ref(''), bizEmail = ref(''), bizArea = ref(''), bizExp = ref('')
const selectedPlan = ref('feat')
const bizTypes = ref([
  { icon:'🐕‍🦺', nameKey:'dogWalkerSitter', descKey:'walkSitBoard', selected:false },
  { icon:'✂️', nameKey:'petGroomer', descKey:'bathHaircutStyling', selected:false },
  { icon:'🛒', nameKey:'petStore', descKey:'foodAccessoriesProducts', selected:false },
  { icon:'🩺', nameKey:'vetClinic', descKey:'medicalCareSurgery', selected:false },
  { icon:'🏠', nameKey:'petBoarding', descKey:'homeBoardingKennel', selected:false },
  { icon:'🎓', nameKey:'petTrainer', descKey:'obedienceBehavior', selected:false },
])
const plans = [
  { id:'basic', icon:'🔵', name:'Basic — ₹799/month', descKey:'planBasicDesc', popular:false },
  { id:'feat', icon:'⭐', name:'Featured — ₹1,999/month', descKey:'planFeatDesc', popular:true },
  { id:'elite', icon:'💎', name:'Elite — ₹3,499/month', descKey:'planEliteDesc', popular:false },
]

// Booking
const currentProvider = ref(null)
const selectedDate = ref(14)
const selectedTime = ref('09:00')
const selectedPackage = ref('Standard')
const datePicks = [
  {day:'Mon',num:14},{day:'Tue',num:15},{day:'Wed',num:16},{day:'Thu',num:17},{day:'Fri',num:18},{day:'Sat',num:19},{day:'Sun',num:20}
]
const timeSlots = ['07:00','08:00','09:00','10:00','11:00','14:00','15:00','16:00','17:00']
const packages = [
  {name:'Basic',desc:'30 min session',price:'₹199'},
  {name:'Standard',desc:'45 min + grooming check',price:'₹349'},
  {name:'Premium',desc:'60 min + health report',price:'₹499'},
]

// Providers data
const providers = ref([
  {name:'Suraj Dog Walker',sub:'Walking · Gaur City',icon:'🐕',rating:'★5.0',reviews:'12',exp:'3yr',price:'₹249',unit:'per walk',dist:'0.8km',type:'walking',policeVerified:true,phone:'+91 98765 43210',area:'Gaur City'},
  {name:'Bonzee Pet Home Boarding',sub:'Boarding · Sector 16',icon:'🏠',rating:'★5.0',reviews:'28',exp:'4yr',price:'₹499',unit:'per night',dist:'1.2km',type:'walking',avBg:'#F0FFF4',area:'Sector 16'},
  {name:'Furry Home',sub:'Boarding · Omega II',icon:'🐾',rating:'★4.9',reviews:'61',exp:'5yr',price:'₹449',unit:'per night',dist:'1.4km',type:'walking',avBg:'#FFF0F8',area:'Omega II'},
  {name:'Pets Paradise',sub:'Grooming · Bisrakh',icon:'✂️',rating:'★4.9',reviews:'93',exp:'5yr',price:'₹499',unit:'per session',dist:'1.5km',type:'grooming',area:'Bisrakh'},
  {name:'Dog Walk & Training Studio',sub:'Walking · Alpha 1',icon:'🎓',rating:'★4.9',reviews:'45',exp:'4yr',price:'₹349',unit:'per walk',dist:'2.4km',type:'walking',avBg:'#EEF6FF',area:'Alpha 1'},
  {name:'R K Pet Shop',sub:'Pet Store · Sector 1',icon:'🛒',rating:'★4.5',reviews:'324',price:'',unit:'10am–10pm',dist:'1.9km',type:'stores',isStore:true,hours:'10am–10pm',phone:'+91 99995 18821',tags:['Food','Accessories','Toys','Medicine'],area:'Sector 1'},
  {name:'Greater Noida Pet Shop',sub:'Store · Omicron III',icon:'🛒',rating:'★5.0',reviews:'9',price:'',unit:'24 hrs',dist:'2.3km',type:'stores',isStore:true,avBg:'#FFF8EC',hours:'Open 24hrs',phone:'+91 93198 64441',tags:['Dogs','Cats','Birds','Food','Medicine'],area:'Omicron III'},
  {name:'Dr. Sharma Vet Clinic',sub:'Vet · Sector 4',icon:'🩺',rating:'★4.7',reviews:'89',exp:'8yr',price:'₹300',unit:'consult',dist:'1.1km',type:'vets',isVet:true,avBg:'#EEF6FF',hours:'Mon–Sat 9am–7pm',phone:'+91 98110 12345',tags:['Dogs','Cats','Birds','Surgery','Vaccination'],area:'Sector 4'},
  {name:'PetCare Animal Hospital',sub:'Hospital · Sector 12',icon:'🏥',rating:'★4.5',reviews:'156',exp:'12yr',price:'₹400',unit:'consult',dist:'2.2km',type:'vets',isVet:true,avBg:'#EEF6FF',hours:'Mon–Sun 8am–9pm',phone:'+91 98765 43210',tags:['All Animals','Emergency','ICU','Dental'],area:'Sector 12'},
])

const filteredProviders = computed(() => providers.value)
const exploreResults = computed(() => {
  let list = providers.value
  if (activeFilter.value !== 'all') list = list.filter(p => p.type === activeFilter.value)
  if (searchQ.value) {
    const q = searchQ.value.toLowerCase()
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.sub.toLowerCase().includes(q))
  }
  return list
})

const filters = [
  {key:'all', labelKey:'filterAll'},
  {key:'walking', labelKey:'filterWalking'},
  {key:'grooming', labelKey:'filterGrooming'},
  {key:'stores', labelKey:'filterStores'},
  {key:'vets', labelKey:'filterVets'},
]

// Vaccinations
const vaccinations = ref([
  {name:'Rabies',date:'Dec 2025',status:'done'},
  {name:'DHPP',date:'Jan 2026',status:'done'},
  {name:'Bordetella',date:'Mar 2026',status:'done'},
  {name:'Leptospirosis',date:'Apr 27, 2026',status:'scheduled'},
  {name:'Canine Influenza',date:'Jun 2026',status:'upcoming'},
])

// Community
const communityPosts = ref([
  {id:1,avatar:'🧑',user:'Priya M.',time:'2h ago',area:'Gaur City',text:'Anyone know a good groomer near Gaur City who handles anxious dogs? Bruno gets really nervous during baths. 🐕💧',likes:8,comments:3,liked:false},
  {id:2,avatar:'👨',user:'Rahul K.',time:'5h ago',area:'Sector 16',text:'Just adopted a beautiful indie puppy from the shelter! Looking for vaccination recommendations for puppies. Any vet suggestions?',likes:24,comments:7,liked:false},
  {id:3,avatar:'👩',user:'Neha S.',time:'1d ago',area:'Omega II',text:'Warning: Stray dogs near Omega II park are becoming aggressive in the evening. Please be careful while walking your pets! 🚨',likes:45,comments:12,liked:false},
])

// Emergency vets
const emergencyVets = [
  {name:'Dr. Sharma Vet Clinic',icon:'🩺',loc:'Sector 4 · 1.1km',fee:'₹300',specs:['Dogs','Cats','Surgery','Emergency']},
  {name:'PetCare Animal Hospital',icon:'🏥',loc:'Sector 12 · 2.2km',fee:'₹400',specs:['All Animals','ICU','Emergency','24/7']},
]

// Notifications
const notifications = ref([
  {id:1,icon:'📅',title:'Booking Confirmed',time:'2h ago',body:'Your walk with Suraj Dog Walker is confirmed for Apr 14, 9:00 AM'},
  {id:2,icon:'💉',title:'Vaccine Reminder',time:'1d ago',body:'Bruno\'s Leptospirosis vaccine is due on Apr 27'},
  {id:3,icon:'👥',title:'Community Alert',time:'2d ago',body:'Lost Golden Retriever spotted near Gaur City — help spread the word'},
])

// ── i18n ──
const strings = {
  en: {
    welcomeTitle:'Welcome to Petly', welcomeSub:"Greater Noida's all-in-one pet care platform. Verified walkers, groomers, vets & stores near you.",
    walking:'Walking', grooming:'Grooming', vets:'Vets', stores:'Stores',
    createAccount:'Create Account', alreadyHaveAccount:'I already have an account', continueAsGuest:'Continue as guest →',
    back:'← Back', createAccountTitle:'Create account', joinPetOwners:'Join 1,240 pet owners in Greater Noida',
    fillFieldsError:'Please fill in all fields correctly.', fullName:'Full name', phoneNumber:'Phone number', emailAddress:'Email address', password:'Password',
    createAccountBtn:'Create Account →', orSignUpWith:'or sign up with', alreadyHaveAccountQ:'Already have an account?', signIn:'Sign in',
    termsNotice:"By creating an account you agree to Petly's Terms of Service and Privacy Policy.",
    areYouPetBusiness:'Are you a pet business?', listYourBusiness:'List your business on Petly →',
    welcomeBack:'Welcome back', signInToAccount:'Sign in to your Petly account',
    loginError:'Incorrect email or password. Try again.', loginSuccess:'Signed in successfully! Welcome back 🐾',
    emailOrPhone:'Email or Phone', forgotPassword:'Forgot password?', signInBtn:'Sign In →',
    orContinueWith:'or continue with', dontHaveAccount:"Don't have an account?", signUp:'Sign up',
    greeting:'Hey, {name} 👋', brunoDets:'Labrador · 3 years', active:'Active', vaccinated:'Vaccinated', vaccine:'Vaccine',
    services:'Services', seeAll:'See all', dogWalking:'Dog Walking', petStores:'Pet Stores',
    nearbyCount:'{n} nearby', emergencyVet:'Emergency Vet', tapToCallVet:'Tap to call nearest vet now',
    nearbyPartners:'Nearby partners', open:'Open', bookBtn:'Book', visitBtn:'Visit',
    ownPetBusiness:'Own a pet business?', listOnPetly:'List on Petly — first 3 months free',
    navHome:'HOME', navExplore:'EXPLORE', navMyPet:'MY PET', navCommunity:'COMMUNITY', navAccount:'ACCOUNT',
    findServices:'Find services', searchPlaceholder:'Search walkers, groomers, vets...',
    filterAll:'All', filterWalking:'Walking 🐕', filterGrooming:'Grooming ✂️', filterStores:'Stores 🛒', filterVets:'Vets 🩺',
    noResults:'No results found',
    selectDate:'SELECT DATE', selectTime:'SELECT TIME', selectPackage:'SELECT PACKAGE',
    confirmBooking:'Confirm Booking', bookingConfirmed:'Booking Confirmed!',
    bookingConfirmedSub:'Your booking has been confirmed. You will receive a notification before your appointment.',
    provider:'Provider', date:'Date', time:'Time', package:'Package', pet:'Pet', backToHome:'Back to Home',
    contactInfo:'CONTACT INFO', phone:'Phone', hours:'Hours', area:'Area', available:'AVAILABLE',
    getDirections:'📍 Get Directions', callNow:'📞 Call Now',
    weight:'WEIGHT', age:'AGE', visits:'VISITS', vaccines:'VACCINES',
    healthInfo:'HEALTH INFO', breed:'Breed', gender:'Gender', color:'Color', microchip:'Microchip',
    vaccinations:'VACCINATIONS',
    community:'Community', communitySub:'Pet owners in Greater Noida',
    callNearestVet:'Call the nearest emergency vet right now',
    notifications:'Notifications',
    myPets:'My Pets', myBookings:'My Bookings', payments:'Payments', settings:'Settings', language:'Language', helpSupport:'Help & Support', signOut:'Sign Out',
    listBusiness:'List your business', joinAsPartner:'Join Petly as a verified partner — first 3 months free',
    threeMonthsFree:'3 months free', twentyFourHrApproval:'24hr approval', moreBookings:'More bookings',
    whatTypeBusiness:'What type of business?', selectAllApply:'Select all that apply to you',
    dogWalkerSitter:'Dog Walker / Sitter', walkSitBoard:'Walk, sit, or board pets',
    petGroomer:'Pet Groomer', bathHaircutStyling:'Bath, haircut, styling',
    petStore:'Pet Store', foodAccessoriesProducts:'Food, accessories, products',
    vetClinic:'Vet / Animal Clinic', medicalCareSurgery:'Medical care, surgery, consultation',
    petBoarding:'Pet Boarding', homeBoardingKennel:'Home boarding or kennel',
    petTrainer:'Pet Trainer', obedienceBehavior:'Obedience, behaviour training',
    continueBtn:'Continue →', basicInfo:'Basic information',
    businessName:'Business / Your name', areaLocation:'Area / Location in Greater Noida', yearsExperience:'Years of experience',
    verificationDocs:'Verification documents', requiredForVerified:'Required for your Verified badge. All documents are kept secure.',
    uploadDocsInfo:'Upload photos of your documents. We review within 24 hours.',
    aadhaarFront:'Aadhaar Card (front photo)', tapUploadAadhaar:'Tap to upload Aadhaar front',
    selfieAadhaar:'Selfie holding Aadhaar', tapSelfieAadhaar:'Tap to take selfie with Aadhaar',
    policeVerification:'Police Verification Certificate (optional)', uploadPoliceVerif:'Upload Police Verification Certificate',
    earnsEliteBadge:'Earns the ★ Elite Verified badge · Optional',
    choosePlan:'Choose your plan', firstThreeMonthsFree:'First 3 months free on any plan. Cancel anytime.',
    planBasicDesc:'Profile listing · Search results · Contact button',
    planFeatDesc:'Top search · Booking tools · Analytics · Verified badge',
    planEliteDesc:'Everything + Police Verified badge + Homepage spotlight',
    mostPopular:'Most popular', noCreditCard:'First 3 months completely free. No credit card needed to start.',
    submitApplication:'Submit Application →', applicationSubmitted:'Application submitted!',
    reviewMessage:"We'll review your application within 24 hours and send you a WhatsApp message once you're approved.",
    whatHappensNext:'What happens next', verifyDocs:'We verify your documents', whatsappConfirm:'WhatsApp confirmation',
    profileGoesLive:'Your profile goes live', startGettingBookings:'Start getting bookings!',
    goToDashboard:'Go to Home →',
  },
  hi: {
    welcomeTitle:'Petly में आपका स्वागत है', welcomeSub:'ग्रेटर नोएडा का ऑल-इन-वन पेट केयर प्लेटफ़ॉर्म। सत्यापित वॉकर, ग्रूमर, वेट और स्टोर आपके पास।',
    walking:'वॉकिंग', grooming:'ग्रूमिंग', vets:'वेट', stores:'स्टोर',
    createAccount:'अकाउंट बनाएं', alreadyHaveAccount:'मेरा अकाउंट पहले से है', continueAsGuest:'बिना लॉगिन जारी रखें →',
    back:'← वापस', createAccountTitle:'अकाउंट बनाएं', joinPetOwners:'ग्रेटर नोएडा के 1,240 पेट मालिकों से जुड़ें',
    fillFieldsError:'कृपया सभी फ़ील्ड सही भरें।', fullName:'पूरा नाम', phoneNumber:'फ़ोन नंबर', emailAddress:'ईमेल पता', password:'पासवर्ड',
    createAccountBtn:'अकाउंट बनाएं →', orSignUpWith:'या इससे साइन अप करें', alreadyHaveAccountQ:'पहले से अकाउंट है?', signIn:'साइन इन करें',
    termsNotice:'अकाउंट बनाकर आप Petly की सेवा शर्तों और गोपनीयता नीति से सहमत हैं।',
    areYouPetBusiness:'क्या आपका पेट बिज़नेस है?', listYourBusiness:'Petly पर बिज़नेस लिस्ट करें →',
    welcomeBack:'वापस आने पर स्वागत है', signInToAccount:'Petly अकाउंट में साइन इन करें',
    loginError:'ईमेल या पासवर्ड गलत है।', loginSuccess:'सफलतापूर्वक साइन इन! स्वागत है 🐾',
    emailOrPhone:'ईमेल या फ़ोन', forgotPassword:'पासवर्ड भूल गए?', signInBtn:'साइन इन करें →',
    orContinueWith:'या इससे जारी रखें', dontHaveAccount:'अकाउंट नहीं है?', signUp:'साइन अप करें',
    greeting:'नमस्ते, {name} 👋', brunoDets:'लैब्राडोर · 3 साल', active:'सक्रिय', vaccinated:'टीकाकृत', vaccine:'वैक्सीन',
    services:'सेवाएं', seeAll:'सभी देखें', dogWalking:'डॉग वॉकिंग', petStores:'पेट स्टोर',
    nearbyCount:'{n} पास में', emergencyVet:'इमरजेंसी वेट', tapToCallVet:'अभी नज़दीकी वेट को कॉल करें',
    nearbyPartners:'पास के पार्टनर', open:'खुला', bookBtn:'बुक करें', visitBtn:'विज़िट करें',
    ownPetBusiness:'पेट बिज़नेस है आपका?', listOnPetly:'Petly पर लिस्ट करें — 3 महीने मुफ़्त',
    navHome:'होम', navExplore:'खोजें', navMyPet:'मेरा पेट', navCommunity:'समुदाय', navAccount:'अकाउंट',
    findServices:'सेवाएं खोजें', searchPlaceholder:'वॉकर, ग्रूमर, वेट खोजें...',
    filterAll:'सभी', filterWalking:'वॉकिंग 🐕', filterGrooming:'ग्रूमिंग ✂️', filterStores:'स्टोर 🛒', filterVets:'वेट 🩺',
    noResults:'कोई परिणाम नहीं मिला',
    selectDate:'तारीख़ चुनें', selectTime:'समय चुनें', selectPackage:'पैकेज चुनें',
    confirmBooking:'बुकिंग पक्की करें', bookingConfirmed:'बुकिंग पक्की!',
    bookingConfirmedSub:'आपकी बुकिंग पक्की हो गई है। अपॉइंटमेंट से पहले आपको नोटिफ़िकेशन मिलेगा।',
    provider:'प्रदाता', date:'तारीख़', time:'समय', package:'पैकेज', pet:'पेट', backToHome:'होम पर वापस जाएं',
    contactInfo:'संपर्क जानकारी', phone:'फ़ोन', hours:'समय', area:'क्षेत्र', available:'उपलब्ध',
    getDirections:'📍 दिशा-निर्देश', callNow:'📞 अभी कॉल करें',
    weight:'वज़न', age:'उम्र', visits:'विज़िट', vaccines:'टीके',
    healthInfo:'स्वास्थ्य जानकारी', breed:'नस्ल', gender:'लिंग', color:'रंग', microchip:'माइक्रोचिप',
    vaccinations:'टीकाकरण',
    community:'समुदाय', communitySub:'ग्रेटर नोएडा के पेट मालिक',
    callNearestVet:'अभी नज़दीकी इमरजेंसी वेट को कॉल करें',
    notifications:'सूचनाएं',
    myPets:'मेरे पेट', myBookings:'मेरी बुकिंग', payments:'भुगतान', settings:'सेटिंग्स', language:'भाषा', helpSupport:'सहायता', signOut:'साइन आउट',
    listBusiness:'बिज़नेस लिस्ट करें', joinAsPartner:'Petly पर सत्यापित पार्टनर बनें — 3 महीने मुफ़्त',
    threeMonthsFree:'3 महीने मुफ़्त', twentyFourHrApproval:'24 घंटे अप्रूवल', moreBookings:'अधिक बुकिंग',
    whatTypeBusiness:'बिज़नेस का प्रकार?', selectAllApply:'जो लागू हो वो चुनें',
    dogWalkerSitter:'डॉग वॉकर / सिटर', walkSitBoard:'वॉक, बैठना या बोर्डिंग',
    petGroomer:'पेट ग्रूमर', bathHaircutStyling:'नहाना, बाल काटना, स्टाइलिंग',
    petStore:'पेट स्टोर', foodAccessoriesProducts:'खाना, सामान, उत्पाद',
    vetClinic:'वेट / पशु क्लिनिक', medicalCareSurgery:'चिकित्सा, सर्जरी, परामर्श',
    petBoarding:'पेट बोर्डिंग', homeBoardingKennel:'होम बोर्डिंग या केनेल',
    petTrainer:'पेट ट्रेनर', obedienceBehavior:'आज्ञाकारिता, व्यवहार प्रशिक्षण',
    continueBtn:'जारी रखें →', basicInfo:'बुनियादी जानकारी',
    businessName:'बिज़नेस / आपका नाम', areaLocation:'ग्रेटर नोएडा में क्षेत्र', yearsExperience:'अनुभव के वर्ष',
    verificationDocs:'सत्यापन दस्तावेज़', requiredForVerified:'Verified बैज के लिए जरूरी। दस्तावेज़ सुरक्षित हैं।',
    uploadDocsInfo:'दस्तावेज़ की फ़ोटो अपलोड करें। हम 24 घंटे में समीक्षा करेंगे।',
    aadhaarFront:'आधार कार्ड (सामने की फ़ोटो)', tapUploadAadhaar:'आधार का सामने वाला भाग अपलोड करें',
    selfieAadhaar:'आधार पकड़े हुए सेल्फी', tapSelfieAadhaar:'आधार के साथ सेल्फी लें',
    policeVerification:'पुलिस सत्यापन प्रमाणपत्र (वैकल्पिक)', uploadPoliceVerif:'पुलिस सत्यापन प्रमाणपत्र अपलोड करें',
    earnsEliteBadge:'★ Elite Verified बैज मिलेगा · वैकल्पिक',
    choosePlan:'अपना प्लान चुनें', firstThreeMonthsFree:'किसी भी प्लान पर 3 महीने मुफ़्त।',
    planBasicDesc:'प्रोफ़ाइल लिस्टिंग · खोज · कॉन्टैक्ट बटन',
    planFeatDesc:'टॉप सर्च · बुकिंग · Analytics · Verified बैज',
    planEliteDesc:'सब कुछ + Police Verified बैज + होमपेज',
    mostPopular:'सबसे लोकप्रिय', noCreditCard:'पहले 3 महीने बिल्कुल मुफ़्त।',
    submitApplication:'आवेदन जमा करें →', applicationSubmitted:'आवेदन जमा हो गया!',
    reviewMessage:'हम 24 घंटे में आवेदन की समीक्षा करेंगे और WhatsApp पर सूचित करेंगे।',
    whatHappensNext:'आगे क्या होगा', verifyDocs:'हम आपके दस्तावेज़ सत्यापित करेंगे', whatsappConfirm:'WhatsApp पुष्टि',
    profileGoesLive:'आपका प्रोफ़ाइल लाइव होगा', startGettingBookings:'बुकिंग मिलना शुरू होगी!',
    goToDashboard:'होम पर जाएं →',
  }
}

function t(key, params) {
  let s = strings[lang.value]?.[key] || strings.en[key] || key
  if (params) Object.keys(params).forEach(k => { s = s.replace(`{${k}}`, params[k]) })
  return s
}

// ── FUNCTIONS ──
function go(s) { prevScreen.value = screen.value; screen.value = s }
function chooseLang(l) { selectedLang.value = l }
function confirmLang() { if (selectedLang.value) { lang.value = selectedLang.value; go('splash') } }
function toggleLang() { lang.value = lang.value === 'en' ? 'hi' : 'en' }

function toast(msg) {
  toastMsg.value = msg
  setTimeout(() => { toastMsg.value = '' }, 2500)
}

function doSignup() {
  if (!suName.value || !suEmail.value || !suPass.value || suPass.value.length < 8) { suErr.value = true; return }
  suErr.value = false; userName.value = suName.value.split(' ')[0]; userEmail.value = suEmail.value; isLoggedIn.value = true
  toast('🎉 Account created!'); go('home')
}

function doLogin() {
  if (!liEmail.value || !liPass.value) { liErr.value = true; return }
  liErr.value = false; liSuc.value = true; isLoggedIn.value = true; userEmail.value = liEmail.value
  setTimeout(() => { liSuc.value = false; go('home') }, 800)
}

function socialLogin(provider) { toast(`🔄 Connecting to ${provider}...`); setTimeout(() => { isLoggedIn.value = true; go('home') }, 1000) }

function goBackFromBiz() { bizStep.value > 1 && !bizSuccess.value ? bizStep.value-- : go(isLoggedIn.value ? 'home' : 'splash') }

function book(p) { currentProvider.value = p; selectedDate.value = 14; selectedTime.value = '09:00'; selectedPackage.value = 'Standard'; go('booking') }
function visit(p) { currentProvider.value = p; go('visit') }
function vetAppt(p) { currentProvider.value = p; go('booking') }
function confirmBooking() { toast('✅ Booking confirmed!'); go('confirmed') }

// Clock
onMounted(() => {
  const updateTime = () => {
    const el = document.getElementById('sb-time')
    if (el) { const d = new Date(); el.textContent = d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0') }
  }
  updateTime(); setInterval(updateTime, 30000)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
body{font-family:'DM Sans',sans-serif;background:#111;display:flex;flex-direction:column;align-items:center;min-height:100vh;overflow-x:hidden}
.phone{width:100%;max-width:390px;background:#111;height:100vh;position:relative;overflow:hidden}
.sb{height:44px;background:#FAFAF8;display:flex;align-items:center;justify-content:space-between;padding:0 22px;position:relative;flex-shrink:0}
.notch{width:108px;height:28px;background:#111;border-radius:0 0 16px 16px;position:absolute;top:0;left:50%;transform:translateX(-50%)}
.stt{font-size:12px;font-weight:700;color:#111;z-index:1;font-family:'Sora',sans-serif}
.sic{font-size:11px;color:#111;z-index:1}
.scr{display:none;background:#FAFAF8;height:calc(100vh - 44px);flex-direction:column;overflow:hidden}
.scr.on{display:flex}
.nav{background:#fff;border-top:1px solid #F0F0EC;display:flex;padding:10px 0 20px;flex-shrink:0}
.ni{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer}
.ni-i{font-size:19px;transition:transform .2s}
.ni-l{font-size:9px;font-weight:700;color:#ccc}
.ni.on .ni-l{color:#111}
.ni.on .ni-i{transform:scale(1.15)}
.scroll{overflow-y:auto;flex:1;padding:14px 18px}
.row{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.stit{font-family:'Sora',sans-serif;font-size:14px;font-weight:700;color:#111}
.slnk{font-size:11px;font-weight:700;color:#999;cursor:pointer}
.srch{background:#F0F0EC;border-radius:13px;padding:11px 14px;display:flex;align-items:center;gap:8px;margin-bottom:12px}
.srch-t{font-size:13px;color:#bbb;font-weight:500}
.chips{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding-bottom:4px}
.chips::-webkit-scrollbar{display:none}
.chip{flex-shrink:0;padding:6px 13px;border-radius:99px;font-size:11px;font-weight:700;cursor:pointer;border:none;font-family:'DM Sans',sans-serif;transition:all .15s}
.c-on{background:#111;color:#fff}
.c-off{background:#F0F0EC;color:#888}
.card{background:#fff;border-radius:15px;padding:12px;display:flex;gap:10px;margin-bottom:8px;border:1px solid #F0F0EC;cursor:pointer;transition:all .18s}
.card:active{transform:scale(0.97)}
.cav{width:44px;height:44px;border-radius:13px;display:flex;align-items:center;justify-content:center;font-size:21px;flex-shrink:0;background:#F5F5F3}
.cn{font-family:'Sora',sans-serif;font-size:13px;font-weight:700;color:#111}
.ct{font-size:10px;color:#bbb;margin-top:1px;margin-bottom:4px}
.cm{display:flex;gap:4px;align-items:center;flex-wrap:wrap}
.cst{font-size:10px;color:#F59E0B;font-weight:800}
.cdst{font-size:9px;background:#F5F5F3;color:#888;padding:2px 6px;border-radius:99px;font-weight:700}
.cvtg{font-size:9px;background:#EDFAF3;color:#16A34A;padding:2px 6px;border-radius:99px;font-weight:700}
.cr{margin-left:auto;text-align:right;flex-shrink:0}
.cp{font-size:13px;font-weight:800;color:#111}
.cu{font-size:9px;color:#ccc}
.cbtn{background:#111;color:#fff;border:none;border-radius:9px;padding:5px 11px;font-size:10px;font-weight:700;cursor:pointer;margin-top:3px;font-family:'DM Sans',sans-serif}
.cbtn:active{background:#333}
.info-card{background:#fff;border-radius:14px;padding:13px;margin-bottom:9px;border:1px solid #F0F0EC}
.ict{font-size:10px;font-weight:700;color:#bbb;text-transform:uppercase;letter-spacing:.06em;margin-bottom:9px}
.icr{display:flex;justify-content:space-between;padding:6px 0;border-bottom:.5px solid #F5F5F3}
.icr:last-child{border-bottom:none}
.ick{font-size:11px;color:#aaa}
.icv{font-size:11px;font-weight:700;color:#111}
.bookcta{background:#111;color:#fff;border:none;border-radius:14px;padding:15px;width:100%;font-size:14px;font-weight:700;cursor:pointer;font-family:'Sora',sans-serif;margin-top:6px}
.bookcta:active{background:#333}
.empty{text-align:center;padding:40px 20px;color:#bbb;font-size:13px;font-weight:600}
.empty-icon{font-size:40px;margin-bottom:10px}
.inp{width:100%;background:#F5F5F3;border:1.5px solid #F0F0EC;border-radius:13px;padding:13px 14px;font-size:14px;font-family:'DM Sans',sans-serif;color:#111;outline:none;transition:border .15s;margin-bottom:12px}
.inp:focus{border-color:#111;background:#fff}
.inp::placeholder{color:#bbb}
.inp-label{font-size:12px;font-weight:700;color:#888;margin-bottom:5px;display:block;text-transform:uppercase;letter-spacing:.04em}
.auth-btn{width:100%;background:#111;color:#fff;border:none;border-radius:14px;padding:15px;font-size:15px;font-weight:700;cursor:pointer;font-family:'Sora',sans-serif;margin-top:4px;margin-bottom:12px}
.auth-btn:active{background:#333}
.auth-btn.secondary{background:#fff;color:#111;border:1.5px solid #111}
.divider{display:flex;align-items:center;gap:10px;margin:12px 0}
.divider span{font-size:12px;color:#bbb;font-weight:600;white-space:nowrap}
.divider::before,.divider::after{content:'';flex:1;height:1px;background:#F0F0EC}
.soc-btn{width:100%;background:#fff;border:1.5px solid #F0F0EC;border-radius:14px;padding:13px;font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;margin-bottom:8px;display:flex;align-items:center;justify-content:center;gap:10px;color:#111}
.soc-btn:active{background:#F5F5F3}
.auth-switch{font-size:13px;color:#888;text-align:center;margin-top:8px}
.auth-switch span{color:#111;font-weight:700;cursor:pointer;text-decoration:underline}
.forgot{font-size:12px;color:#888;text-align:right;margin-top:-8px;margin-bottom:12px;cursor:pointer}
.forgot:hover{color:#111}
.error-msg{background:#FFF0F0;border:1px solid #FFD5D5;color:#C0392B;border-radius:10px;padding:10px 13px;font-size:12px;font-weight:600;margin-bottom:12px}
.success-msg{background:#EDFAF3;border:1px solid #BBF0D4;color:#16A34A;border-radius:10px;padding:10px 13px;font-size:12px;font-weight:600;margin-bottom:12px}
.splash-bg{background:linear-gradient(160deg,#0B2E6E 0%,#071B45 100%);flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 24px;text-align:center;min-height:calc(100vh - 44px)}
.splash-icon{font-size:72px;margin-bottom:20px}
.splash-title{font-family:'Sora',sans-serif;font-size:28px;font-weight:800;color:#fff;margin-bottom:8px}
.splash-sub{font-size:15px;color:rgba(255,255,255,.55);line-height:1.7;margin-bottom:40px;max-width:280px}
.splash-btn{width:100%;background:#fff;color:#0B2E6E;border:none;border-radius:16px;padding:16px;font-size:15px;font-weight:700;cursor:pointer;font-family:'Sora',sans-serif;margin-bottom:12px}
.splash-btn:active{background:#F0F0F0}
.splash-btn.outline{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.3)}
.splash-features{display:flex;gap:20px;margin-bottom:40px;flex-wrap:wrap;justify-content:center}
.sf{display:flex;flex-direction:column;align-items:center;gap:6px}
.sf-icon{width:48px;height:48px;background:rgba(255,255,255,.1);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px}
.sf-label{font-size:11px;color:rgba(255,255,255,.6);font-weight:600}
.auth-top{background:#111;padding:52px 20px 24px}
.auth-back{font-size:12px;color:rgba(255,255,255,.5);font-weight:700;margin-bottom:16px;cursor:pointer;display:flex;align-items:center;gap:5px}
.auth-title{font-family:'Sora',sans-serif;font-size:24px;font-weight:800;color:#fff;margin-bottom:4px}
.auth-subtitle{font-size:13px;color:rgba(255,255,255,.4)}
.auth-body{padding:20px 20px;overflow-y:auto;flex:1}
.hdr{padding:50px 18px 14px;background:#FAFAF8}
.hgr{font-family:'Sora',sans-serif;font-size:19px;font-weight:800;color:#111}
.hnotif{width:36px;height:36px;border-radius:12px;background:#F0F0EC;display:flex;align-items:center;justify-content:center;font-size:16px;cursor:pointer}
.pet-banner{background:#111;border-radius:18px;padding:14px;display:flex;align-items:center;gap:11px;margin-top:10px}
.pav{width:48px;height:48px;border-radius:14px;background:#222;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0}
.pnm{font-family:'Sora',sans-serif;font-size:15px;font-weight:700;color:#fff}
.pbr{font-size:10px;color:rgba(255,255,255,.4);margin-top:1px}
.ptgs{display:flex;gap:4px;margin-top:5px}
.ptg{font-size:8px;padding:2px 6px;border-radius:99px;font-weight:700;background:rgba(255,255,255,.1);color:rgba(255,255,255,.55)}
.vbdg{margin-left:auto;background:#fff;border-radius:10px;padding:7px 10px;text-align:center;flex-shrink:0}
.vbl{font-size:8px;color:#888;font-weight:700;text-transform:uppercase}
.vbv{font-size:14px;font-weight:800;color:#111}
.bento{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:16px}
.bb{background:#fff;border-radius:14px;padding:13px;border:1px solid #F0F0EC;cursor:pointer;transition:all .18s}
.bb:active{transform:scale(0.96)}
.bb.dk{background:#111}
.bb-i{font-size:21px;margin-bottom:5px}
.bb-n{font-size:11px;font-weight:700;color:#111}
.bb.dk .bb-n{color:#fff}
.bb-c{font-size:9px;color:#bbb;margin-top:1px}
.bb.dk .bb-c{color:rgba(255,255,255,.35)}
.bktop{background:#111;padding:50px 18px 22px}
.bkbk{font-size:12px;color:rgba(255,255,255,.45);font-weight:700;margin-bottom:12px;cursor:pointer;display:flex;align-items:center;gap:5px}
.bkav{width:60px;height:60px;border-radius:18px;background:#222;display:flex;align-items:center;justify-content:center;font-size:30px;margin-bottom:10px}
.bknm{font-family:'Sora',sans-serif;font-size:19px;font-weight:800;color:#fff}
.bksb{font-size:11px;color:rgba(255,255,255,.4);margin-top:2px}
.bksts{display:flex;background:rgba(255,255,255,.07);border-radius:12px;overflow:hidden;margin-top:14px}
.bkst{flex:1;padding:11px 6px;text-align:center;border-right:1px solid rgba(255,255,255,.07)}
.bkst:last-child{border-right:none}
.bksv{font-size:13px;font-weight:800;color:#fff}
.bksl{font-size:8px;color:rgba(255,255,255,.3);font-weight:700;text-transform:uppercase;margin-top:2px}
.bkbdy{padding:14px 18px;overflow-y:auto;flex:1}
.bksec{font-size:10px;font-weight:700;color:#bbb;text-transform:uppercase;letter-spacing:.06em;margin-bottom:7px;margin-top:12px}
.bksec:first-child{margin-top:0}
.dgrid{display:flex;gap:6px;overflow-x:auto;margin-bottom:4px;scrollbar-width:none}
.dgrid::-webkit-scrollbar{display:none}
.dchip{flex-shrink:0;background:#fff;border:1.5px solid #F0F0EC;border-radius:11px;padding:9px 12px;text-align:center;cursor:pointer;transition:all .15s}
.dchip.on{background:#111;border-color:#111}
.dchip-day{font-size:10px;color:#bbb}
.dchip.on .dchip-day{color:rgba(255,255,255,.5)}
.dchip-num{font-size:14px;font-weight:800;color:#111}
.dchip.on .dchip-num{color:#fff}
.tgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;margin-bottom:4px}
.ts{background:#fff;border:1.5px solid #F0F0EC;border-radius:11px;padding:9px;text-align:center;cursor:pointer;font-size:11px;font-weight:700;color:#111;transition:all .15s}
.ts.on{background:#111;color:#fff;border-color:#111}
.pkcard{background:#fff;border-radius:14px;padding:12px;border:1.5px solid #F0F0EC;margin-bottom:7px;cursor:pointer;display:flex;align-items:center;gap:10px;transition:all .15s}
.pkcard.on{border-color:#111}
.pkcard:active{transform:scale(0.98)}
.pkdot{width:17px;height:17px;border-radius:50%;border:2px solid #ddd;flex-shrink:0}
.pkcard.on .pkdot{background:#111;border-color:#111}
.pkn{font-size:12px;font-weight:700;color:#111}
.pkd{font-size:10px;color:#bbb;margin-top:1px}
.pkp{margin-left:auto;font-size:13px;font-weight:800;color:#111}
.vet-card{background:#fff;border-radius:15px;padding:13px;margin-bottom:8px;border:1px solid #F0F0EC;cursor:pointer;transition:all .18s}
.vet-card:active{transform:scale(0.97)}
.vet-hdr{display:flex;gap:10px;align-items:center;margin-bottom:8px}
.vet-av{width:48px;height:48px;border-radius:14px;background:#F0F8FF;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0}
.vet-nm{font-family:'Sora',sans-serif;font-size:13px;font-weight:700;color:#111}
.vet-loc{font-size:10px;color:#bbb;margin-top:2px}
.vet-badge{font-size:9px;padding:2px 8px;border-radius:99px;font-weight:700;margin-left:auto;flex-shrink:0}
.vb-open{background:#EDFAF3;color:#16A34A}
.vet-specs{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:8px}
.vet-sp{font-size:9px;background:#F0F8FF;color:#1D5FA8;padding:3px 7px;border-radius:99px;font-weight:700}
.vet-foot{display:flex;align-items:center;justify-content:space-between}
.vet-fee{font-size:12px;font-weight:800;color:#111}
.vet-feeunit{font-size:9px;color:#bbb}
.vet-btn{background:#111;color:#fff;border:none;border-radius:9px;padding:6px 14px;font-size:10px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif}
.confbdy{display:flex;flex-direction:column;align-items:center;padding:36px 20px;flex:1;text-align:center}
.confcirc{width:80px;height:80px;border-radius:50%;background:#EDFAF3;display:flex;align-items:center;justify-content:center;font-size:40px;margin-bottom:20px}
.conftit{font-family:'Sora',sans-serif;font-size:20px;font-weight:800;color:#111;margin-bottom:6px}
.confsb{font-size:13px;color:#888;line-height:1.6;margin-bottom:22px}
.confcard{background:#fff;border-radius:16px;padding:14px;width:100%;border:1px solid #F0F0EC;margin-bottom:16px;text-align:left}
.ccr{display:flex;justify-content:space-between;padding:7px 0;border-bottom:.5px solid #F5F5F3}
.ccr:last-child{border-bottom:none}
.cck{font-size:11px;color:#aaa}
.ccv{font-size:11px;font-weight:700;color:#111}
.confbtn{background:#111;color:#fff;border:none;border-radius:13px;padding:14px;width:100%;font-size:13px;font-weight:700;cursor:pointer;font-family:'Sora',sans-serif}
.vstop{background:#111;padding:50px 18px 22px}
.vsbk{font-size:12px;color:rgba(255,255,255,.45);font-weight:700;margin-bottom:12px;cursor:pointer;display:flex;align-items:center;gap:5px}
.vsav{width:60px;height:60px;border-radius:18px;background:#222;display:flex;align-items:center;justify-content:center;font-size:30px;margin-bottom:10px}
.vsnm{font-family:'Sora',sans-serif;font-size:19px;font-weight:800;color:#fff}
.vssb{font-size:11px;color:rgba(255,255,255,.4);margin-top:2px}
.vssts{display:flex;background:rgba(255,255,255,.07);border-radius:12px;overflow:hidden;margin-top:14px}
.vsst{flex:1;padding:11px 6px;text-align:center;border-right:1px solid rgba(255,255,255,.07)}
.vsst:last-child{border-right:none}
.vssv{font-size:12px;font-weight:800;color:#fff}
.vssl{font-size:8px;color:rgba(255,255,255,.3);font-weight:700;text-transform:uppercase;margin-top:2px}
.vsbdy{padding:14px 18px;overflow-y:auto;flex:1}
.tagrow{display:flex;gap:5px;flex-wrap:wrap;padding:4px 0}
.tg{font-size:10px;background:#F5F5F3;color:#555;padding:3px 8px;border-radius:99px;font-weight:600}
.drbtn{background:#111;color:#fff;border:none;border-radius:13px;padding:13px;width:100%;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;margin-bottom:7px}
.clbtn{background:#fff;color:#111;border:1.5px solid #111;border-radius:13px;padding:13px;width:100%;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif}
.pptop{background:#111;padding:50px 18px 22px;text-align:center}
.ppav{width:76px;height:76px;border-radius:22px;background:#222;display:flex;align-items:center;justify-content:center;font-size:38px;margin:0 auto 10px}
.ppnm{font-family:'Sora',sans-serif;font-size:21px;font-weight:800;color:#fff}
.ppsb{font-size:11px;color:rgba(255,255,255,.4);margin-top:2px}
.ppsts{display:grid;grid-template-columns:repeat(4,1fr);background:rgba(255,255,255,.07);border-radius:12px;overflow:hidden;margin-top:14px}
.ppst{padding:11px 4px;text-align:center;border-right:1px solid rgba(255,255,255,.07)}
.ppst:last-child{border-right:none}
.ppsv{font-size:13px;font-weight:800;color:#fff}
.ppsl{font-size:7px;color:rgba(255,255,255,.3);font-weight:700;text-transform:uppercase;margin-top:2px}
.vacc{display:flex;align-items:center;gap:9px;padding:8px 10px;background:#F7F7F5;border-radius:10px;margin-bottom:5px}
.vdot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.vnm{font-size:11px;font-weight:700;color:#111;flex:1}
.vdt{font-size:10px;color:#bbb}
.vtg{font-size:9px;padding:2px 7px;border-radius:99px;font-weight:700}
.vt-d{background:#EDFAF3;color:#16A34A}
.vt-s{background:#FFF7E6;color:#D97706}
.vt-u{background:#F3F4F6;color:#9CA3AF}
.cmtop{padding:50px 18px 14px;background:#FAFAF8}
.cmtit{font-family:'Sora',sans-serif;font-size:21px;font-weight:800;color:#111;margin-bottom:2px}
.cmsb{font-size:11px;color:#aaa}
.alcard{background:#111;border-radius:16px;padding:13px;display:flex;align-items:center;gap:11px;margin-bottom:10px;cursor:pointer}
.alcard:active{opacity:.8}
.altit{font-size:12px;font-weight:700;color:#fff}
.alsb{font-size:10px;color:rgba(255,255,255,.4);margin-top:1px}
.pcard2{background:#fff;border-radius:14px;padding:13px;margin-bottom:7px;border:1px solid #F0F0EC}
.phdr{display:flex;align-items:center;gap:7px;margin-bottom:9px}
.pav2{width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:15px;background:#F5F5F3;flex-shrink:0}
.pusr{font-size:11px;font-weight:700;color:#111}
.ptim{font-size:10px;color:#bbb}
.parea{font-size:9px;background:#F5F5F3;color:#888;padding:2px 6px;border-radius:99px;font-weight:700;margin-left:auto}
.ptxt{font-size:11px;color:#555;line-height:1.65;margin-bottom:9px}
.pacts{display:flex;gap:12px}
.pact{font-size:10px;color:#aaa;font-weight:700;cursor:pointer}
.pact:active{color:#111}
.actop{padding:50px 18px 18px;background:#FAFAF8}
.acrow{display:flex;align-items:center;gap:12px;margin-bottom:18px}
.acav{width:60px;height:60px;border-radius:18px;background:#111;display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0}
.acnm{font-family:'Sora',sans-serif;font-size:17px;font-weight:800;color:#111}
.acem{font-size:11px;color:#aaa;margin-top:2px}
.accard{background:#fff;border-radius:14px;border:1px solid #F0F0EC;margin-bottom:9px;overflow:hidden}
.acitem{display:flex;align-items:center;gap:11px;padding:13px;border-bottom:.5px solid #F5F5F3;cursor:pointer}
.acitem:last-child{border-bottom:none}
.acitem:active{background:#F9F9F7}
.acicon{width:32px;height:32px;border-radius:9px;background:#F5F5F3;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0}
.aclbl{font-size:12px;font-weight:600;color:#111;flex:1}
.acarr{font-size:13px;color:#ddd}
.acval{font-size:11px;color:#aaa}
.soBtn{width:100%;background:#FFF0F0;border:1px solid #FFD5D5;border-radius:13px;padding:13px;font-size:13px;font-weight:700;color:#EF4444;cursor:pointer;font-family:'DM Sans',sans-serif;margin-top:4px}
.sel-card{background:#fff;border:1.5px solid #F0F0EC;border-radius:13px;padding:13px 14px;margin-bottom:8px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .15s}
.sel-card.on{border-color:#111;background:#F7F7F5}
.sel-card:active{transform:scale(0.98)}
.sel-icon{font-size:24px;flex-shrink:0}
.sel-name{font-size:13px;font-weight:700;color:#111}
.sel-desc{font-size:11px;color:#aaa;margin-top:2px}
.sel-check{width:20px;height:20px;border-radius:50%;border:2px solid #ddd;margin-left:auto;flex-shrink:0;transition:all .15s}
.sel-card.on .sel-check{background:#111;border-color:#111}
.step-indicator{display:flex;gap:4px;margin-bottom:16px}
.si-dot{width:8px;height:8px;border-radius:50%;background:#F0F0EC}
.si-dot.on{background:#111;width:20px;border-radius:4px}
#toast{position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#111;color:#fff;padding:10px 18px;border-radius:99px;font-size:12px;font-weight:700;font-family:'DM Sans',sans-serif;z-index:9999;white-space:nowrap;box-shadow:0 6px 20px rgba(0,0,0,.3);max-width:90vw;text-align:center}
</style>
