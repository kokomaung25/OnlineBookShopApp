// Sample book data
const books = [
    {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        price: 14.99,
        category: "Fiction",
        cover: "midnight-library",
        imgUrl:"images/1.jpg",
        description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived."
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        price: 16.99,
        category: "Non-Fiction",
        cover: "atomic-habits",
        imgUrl:"images/2.jpg",
        description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day."
    },
    {
        id: 3,
        title: "Project Hail Mary",
        author: "Andy Weir",
        price: 18.99,
        category: "Science Fiction",
        cover: "project-hail-mary",
        imgUrl:"images/3.jpg",
        description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the #1 New York Times bestselling author of The Martian."
    },
    {
        id: 4,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        price: 13.99,
        category: "Mystery",
        cover: "silent-patient",
        imgUrl:"images/4.jpg",
        description: "A shocking psychological thriller of a woman's act of violence against her husband—and of the therapist obsessed with uncovering her motive."
    },
    {
        id: 5,
        title: "Educated",
        author: "Tara Westover",
        price: 15.99,
        category: "Biography",
        cover: "educated",
        description: "An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University."
    },
    {
        id: 6,
        title: "Dune",
        author: "Frank Herbert",
        price: 12.99,
        category: "Science Fiction",
        cover: "dune",
        description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world."
    },
    {
        id: 7,
        title: "The Thursday Murder Club",
        author: "Richard Osman",
        price: 14.49,
        category: "Mystery",
        cover: "thursday-murder-club",
        description: "In a peaceful retirement village, four unlikely friends meet weekly to discuss unsolved crimes; together they call themselves the Thursday Murder Club."
    },
    {
        id: 8,
        title: "Klara and the Sun",
        author: "Kazuo Ishiguro",
        price: 17.99,
        category: "Fiction",
        cover: "klara-and-the-sun",
        description: "From the Nobel Prize-winning author, a magnificent new novel about the relationship between an Artificial Friend and the human child she is designed to serve."
    }
];

// User authentication state
let isLoggedIn = false;
let currentUser = null;

// Cart functionality
let cart = [];

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

// Add to cart function
function addToCart(book) {
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
    if (totalItems === 0) {
        emptyCartMessage.classList.remove('hidden');
    } else {
        emptyCartMessage.classList.add('hidden');
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
    booksContainer.innerHTML = '';
    
    booksToDisplay.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card bg-white rounded-lg shadow-md overflow-hidden';
        bookCard.innerHTML = `
            <div class="relative pb-2/3">
                ${generateBookCover(book)}
            </div>
            <div class="p-4">
                <h3 class="font-bold text-lg mb-1">${book.title}</h3>
                <p class="text-gray-600 text-sm mb-2">by ${book.author}</p>
                <p class="text-gray-700 text-sm mb-4 line-clamp-2 h-10">${book.description}</p>
                <div class="flex items-center justify-between">
                    <span class="font-bold text-lg">$${book.price.toFixed(2)}</span>
                    <button class="add-to-cart bg-[#457b9d] hover:bg-[#1d3557] text-white px-3 py-1 rounded-md transition-colors" 
                        onclick="addToCart(${JSON.stringify(book).replace(/"/g, '&quot;')})">
                        Add to Cart
                    </button>
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
            <div class="w-16 h-24 bg-gray-200 rounded mr-3">
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
    
    document.getElementById('checkout-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkout-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('checkout-total').textContent = `$${total.toFixed(2)}`;
    
    // Update step 3 summary
    document.getElementById('summary-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('summary-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('summary-total').textContent = `$${total.toFixed(2)}`;
    
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

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Simple validation
        if (email && password) {
            // In a real app, you would verify credentials with a server
            isLoggedIn = true;
            currentUser = { email, userId: email };
            
            // Update UI
            signInButton.textContent = email;
            
            // Return to main content
            mainContent.classList.remove('hidden');
            userAuth.classList.add('hidden');
            
            // Show success message
            alert('Successfully logged in!');
        }
    });

    // Handle register form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        
        // Simple validation
        if (name && email && password && password === confirmPassword) {
            // In a real app, you would send this data to a server
            isLoggedIn = true;
            currentUser = { name, email, userId: email };
            
            // Update UI
            signInButton.textContent = email;
            
            // Return to main content
            mainContent.classList.remove('hidden');
            userAuth.classList.add('hidden');
            
            // Show success message
            alert('Registration successful! You are now logged in.');
        } else if (password !== confirmPassword) {
            alert('Passwords do not match!');
        }
    });
    
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
    
    // Initialize card type icon
    updateCardTypeIcon('visa');
};
