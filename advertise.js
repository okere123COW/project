// Sample data for adverts and updates
const advertsData = [
  {
    id: 1,
    title: "Web Development Services",
    description: "Professional web design and development for your business",
    category: "services",
    price: 1500,
    icon: "",
    user: { name: "", initials: "", rating: 0 },
    date: "",
    featured: true,
  },
  {
    id: 2,
    title: "Digital Marketing Course",
    description: "Learn digital marketing strategies and techniques",
    category: "training",
    price: 299,
    icon: "",
    user: { name: "", initials: "", rating: 0 },
    date: "1 week ago",
    featured: false,
  },
  {
    id: 3,
    title: "Business Consulting",
    description: "Expert business strategy and management consulting",
    category: "consulting",
    price: 1800,
    icon: "",
    user: { name: "", initials: "", rating: 4.7 },
    date: "3 days ago",
    featured: true,
  },
  {
    id: 4,
    title: "Logo Design Package",
    description: "Custom logo design with unlimited revisions",
    category: "services",
    price: 950,
    icon: "",
    user: { name: "r", initials:"D", rating: 4.6 } ,
    date: "5 days ago",
    featured: false,
  },
  {
    id: 5,
    title: "Social Media Management",
    description: "Monthly social media strategy and posting",
    category: "services",
    price: 800,
    icon: "",
    user: { name: "", initials: "", rating: 0 },
    date: "1 day ago",
    featured: false,
  },
  {
    id: 6,
    title: "Content Writing Services",
    description: "High-quality blog posts and web content",
    category: "services",
    price: 400,
    icon: "",
    user: { name: "", initials: "", rating: 0 },
    date: "4 days ago",
    featured: false,
  },
  {
    id: 7,
    title: "SEO Optimization",
    description: "Improve your website ranking on Google",
    category: "services",
    price: 1300,
    icon: "",
    user: { name: "", initials: "", rating: 0 },
    date: "2 days ago",
    featured: true,
  },
  {
    id: 8,
    title: "Mobile App Development",
    description: "Custom iOS and Android app development",
    category: "services",
    price: 3500,
    icon: "",
    user: { name: "", initials: "", rating: 0 },
    date: "1 week ago",
    featured: false,
  },
  {
    id: 9,
    title: "Email Marketing Template",
    description: "Responsive email templates and designs",
    category: "products",
    price: 700,
    icon: "💌",
    user: { name: "", initials: "", rating: 4.6 },
  },
  {
    id: 10,
    title: "Premium T-Shirts Collection",
    description: "High-quality retail clothing - various sizes and colors",
    category: "products",
    price: 1200,
    icon: "👕",
    user: { name: "RetailCo", initials: "RC", rating: 4.8 },
    date: "3 days ago",
    featured: true,
  },
  {
    id: 11,
    title: "Electronics Store - Headphones",
    description: "Premium wireless headphones - retail brand new",
    category: "products",
    price: 2500,
    icon: "🎧",
    user: { name: "TechRetail", initials: "TR", rating: 4.7 },
    date: "2 days ago",
    featured: true,
  },
  {
    id: 12,
    title: "Home Decor & Furniture",
    description: "Modern retail furniture and home decoration items",
    category: "products",
    price: 3200,
    icon: "🛋️",
    user: { name: "HomeStyle", initials: "HS", rating: 4.5 },
    date: "1 week ago",
    featured: false,
  },
  {
    id: 13,
    title: "Retail Shoe Store",
    description: "Designer shoes and casual footwear collection",
    category: "products",
    price: 1800,
    icon: "👞",
    user: { name: "ShoeWorld", initials: "SW", rating: 4.6 },
    date: "4 days ago",
    featured: false,
  },
  {
    id: 14,
    title: "Beauty & Cosmetics",
    description: "Retail cosmetics and beauty products - all brands",
    category: "products",
    price: 500,
    icon: "💄",
    user: { name: "BeautyHub", initials: "BH", rating: 4.9 },
    date: "2 days ago",
    featured: false,
  },
  {
    id: 15,
    title: "Grocery & Food Delivery",
    description: "Fresh retail groceries and food products delivery",
    category: "services",
    price: 50,
    icon: "🛒",
    user: { name: "FreshMart", initials: "FM", rating: 4.7 },
    date: "1 day ago",
    featured: false,
  },
  {
    id: 16,
    title: "E-Commerce Setup Service",
    description: "Set up your retail store online - full e-commerce solution",
    category: "services",
    price: 2000,
    icon: "🏪",
    user: { name: "WebShop", initials: "WS", rating: 4.8 },
    date: "5 days ago",
    featured: true,
    date: "3 days ago",
    featured: false,
  },
  {
    id: 10,
    title: "WordPress Website Setup",
    description: "Complete WordPress setup and customization",
    category: "services",
    price: 1200,
    icon: "",
    user: { name: "", initials: "", rating: 4.8 },
    date: "6 days ago",
    featured: false,
  },
  {
    id: 11,
    title: "Graphic Design Bundle",
    description: "Logo, banner, and social media design",
    category: "services",
    price: 650,
    icon: "",
    user: { name: "", initials: "", rating: 4.7 },
    date: "2 days ago",
    featured: false,
  },
  {
    id: 12,
    title: "Video Editing Service",
    description: "Professional video editing and animation",
    category: "services",
    price: 1800,
    icon: "",
    user: { name: "", initials: "", rating: 4.9 },
    date: "4 days ago",
    featured: true,
  },
];

const updatesData = [
  {
    id: 1,
    title: "New Feature: Advanced Search Filters",
    content:
      "We've added more powerful search and filter options to help you find exactly what you need. Now you can filter by price range, rating, and more!",
    author: "Beez Bizz Team",
    date: "Today",
  },
  {
    id: 2,
    title: "Seller Spotlight: John Dev's Success Story",
    content:
      "This month we're featuring John Dev, who has helped over 150 businesses with their web development needs. Read how he built his thriving business on Beez Bizz.",
    author: "Community Manager",
    date: "2 days ago",
  },
  {
    id: 3,
    title: "Security Update & New Payment Options",
    content:
      "We've enhanced our security measures and added new payment methods including PayPal and Stripe. Your transactions are now safer than ever!",
    author: "Tech Team",
    date: "5 days ago",
  },
  {
    id: 4,
    title: "May 2026 Top Sellers Announcement",
    content:
      "Congratulations to our top performers this month! Emma Designer, Tom SEO, and Video Pro have been recognized for their outstanding service and customer satisfaction.",
    author: "Admin",
    date: "1 week ago",
  },
];

// State management
let filteredAdverts = [...advertsData];
let currentPage = 1;
let itemsPerPage = 12;
let isListView = false;

// DOM Elements
const advertsContainer = document.getElementById("advertsContainer");
const updatesContainer = document.getElementById("updatesContainer");
const featuredContainer = document.getElementById("featuredContainer");
const modal = document.getElementById("advertModal");
const closeBtn = document.querySelector(".close-btn");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const ratingFilter = document.getElementById("ratingFilter");
const applyFiltersBtn = document.getElementById("applyFilters");
const clearFiltersBtn = document.getElementById("clearFilters");
const sortBySelect = document.getElementById("sortBy");
const gridViewBtn = document.getElementById("gridView");
const listViewBtn = document.getElementById("listView");
const loadMoreBtn = document.getElementById("loadMore");
const tabBtns = document.querySelectorAll(".tab-btn");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadAdverts();
  loadUpdates();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  // Filter buttons
  applyFiltersBtn.addEventListener("click", applyFilters);
  clearFiltersBtn.addEventListener("click", clearFilters);

  // View toggle
  gridViewBtn.addEventListener("click", () => setView("grid"));
  listViewBtn.addEventListener("click", () => setView("list"));

  // Sort
  sortBySelect.addEventListener("change", sortAdverts);

  // Price range
  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = e.target.value;
  });

  // Modal
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Tabs
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", switchTab);
  });

  // Load more
  loadMoreBtn.addEventListener("click", () => {
    currentPage++;
    renderAdverts(true);
  });

  // Real-time search
  searchInput.addEventListener("input", applyFilters);
}

// Load and render adverts
function loadAdverts() {
  filteredAdverts = [...advertsData];
  renderAdverts();
}

function renderAdverts(append = false) {
  if (!append) {
    advertsContainer.innerHTML = "";
    currentPage = 1;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageAdverts = filteredAdverts.slice(startIndex, endIndex);

  if (pageAdverts.length === 0 && currentPage === 1) {
    advertsContainer.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <i class="fas fa-search"></i>
        <h3>No adverts found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>
    `;
    return;
  }

  const html = pageAdverts
    .map((advert) => createAdvertCard(advert))
    .join("");

  if (append) {
    advertsContainer.innerHTML += html;
  } else {
    advertsContainer.innerHTML = html;
  }

  // Update load more button visibility
  const hasMore = endIndex < filteredAdverts.length;
  loadMoreBtn.style.display = hasMore ? "block" : "none";

  // Add click listeners to cards
  document.querySelectorAll(".advert-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = parseInt(card.dataset.id);
      showAdvertModal(id);
    });
  });

  // Add click listeners to view buttons
  document.querySelectorAll(".advert-action").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      handleAdvertAction(id);
    });
  });
}

function createAdvertCard(advert) {
  const classList = isListView ? "advert-card list-view" : "advert-card";
  return `
    <div class="${classList}" data-id="${advert.id}">
      <div class="advert-image">
        ${advert.featured ? '<div class="featured-badge">Featured</div>' : ""}
        ${advert.icon}
      </div>
      <div class="advert-content">
        <div class="advert-category">${capitalizeCategory(advert.category)}</div>
        <h3 class="advert-title">${advert.title}</h3>
        <p class="advert-description">${advert.description}</p>
        
        <div class="advert-user">
          <div class="user-avatar">${advert.user.initials}</div>
          <div class="user-info">
            <div class="user-name">${advert.user.name}</div>
            <div class="user-rating">
              <i class="fas fa-star"></i> ${advert.user.rating}
            </div>
          </div>
        </div>
        
        <div class="advert-footer">
          <div class="advert-price">$${advert.price}</div>
          <button class="advert-action" data-id="${advert.id}">
         <href="payment.html">
            <i class="fas fa-shopping-cart"></i> View
          </button>
        </div>
      </div>
    </div>
  `;
}

// Load and render updates
function loadUpdates() {
  updatesContainer.innerHTML = updatesData
    .map(
      (update) => `
    <div class="update-item">
      <div class="update-header">
        <h3 class="update-title">${update.title}</h3>
        <span class="update-date">${update.date}</span>
      </div>
      <p class="update-content">${update.content}</p>
      <div class="update-author">
        <i class="fas fa-user-circle"></i> ${update.author}
      </div>
    </div>
  `
    )
    .join("");
}

// Load and render featured adverts
function loadFeaturedAdverts() {
  const featured = advertsData.filter((adv) => adv.featured);
  if (featured.length === 0) {
    featuredContainer.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <i class="fas fa-star"></i>
        <h3>No featured adverts</h3>
      </div>
    `;
    return;
  }

  featuredContainer.innerHTML = featured
    .map((advert) => createAdvertCard(advert))
    .join("");

  document.querySelectorAll("#featured-tab .advert-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = parseInt(card.dataset.id);
      showAdvertModal(id);
    });
  });

  document.querySelectorAll("#featured-tab .advert-action").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      handleAdvertAction(id);
    });
  });
}

// Filter functions
function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const maxPrice = parseInt(priceRange.value);
  const ratingOnly = ratingFilter.checked;

  filteredAdverts = advertsData.filter((advert) => {
    const matchSearch =
      advert.title.toLowerCase().includes(searchTerm) ||
      advert.description.toLowerCase().includes(searchTerm) ||
      advert.user.name.toLowerCase().includes(searchTerm);

    const matchCategory = !category || advert.category === category;
    const matchPrice = advert.price <= maxPrice;
    const matchRating = !ratingOnly || advert.user.rating >= 4;

    return matchSearch && matchCategory && matchPrice && matchRating;
  });

  currentPage = 1;
  renderAdverts();
}

function clearFilters() {
  searchInput.value = "";
  categoryFilter.value = "";
  priceRange.value = "5000";
  priceValue.textContent = "5000";
  ratingFilter.checked = false;
  loadAdverts();
}

function sortAdverts() {
  const sortBy = sortBySelect.value;

  switch (sortBy) {
    case "newest":
      // Already in newest order
      break;
    case "oldest":
      filteredAdverts.reverse();
      break;
    case "pricelow":
      filteredAdverts.sort((a, b) => a.price - b.price);
      break;
    case "pricehigh":
      filteredAdverts.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filteredAdverts.sort((a, b) => b.user.rating - a.user.rating);
      break;
  }

  currentPage = 1;
  renderAdverts();
}

// View toggle
function setView(view) {
  isListView = view === "list";
  gridViewBtn.classList.toggle("active", view === "grid");
  listViewBtn.classList.toggle("active", view === "list");
  advertsContainer.classList.toggle("list-view", isListView);
  renderAdverts();
}

// Tab switching
function switchTab(e) {
  const tabName = e.target.closest(".tab-btn").dataset.tab;

  // Update active tab button
  tabBtns.forEach((btn) => btn.classList.remove("active"));
  e.target.closest(".tab-btn").classList.add("active");

  // Update active tab content
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });
  document.getElementById(`${tabName}-tab`).classList.add("active");

  // Load featured adverts if switching to featured tab
  if (tabName === "featured") {
    loadFeaturedAdverts();
  }
}

// Modal functions
function showAdvertModal(id) {
  const advert = advertsData.find((a) => a.id === id);
  if (!advert) return;

  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
    <div class="modal-image">${advert.icon}</div>
    <h2 class="modal-title">${advert.title}</h2>
    <div class="modal-price">$${advert.price}</div>
    <p class="modal-description">${advert.description}</p>
    
    <div class="modal-user">
      <div class="user-avatar">${advert.user.initials}</div>
      <div class="user-info">
        <div class="user-name">${advert.user.name}</div>
        <div class="user-rating">
          <i class="fas fa-star"></i> ${advert.user.rating} (4.8★)
        </div>
      </div>
    </div>

    <p style="font-size: 0.9rem; color: #666; margin-bottom: 1.5rem;">
      <i class="fas fa-calendar"></i> Posted ${advert.date}
    </p>

    <div class="modal-buttons">
      <button class="btn btn-primary" onclick="handleContactSeller(${advert.id})">
        <i class="fas fa-envelope"></i> Contact Seller
      </button>
      <button class="btn btn-secondary" onclick="handleAddCart(${advert.id})">
        <i class="fas fa-cart-plus"></i> Add to Cart
      </button>
    </div>
  `;

  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function handleAdvertAction(id) {
  const advert = advertsData.find((a) => a.id === id);
  alert(`✓ "${advert.title}" added to cart!\nPrice: $${advert.price}`);
}

function handleContactSeller(id) {
  const advert = advertsData.find((a) => a.id === id);
  alert(`Opening message to ${advert.user.name}...\nYou can now send them a message about "${advert.title}"`);
  closeModal();
}

function handleAddCart(id) {
  const advert = advertsData.find((a) => a.id === id);
  alert(`✓ "${advert.title}" added to cart!\nPrice: $${advert.price}`);
  closeModal();
}

// Utility functions
function capitalizeCategory(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
