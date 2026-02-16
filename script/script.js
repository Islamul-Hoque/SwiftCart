// Reusable get id Function
function getId(id) {
    return document.getElementById(id);
}

// Reusable Navbar
fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });

// Reusable Footer
fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

// Navbar active nav link 
document.querySelectorAll(".nav-link").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});


// Reusable Product Card 
function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.className =
        "bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition flex flex-col h-full ";

    productCard.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="h-48 p-6 w-full bg-slate-200 object-contain mb-4">
<div class="p-6">
    <div class="flex items-center justify-between mb-2">
        <p class="text-xs font-medium bg-[#EEF2FF] text-[#4F46E5] px-2 py-1 rounded-[0.7rem]">${product.category}</p>
        <div class="flex items-center text-yellow-500">
            <span>⭐ ${product.rating.rate}</span>
            <span class="text-gray-500 ml-2">(${product.rating.count})</span>
        </div>
    </div>

    <h3 class="font-semibold text-[0.95rem] text-gray-800 mb-2">${product.title.substring(0, 40)}...</h3>
    <p class="text-[#252525] font-bold mb-4">$${product.price}</p>
    <div class="flex-grow"></div>

    <div class="flex gap-3 mt-auto">
        <button onclick="showDetails(${product.id})" class="w-1/2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center justify-center gap-2"> <i class="fas fa-eye"></i> Details </button>
        <button class="w-1/2 px-4 py-2 bg-[#4F46E5] text-white rounded-md hover:bg-[#4338CA] flex items-center justify-center gap-2">  <i class="fas fa-shopping-cart"></i> Add </button>
    </div>
 </div>
    `;
    return productCard;
}


// Fetch products for Trending Section
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        const topProducts = data
            .sort((a, b) => b.rating.rate - a.rating.rate)
            .slice(0, 3);

        const container = document.getElementById("trending-products");

        topProducts.forEach((product) => {
            const card = createProductCard(product);
            container.appendChild(card);
        });
    })
    .catch((err) => console.error("Error fetching products:", err));


// Load categories dynamically 
fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(categories => {
        const categoryContainer = document.getElementById("categories");

        // Add "All" button first
        const allBtn = document.createElement("button");
        allBtn.className = "category-btn px-4 py-2 bg-[#EEF2FF] text-[#4F46E5] rounded-[0.7rem] hover:bg-[#E0E7FF]";
        allBtn.textContent = "All";
        allBtn.addEventListener("click", () => {
            setActiveCategory(allBtn);
            loadAllProducts();
        });
        categoryContainer.appendChild(allBtn);

        // Add other categories
        categories.forEach(cat => {
            const btn = document.createElement("button");
            btn.className = "category-btn px-4 py-2 bg-[#EEF2FF] text-[#4F46E5] rounded-[0.7rem] hover:bg-[#E0E7FF]";
            btn.textContent = cat;
            btn.addEventListener("click", () => {
                setActiveCategory(btn);
                loadProductsByCategory(cat);
            });
            categoryContainer.appendChild(btn);
        });

        // Initially set "All" active
        setActiveCategory(allBtn);
        loadAllProducts();
    });

// Function: set active category
function setActiveCategory(activeBtn) {
    // Remove active class from all buttons
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    // Add active class to the clicked button
    activeBtn.classList.add("active");
}




function loadAllProducts() {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(products => renderProducts(products));
}

function loadProductsByCategory(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(products => renderProducts(products));
}

// Function: Render products in grid
function renderProducts(products) {
    const container = document.getElementById("product-grid");
    container.innerHTML = "";

    products.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

// Details Modal 
function showDetails(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(product => {
            document.getElementById("modal-title").textContent = product.title;
            document.getElementById("modal-image").src = product.image;
            document.getElementById("modal-description").textContent = product.description;
            document.getElementById("modal-price").textContent = `$${product.price}`;
            document.getElementById("modal-rating").textContent = `⭐ ${product.rating.rate} (${product.rating.count})`;

            document.getElementById("product-modal").checked = true; // open modal
        });
}