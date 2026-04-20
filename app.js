// Rusal Dashboard App
let currentView = 'order1'; // 'order1', 'key4', 'all', 'project-detail'
let selectedProjectId = null;

function init() {
  renderOrder1View();
}

function renderOrder1View() {
  currentView = 'order1';
  const app = document.getElementById('app');
  
  const openProjects = PROJECTS.filter(p => p.status.includes('🟡'));
  const completedProjects = PROJECTS.filter(p => p.status.includes('🟢'));
  
  const totalOpen = openProjects.length;
  const totalCompleted = completedProjects.length;
  
  app.innerHTML = `
    <div class="dashboard">
      <header class="header">
        <h1>Русал AI Dashboard</h1>
        <p class="subtitle">Проекты приказа №1</p>
      </header>
      
      <div class="summary-cards">
        <div class="summary-card">
          <div class="summary-label">Открыто проектов</div>
          <div class="summary-value">${totalOpen}</div>
          <div class="summary-sublabel">в работе</div>
        </div>
        <div class="summary-card">
          <div class="summary-label">Реализовано</div>
          <div class="summary-value">${totalCompleted}</div>
          <div class="summary-sublabel">завершено</div>
        </div>
      </div>
      
      <div class="divisions-grid">
        ${CATEGORIES.map(cat => {
          const catProjects = getProjectsByCategory(cat.id);
          const openInCat = catProjects.filter(p => p.status.includes('🟡')).length;
          return `
            <div class="division-card" style="border-left-color: ${cat.color}" onclick="showDivisionProjects('${cat.id}')">
              <div class="division-emoji">${cat.emoji}</div>
              <div class="division-name">${cat.name}</div>
              <div class="division-count">${openInCat} проектов</div>
            </div>
          `;
        }).join('')}
      </div>
      
      <div class="view-toggle">
        <button class="toggle-btn" onclick="showAll()">
          📋 Все проекты
        </button>
        <button class="toggle-btn" onclick="showKey4()">
          ⭐ 4 ключевых
        </button>
      </div>
    </div>
  `;
}

function showDivisionProjects(categoryId) {
  const cat = getCategoryById(categoryId);
  const projects = getProjectsByCategory(categoryId);
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="dashboard">
      <header class="header">
        <div class="back-btn" onclick="renderOrder1View()">← Назад</div>
        <h1>${cat.emoji} ${cat.name}</h1>
        <p class="subtitle">Проекты приказа №1</p>
      </header>
      
      <div class="projects-list-compact">
        ${projects.map(proj => `
          <div class="project-compact" onclick="showProjectDetail(${proj.id})">
            <div class="project-compact-header">
              <span class="project-icon">${proj.icon}</span>
              <span class="project-title-small">${proj.title}</span>
              <span class="project-status-badge">${proj.status}</span>
            </div>
            ${proj.effect ? `<div class="project-effect-small">${proj.effect}</div>` : ''}
          </div>
        `).join('')}
      </div>
      
      <div class="view-toggle">
        <button class="toggle-btn" onclick="renderOrder1View()">
          ← Приказ №1
        </button>
        <button class="toggle-btn" onclick="showAll()">
          📋 Все проекты
        </button>
        <button class="toggle-btn" onclick="showKey4()">
          ⭐ 4 ключевых
        </button>
      </div>
    </div>
  `;
}

function showProjectDetail(projectId) {
  selectedProjectId = projectId;
  const proj = getProjectById(projectId);
  const app = document.getElementById('app');
  
  const progressBar = proj.progress > 0 ? `
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${proj.progress}%"></div>
    </div>
    <div class="progress-label">${proj.progress}%</div>
  ` : '';
  
  app.innerHTML = `
    <div class="dashboard">
      <header class="header">
        <div class="back-btn" onclick="goBack()">← Назад</div>
      </header>
      
      <div class="project-detail">
        <div class="project-icon-large">${proj.icon}</div>
        <h1 class="project-title-large">${proj.title}</h1>
        
        <div class="detail-section">
          <div class="detail-label">👤 ЗАКАЗЧИК</div>
          <div class="detail-value">${proj.customer}</div>
        </div>
        
        <div class="detail-section">
          <div class="detail-label">🏭 ОБЪЕКТ</div>
          <div class="detail-value">${proj.object}</div>
        </div>
        
        <div class="detail-section">
          <div class="detail-label">📋 ОПИСАНИЕ</div>
          <div class="detail-text">${proj.description}</div>
        </div>
        
        ${proj.current_situation ? `
          <div class="detail-section">
            <div class="detail-label">КАК СЕЙЧАС</div>
            <div class="detail-text detail-highlight">${proj.current_situation}</div>
          </div>
        ` : ''}
        
        ${proj.effect ? `
          <div class="detail-section">
            <div class="detail-label">💰 ЭКОНОМИЧЕСКИЙ ЭФФЕКТ</div>
            <div class="detail-effect">${proj.effect}</div>
          </div>
        ` : ''}
        
        <div class="detail-section">
          <div class="detail-label">ТЕКУЩИЙ СТАТУС</div>
          <div class="detail-status">${proj.status}</div>
          ${progressBar}
        </div>
        
        ${proj.next_step ? `
          <div class="detail-section">
            <div class="detail-label">СЛЕДУЮЩИЙ ШАГ</div>
            <div class="detail-next">${proj.next_step}</div>
          </div>
        ` : ''}
      </div>
      
      <div class="view-toggle">
        <button class="toggle-btn" onclick="goBack()">
          ← Назад
        </button>
      </div>
    </div>
  `;
}

function showKey4() {
  currentView = 'key4';
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="dashboard">
      <header class="header">
        <h1>4 Ключевых Проекта</h1>
        <p class="subtitle">Стратегические инициативы ИИ</p>
      </header>
      
      <div class="key-projects-list">
        ${KEY_PROJECTS.map((proj, idx) => `
          <div class="key-project-item" onclick="showKeyProjectDetail('${proj.id}')">
            <div class="key-project-icon">${proj.icon}</div>
            <div class="key-project-info">
              <h3>${proj.title}</h3>
              <p>${proj.description.substring(0, 60)}...</p>
            </div>
            <div class="key-project-status">${proj.status}</div>
          </div>
        `).join('')}
      </div>
      
      <div class="view-toggle">
        <button class="toggle-btn" onclick="renderOrder1View()">
          ← Приказ №1
        </button>
        <button class="toggle-btn" onclick="showAll()">
          📋 Все проекты
        </button>
      </div>
    </div>
  `;
}

function showKeyProjectDetail(projectId) {
  const proj = KEY_PROJECTS.find(p => p.id === projectId);
  const app = document.getElementById('app');
  
  const progressBar = proj.progress > 0 ? `
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${proj.progress}%"></div>
    </div>
    <div class="progress-label">${proj.progress}%</div>
  ` : '';
  
  app.innerHTML = `
    <div class="dashboard">
      <header class="header">
        <div class="back-btn" onclick="showKey4()">← Назад</div>
      </header>
      
      <div class="project-detail">
        <div class="project-icon-large">${proj.icon}</div>
        <h1 class="project-title-large">${proj.title}</h1>
        
        <div class="detail-section">
          <div class="detail-label">👤 ЗАКАЗЧИК</div>
          <div class="detail-value">${proj.customer}</div>
        </div>
        
        <div class="detail-section">
          <div class="detail-label">🏭 ОБЪЕКТ</div>
          <div class="detail-value">${proj.object}</div>
        </div>
        
        <div class="detail-section">
          <div class="detail-label">📋 ОПИСАНИЕ</div>
          <div class="detail-text">${proj.description}</div>
        </div>
        
        ${proj.current_situation ? `
          <div class="detail-section">
            <div class="detail-label">КАК СЕЙЧАС</div>
            <div class="detail-text detail-highlight">${proj.current_situation}</div>
          </div>
        ` : ''}
        
        ${proj.effect ? `
          <div class="detail-section">
            <div class="detail-label">💰 ЭКОНОМИЧЕСКИЙ ЭФФЕКТ</div>
            <div class="detail-effect">${proj.effect}</div>
          </div>
        ` : ''}
        
        <div class="detail-section">
          <div class="detail-label">ТЕКУЩИЙ СТАТУС</div>
          <div class="detail-status">${proj.status}</div>
          ${progressBar}
        </div>
        
        ${proj.next_step ? `
          <div class="detail-section">
            <div class="detail-label">СЛЕДУЮЩИЙ ШАГ</div>
            <div class="detail-next">${proj.next_step}</div>
          </div>
        ` : ''}
      </div>
      
      <div class="view-toggle">
        <button class="toggle-btn" onclick="showKey4()">
          ← Назад
        </button>
      </div>
    </div>
  `;
}

function showAll() {
  currentView = 'all';
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="dashboard">
      <header class="header">
        <h1>Все Проекты</h1>
        <p class="subtitle">Полный список текущих проектов</p>
      </header>
      
      <div class="all-divisions">
        ${CATEGORIES.map(cat => {
          const catProjects = getProjectsByCategory(cat.id);
          return `
            <div class="all-division-card" style="--cat-color: ${cat.color}" onclick="showDivisionProjects('${cat.id}')">
              <div class="all-division-header">
                <span class="all-division-emoji">${cat.emoji}</span>
                <span class="all-division-name">${cat.name}</span>
                <span class="all-division-count">${catProjects.length} проектов</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      
      <div class="view-toggle">
        <button class="toggle-btn" onclick="renderOrder1View()">
          ← Приказ №1
        </button>
        <button class="toggle-btn" onclick="showKey4()">
          ⭐ 4 ключевых
        </button>
      </div>
    </div>
  `;
}

function goBack() {
  if (currentView === 'order1') {
    renderOrder1View();
  } else if (currentView === 'key4') {
    showKey4();
  } else if (currentView === 'all') {
    showAll();
  } else {
    renderOrder1View();
  }
}

// Init
window.addEventListener('DOMContentLoaded', init);
