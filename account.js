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
});

// Initialize App
function initializeApp() {
  updateUserInfo();
  loadDashboard();
  loadInventory();
  loadSales();
  loadAdverts();
  loadBranches();
}

// Setup Event Listeners
function setupEventListeners() {
  // Sidebar menu items
  sidebarMenuItems.forEach((item) => {
    item.addEventListener("click", () => switchSection(item));
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
  document.getElementById("addStockForm").addEventListener("submit", addStock);
  document.getElementById("createAdvertForm").addEventListener("submit", createAdvert);
  document.getElementById("addBranchForm").addEventListener("submit", addBranch);
  document.getElementById("businessForm").addEventListener("submit", saveBusiness);

  // Logout
  logoutBtn.addEventListener("click", logout);

  // Filters
  document.getElementById("inventorySearch").addEventListener("input", filterInventory);
  document.getElementById("inventoryCategory").addEventListener("change", filterInventory);
  document.getElementById("advertSearch").addEventListener("input", filterAdverts);
  document.getElementById("advertFilter").addEventListener("change", filterAdverts);
}

// Switch Section
function switchSection(menuItem) {
  const sectionName = menuItem.dataset.section;

  // Update active menu item
  sidebarMenuItems.forEach((item) => item.classList.remove("active"));
  menuItem.classList.add("active");

  // Update active section
  contentSections.forEach((section) => section.classList.remove("active"));
  document.getElementById(sectionName).classList.add("active");
}

// Update User Info
function updateUserInfo() {
  document.getElementById("userName").textContent = businessData.owner.name;
  document.getElementById("userEmail").textContent = businessData.owner.email;
}

// Dashboard
function loadDashboard() {
  // Update stats
  document.getElementById("totalRevenue").textContent = `$${businessData.stats.revenue.toLocaleString()}`;
  document.getElementById("totalSales").textContent = businessData.stats.sales;
  document.getElementById("totalStock").textContent = businessData.stats.stock;

  loadRecentSales();
  loadAdvertsPerformance();
}

function loadRecentSales() {
  const recentSalesList = document.getElementById("recentSalesList");
  const recentSales = salesData.slice(0, 3);

  recentSalesList.innerHTML = recentSales
    .map(
      (sale) => `
    <div class="sales-item">
      <div class="sales-item-info">
        <div class="sales-item-title">${sale.product}</div>
        <div class="sales-item-meta">${sale.customer} • ${sale.date}</div>
      </div>
      <div class="sales-item-amount">+$${sale.amount}</div>
    </div>
  `
    )
    .join("");
}

function loadAdvertsPerformance() {
  const advertsPerformance = document.getElementById("advertsPerformance");

  advertsPerformance.innerHTML = advertsData
    .map((advert) => {
      const performancePercent = (advert.clicks / advert.views) * 100;
      return `
    <div class="perf-item">
      <div class="perf-item-title">${advert.title}</div>
      <div class="perf-bar">
        <div class="perf-bar-fill" style="width: ${performancePercent}%"></div>
      </div>
      <div class="perf-value">${performancePercent.toFixed(1)}%</div>
    </div>
  `;
    })
    .join("");
}

// Inventory
function loadInventory() {
  renderInventoryTable();
}

function renderInventoryTable() {
  const inventoryBody = document.getElementById("inventoryBody");

  inventoryBody.innerHTML = inventoryData
    .map((item) => {
      (advert) => `
    <div class="advert-card" data-id="${advert.id}">
      <div class="advert-card-image">${advert.icon}</div>
      <div class="advert-card-body">
        <div class="advert-card-title">${advert.title}</div>
        <div class="advert-card-desc">${advert.description}</div>
        <div class="advert-card-meta">
          <span class="meta-item">${advert.views} views</span>
          <span class="meta-item">${advert.clicks} clicks</span>
        </div>
        <div class="advert-card-price">$${advert.price}</div>
        <div class="advert-card-actions">
          <button class="btn-small" onclick="showAdvert(${advert.id})" title="View">
            <i class="fas fa-eye"></i> View
          </button>
          <button onclick="editAdvert(${advert.id})" title="Edit">
            <i class="fas fa-edit"></i>
          </button>
          <button class="delete-btn" onclick="deleteAdvert(${advert.id})" title="Delete">
            <i class="fas fa-trash"></i> Delete
          </button>
          <button class="btn-small" onclick="toggleAdvertStatus(${advert.id})" title="Toggle status">
            ${advert.status === 'active' ? 'Pause' : 'Resume'}
          </button>
        </div>
      </div>
    </div>
  `
          <button class="action-btn edit" title="Edit" onclick="editInventory(${item.id})">
            <i class="fas fa-edit"></i>
          </button>

// Show advert details in modal and increment views
function showAdvert(id) {
  const advert = advertsData.find((a) => a.id === id);
  if (!advert) return;

  // increment views
  advert.views = (advert.views || 0) + 1;
  renderAdvertsCards();
  loadAdverts();

  const modal = document.getElementById('advertModal');
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <div class="modal-image">${advert.icon}</div>
    <h2 class="modal-title">${advert.title}</h2>
    <div class="modal-price">$${advert.price}</div>
    <p class="modal-description">${advert.description}</p>
    <div class="modal-meta">
      <div>Category: ${advert.category}</div>
      <div>Status: <strong>${advert.status}</strong></div>
      <div>${advert.views} views • ${advert.clicks} clicks</div>
    </div>
    <div class="modal-buttons">
      <button class="btn btn-primary" onclick="handleContactSeller(${advert.id})"><i class="fas fa-envelope"></i> Contact Seller</button>
      <button class="btn btn-secondary" onclick="handleAddCart(${advert.id})"><i class="fas fa-cart-plus"></i> Add to Cart</button>
    </div>
  `;

  openModal(modal);
}

// Toggle advert status active <-> paused
function toggleAdvertStatus(id) {
  const advert = advertsData.find((a) => a.id === id);
  if (!advert) return;
  advert.status = advert.status === 'active' ? 'paused' : 'active';
  renderAdvertsCards();
  showNotification(`Advert "${advert.title}" is now ${advert.status}.`);
}
          <button class="action-btn delete" title="Delete" onclick="deleteInventory(${item.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `;
    })
    .join("");
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
  showNotification("Item added successfully!");
}

function editInventory(id) {
  alert("Edit functionality for item ID: " + id);
}

function deleteInventory(id) {
  if (confirm("Are you sure you want to delete this item?")) {
    const index = inventoryData.findIndex((item) => item.id === id);
    if (index > -1) {
      inventoryData.splice(index, 1);
      renderInventoryTable();
      showNotification("Item deleted successfully!");
    }
  }
}

function filterInventory() {
  const searchTerm = document.getElementById("inventorySearch").value.toLowerCase();
  const category = document.getElementById("inventoryCategory").value;

  const filtered = inventoryData.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(searchTerm);
    const matchCategory = !category || item.category === category;
    return matchSearch && matchCategory;
  });

  renderFilteredInventory(filtered);
}

function renderFilteredInventory(items) {
  const inventoryBody = document.getElementById("inventoryBody");

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
    .map((item) => {
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
    <tr>
      <td><strong>${item.name}</strong></td>
      <td>${item.category}</td>
      <td>${item.quantity}</td>
      <td>$${item.unitPrice}</td>
      <td>$${totalValue.toLocaleString()}</td>
      <td><span class="stock-status ${statusClass}">${status}</span></td>
      <td>
        <div class="action-buttons">
          <button class="action-btn edit" title="Edit" onclick="editInventory(${item.id})">
            <i class="fas fa-edit"></i>
          </button>
          <button class="action-btn delete" title="Delete" onclick="deleteInventory(${item.id})">
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
      ([product, stats]) => `
    <div class="product-item">
      <div class="product-name">${product}</div>
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
  inventoryBody.innerHTML = inventoryData
    .map((item) => {
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
    <tr>
      <td><strong>${item.name}</strong></td>
      <td>${item.category}</td>
      <td>${item.quantity}</td>
      <td>$${item.unitPrice}</td>
      <td>$${totalValue.toLocaleString()}</td>
      <td><span class="stock-status ${statusClass}">${status}</span></td>
      <td>
        <div class="action-buttons">
          <button class="action-btn edit" title="Edit" onclick="editInventory(${item.id})">
            <i class="fas fa-edit"></i>
          </button>
          <button class="action-btn delete" title="Delete" onclick="deleteInventory(${item.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `;
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

function createAdvert(e) {
  e.preventDefault();

  const newAdvert = {
    id: advertsData.length + 1,
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
  showNotification("Advert created successfully! It will now appear on the Adverts page.");
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
