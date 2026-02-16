// Reusable get id Function
function getId(id) {
    return document.getElementById(id);
}

const navLinks = document.querySelectorAll(
    ".navbar-center ul li a, .navbar-start ul li a",
);

navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        navLinks.forEach((link) => link.classList.remove("active"));
        this.classList.add("active");
    });
});

// Fetch products from FakeStore API
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        // Sort by rating (descending) and take top 3
        const topProducts = data
            .sort((a, b) => b.rating.rate - a.rating.rate)
            .slice(0, 3);

        const container = document.getElementById("trending-products");

        topProducts.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.className =
                "bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition flex flex-col h-full max-w-sm";

            productCard.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="h-48 w-full object-contain mb-4">

    <div class="flex items-center justify-between mb-2">
      <p class="text-xs font-medium bg-[#EEF2FF] text-[#4F46E5] px-2 py-1 rounded-[0.7rem]">  ${product.category}  </p>
      <div class="flex items-center text-yellow-500">
        <span>⭐ ${product.rating.rate}</span>
        <span class="text-gray-500 ml-2">(${product.rating.count})</span>
      </div>
    </div>

    <h3 class="font-semibold text-lg text-gray-800 mb-2">${product.title}</h3>

    <p class="text-[#252525] font-bold mb-4">$${product.price}</p>

    <div class="flex-grow"></div>

    <div class="flex gap-3 mt-auto">
      <button class="w-1/2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center justify-center gap-2">
        <i class="fas fa-eye"></i> Details
      </button>
      <button class="w-1/2 px-4 py-2 bg-[#4F46E5] text-white rounded-md hover:bg-[#4338CA] flex items-center justify-center gap-2">
        <i class="fas fa-shopping-cart"></i> Add
      </button>
    </div>
  `;
            container.appendChild(productCard);
        });

    })
    .catch((err) => console.error("Error fetching products:", err));
