// Sample book data
const books = [
    {
        id: 1,
        title: "ဂန္ဓဝင် မမ",
        author: "အောင်ချိမ့်",
        price: 7000,
        category: "Poetry",
        cover: "",
        imgUrl:"images/1.webp",
        description: "",
        isbn: "978-9910-00001-7"
    },
    {
        id: 2,
        title: "သူငယ်ချင်းလို့ပဲဆက်၍ခေါ်မည်...ခိုင်",
        author: "တက္ကသိုလ်ဘုန်းနိုင်",
        price: 25000,
        category: "Fiction",
        cover: "",
        imgUrl:"images/2.png",
        description: "",
        isbn: "978-9910-00002-4"
    },
    {
        id: 3,
        title: "လင်္ကာဒီပချစ်သူ",
        author: "ချစ်ဦးညို",
        price: 20000,
        category: "Fiction",
        cover: "",
        imgUrl:"images/3.png",
        description: "",
        isbn: "978-9910-00003-1"
    },
    {
        id: 4,
        title: "မင်းက အောင်ချိမ့်လား",
        author: "အောင်ချိမ့်",
        price: 25000,
        category: "Poetry",
        cover: "",
        imgUrl:"images/4.webp",
        description: "",
        isbn: "978-9910-00004-8"
    },
    {
        id: 5,
        title: "မြိုင်",
        author: "ဗန်းမော်တင်အောင်",
        price: 30000,
        category: "Fiction",
        cover: "",
        imgUrl:"images/5.png",
        description: "",
        isbn: "978-9910-00005-5"
    },
    {
        id: 6,
        title: "အရှေ့ကနေဝန်း ထွက်သည့်ပမာ",
        author: "သိန်းဖေမြင့်",
        price: 30000,
        category: "Fiction",
        cover: "",
        imgUrl:"images/6.png",
        description: "",
        isbn: "978-9910-00006-2"
    },
    {
        id: 7,
        title: "တာတေ စနေသား",
        author: "ဦးနု",
        price: 30000,
        category: "Biography",
        cover: "",
        imgUrl:"images/7.png",
        description: "",
        isbn: "978-9910-00007-9"
    },
    
    {
        id: 8,
        title: "တစ်သက်တာမှတ်တမ်းနှင့် အတွေးအခေါ်များ",
        author: "‌ရွှေဥဒေါင်း",
        price: 50000,
        category: "Biography",
        cover: "",
        imgUrl:"images/8.webp",
        description: "",
        isbn: "978-9910-00008-6"
    },
    {
        id: 9,
        title: "သူလိုလူ",
        author: "ဂျာနယ်ကျော် မမလေး",
        price: 30000,
        category: "Biography",
        cover: "",
        imgUrl:"images/9.png",
        description: "",
        isbn: "978-9910-00009-3"
    },
    {
        id: 10,
        title: "ရာဇဝင်ကို ဆင်ခြင်ခြင်း",
        author: "ဒေါက်တာ ဦးသန်းထွန်း(ရွှေဘို)",
        price: 30000,
        category: "Myanmar History",
        cover: "",
        imgUrl:"images/10.png",
        description: "",
        isbn: "978-9910-00010-9"
    },
    {
        id: 11,
        title: "ဓားတောင်ကိုကျော်၍ မီးပင်လယ်ကိုဖြတ်မည်",
        author: "မြသန်းတင့်",
        price: 20000,
        category: "Fiction",
        cover: "",
        imgUrl:"images/11.png",
        description: "",
        isbn: "978-9910-00011-6"
    },
    {
        id: 12,
        title: "မေ",
        author: "ဒဂုန်တာရာ",
        price: 15000,
        category: "Fiction",
        cover: "",
        imgUrl:"images/12.png",
        description: "",
        isbn: "978-9910-00012-3"
    },
    {
        id: 13,
        title: "ပျောက်သောလမ်းမှာ စမ်းတဝါး",
        author: "မိုးမိုး(အင်းလျား)",
        price: 8000,
        category: "Fiction",
        cover: "",
        imgUrl:"images/13.png",
        description: "",
        isbn: "978-9910-00013-0"
    },
    {
        id: 14,
        title: "မျိုးဆက်သစ် တိုးတက်ရစ်ဖို့",
        author: "အောင်သင်း",
        price: 15000,
        category: "Non-Fiction",
        cover: "",
        imgUrl:"images/14.png",
        description: "",
        isbn: "978-9910-00014-7"
    },
    {
        id: 15,
        title: "ငရဲဆိုချိုနဲ့လားဗျို့",
        author: "ဦးနု",
        price: 20000,
        category: "Fiction",
        cover: "",
        imgUrl:"images/15.png",
        description: "",
        isbn: "978-9910-00015-4"
    },
    {
        id: 16,
        title: " မအိမ်ကံ",
        author: "ခင်ခင်ထူး",
        price: 30000,
        category: "Fiction",
        cover: "",
        imgUrl:"images/16.png",
        description: "",
        isbn: "978-9910-00016-1"
    },
    {
        id: 17,
        title: "အိမ်ကလေး ၁၆ လုံး",
        author: "နေဝင်းမြင့်",
        price: 7000,
        category: "Fiction",
        cover: "",
        imgUrl:"images/17.png",
        description: "",
        isbn: "978-9910-00017-8"
    },
    {
        id: 18,
        title: "အောင်သင်းစဉ်းစားမိသမျှ",
        author: "အောင်သင်း",
        price: 20000,
        category: "Non-Fiction",
        cover: "",
        imgUrl:"images/18.png",
        description: "",
        isbn: "978-9910-00018-5"
    },
    {
        id: 19,
        title: "သပိတ်မှောက် ကျောင်းသား",
        author: "သိန်းဖေမြင့်",
        price: 10000,
        category: "Myanmar History",
        cover: "",
        imgUrl:"images/19.png",
        description: "",
        isbn: "978-9910-00019-2"
    },
    {
        id: 20,
        title: "ရာဇကုမာရ",
        author: "ချစ်ဦးညို",
        price: 12000,
        category: "Myanmar History",
        cover: "",
        imgUrl:"images/20.png",
        description: "",
        isbn: "978-9910-00020-8"
    },
    {
        id: 21,
        title: "ကဗျာပေါင်းချုပ်",
        author: "မောင်ချောနွယ်",
        price: 25000,
        category: "Poetry",
        cover: "",
        imgUrl:"images/21.png",
        description: "",
        isbn: "978-9910-00021-5"
    },
    {
        id: 22,
        title: "ကျေးဇူးတော်လမ်း",
        author: "စိုင်းဝင်းမြင့်",
        price: 12000,
        category: "Poetry",
        cover: "",
        imgUrl:"images/22.png",
        description: "",
        isbn: "978-9910-00022-2"
    },
];

// User authentication state
let isLoggedIn = false;
let currentUser = null;

// Cart functionality
let cart = [];
// Currently displayed book list (used to re-render with sorting)
let currentDisplayedBooks = books.slice();

// User storage helpers (localStorage)
function getUsers() {
    try {
        return JSON.parse(localStorage.getItem('users') || '[]');
    } catch (e) {
        return [];
    }
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function saveUser(user) {
    const users = getUsers();
    const existingIndex = users.findIndex(u => u.email === user.email);
    if (existingIndex !== -1) {
        users[existingIndex] = { ...users[existingIndex], ...user };
    } else {
        users.push(user);
    }
    saveUsers(users);
}

function getUserByEmail(email) {
    const users = getUsers();
    return users.find(u => u.email === email) || null;
}

function updateUserPassword(email, newPassword) {
    const users = getUsers();
    const idx = users.findIndex(u => u.email === email);
    if (idx !== -1) {
        users[idx].password = newPassword;
        saveUsers(users);
        return true;
    }
    return false;
}

// Generate book covers as SVGs
function generateBookCover(book) {
    const colors = {
        "Fiction": "#4361ee",
        "Non-Fiction": "#4cc9f0",
        "Science Fiction": "#7209b7",
        "Mystery": "#f72585",
        "Biography": "#4d908e"
    };
    
    const bgColor = colors[book.category] || "#4361ee";


    if(book.imgUrl) {
        return `<img src="${book.imgUrl}" alt="${book.title}" class="object-cover" style="width: 200px; height: 280px; margin: 0 auto; display: block;">`;
    }
    else {      
        return `<svg class="w-full h-48 rounded-t-lg" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="300" fill="${bgColor}" />
            <rect x="10" y="10" width="180" height="280" fill="rgba(255,255,255,0.1)" />
            <text x="100" y="100" font-family="Arial" font-size="16" fill="white" text-anchor="middle">${book.title}</text>
            <text x="100" y="130" font-family="Arial" font-size="12" fill="rgba(255,255,255,0.8)" text-anchor="middle">by ${book.author}</text>
            <text x="100" y="200" font-family="Arial" font-size="14" fill="white" text-anchor="middle">${book.category}</text>
        </svg>`;
    }
}

// Toast notification function
function showToast(title, message, type = 'success', duration = 3000) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Icon based on type
    let iconSVG = '';
    if (type === 'success') {
        iconSVG = `
            <svg class="toast-icon" fill="none" viewBox="0 0 24 24" stroke="#10b981" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        `;
    } else if (type === 'error') {
        iconSVG = `
            <svg class="toast-icon" fill="none" viewBox="0 0 24 24" stroke="#ef4444" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        `;
    } else if (type === 'info') {
        iconSVG = `
            <svg class="toast-icon" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        `;
    } else if (type === 'warning') {
        iconSVG = `
            <svg class="toast-icon" fill="none" viewBox="0 0 24 24" stroke="#f59e0b" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        `;
    }

    toast.innerHTML = `
        ${iconSVG}
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    `;

    toastContainer.appendChild(toast);

    // Auto remove after duration
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, duration);
}

// Add to cart function
function addToCart(book) {
    console.log('Adding to cart book in addToCart:', book);
    const existingItem = cart.find(item => item.id === book.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...book,
            quantity: 1
        });
    }
    
    updateCart();

    // Show toast notification
    showToast('Added to Cart', `"${book.title}" has been added to your cart`, 'success', 3000);
}



// Show product detail view for a given book id
function showBookDetails(bookId) {
    const id = Number(bookId);
    const book = books.find(b => b.id === id);
    if (!book) return;

    // Populate detail fields
    const detailPanel = document.getElementById('product-detail');
    const imgContainer = document.getElementById('product-detail-image');
    const titleEl = document.getElementById('product-detail-title');
    const authorEl = document.getElementById('product-detail-author');
    const categoryEl = document.getElementById('product-detail-category');
    const isbnEl = document.getElementById('product-detail-isbn');
    const priceEl = document.getElementById('product-detail-price');
    const descEl = document.getElementById('product-detail-description');
    const addBtn = document.getElementById('product-detail-add');

    if (imgContainer) imgContainer.innerHTML = generateBookCover(book);
    if (titleEl) titleEl.textContent = book.title;
    if (authorEl) authorEl.textContent = `by ${book.author}`;
    if (categoryEl) categoryEl.textContent = book.category;
    if (isbnEl) isbnEl.textContent = `ISBN: ${book.isbn}`;
    if (priceEl) priceEl.textContent = `${book.price.toFixed(2)}Ks`;
    if (descEl) descEl.textContent = book.description || 'No description available.';

    // Wire buttons
    if (addBtn) {
        addBtn.onclick = () => {
            const book = books.find(b => b.id === Number(bookId));
            if (book){
                addToCart(book);
            }
        };
    }

    // Show detail panel, and hide main content and user auth
    const mainContent = document.getElementById('main-content');
    const userAuth = document.getElementById('user-auth');
    if (mainContent) mainContent.classList.add('hidden');
    if (userAuth) userAuth.classList.add('hidden');
    if (detailPanel) detailPanel.classList.remove('hidden');


    // Ensure back button works
    const backBtn = document.getElementById('product-detail-back');
    if (backBtn) {
        backBtn.onclick = () => {
            if (detailPanel) detailPanel.classList.add('hidden');
            if (mainContent) mainContent.classList.remove('hidden');
        };
    }
}

// Remove from cart function
function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    updateCart();
}

// Update quantity function
function updateQuantity(bookId, newQuantity) {
    const item = cart.find(item => item.id === bookId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(bookId);
        } else {
            item.quantity = newQuantity;
            updateCart();
        }
    }
}

// Update cart UI
function updateCart() {
    const cartButton = document.getElementById('cart-button');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const checkoutButton = document.getElementById('checkout-button');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update checkout button state
    checkoutButton.disabled = totalItems === 0;
    
    // Show/hide empty cart message
    // Add null check on emptyCartMessage
    if (totalItems === 0) {
        if (emptyCartMessage) emptyCartMessage.classList.remove('hidden');
    } else {
        if (emptyCartMessage) emptyCartMessage.classList.add('hidden');
    }
    
    // Update cart items
    cartItems.innerHTML = cart.length === 0 ? 
        '<div id="empty-cart-message" class="text-center text-gray-500 py-8">Your cart is empty</div>' : 
        cart.map(item => `
            <div class="cart-item flex items-start border-b border-gray-200 pb-4 mb-4">
                <div class="w-16 h-24 bg-gray-200 rounded mr-3">
                    ${generateBookCover(item)}
                </div>
                <div class="flex-grow">
                    <h4 class="font-medium">${item.title}</h4>
                    <p class="text-sm text-gray-600">${item.author}</p>
                    <div class="flex items-center justify-between mt-2">
                        <div class="flex items-center">
                            <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">-</button>
                            <span class="mx-2">${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">+</button>
                        </div>
                        <span class="font-medium">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-red-500 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        `).join('');
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
    
    // Update checkout page if it exists
    updateCheckoutPage();
}

// Display books
function displayBooks(booksToDisplay) {
    const booksContainer = document.getElementById('books-container');
    if (!booksContainer) return;
    booksContainer.innerHTML = '';

    // Keep track of the currently displayed set so sort control can re-render it
    currentDisplayedBooks = Array.isArray(booksToDisplay) ? booksToDisplay.slice() : [];

    // Show a friendly message when no books match the filter/search
    if (!currentDisplayedBooks || currentDisplayedBooks.length === 0) {
        booksContainer.innerHTML = `
            <div class="col-span-full text-center text-gray-600 py-12">
                <p class="text-lg font-medium">No Results Found</p>
                <p class="text-sm">Try a different search term or category.</p>
            </div>
        `;
        return;
    }

    // Apply sorting based on the sort select value (non-destructive)
    const sortSelect = document.getElementById('sort-select');
    const sortValue = sortSelect ? sortSelect.value : 'price-asc';
    const toRender = currentDisplayedBooks.slice();
    if (sortValue === 'price-asc') {
        toRender.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
        toRender.sort((a, b) => b.price - a.price);
    }
    
    toRender.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card bg-white rounded-lg shadow-md overflow-hidden';
        bookCard.innerHTML = `
            <div class="relative pb-2/3">
                ${generateBookCover(book)}
            </div>
            <div class="p-4">
                <h3 class="font-bold text-lg mb-1">${book.title}</h3>
                <p class="text-gray-600 text-sm mb-2"> ${book.author}</p>
                <p class="text-gray-700 text-sm mb-4">${book.category}</p>
                <span class="font-bold text-lg">${book.price.toFixed(2)}Ks</span>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <button class="view-details bg-white border border-gray-300 text-[#1d3557] px-3 py-1 rounded-md hover:bg-gray-50" onclick="showBookDetails(${book.id})">View Details</button>
                        <button class="add-to-cart bg-[#457b9d] hover:bg-[#1d3557] text-white px-3 py-1 rounded-md transition-colors" 
                            onclick="addToCart(${JSON.stringify(book).replace(/\"/g, '&quot;')})">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
        booksContainer.appendChild(bookCard);
    });
}

// Search functionality
function searchBooks() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.toLowerCase();
    if (query === '') {
        displayBooks(books);
        return;
    }
    
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query) || 
        book.category.toLowerCase().includes(query)
    );
    
    displayBooks(filteredBooks);
}

// Go to step function
function goToStep(step) {
    const checkoutStep1 = document.getElementById('checkout-step-1');
    const checkoutStep2 = document.getElementById('checkout-step-2');
    const checkoutStep3 = document.getElementById('checkout-step-3');
    const stepIndicators = document.querySelectorAll('.step-indicator');
    const progress12 = document.getElementById('progress-1-2');
    const progress23 = document.getElementById('progress-2-3');
    
    // Hide all steps
    checkoutStep1.classList.remove('active');
    checkoutStep2.classList.remove('active');
    checkoutStep3.classList.remove('active');
    
    // Reset indicators
    stepIndicators.forEach(indicator => {
        indicator.classList.remove('active', 'completed');
    });
    
    progress12.classList.remove('bg-[#1d3557]');
    progress23.classList.remove('bg-[#1d3557]');
    
    // Show current step
    if (step === 1) {
        checkoutStep1.classList.add('active');
        stepIndicators[0].classList.add('active');
    } else if (step === 2) {
        checkoutStep2.classList.add('active');
        stepIndicators[0].classList.add('completed');
        stepIndicators[1].classList.add('active');
        progress12.classList.add('bg-[#1d3557]');
    } else if (step === 3) {
        checkoutStep3.classList.add('active');
        stepIndicators[0].classList.add('completed');
        stepIndicators[1].classList.add('completed');
        stepIndicators[2].classList.add('active');
        progress12.classList.add('bg-[#1d3557]');
        progress23.classList.add('bg-[#1d3557]');
    }
}

// Update checkout page
function updateCheckoutPage() {
    if (!document.getElementById('checkout-cart-items')) return;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 4.99; // Default shipping
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    // Update step 1
    document.getElementById('checkout-cart-items').innerHTML = cart.map(item => `
        <div class="flex items-start border-b border-gray-200 pb-4 mb-4">
            <div class="w-30 h-35 rounded mr-3">
                ${generateBookCover(item)}
            </div>
            <div class="flex-grow">
                <h4 class="font-medium">${item.title}</h4>
                <p class="text-sm text-gray-600">${item.author}</p>
                <div class="flex items-center justify-between mt-2">
                    <span class="text-sm text-gray-600">Qty: ${item.quantity}</span>
                    <span class="font-medium">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    document.getElementById('checkout-subtotal').textContent = `${subtotal.toFixed(2)}Ks`;
    document.getElementById('checkout-tax').textContent = `${tax.toFixed(2)}Ks`;
    document.getElementById('checkout-total').textContent = `${total.toFixed(2)}Ks`;
    
    // Update step 3 summary
    document.getElementById('summary-subtotal').textContent = `${subtotal.toFixed(2)}Ks`;
    document.getElementById('summary-tax').textContent = `${tax.toFixed(2)}Ks`;
    document.getElementById('summary-total').textContent = `${total.toFixed(2)}Ks`;
    
    // Update shipping method radio buttons
    const shippingMethodRadios = document.querySelectorAll('input[name="shipping-method"]');
    shippingMethodRadios.forEach(radio => {
        radio.addEventListener('change', updateShippingCost);
    });
}

// Update shipping cost
function updateShippingCost() {
    const selectedShipping = document.querySelector('input[name="shipping-method"]:checked').value;
    let shippingCost = 4.99;
    
    if (selectedShipping === 'express') {
        shippingCost = 9.99;
    } else if (selectedShipping === 'overnight') {
        shippingCost = 19.99;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + shippingCost + tax;
    
    document.getElementById('checkout-shipping').textContent = `$${shippingCost.toFixed(2)}`;
    document.getElementById('checkout-total').textContent = `$${total.toFixed(2)}`;
    
    document.getElementById('summary-shipping').textContent = `$${shippingCost.toFixed(2)}`;
    document.getElementById('summary-total').textContent = `$${total.toFixed(2)}`;
}

function updateCardTypeIcon(type) {
    const cardTypeIcon = document.getElementById('card-type-icon');
    
    if (type === 'visa') {
        cardTypeIcon.innerHTML = `
            <svg class="h-6 w-auto" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="24" rx="4" fill="#1434CB"/>
                <path d="M14.5 16.5H12L10 7.5H12.5L14.5 16.5Z" fill="white"/>
                <path d="M21.5 7.5C20.3 7.5 19 8 19 9.5C19 11.5 21.5 11.5 21.5 13.5C21.5 15 20 15 19 15L18.5 13C19.5 13 20.5 12.5 20.5 11.5C20.5 9.5 18 9.5 18 7.5C18 6 19 5.5 20.5 5.5L21.5 7.5Z" fill="white"/>
                <path d="M24.5 16.5H27L28 14H30.5L29.5 16.5H32L34 7.5H31.5L30.5 10H28L29 7.5H26.5L24.5 16.5Z" fill="white"/>
                <path d="M7.5 7.5L4 16.5H6.5L7 15H10L10.2 16.5H12.5L11 7.5H7.5ZM7.7 13L8.5 10L9.3 13H7.7Z" fill="white"/>
            </svg>
        `;
    } else if (type === 'mastercard') {
        cardTypeIcon.innerHTML = `
            <svg class="h-6 w-auto" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="24" rx="4" fill="#FF5F00"/>
                <circle cx="13" cy="12" r="7" fill="#EB001B"/>
                <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 17.5C19.8075 16.0823 21 13.7033 21 11C21 8.29668 19.8075 5.91766 18 4.5C16.1925 5.91766 15 8.29668 15 11C15 13.7033 16.1925 16.0823 18 17.5Z" fill="#FF8900"/>
            </svg>
        `;
    }
}

// Complete order
function completeOrder() {
    // Get form data
    const email = document.getElementById('email').value;
    const fullName = document.getElementById('full-name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const country = document.getElementById('country').value;
    
    // Generate order number
    const orderNumber = 'BOK-' + Math.floor(10000 + Math.random() * 90000);
    
    // Calculate total
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const selectedShipping = document.querySelector('input[name="shipping-method"]:checked').value;
    let shippingCost = 4.99;
    
    if (selectedShipping === 'express') {
        shippingCost = 9.99;
    } else if (selectedShipping === 'overnight') {
        shippingCost = 19.99;
    }
    
    const tax = subtotal * 0.08;
    const total = subtotal + shippingCost + tax;
    
    // Set confirmation details
    document.getElementById('order-number').textContent = orderNumber;
    document.getElementById('confirmation-email').textContent = email;
    
    document.getElementById('confirmation-items').innerHTML = cart.map(item => `
        <div class="flex justify-between">
            <span>${item.quantity}x ${item.title}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    document.getElementById('confirmation-total').textContent = `$${total.toFixed(2)}`;
    
    document.getElementById('shipping-address').innerHTML = `
        ${fullName}<br>
        ${address}<br>
        ${city}, ${state} ${zip}<br>
        ${document.getElementById('country').options[document.getElementById('country').selectedIndex].text}
    `;
    
    // Calculate delivery date (5-7 days from now for standard shipping)
    const today = new Date();
    let deliveryDays = 7;
    
    if (selectedShipping === 'express') {
        deliveryDays = 3;
    } else if (selectedShipping === 'overnight') {
        deliveryDays = 1;
    }
    
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + deliveryDays);
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const deliveryDateString = deliveryDate.toLocaleDateString('en-US', options);
    document.getElementById('delivery-date').textContent = deliveryDateString;
    
    // Save order to localStorage
    const order = {
        orderNumber: orderNumber,
        date: new Date().toLocaleDateString('en-US', options),
        items: cart.map(item => ({
            id: item.id,
            title: item.title,
            quantity: item.quantity,
            price: item.price
        })),
        total: total,
        subtotal: subtotal,
        shipping: shippingCost,
        tax: tax,
        status: 'Processing',
        deliveryDate: deliveryDateString,
        shippingAddress: {
            fullName: fullName,
            address: address,
            city: city,
            state: state,
            zip: zip,
            country: country,
            email: email
        }
    };
    saveOrderHistory(order);
    
    // Show confirmation
    const checkoutProcess = document.getElementById('checkout-process');
    const orderConfirmation = document.getElementById('order-confirmation');
    checkoutProcess.classList.add('hidden');
    orderConfirmation.classList.remove('hidden');

    // Clear cart after successful order
    cart = [];
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '<div id="empty-cart-message" class="text-center text-gray-500 py-8">Your cart is empty</div>';
    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = '$0.00';
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = '0';
}

// Order history functionality

// Store orders in localStorage for demo purposes (per user)
function saveOrderHistory(order) {
    if (!currentUser || !currentUser.email) {
        console.error('No user logged in');
        return;
    }
    
    const userKey = `orders_${currentUser.email}`;
    let orders = JSON.parse(localStorage.getItem(userKey) || '[]');
    orders.push(order);
    localStorage.setItem(userKey, JSON.stringify(orders));
}

function getOrderHistory() {
    if (!currentUser || !currentUser.email) {
        return [];
    }
    
    const userKey = `orders_${currentUser.email}`;
    return JSON.parse(localStorage.getItem(userKey) || '[]');
}

// Show order history section
function showOrderHistory() {
    document.getElementById('order-confirmation').classList.add('hidden');
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('order-history-section').classList.remove('hidden');
    loadOrderHistory();
}

// Load order history
function loadOrderHistory() {
    const orders = getOrderHistory();
    const list = document.getElementById('order-history-list');
    if (!orders.length) {
        list.innerHTML = '<p class="text-gray-600">No orders found.</p>';
        return;
    }
    list.innerHTML = orders.reverse().map(order => `
        <div class="border-b py-4">
            <div class="flex justify-between items-center">
                <div>
                    <span class="font-bold text-[#1d3557]">Order #${order.orderNumber}</span>
                    <span class="ml-2 text-sm text-gray-500">${order.date}</span>
                </div>
                <span class="px-3 py-1 rounded-full text-xs font-semibold ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}">
                    ${order.status}
                </span>
            </div>
            <div class="mt-2 text-sm text-gray-700">
                <div>Items: ${order.items.map(i => `${i.quantity}x ${i.title}`).join(', ')}</div>
                <div>Total: <span class="font-bold">$${order.total.toFixed(2)}</span></div>
                <div>Estimated Delivery: ${order.deliveryDate}</div>
            </div>
        </div>
    `).join('');
}

// Initialize
window.onload = () => {
    displayBooks(books);
    updateCart();
    
    const cartButton = document.getElementById('cart-button');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const overlay = document.getElementById('overlay');
    const cartItems = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');
    const myOrderHistoryButton = document.getElementById('myorder-history-button');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const signInButton = document.getElementById('sign-in-button');
    const logoutButton = document.getElementById('logout-button');
    const userAuth = document.getElementById('user-auth');
    const mainContent = document.getElementById('main-content');
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const backToShopFromAuth = document.getElementById('back-to-shop-from-auth');
    const checkoutProcess = document.getElementById('checkout-process');
    const orderConfirmation = document.getElementById('order-confirmation');

    // Helper to update auth UI
    function setLoggedInUI(email) {
        if (signInButton) signInButton.textContent = email;
        if (logoutButton) logoutButton.classList.remove('hidden');
    }

    function setLoggedOutUI() {
        if (signInButton) signInButton.textContent = 'Sign In';
        if (logoutButton) logoutButton.classList.add('hidden');
    }

    // Attach logout handler
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            const confirmed = confirm('Are you sure you want to log out?');
            if (!confirmed) return;
            isLoggedIn = false;
            currentUser = null;
            setLoggedOutUI();
            // Return to main shopping view
            userAuth.classList.add('hidden');
            mainContent.classList.remove('hidden');
            alert('You have been logged out.');
        });
    }
    
    // Open cart
    cartButton.addEventListener('click', () => {
        cartSidebar.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
    });

    // Close cart
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', () => {
        cartSidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    });
    
    // Search functionality
    searchButton.addEventListener('click', searchBooks);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchBooks();
        }
    });

    // Category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Reset all buttons
            categoryButtons.forEach(btn => {
                btn.classList.remove('bg-[#457b9d]', 'text-white');
                btn.classList.add('bg-white', 'text-gray-700');
            });
            
            // Highlight selected button
            button.classList.remove('bg-white', 'text-gray-700');
            button.classList.add('bg-[#457b9d]', 'text-white');
            
            const category = button.textContent;
            if (category === 'All Books') {
                displayBooks(books);
            } else {
                const filteredBooks = books.filter(book => book.category === category);
                displayBooks(filteredBooks);
            }
        });
    });
    
    // Show login/register form
    signInButton.addEventListener('click', () => {
        mainContent.classList.add('hidden');
        userAuth.classList.remove('hidden');
    });

    // Back to shopping from auth
    backToShopFromAuth.addEventListener('click', () => {
        mainContent.classList.remove('hidden');
        userAuth.classList.add('hidden');
    });

    // Switch between login and register tabs
    loginTab.addEventListener('click', () => {
        loginTab.classList.add('border-[#1d3557]', 'text-[#1d3557]');
        registerTab.classList.remove('border-[#1d3557]', 'text-[#1d3557]');
        loginFormContainer.classList.remove('hidden');
        registerFormContainer.classList.add('hidden');
    });

    registerTab.addEventListener('click', () => {
        registerTab.classList.add('border-[#1d3557]', 'text-[#1d3557]');
        loginTab.classList.remove('border-[#1d3557]', 'text-[#1d3557]');
        registerFormContainer.classList.remove('hidden');
        loginFormContainer.classList.add('hidden');
    });

    // Sort select change - re-render current displayed books with new sort
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            displayBooks(currentDisplayedBooks);
        });
    }

    // Handle login form submission (verify against stored users)
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim().toLowerCase();
        const password = document.getElementById('login-password').value;

        if (!email || !password) {
            alert('Please enter email and password.');
            return;
        }

        const storedUser = getUserByEmail(email);
        if (storedUser) {
            if (storedUser.password === password) {
                isLoggedIn = true;
                currentUser = { email: storedUser.email, userId: storedUser.email, name: storedUser.name };
                setLoggedInUI(storedUser.email);
                mainContent.classList.remove('hidden');
                userAuth.classList.add('hidden');
                alert('Successfully logged in!');
            } else {
                alert('Invalid credentials. Please check your password.');
            }
        } else {
            alert('No account found for this email. Please register first.');
        }
    });

    // Handle register form submission (persist user to localStorage)
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value.trim();
        const email = document.getElementById('register-email').value.trim().toLowerCase();
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        if (!name || !email || !password) {
            alert('Please fill in all registration fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const existing = getUserByEmail(email);
        if (existing) {
            alert('An account with this email already exists. Please login or use Forgot Password.');
            return;
        }

        // Save user (password stored in localStorage for demo purposes)
        const newUser = { name, email, password };
        saveUser(newUser);

        isLoggedIn = true;
        currentUser = { name, email, userId: email };
        setLoggedInUI(email);
        mainContent.classList.remove('hidden');
        userAuth.classList.add('hidden');
        alert('Registration successful! You are now logged in.');
    });

    // Forgot password flow
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const forgotPasswordContainer = document.getElementById('forgot-password-container');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const backToLoginFromForgot = document.getElementById('back-to-login-from-forgot');

    if (forgotPasswordLink && forgotPasswordContainer && forgotPasswordForm && backToLoginFromForgot) {
        forgotPasswordLink.addEventListener('click', (ev) => {
            ev.preventDefault();
            // show forgot password form, hide login/register forms
            loginFormContainer.classList.add('hidden');
            registerFormContainer.classList.add('hidden');
            forgotPasswordContainer.classList.remove('hidden');
        });

        backToLoginFromForgot.addEventListener('click', () => {
            forgotPasswordContainer.classList.add('hidden');
            loginFormContainer.classList.remove('hidden');
        });

        forgotPasswordForm.addEventListener('submit', (ev) => {
            ev.preventDefault();
            const email = document.getElementById('forgot-email').value.trim().toLowerCase();
            const newPass = document.getElementById('forgot-new-password').value;
            const confirmPass = document.getElementById('forgot-confirm-password').value;

            if (!email || !newPass) {
                alert('Please enter your email and a new password.');
                return;
            }

            if (newPass !== confirmPass) {
                alert('Passwords do not match.');
                return;
            }

            const user = getUserByEmail(email);
            if (!user) {
                alert('No account found with that email.');
                return;
            }

            const updated = updateUserPassword(email, newPass);
            if (updated) {
                // Auto-login after reset
                isLoggedIn = true;
                currentUser = { email: user.email, userId: user.email, name: user.name };
                setLoggedInUI(user.email);
                forgotPasswordContainer.classList.add('hidden');
                loginFormContainer.classList.remove('hidden');
                alert('Password has been reset. You are now logged in.');
            } else {
                alert('Failed to reset password. Please try again.');
            }
        });
    }
    
    // Start checkout process
    checkoutButton.addEventListener('click', () => {
        // Check if user is logged in
        if (!isLoggedIn) {
            // Close cart sidebar
            cartSidebar.classList.add('translate-x-full');
            overlay.classList.add('hidden');
            
            // Show login/register form
            mainContent.classList.add('hidden');
            userAuth.classList.remove('hidden');
            
            // Show message
            alert('Please login or register to continue with checkout.');
            return;
        }
        
        // Close cart sidebar
        cartSidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
        
        // Show checkout process
        mainContent.classList.add('hidden');
        checkoutProcess.classList.remove('hidden');
        orderConfirmation.classList.add('hidden');
        
        // Update checkout page
        updateCheckoutPage();
        
        // Pre-fill email if user is logged in
        if (currentUser && currentUser.email) {
            document.getElementById('email').value = currentUser.email;
        }
        
        // Reset to step 1
        goToStep(1);
    });
    
    // Back to shopping
    document.getElementById('back-to-shop').addEventListener('click', () => {
        mainContent.classList.remove('hidden');
        checkoutProcess.classList.add('hidden');
    });
    
    // Step navigation
    document.getElementById('to-step-2').addEventListener('click', () => {
        goToStep(2);
    });
    
    document.getElementById('back-to-step-1').addEventListener('click', () => {
        goToStep(1);
    });
    
    document.getElementById('to-step-3').addEventListener('click', (e) => {
        // Simple form validation
        const form = document.getElementById('shipping-form');
        if (form.checkValidity()) {
            goToStep(3);
        } else {
            form.reportValidity();
        }
    });
    
    document.getElementById('back-to-step-2').addEventListener('click', () => {
        goToStep(2);
    });
    
    document.getElementById('place-order').addEventListener('click', () => {
        // Simple form validation
        const form = document.getElementById('payment-form');
        if (form.checkValidity()) {
            completeOrder();
        } else {
            form.reportValidity();
        }
    });
    
    // Continue shopping from confirmation
    document.getElementById('continue-shopping').addEventListener('click', () => {
        mainContent.classList.remove('hidden');
        orderConfirmation.classList.add('hidden');
        
        // Clear cart
        cart = [];
        updateCart();
    });
    
    // Payment method selection
    const paymentOptions = document.querySelectorAll('.payment-method-option');
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all options
            paymentOptions.forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selected class to clicked option
            option.classList.add('selected');
            
            // Check the radio button
            const radio = option.querySelector('input[type="radio"]');
            radio.checked = true;
            
            // Update card icon
            updateCardTypeIcon(option.dataset.payment);
        });
    });
    
    // When "Track Order" is clicked, show order history
    document.querySelectorAll('button').forEach(btn => {
        if (btn.textContent.trim() === 'Track Order') {
            console.log('User is logged in, ', isLoggedIn);
            btn.addEventListener('click', showOrderHistory);
        }
    });

    // When "My Order History" is clicked, show order history
    myOrderHistoryButton.addEventListener('click', () => {
        if (isLoggedIn) {
            console.log('User is logged in, ', isLoggedIn);
            showOrderHistory();
        }
    });
    
    // Continue shopping from order history
    document.getElementById('back-to-shopping').addEventListener('click', () => {
        document.getElementById('order-history-section').classList.add('hidden');
        document.getElementById('order-confirmation').classList.remove('hidden');
        mainContent.classList.remove('hidden');
        orderConfirmation.classList.add('hidden');
        
        // Clear cart
        cart = [];
        updateCart();
    });
    
    // Same as shipping checkbox
    document.getElementById('same-as-shipping').addEventListener('change', function() {
        const billingForm = document.getElementById('billing-address-form');
        if (this.checked) {
            billingForm.classList.add('hidden');
        } else {
            billingForm.classList.remove('hidden');
        }
    });
    
    // About Us navigation
    const footerAboutLink = document.getElementById('footer-about-link');
    const aboutUsSection = document.getElementById('about-us-section');
    const backFromAbout = document.getElementById('back-from-about');
    
    if (footerAboutLink && aboutUsSection) {
        footerAboutLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide all other sections
            mainContent.classList.add('hidden');
            userAuth.classList.add('hidden');
            checkoutProcess.classList.add('hidden');
            orderConfirmation.classList.add('hidden');
            document.getElementById('order-history-section').classList.add('hidden');
            document.getElementById('contact-us-section').classList.add('hidden');
            document.getElementById('product-detail').classList.add('hidden');
            
            // Show About Us section
            aboutUsSection.classList.remove('hidden');
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    }
    
    if (backFromAbout) {
        backFromAbout.addEventListener('click', () => {
            aboutUsSection.classList.add('hidden');
            mainContent.classList.remove('hidden');
            window.scrollTo(0, 0);
        });
    }
    
    // Contact Us navigation
    const footerContactLink = document.getElementById('footer-contact-link');
    const contactUsSection = document.getElementById('contact-us-section');
    const backFromContact = document.getElementById('back-from-contact');
    
    if (footerContactLink && contactUsSection) {
        footerContactLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide all other sections
            mainContent.classList.add('hidden');
            userAuth.classList.add('hidden');
            checkoutProcess.classList.add('hidden');
            orderConfirmation.classList.add('hidden');
            document.getElementById('order-history-section').classList.add('hidden');
            aboutUsSection.classList.add('hidden');
            document.getElementById('product-detail').classList.add('hidden');
            
            // Show Contact Us section
            contactUsSection.classList.remove('hidden');
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    }
    
    if (backFromContact) {
        backFromContact.addEventListener('click', () => {
            contactUsSection.classList.add('hidden');
            mainContent.classList.remove('hidden');
            window.scrollTo(0, 0);
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const contactFormSuccess = document.getElementById('contact-form-success');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;
            
            // In a real application, this would send data to a server
            console.log('Contact form submitted:', { name, email, subject, message });
            
            // Show success message
            contactFormSuccess.classList.remove('hidden');
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                contactFormSuccess.classList.add('hidden');
            }, 5000);
        });
    }
    
    // Initialize card type icon
    updateCardTypeIcon('visa');
};
