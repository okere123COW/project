const form = document.getElementById("announcementForm");
const announcementList = document.getElementById("announcementList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const categoryFilters = document.getElementById("categoryFilters");
const clearAllBtn = document.getElementById("clearAllBtn");

const previewTitle = document.getElementById("previewTitle");
const previewCopy = document.getElementById("previewCopy");
const previewBusiness = document.getElementById("previewBusiness");
const previewCategory = document.getElementById("previewCategory");
const previewDate = document.getElementById("previewDate");
const previewTag = document.getElementById("previewTag");

const inputs = {
  businessName: document.getElementById("businessName"),
  announcementTitle: document.getElementById("announcementTitle"),
  announcementCategory: document.getElementById("announcementCategory"),
  announcementDate: document.getElementById("announcementDate"),
  announcementCopy: document.getElementById("announcementCopy"),
  announcementLink: document.getElementById("announcementLink"),
  isFeatured: document.getElementById("isFeatured")
};

let announcements = JSON.parse(localStorage.getItem("businessAnnouncements") || "[]");
let activeCategory = "All";

const defaultPreview = {
  title: "Your announcement title appears here",
  copy: "Type the update details and watch it refresh instantly.",
  business: "Business Name",
  category: "Update",
  date: "Today",
  tag: "Featured"
};

function renderPreview() {
  previewTitle.textContent = inputs.announcementTitle.value || defaultPreview.title;
  previewCopy.textContent = inputs.announcementCopy.value || defaultPreview.copy;
  previewBusiness.textContent = inputs.businessName.value || defaultPreview.business;
  previewCategory.textContent = inputs.announcementCategory.value || defaultPreview.category;
  previewDate.textContent =
    inputs.announcementDate.value
      ? new Date(inputs.announcementDate.value).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })
      : defaultPreview.date;
  previewTag.textContent = inputs.isFeatured.checked ? "Featured" : "Live";
  previewTag.style.background = inputs.isFeatured.checked
    ? "rgba(34, 197, 94, 0.14)"
    : "rgba(124, 58, 237, 0.16)";
}

function saveAnnouncements() {
  localStorage.setItem("businessAnnouncements", JSON.stringify(announcements));
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });
}

function renderAnnouncements() {
  const query = searchInput.value.trim().toLowerCase();
  const sorted = [...announcements].sort((a, b) => {
    if (sortSelect.value === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
    if (sortSelect.value === "featured") return b.featured - a.featured;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const filtered = sorted.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.business.toLowerCase().includes(query) ||
      item.copy.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  announcementList.innerHTML = "";

  if (!filtered.length) {
    announcementList.innerHTML = '<p class="empty-state">No announcements match your search or category selection.</p>';
    return;
  }

  filtered.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "announcement-card";
    card.innerHTML = `
      <div class="card-headline">
        <div>
          <h3>${item.title}</h3>
          <div class="card-category">${item.category}</div>
        </div>
        <span class="date-pill">${formatDate(item.createdAt)}</span>
      </div>
      <p>${item.copy}</p>
      <div class="card-footer">
        <div>
          <span>${item.business}</span>
          ${item.featured ? '<span class="pill">Featured</span>' : ""}
        </div>
        <div class="card-actions">
          ${item.link ? `<a class="card-link" href="${item.link}" target="_blank">Visit link</a>` : ""}
          <button type="button" data-action="toggle" data-index="${index}">
            ${item.active ? "Archive" : "Archive"}
          </button>
          <button type="button" data-action="delete" data-index="${index}">Delete</button>
        </div>
      </div>
    `;
    announcementList.appendChild(card);
  });
}

function addAnnouncement(event) {
  event.preventDefault();

  const newAnnouncement = {
    business: inputs.businessName.value.trim(),
    title: inputs.announcementTitle.value.trim(),
    category: inputs.announcementCategory.value,
    date: inputs.announcementDate.value || new Date().toISOString(),
    copy: inputs.announcementCopy.value.trim(),
    link: inputs.announcementLink.value.trim(),
    featured: inputs.isFeatured.checked,
    createdAt: new Date().toISOString(),
    active: true
  };

  if (!newAnnouncement.business || !newAnnouncement.title || !newAnnouncement.copy) {
    return;
  }

  announcements.unshift(newAnnouncement);
  saveAnnouncements();
  renderAnnouncements();
  form.reset();
  renderPreview();
}

function handleListClick(event) {
  const action = event.target.dataset.action;
  const index = Number(event.target.dataset.index);

  if (action === "delete") {
    announcements.splice(index, 1);
    saveAnnouncements();
    renderAnnouncements();
  }

  if (action === "toggle") {
    announcements[index].active = !announcements[index].active;
    saveAnnouncements();
    renderAnnouncements();
  }
}

function updateCategoryFilter(category) {
  activeCategory = category;
  document.querySelectorAll(".chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === category);
  });
  renderAnnouncements();
}

form.addEventListener("input", renderPreview);
form.addEventListener("submit", addAnnouncement);
announcementList.addEventListener("click", handleListClick);
searchInput.addEventListener("input", renderAnnouncements);
sortSelect.addEventListener("change", renderAnnouncements);
clearAllBtn.addEventListener("click", () => {
  announcements = [];
  saveAnnouncements();
  renderAnnouncements();
});

categoryFilters.addEventListener("click", (event) => {
  const chip = event.target.closest("button");
  if (!chip) return;
  updateCategoryFilter(chip.dataset.category);
});

renderPreview();
renderAnnouncements();