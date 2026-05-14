const products = [
  // Electronics
  { id: 1,  name: "Wireless Headphones",  category: "Electronics", price: 59.99,  rating: 4.5, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80" },
  { id: 2,  name: "Smart Watch",           category: "Electronics", price: 129.99, rating: 4.6, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
  { id: 3,  name: "Bluetooth Speaker",     category: "Electronics", price: 49.99,  rating: 4.5, img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80" },
  { id: 4,  name: "Laptop Stand",          category: "Electronics", price: 39.99,  rating: 4.3, img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80" },
  // Footwear
  { id: 5,  name: "Running Sneakers",      category: "Footwear",    price: 89.99,  rating: 4.7, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
  { id: 6,  name: "Casual Loafers",        category: "Footwear",    price: 64.99,  rating: 4.4, img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&q=80" },
  { id: 7,  name: "Hiking Boots",          category: "Footwear",    price: 109.99, rating: 4.6, img: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=400&q=80" },
  { id: 8,  name: "Slip-On Sandals",       category: "Footwear",    price: 34.99,  rating: 4.2, img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&q=80" },
  // Bags
  { id: 9,  name: "Leather Backpack",      category: "Bags",        price: 74.99,  rating: 4.3, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
  { id: 10, name: "Tote Bag",              category: "Bags",        price: 44.99,  rating: 4.5, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80" },
  { id: 11, name: "Travel Duffel Bag",     category: "Bags",        price: 89.99,  rating: 4.4, img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&q=80" },
  { id: 12, name: "Crossbody Bag",         category: "Bags",        price: 54.99,  rating: 4.6, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80" },
  // Accessories
  { id: 13, name: "Sunglasses",            category: "Accessories", price: 34.99,  rating: 4.2, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80" },
  { id: 14, name: "Leather Wallet",        category: "Accessories", price: 29.99,  rating: 4.5, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80" },
  { id: 15, name: "Baseball Cap",          category: "Accessories", price: 19.99,  rating: 4.3, img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80" },
  { id: 16, name: "Wrist Band",            category: "Accessories", price: 14.99,  rating: 4.1, img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&q=80" },
  // Clothing
  { id: 17, name: "Casual T-Shirt",        category: "Clothing",    price: 24.99,  rating: 4.4, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" },
  { id: 18, name: "Denim Jacket",          category: "Clothing",    price: 79.99,  rating: 4.6, img: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&q=80" },
  { id: 19, name: "Slim Fit Chinos",       category: "Clothing",    price: 49.99,  rating: 4.3, img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80" },
  { id: 20, name: "Hoodie Sweatshirt",     category: "Clothing",    price: 54.99,  rating: 4.7, img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80" },
  // Sports
  { id: 21, name: "Yoga Mat",              category: "Sports",      price: 29.99,  rating: 4.8, img: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=400&q=80" },
  { id: 22, name: "Resistance Bands Set",  category: "Sports",      price: 19.99,  rating: 4.6, img: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&q=80" },
  { id: 23, name: "Water Bottle",          category: "Sports",      price: 24.99,  rating: 4.7, img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
  { id: 24, name: "Jump Rope",             category: "Sports",      price: 14.99,  rating: 4.5, img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&q=80" },
];

let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let activeCategory = "All";

// --- Render Products ---
function renderProducts(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = list.length ? list.map(p => `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="card product-card h-100">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/400x200?text=${encodeURIComponent(p.name)}'"/>
        <div class="card-body d-flex flex-column gap-1">
          <span class="badge-category">${p.category}</span>
          <h6 class="card-title mb-0 mt-1">${p.name}</h6>
          <div class="stars">${stars(p.rating)} <small class="text-muted">(${p.rating})</small></div>
          <div class="d-flex justify-content-between align-items-center mt-auto pt-2">
            <span class="price fw-bold">$${p.price.toFixed(2)}</span>
            <button class="btn btn-sm btn-dark add-btn" data-id="${p.id}">
              <i class="bi bi-cart-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>`).join("") : `<div class="col-12 text-center text-muted py-5"><i class="bi bi-search fs-1"></i><p class="mt-2">No products found.</p></div>`;
}

function stars(r) {
  return Array.from({length: 5}, (_, i) =>
    `<i class="bi bi-star${i < Math.floor(r) ? '-fill' : i < r ? '-half' : ''}"></i>`
  ).join("");
}

// --- Category Filter ---
function renderCategories() {
  const cats = ["All", ...new Set(products.map(p => p.category))];
  document.getElementById("categoryFilter").innerHTML = cats.map(c => `
    <button class="btn btn-outline-secondary cat-btn ${c === activeCategory ? 'active' : ''}" onclick="filterCategory('${c}')">${c}</button>
  `).join("");
}

function filterCategory(cat) {
  activeCategory = cat;
  renderCategories();
  applyFilters();
}

function applyFilters() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  let list = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);
  if (q) list = list.filter(p => p.name.toLowerCase().includes(q));
  renderProducts(list);
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderProducts(products);
  document.getElementById("searchInput").addEventListener("input", applyFilters);
  document.getElementById("productGrid").addEventListener("click", e => {
    const btn = e.target.closest(".add-btn");
    if (btn) addToCart(Number(btn.dataset.id));
  });
});

// --- Cart ---
function addToCart(id) {
  const item = cart.find(i => i.id === id);
  item ? item.qty++ : cart.push({ ...products.find(p => p.id === id), qty: 1 });
  saveCart();
  showToast(`Added to cart!`);
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById("cartCount").textContent = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById("cartTotal").textContent = `$${total.toFixed(2)}`;
  document.getElementById("cartItems").innerHTML = cart.length ? cart.map(i => `
    <div class="cart-item">
      <img src="${i.img}" alt="${i.name}"/>
      <div class="cart-item-info">
        <div class="name">${i.name}</div>
        <div class="price">$${(i.price * i.qty).toFixed(2)}</div>
      </div>
      <div class="d-flex align-items-center gap-1">
        <button class="btn btn-outline-secondary qty-btn" onclick="changeQty(${i.id}, -1)">−</button>
        <span>${i.qty}</span>
        <button class="btn btn-outline-secondary qty-btn" onclick="changeQty(${i.id}, 1)">+</button>
      </div>
    </div>`).join("") : `<p class="text-muted text-center mt-4">Your cart is empty.</p>`;
}

function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("open");
  document.getElementById("cartOverlay").classList.toggle("open");
}

function checkout() {
  if (!cart.length) return showToast("Your cart is empty!", "bg-warning");
  showToast("Order placed! Thank you 🎉", "bg-success");
  cart = [];
  saveCart();
  toggleCart();
}

function showToast(msg, cls = "bg-success") {
  const el = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  el.className = `toast align-items-center text-white border-0 ${cls}`;
  bootstrap.Toast.getOrCreateInstance(el, { delay: 2500 }).show();
}

renderCart();