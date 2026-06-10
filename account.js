// Sample Business Data
const businessData = {
  owner: {
    name: "John Tech Pro",
    email: "john@techsolutions.com",
    avatar: "https://via.placeholder.com/40",
  },
  business: {
    name: "Tech Solutions Pro",
    category: "Services",
    rating: 4.8,
  },
  stats: {
    revenue: 12450,
    sales: 248,
    stock: 1245,
  },
};

// User Preferences
const userPreferences = {
  theme: localStorage.getItem('theme') || 'light',
  notifications: localStorage.getItem('notifications') !== 'false',
  recentSearches: JSON.parse(localStorage.getItem('recentSearches') || '[]'),
};

// Edit Mode Management
const editMode = {
  enabled: false,
  targetId: null,
  targetType: null,
};

// Toast Notification System
const notificationContainer = document.createElement("div");
notificationContainer.id = "notification-container";
notificationContainer.style.cssText = `
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 3000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
document.body.appendChild(notificationContainer);

// Add animation styles
const notificationStyle = document.createElement("style");
notificationStyle.textContent = `
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(400px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideOutRight {
    from { opacity: 1; transform: translateX(0); }
    to { opacity: 0; transform: translateX(400px); }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes fillWidth {
    from { width: 0%; }
    to { width: var(--width, 0%); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes countUp {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  @keyframes glow {
    0%, 100% { text-shadow: 0 0 5px rgba(244, 180, 0, 0.3); }
    50% { text-shadow: 0 0 15px rgba(244, 180, 0, 0.7); }
  }
  .quantity-badge {
    background: rgba(244, 180, 0, 0.2);
    padding: 4px 8px;
    border-radius: 6px;
    font-weight: 600;
    color: #f4b400;
  }
  .badge-quantity {
    background: rgba(76, 175, 80, 0.1);
    padding: 4px 8px;
    border-radius: 6px;
    font-weight: 600;
    color: #4caf50;
  }
  .meta-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .advert-status-badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .advert-status-badge.active {
    background: rgba(76, 175, 80, 0.1);
    color: #4caf50;
  }
  .advert-status-badge.paused {
    background: rgba(255, 152, 0, 0.1);
    color: #ff9800;
  }
  .branch-status-badge {
    display: inline-block;
    background: rgba(76, 175, 80, 0.1);
    color: #4caf50;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
  }
  .tooltip {
    position: relative;
    display: inline-block;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 150px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -75px;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 0.8rem;
    white-space: nowrap;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
  .stat-card {
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .stat-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(244, 180, 0, 0.15);
  }
  .action-btn {
    transition: all 0.2s ease;
  }
  .action-btn:hover {
    background-color: rgba(244, 180, 0, 0.1);
    transform: scale(1.1);
  }
  .editable-field {
    padding: 4px 8px;
    border-radius: 4px;
    border: 2px dashed transparent;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  .editable-field:hover {
    border-color: #f4b400;
    background-color: rgba(244, 180, 0, 0.05);
  }
  .editable-field.editing {
    background-color: rgba(244, 180, 0, 0.1);
    border-color: #f4b400;
  }
  .fade-in-animation {
    animation: fadeIn 0.3s ease-in;
  }
  .slide-animation {
    animation: slideIn 0.3s ease-out;
  }
  .count-animation {
    animation: countUp 0.6s ease-out;
  }
  .highlight {
    background-color: rgba(244, 180, 0, 0.3);
    animation: pulse 0.6s ease-out;
  }
`;
document.head.appendChild(notificationStyle);

// Sample Inventory Data
const inventoryData = [
  {
    id: 1,
    name: "Web Development Package",
    category: "Services",
    quantity: 50,
    unitPrice: 1500,
    lowStockLevel: 5,
  },
  {
    id: 2,
    name: "Logo Design",
    category: "Services",
    quantity: 120,
    unitPrice: 500,
    lowStockLevel: 10,
  },
  {
    id: 3,
    name: "SEO Optimization",
    category: "Services",
    quantity: 30,
    unitPrice: 1200,
    lowStockLevel: 5,
  },
  {
    id: 4,
    name: "Content Writing",
    category: "Services",
    quantity: 200,
    unitPrice: 400,
    lowStockLevel: 20,
  },
  {
    id: 5,
    name: "Social Media Management",
    category: "Services",
    quantity: 15,
    unitPrice: 800,
    lowStockLevel: 5,
  },
];

// Sample Sales Data
const salesData = [
  {
    date: "2026-06-05",
    product: "Web Development",
    quantity: 2,
    amount: 3000,
    customer: "ABC Company",
    status: "Completed",
  },
  {
    date: "2026-06-04",
    product: "Logo Design",
    quantity: 1,
    amount: 500,
    customer: "XYZ Corp",
    status: "Completed",
  },
  {
    date: "2026-06-03",
    product: "SEO Optimization",
    quantity: 3,
    amount: 3600,
    customer: "Tech Startup",
    status: "Pending",
  },
  {
    date: "2026-06-02",
    product: "Content Writing",
    quantity: 5,
    amount: 2000,
    customer: "Digital Agency",
    status: "Completed",
  },
];

// Sample Adverts Data
const advertsData = [
  {
    id: 1,
    title: "Professional Web Development",
    description: "Full-stack web development services",
    category: "Services",
    price: 1500,
    status: "active",
    views: 342,
    clicks: 45,
    icon: "🌐",
  },
  {
    id: 2,
    title: "Logo Design Package",
    description: "Custom logo design with revisions",
    category: "Services",
    price: 500,
    status: "active",
    views: 521,
    clicks: 87,
    icon: "🎨",
  },
  {
    id: 3,
    title: "SEO Optimization",
    description: "Boost your website ranking",
    category: "Services",
    price: 1200,
    status: "paused",
    views: 215,
    clicks: 28,
    icon: "📈",
  },
];

// Sample Branches Data
const branchesData = [
  {
    id: 1,
    name: "Main Office",
    address: "123 Business St",
    city: "New York",
    phone: "+1-555-0100",
    status: "Active",
  },
  {
    id: 2,
    name: "Downtown Branch",
    address: "456 Commerce Ave",
    city: "Los Angeles",
    phone: "+1-555-0101",
    status: "Active",
  },
];

// DOM Elements
const sidebarMenuItems = document.querySelectorAll(".menu-item");
const contentSections = document.querySelectorAll(".content-section");
const addStockBtn = document.getElementById("addStockBtn");
const createAdvertBtn = document.getElementById("createAdvertBtn");
const addBranchBtn = document.getElementById("addBranchBtn");
const addStockModal = document.getElementById("addStockModal");
const createAdvertModal = document.getElementById("createAdvertModal");
const addBranchModal = document.getElementById("addBranchModal");
const modalCloseButtons = document.querySelectorAll(".close-btn");
const logoutBtn = document.getElementById("logoutBtn");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
  setupEventListeners();
  setupKeyboardShortcuts();
  animateStatsOnLoad();
  setupToggleSwitches();
});

// Initialize App
function initializeApp() {
  updateUserInfo();
  loadDashboard();
  loadInventory();
  loadSales();
  loadAdverts();
  loadBranches();
  setupNotificationBtn();
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K: Focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchInput = document.querySelector('[placeholder*="Search"]');
      if (searchInput) searchInput.focus();
      showNotification('Search activated');
    }
    // Ctrl/Cmd + S: Save
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      const activeForm = document.querySelector('.modal.active form');
      if (activeForm) activeForm.dispatchEvent(new Event('submit'));
      showNotification('Saved!');
    }
    // Esc: Close modal
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.active').forEach(modal => closeModal(modal));
    }
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Sidebar menu items
  sidebarMenuItems.forEach((item) => {
    item.addEventListener("click", () => switchSection(item));
    item.addEventListener("mouseenter", function() {
      this.style.transform = "translateX(8px)";
    });
    item.addEventListener("mouseleave", function() {
      this.style.transform = "translateX(0)";
    });
  });

  // Modal buttons
  addStockBtn.addEventListener("click", () => openModal(addStockModal));
  createAdvertBtn.addEventListener("click", () => openModal(createAdvertModal));
  addBranchBtn.addEventListener("click", () => openModal(addBranchModal));

  // Close modal buttons
  modalCloseButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      closeModal(e.target.closest(".modal"));
    });
  });

  // Close modal when clicking outside
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Form submissions
  if (document.getElementById("addStockForm")) {
    document.getElementById("addStockForm").addEventListener("submit", addStock);
  }
  if (document.getElementById("createAdvertForm")) {
    document.getElementById("createAdvertForm").addEventListener("submit", createAdvert);
  }
  if (document.getElementById("addBranchForm")) {
    document.getElementById("addBranchForm").addEventListener("submit", addBranch);
  }
  if (document.getElementById("businessForm")) {
    document.getElementById("businessForm").addEventListener("submit", saveBusiness);
  }

  // Logout
  logoutBtn.addEventListener("click", logout);

  // Filters with real-time search
  const inventorySearch = document.getElementById("inventorySearch");
  const advertSearch = document.getElementById("advertSearch");
  
  if (inventorySearch) {
    inventorySearch.addEventListener("input", filterInventory);
    inventorySearch.addEventListener("focus", function() {
      this.parentElement.style.boxShadow = "0 0 0 3px rgba(244, 180, 0, 0.1)";
    });
    inventorySearch.addEventListener("blur", function() {
      this.parentElement.style.boxShadow = "none";
    });
  }
  
  const inventoryCategory = document.getElementById("inventoryCategory");
  if (inventoryCategory) {
    inventoryCategory.addEventListener("change", filterInventory);
  }

  if (advertSearch) {
    advertSearch.addEventListener("input", filterAdverts);
  }
  const advertFilter = document.getElementById("advertFilter");
  if (advertFilter) {
    advertFilter.addEventListener("change", filterAdverts);
  }

  // Stat cards click for details
  document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('click', function() {
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "translateY(-8px)";
      }, 100);
    });
  });
}

// Animate stats on page load
function animateStatsOnLoad() {
  const statValues = document.querySelectorAll('.stat-value');
  statValues.forEach(el => {
    el.classList.add('count-animation');
  });
}

// Setup toggle switches
function setupToggleSwitches() {
  const toggleSwitches = document.querySelectorAll('.toggle-switch');
  toggleSwitches.forEach(toggle => {
    toggle.addEventListener('change', function() {
      const label = this.closest('.toggle-item').querySelector('.toggle-label').textContent;
      const status = this.checked ? 'enabled' : 'disabled';
      showNotification(`${label} ${status}`);
      localStorage.setItem('notification_' + label, this.checked);
    });
  });
}

// Setup notification button
function setupNotificationBtn() {
  const notificationBtn = document.getElementById('notificationBtn');
  if (notificationBtn) {
    notificationBtn.addEventListener('click', () => {
      showNotification('You have 3 new notifications');
      const badge = notificationBtn.querySelector('.notification-badge');
      if (badge) {
        badge.style.animation = 'pulse 0.5s ease-out';
        setTimeout(() => {
          badge.style.animation = 'none';
        }, 500);
      }
    });
  }
}

// Switch Section
function switchSection(menuItem) {
  const sectionName = menuItem.dataset.section;

  // Update active menu item
  sidebarMenuItems.forEach((item) => item.classList.remove("active"));
  menuItem.classList.add("active");

  // Update active section with fade animation
  contentSections.forEach((section) => {
    section.classList.remove("active");
    section.style.opacity = "0";
  });
  
  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.add("active");
    targetSection.style.transition = "opacity 0.3s ease-in";
    setTimeout(() => {
      targetSection.style.opacity = "1";
    }, 10);
  }
}

// Update User Info
function updateUserInfo() {
  const userNameEl = document.getElementById("userName");
  const userEmailEl = document.getElementById("userEmail");
  if (userNameEl) userNameEl.textContent = businessData.owner.name;
  if (userEmailEl) userEmailEl.textContent = businessData.owner.email;
}

// Animated Counter Function
function animateCounter(element, finalValue, duration = 1500) {
  let currentValue = 0;
  const increment = finalValue / (duration / 16);
  const interval = setInterval(() => {
    currentValue += increment;
    if (currentValue >= finalValue) {
      element.textContent = typeof finalValue === 'string' ? finalValue : formatNumber(finalValue);
      clearInterval(interval);
    } else {
      element.textContent = formatNumber(Math.floor(currentValue));
    }
  }, 16);
}

// Format numbers with commas and symbols
function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

// Dashboard
function loadDashboard() {
  // Update stats with animation
  const revenueEl = document.getElementById("totalRevenue");
  const salesEl = document.getElementById("totalSales");
  const stockEl = document.getElementById("totalStock");
  
  if (revenueEl) {
    revenueEl.textContent = "$0";
    animateCounter({
      textContent: "$0",
      set textContent(value) {
        revenueEl.textContent = "$" + value.replace(/,/g, '');
      }
    }, businessData.stats.revenue);
  }
  
  if (salesEl) {
    animateCounter(salesEl, businessData.stats.sales);
  }
  
  if (stockEl) {
    animateCounter(stockEl, businessData.stats.stock);
  }

  // Add click handlers to stat cards for more details
  document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('click', function() {
      const statLabel = this.querySelector('.stat-label').textContent;
      showNotification(`Viewing ${statLabel} details`);
    });
  });

  loadRecentSales();
  loadAdvertsPerformance();
}

function loadRecentSales() {
  const recentSalesList = document.getElementById("recentSalesList");
  if (!recentSalesList) return;
  
  const recentSales = salesData.slice(0, 3);

  recentSalesList.innerHTML = recentSales
    .map(
      (sale, idx) => `
    <div class="sales-item fade-in-animation" style="animation-delay: ${idx * 100}ms">
      <div class="sales-item-info">
        <div class="sales-item-title">${sale.product}</div>
        <div class="sales-item-meta">${sale.customer} • ${sale.date}</div>
      </div>
      <div class="sales-item-amount" style="cursor: pointer; transition: 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">+$${sale.amount}</div>
    </div>
  `
    )
    .join("");
}

function loadAdvertsPerformance() {
  const advertsPerformance = document.getElementById("advertsPerformance");
  if (!advertsPerformance) return;

  advertsPerformance.innerHTML = advertsData
    .map((advert, idx) => {
      const performancePercent = (advert.clicks / advert.views) * 100;
      return `
    <div class="perf-item fade-in-animation" style="animation-delay: ${idx * 100}ms">
      <div class="perf-item-title" title="${advert.title}">${advert.title}</div>
      <div class="perf-bar">
        <div class="perf-bar-fill" style="width: 0%; transition: width 1s ease-out; animation-delay: ${500 + idx * 100}ms" data-width="${performancePercent}%"></div>
      </div>
      <div class="perf-value">${performancePercent.toFixed(1)}%</div>
    </div>
  `;
    })
    .join("");
  
  // Animate progress bars
  setTimeout(() => {
    document.querySelectorAll('.perf-bar-fill').forEach(bar => {
      const width = bar.dataset.width;
      bar.style.width = width;
    });
  }, 100);
}

// Inventory
function loadInventory() {
  renderInventoryTable();
}

function renderInventoryTable() {
  const inventoryBody = document.getElementById("inventoryBody");
  if (!inventoryBody) return;

  inventoryBody.innerHTML = inventoryData
    .map((item, idx) => {
      const totalValue = item.quantity * item.unitPrice;
      let status = "Good";
      let statusClass = "good";

      if (item.quantity <= item.lowStockLevel) {
        status = "Critical";
        statusClass = "critical";
      } else if (item.quantity <= item.lowStockLevel * 2) {
        status = "Low";
        statusClass = "low";
      }

      return `
    <tr class="fade-in-animation" style="animation-delay: ${idx * 50}ms">
      <td><strong class="editable-field" onclick="makeEditable(this, ${item.id}, 'name')">${item.name}</strong></td>
      <td>${item.category}</td>
      <td class="editable-field" onclick="makeEditable(this, ${item.id}, 'quantity')" title="Click to edit">${item.quantity}</td>
      <td>$${item.unitPrice}</td>
      <td>$${totalValue.toLocaleString()}</td>
      <td><span class="stock-status ${statusClass}" title="${status}">${status}</span></td>
      <td>
        <div class="action-buttons" style="display: flex; gap: 8px;">
          <button class="action-btn edit tooltip" title="Edit" onclick="editInventory(${item.id})" style="background: none; border: none; cursor: pointer; padding: 4px; color: #f4b400;">
            <i class="fas fa-edit"></i>
            <span class="tooltiptext">Edit Item</span>
          </button>
          <button class="action-btn delete tooltip" title="Delete" onclick="deleteInventory(${item.id})" style="background: none; border: none; cursor: pointer; padding: 4px; color: #f44336;">
            <i class="fas fa-trash"></i>
            <span class="tooltiptext">Delete Item</span>
          </button>
        </div>
      </td>
    </tr>
  `;
    })
    .join("");
}

// In-line edit functionality
function makeEditable(element, id, fieldType) {
  if (element.querySelector('input')) return; // Already editing
  
  const item = inventoryData.find(i => i.id === id);
  if (!item) return;
  
  const currentValue = fieldType === 'name' ? item.name : item.quantity;
  const input = document.createElement('input');
  input.type = fieldType === 'quantity' ? 'number' : 'text';
  input.value = currentValue;
  input.style.cssText = 'padding: 4px 8px; border-radius: 4px; border: 2px solid #f4b400; font-size: inherit; width: 100%;';
  
  element.classList.add('editing');
  element.textContent = '';
  element.appendChild(input);
  input.focus();
  input.select();
  
  const saveEdit = () => {
    const newValue = input.value;
    if (fieldType === 'name') {
      item.name = newValue;
    } else if (fieldType === 'quantity') {
      item.quantity = parseInt(newValue) || item.quantity;
    }
    element.classList.remove('editing');
    renderInventoryTable();
    showNotification(`${fieldType} updated successfully!`);
  };
  
  input.addEventListener('blur', saveEdit);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') saveEdit();
  });
}

function addStock(e) {
  e.preventDefault();

  const newItem = {
    id: inventoryData.length + 1,
    name: document.getElementById("itemName").value,
    category: document.getElementById("itemCategory").value,
    quantity: parseInt(document.getElementById("itemQuantity").value),
    unitPrice: parseFloat(document.getElementById("itemPrice").value),
    lowStockLevel: parseInt(document.getElementById("lowStockLevel").value),
  };

  inventoryData.push(newItem);
  renderInventoryTable();
  closeModal(addStockModal);
  document.getElementById("addStockForm").reset();
  showNotification("✓ Item added successfully!", "success");
}

function editInventory(id) {
  const item = inventoryData.find(i => i.id === id);
  if (!item) return;
  
  showNotification(`Editing: ${item.name}`);
  // Open modal with pre-filled data
  document.getElementById("itemName").value = item.name;
  document.getElementById("itemCategory").value = item.category;
  document.getElementById("itemQuantity").value = item.quantity;
  document.getElementById("itemPrice").value = item.unitPrice;
  document.getElementById("lowStockLevel").value = item.lowStockLevel;
  openModal(addStockModal);
}

function deleteInventory(id) {
  const item = inventoryData.find(i => i.id === id);
  if (!item) return;
  
  if (confirm(`Are you sure you want to delete "${item.name}"?`)) {
    const index = inventoryData.findIndex((item) => item.id === id);
    if (index > -1) {
      inventoryData.splice(index, 1);
      renderInventoryTable();
      showNotification("✓ Item deleted successfully!", "success");
    }
  }
}

function filterInventory() {
  const searchTerm = document.getElementById("inventorySearch").value.toLowerCase();
  const category = document.getElementById("inventoryCategory").value;

  const filtered = inventoryData.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(searchTerm) || 
                       item.category.toLowerCase().includes(searchTerm);
    const matchCategory = !category || item.category === category;
    return matchSearch && matchCategory;
  });

  renderFilteredInventory(filtered);
}

function renderFilteredInventory(items) {
  const inventoryBody = document.getElementById("inventoryBody");
  if (!inventoryBody) return;

  if (items.length === 0) {
    inventoryBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 2rem; color: #999;">
          <i class="fas fa-search"></i> No items found
        </td>
      </tr>
    `;
    return;
  }

  inventoryBody.innerHTML = items
    .map((item, idx) => {
      const totalValue = item.quantity * item.unitPrice;
      let status = "Good";
      let statusClass = "good";

      if (item.quantity <= item.lowStockLevel) {
        status = "Critical";
        statusClass = "critical";
      } else if (item.quantity <= item.lowStockLevel * 2) {
        status = "Low";
        statusClass = "low";
      }

      return `
    <tr class="slide-animation" style="animation-delay: ${idx * 50}ms">
      <td><strong class="highlight">${item.name}</strong></td>
      <td>${item.category}</td>
      <td>${item.quantity}</td>
      <td>$${item.unitPrice}</td>
      <td>$${totalValue.toLocaleString()}</td>
      <td><span class="stock-status ${statusClass}">${status}</span></td>
      <td>
        <div class="action-buttons" style="display: flex; gap: 8px;">
          <button class="action-btn edit" title="Edit" onclick="editInventory(${item.id})" style="background: none; border: none; cursor: pointer; padding: 4px; color: #f4b400;">
            <i class="fas fa-edit"></i>
          </button>
          <button class="action-btn delete" title="Delete" onclick="deleteInventory(${item.id})" style="background: none; border: none; cursor: pointer; padding: 4px; color: #f44336;">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `;
    })
    .join("");
}

// Sales
function loadSales() {
  loadTopProducts();
  loadSalesTable();
}

function loadTopProducts() {
  const topProducts = document.getElementById("topProducts");
  if (!topProducts) return;

  const productStats = {};
  salesData.forEach((sale) => {
    if (!productStats[sale.product]) {
      productStats[sale.product] = { quantity: 0, revenue: 0 };
    }
    productStats[sale.product].quantity += sale.quantity;
    productStats[sale.product].revenue += sale.amount;
  });

  const topProductsArray = Object.entries(productStats)
    .sort((a, b) => b[1].revenue - a[1].revenue)
    .slice(0, 5);

  topProducts.innerHTML = topProductsArray
    .map(
      ([product, stats], idx) => `
    <div class="product-item fade-in-animation" style="animation-delay: ${idx * 100}ms">
      <div class="product-name" title="${product}" style="cursor: pointer; transition: 0.2s;" onmouseover="this.style.color='#f4b400'" onmouseout="this.style.color='inherit'">${product}</div>
      <div class="product-stat">
        <div class="product-stat-value">$${stats.revenue.toLocaleString()}</div>
        <div class="product-stat-label">${stats.quantity} sales</div>
      </div>
    </div>
  `
    )
    .join("");
}

function loadSalesTable() {
  const salesTableBody = document.getElementById("salesTableBody");
  if (!salesTableBody) return;
  
  salesTableBody.innerHTML = salesData
    .map((sale, idx) => `
    <tr class="fade-in-animation" style="animation-delay: ${idx * 50}ms; cursor: pointer; transition: 0.2s;" onmouseover="this.style.backgroundColor='rgba(244, 180, 0, 0.1)'" onmouseout="this.style.backgroundColor='transparent'">
      <td>${sale.date}</td>
      <td><strong>${sale.product}</strong></td>
      <td>${sale.quantity}</td>
      <td>$${sale.amount}</td>
      <td>${sale.customer}</td>
      <td><span class="stock-status ${sale.status === 'Completed' ? 'good' : 'low'}">${sale.status}</span></td>
    </tr>
  `).join("");
}

function createAdvert(e) {
  e.preventDefault();

  const newAdvert = {
    id: Math.max(...advertsData.map(a => a.id), 0) + 1,
    title: document.getElementById("advertTitle").value,
    description: document.getElementById("advertDescription").value,
    category: document.getElementById("advertCategory").value,
    price: parseFloat(document.getElementById("advertPrice").value),
    status: "active",
    views: 0,
    clicks: 0,
    icon: "📢",
  };

  advertsData.push(newAdvert);
  renderAdvertsCards();
  closeModal(createAdvertModal);
  document.getElementById("createAdvertForm").reset();
  showNotification("✓ Advert created successfully!", "success");
// Adverts
function loadAdverts() {
  renderAdvertsCards();
}

function renderAdvertsCards() {
  const myAdvertsContainer = document.getElementById("myAdvertsContainer");
  if (!myAdvertsContainer) return;
  myAdvertsContainer.innerHTML = advertsData.map((advert, idx) => {
    const ctr = ((advert.clicks / advert.views) * 100).toFixed(1);
    return `
    <div class="advert-card fade-in-animation" style="animation-delay: ${idx * 100}ms" data-id="${advert.id}">
      <div class="advert-card-image" style="cursor: pointer; transition: 0.3s; font-size: 2.5rem;" onmouseover="this.style.transform='scale(1.2) rotate(10deg)'" onmouseout="this.style.transform='scale(1) rotate(0)'">${advert.icon}</div>
      <div class="advert-status-badge ${advert.status}">${advert.status.toUpperCase()}</div>
      <div class="advert-card-body">
        <div class="advert-card-title editable-field" onclick="makeAdvertEditable(this, ${advert.id})">${advert.title}</div>
        <div class="advert-card-desc">${advert.description}</div>
        <div class="advert-card-meta" style="display: flex; gap: 12px; margin: 8px 0;">
          <span class="meta-item"><i class="fas fa-eye"></i> ${advert.views}</span>
          <span class="meta-item"><i class="fas fa-hand-pointer"></i> ${advert.clicks}</span>
          <span class="meta-item"><i class="fas fa-percentage"></i> ${ctr}%</span>
        </div>
        <div class="advert-card-price">$${advert.price}</div>
        <div class="advert-card-actions" style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button style="flex: 1; background: #2196f3; color: white; border: none; padding: 8px; border-radius: 4px; cursor: pointer;" onclick="showAdvertDetails(${advert.id})"><i class="fas fa-eye"></i> View</button>
          <button style="flex: 1; background: #f4b400; color: #222; border: none; padding: 8px; border-radius: 4px; cursor: pointer; transition: 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'" onclick="toggleAdvertStatus(${advert.id})">${advert.status === 'active' ? '<i class="fas fa-pause"></i> Pause' : '<i class="fas fa-play"></i> Resume'}</button>
          <button style="background: #f44336; color: white; border: none; padding: 8px; border-radius: 4px; cursor: pointer; width: 40px;" onclick="deleteAdvert(${advert.id})"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    </div>
  `;
  }).join("");
}

function showAdvertDetails(id) {
  const advert = advertsData.find(a => a.id === id);
  if (!advert) return;
  advert.views++;
  renderAdvertsCards();
  const modal = document.createElement('div');
  modal.className = 'modal active';
  modal.innerHTML = `
    <div class="modal-content large" style="position: relative; text-align: center;">
      <button class="close-btn" onclick="this.closest('.modal').remove()" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 2rem; cursor: pointer;">&times;</button>
      <div style="font-size: 4rem; margin-bottom: 20px;">${advert.icon}</div>
      <h2>${advert.title}</h2>
      <div style="font-size: 1.5rem; color: #f4b400; margin: 10px 0;">$${advert.price}</div>
      <p style="color: #666; margin: 15px 0;">${advert.description}</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin: 20px 0;">
        <div style="padding: 15px; background: rgba(33, 150, 243, 0.1); border-radius: 8px;">
          <div style="color: #2196f3; font-size: 1.5rem; font-weight: bold;">${advert.views}</div>
          <div style="color: #666; font-size: 0.9rem;">Views</div>
        </div>
        <div style="padding: 15px; background: rgba(76, 175, 80, 0.1); border-radius: 8px;">
          <div style="color: #4caf50; font-size: 1.5rem; font-weight: bold;">${advert.clicks}</div>
          <div style="color: #666; font-size: 0.9rem;">Clicks</div>
        </div>
        <div style="padding: 15px; background: rgba(244, 180, 0, 0.1); border-radius: 8px;">
          <div style="color: #f4b400; font-size: 1.5rem; font-weight: bold;">${((advert.clicks/advert.views)*100).toFixed(2)}%</div>
          <div style="color: #666; font-size: 0.9rem;">CTR</div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
}

function makeAdvertEditable(element, id) {
  if (element.querySelector('input')) return;
  const advert = advertsData.find(a => a.id === id);
  if (!advert) return;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = advert.title;
  input.style.cssText = 'padding: 4px 8px; border-radius: 4px; border: 2px solid #f4b400; font-size: inherit; width: 100%;';
  element.classList.add('editing');
  element.textContent = '';
  element.appendChild(input);
  input.focus();
  input.select();
  const saveEdit = () => {
    if (input.value.trim()) {
      advert.title = input.value;
      renderAdvertsCards();
      showNotification('✓ Title updated!', 'success');
    }
    element.classList.remove('editing');
  };
  input.addEventListener('blur', saveEdit);
  input.addEventListener('keypress', (e) => { if (e.key === 'Enter') saveEdit(); });
}

function deleteAdvert(id) {
  const advert = advertsData.find(a => a.id === id);
  if (!advert) return;
  if (confirm(`Delete "${advert.title}"?`)) {
    const index = advertsData.findIndex(a => a.id === id);
    if (index > -1) {
      advertsData.splice(index, 1);
      renderAdvertsCards();
      showNotification("✓ Advert deleted!", "success");
    }
  }
}

function toggleAdvertStatus(id) {
  const advert = advertsData.find(a => a.id === id);
  if (!advert) return;
  advert.status = advert.status === 'active' ? 'paused' : 'active';
  renderAdvertsCards();
  showNotification(`Advert ${advert.status === 'active' ? 'resumed' : 'paused'}`, 'success');
}

function filterAdverts() {
  const searchTerm = document.getElementById("advertSearch").value.toLowerCase();
  const status = document.getElementById("advertFilter").value;
  const filtered = advertsData.filter((advert) => {
    const matchSearch = advert.title.toLowerCase().includes(searchTerm);
    const matchStatus = !status || advert.status === status;
    return matchSearch && matchStatus;
  });
  const myAdvertsContainer = document.getElementById("myAdvertsContainer");
  if (!myAdvertsContainer) return;
  if (filtered.length === 0) {
    myAdvertsContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;"><i class="fas fa-search"></i> No adverts found</div>`;
    return;
  }
  myAdvertsContainer.innerHTML = filtered.map((advert, idx) => {
    const ctr = ((advert.clicks / advert.views) * 100).toFixed(1);
    return `
    <div class="advert-card slide-animation" style="animation-delay: ${idx * 100}ms; border: 2px solid rgba(244, 180, 0, 0.5);">
      <div class="advert-card-image" style="font-size: 2.5rem;">${advert.icon}</div>
      <div class="advert-status-badge ${advert.status}">${advert.status.toUpperCase()}</div>
      <div class="advert-card-body">
        <div class="advert-card-title">${advert.title}</div>
        <div class="advert-card-desc">${advert.description}</div>
        <div class="advert-card-meta" style="display: flex; gap: 12px;">
          <span><i class="fas fa-eye"></i> ${advert.views}</span>
          <span><i class="fas fa-hand-pointer"></i> ${advert.clicks}</span>
        </div>
        <div class="advert-card-price">$${advert.price}</div>
      </div>
    </div>
  `;
  }).join("");
}
}

function editAdvert(id) {
  alert("Edit functionality for advert ID: " + id);
}

function deleteAdvert(id) {
  if (confirm("Are you sure you want to delete this advert?")) {
    const index = advertsData.findIndex((advert) => advert.id === id);
    if (index > -1) {
      advertsData.splice(index, 1);
      renderAdvertsCards();
      showNotification("Advert deleted successfully!");
    }
  }
}

function filterAdverts() {
  const searchTerm = document.getElementById("advertSearch").value.toLowerCase();
  const status = document.getElementById("advertFilter").value;

  const filtered = advertsData.filter((advert) => {
    const matchSearch = advert.title.toLowerCase().includes(searchTerm);
    const matchStatus = !status || advert.status === status;
    return matchSearch && matchStatus;
  });

  const myAdvertsContainer = document.getElementById("myAdvertsContainer");

  if (filtered.length === 0) {
    myAdvertsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">
        <i class="fas fa-search"></i> No adverts found
      </div>
    `;
    return;
  }

  myAdvertsContainer.innerHTML = filtered
    .map(
      (advert) => `
    <div class="advert-card">
      <div class="advert-card-image">${advert.icon}</div>
      <div class="advert-card-body">
        <div class="advert-card-title">${advert.title}</div>
        <div class="advert-card-desc">${advert.description}</div>
        <div class="advert-card-meta">
          <span>${advert.views} views</span>
          <span>${advert.clicks} clicks</span>
        </div>
        <div class="advert-card-price">$${advert.price}</div>
        <div class="advert-card-actions">
          <button onclick="editAdvert(${advert.id})" title="Edit">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button class="delete-btn" onclick="deleteAdvert(${advert.id})" title="Delete">
            <i class="fas fa-trash"></i> Delete
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// Branches
function loadBranches() {
  renderBranchCards();
}

function renderBranchCards() {
  const branchesContainer = document.getElementById("branchesContainer");

  branchesContainer.innerHTML = branchesData
    .map(
      (branch) => `
    <div class="branch-card">
      <div class="branch-icon">
        <i class="fas fa-map-marker-alt"></i>
      </div>
      <div class="branch-name">${branch.name}</div>
      <div class="branch-info">
        <i class="fas fa-map-pin"></i> ${branch.address}
      </div>
      <div class="branch-info">
        <i class="fas fa-city"></i> ${branch.city}
      </div>
      <div class="branch-info">
        <i class="fas fa-phone"></i> ${branch.phone}
      </div>
      <div class="branch-info">
        <i class="fas fa-check-circle"></i> ${branch.status}
      </div>
      <div class="branch-actions">
        <button onclick="editBranch(${branch.id})">
          <i class="fas fa-edit"></i> Edit
        </button>
        <button onclick="deleteBranch(${branch.id})">
          <i class="fas fa-trash"></i> Delete
        </button>
      </div>
    </div>
  `
    )
    .join("");
}

function addBranch(e) {
  e.preventDefault();

  const newBranch = {
    id: branchesData.length + 1,
    name: document.getElementById("branchName").value,
    address: document.getElementById("branchAddress").value,
    city: document.getElementById("branchCity").value,
    phone: document.getElementById("branchPhone").value,
    status: "Active",
  };

  branchesData.push(newBranch);
  renderBranchCards();
  closeModal(addBranchModal);
  document.getElementById("addBranchForm").reset();
  showNotification("Branch registered successfully!");
}

function editBranch(id) {
  alert("Edit functionality for branch ID: " + id);
}

function deleteBranch(id) {
  if (confirm("Are you sure you want to delete this branch?")) {
    const index = branchesData.findIndex((branch) => branch.id === id);
    if (index > -1) {
      branchesData.splice(index, 1);
      renderBranchCards();
      showNotification("Branch deleted successfully!");
    // Branches
    function loadBranches() {
      renderBranchCards();
    }

    function renderBranchCards() {
      const branchesContainer = document.getElementById("branchesContainer");
      if (!branchesContainer) return;

      branchesContainer.innerHTML = branchesData
        .map((branch, idx) => `
        <div class="branch-card fade-in-animation" style="animation-delay: ${idx * 100}ms; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 12px 30px rgba(244, 180, 0, 0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='var(--shadow)'">
          <div class="branch-icon" style="font-size: 2rem; margin-bottom: 10px;">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div class="branch-name" style="font-weight: 600; font-size: 1.1rem; margin-bottom: 10px;">${branch.name}</div>
          <div class="branch-info" style="font-size: 0.9rem; color: #666; margin: 6px 0;">
            <i class="fas fa-map-pin" style="color: #f4b400;"></i> ${branch.address}
          </div>
          <div class="branch-info" style="font-size: 0.9rem; color: #666; margin: 6px 0;">
            <i class="fas fa-city" style="color: #2196f3;"></i> ${branch.city}
          </div>
          <div class="branch-info" style="font-size: 0.9rem; color: #666; margin: 6px 0;">
            <i class="fas fa-phone" style="color: #4caf50;"></i> <a href="tel:${branch.phone}" style="color: #2196f3; text-decoration: none;">${branch.phone}</a>
          </div>
          <div class="branch-info" style="font-size: 0.9rem; color: #4caf50; margin: 10px 0; font-weight: 600;">
            <i class="fas fa-check-circle"></i> ${branch.status}
          </div>
          <div class="branch-actions" style="display: flex; gap: 8px; margin-top: 12px;">
            <button class="tooltip" style="flex: 1; background: #2196f3; color: white; border: none; padding: 8px; border-radius: 4px; cursor: pointer; transition: 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'" onclick="editBranch(${branch.id})">
              <i class="fas fa-edit"></i> Edit
              <span class="tooltiptext">Edit Branch</span>
            </button>
            <button class="tooltip" style="flex: 1; background: #f44336; color: white; border: none; padding: 8px; border-radius: 4px; cursor: pointer; transition: 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'" onclick="deleteBranch(${branch.id})">
              <i class="fas fa-trash"></i> Delete
              <span class="tooltiptext">Delete Branch</span>
            </button>
          </div>
        </div>
      `)
        .join("");
    }

    function addBranch(e) {
      e.preventDefault();

      const newBranch = {
        id: Math.max(...branchesData.map(b => b.id), 0) + 1,
        name: document.getElementById("branchName").value,
        address: document.getElementById("branchAddress").value,
        city: document.getElementById("branchCity").value,
        phone: document.getElementById("branchPhone").value,
        status: "Active",
      };

      branchesData.push(newBranch);
      renderBranchCards();
      closeModal(addBranchModal);
      document.getElementById("addBranchForm").reset();
      showNotification("✓ Branch registered successfully!", "success");
    }

    function editBranch(id) {
      const branch = branchesData.find(b => b.id === id);
      if (!branch) return;
  
      document.getElementById("branchName").value = branch.name;
      document.getElementById("branchAddress").value = branch.address;
      document.getElementById("branchCity").value = branch.city;
      document.getElementById("branchPhone").value = branch.phone;
      showNotification(`Editing: ${branch.name}`);
      openModal(addBranchModal);
    }

    function deleteBranch(id) {
      const branch = branchesData.find(b => b.id === id);
      if (!branch) return;
  
      if (confirm(`Delete branch "${branch.name}"?`)) {
        const index = branchesData.findIndex((b) => b.id === id);
        if (index > -1) {
          branchesData.splice(index, 1);
          renderBranchCards();
          showNotification("✓ Branch deleted!", "success");
        }
      }
    }
    }
  }
}

// Settings
function saveBusiness(e) {
  e.preventDefault();

  businessData.business.name = document.getElementById("businessName").value;
  businessData.owner.email = document.getElementById("businessEmail").value;
  businessData.business.category = document.getElementById("businessCategory").value;

  showNotification("Business profile updated successfully!");
}

// Modal Functions
function openModal(modal) {
  modal.classList.add("active");
}

function closeModal(modal) {
  modal.classList.remove("active");
}

// Utility Functions
function showNotification(message) {
  // Render a non-blocking toast notification in the top-right
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.style.cssText = `
    background: #111827; color: #fff; padding: 12px 16px; border-radius: 12px; box-shadow: 0 12px 40px rgba(2,6,23,0.4);
    display: inline-flex; align-items: center; gap: 10px; font-weight:700;`;
  toast.textContent = message;

  notificationContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
  }, 2400);
  setTimeout(() => toast.remove(), 3000);
}

function logout() {
  if (confirm("Are you sure you want to logout?")) {
    localStorage.removeItem("userSession");
    window.location.href = "index.html";
  }
}

// Redirect from registration
// When user completes registration, redirect them to this page
function redirectFromRegistration() {
  const userRegistered = localStorage.getItem("userRegistered");
  if (userRegistered) {
    localStorage.removeItem("userRegistered");
    const firstMenuItem = document.querySelector(".menu-item");
    firstMenuItem.click();
  }
}

redirectFromRegistration();

// Settings
function saveBusiness(e) {
  e.preventDefault();

  businessData.business.name = document.getElementById("businessName").value;
  businessData.owner.email = document.getElementById("businessEmail").value;
  businessData.business.category = document.getElementById("businessCategory").value;

  showNotification("✓ Business profile updated!", "success");
  localStorage.setItem('businessData', JSON.stringify(businessData));
}

// Modal Functions
function openModal(modal) {
  modal.classList.add("active");
  modal.style.animation = "fadeIn 0.3s ease-out";
  // Prevent body scroll
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("active");
  modal.style.animation = "none";
  // Re-enable body scroll
  document.body.style.overflow = "auto";
}

// Utility Functions
function showNotification(message, type = "info") {
  // Render a non-blocking toast notification in the top-right
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  
  const bgColor = {
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3'
  }[type] || '#111827';
  
  const icon = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  }[type] || '●';
  
  toast.style.cssText = `
    background: ${bgColor}; 
    color: #fff; 
    padding: 12px 16px; 
    border-radius: 12px; 
    box-shadow: 0 12px 40px rgba(0,0,0,0.3);
    display: inline-flex; 
    align-items: center; 
    gap: 10px; 
    font-weight: 600;
    animation: slideInRight 0.3s ease-out;
    font-size: 0.95rem;
  `;
  toast.innerHTML = `<span style="font-weight: 700;">${icon}</span> <span>${message}</span>`;
  
  notificationContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease-out';
  }, 2500);
  setTimeout(() => toast.remove(), 2800);
}
