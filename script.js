// Menu Data
const menuItems = [
    {
        id: 1,
        title: "Truffle Arancini",
        category: "starters",
        price: "$14.00",
        description: "Crispy risotto balls infused with black truffle oil, wild mushrooms, and melted mozzarella.",
        tag: "Chef's Special"
    },
    {
        id: 2,
        title: "Pan-Seared Scallops",
        category: "starters",
        price: "$18.00",
        description: "Jumbo sea scallops served over a silky parsnip puree with crispy pancetta.",
        tag: "Fresh Catch"
    },
    {
        id: 3,
        title: "Grilled Wagyu Ribeye",
        category: "mains",
        price: "$48.00",
        description: "Grade-A Australian Wagyu served with roasted garlic herb butter and truffle fries.",
        tag: "Signature"
    },
    {
        id: 4,
        title: "Herb-Crusted Rack of Lamb",
        category: "mains",
        price: "$42.00",
        description: "New Zealand lamb chops with rosemary crust, seasonal greens, and port wine reduction.",
        tag: "Popular"
    },
    {
        id: 5,
        title: "Wild Mushroom Risotto",
        category: "mains",
        price: "$28.00",
        description: "Arborio rice cooked with porcini mushrooms, aged parmesan, and fresh herbs.",
        tag: "Vegetarian"
    },
    {
        id: 6,
        title: "Classic Tiramisu",
        category: "desserts",
        price: "$12.00",
        description: "Layered savoiardi biscuits dipped in espresso, rich mascarpone cream, and dark cocoa.",
        tag: "Classic"
    },
    {
        id: 7,
        title: "Molten Lava Chocolate Cake",
        category: "desserts",
        price: "$14.00",
        description: "Warm dark chocolate cake with a gooey center, served with vanilla bean gelato.",
        tag: "Bestseller"
    },
    {
        id: 8,
        title: "Artisanal Berry Mocktail",
        category: "beverages",
        price: "$9.00",
        description: "Muddled blackberries, fresh mint, lime juice, and sparkling club soda.",
        tag: "Refreshing"
    },
    {
        id: 9,
        title: "Signature Smoked Old Fashioned",
        category: "beverages",
        price: "$16.00",
        description: "Bourbon, angostura bitters, maple syrup, infused with aromatic oak smoke.",
        tag: "Bar Special"
    }
];

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const reservationForm = document.getElementById('reservation-form');
const formMessage = document.getElementById('form-message');
const newsletterForm = document.getElementById('newsletter-form');

// Render Menu Items
function displayMenuItems(items) {
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-card">
            <div class="menu-img">
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500" alt="${item.title}">
            </div>
            <div class="menu-details">
                <div class="menu-title-price">
                    <h4>${item.title}</h4>
                    <span class="price">${item.price}</span>
                </div>
                <p>${item.description}</p>
                <span class="menu-tag">${item.tag}</span>
            </div>
        </div>
    `).join('');
}

// Filter Menu
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        const category = e.target.getAttribute('data-filter');
        if (category === 'all') {
            displayMenuItems(menuItems);
        } else {
            const filtered = menuItems.filter(item => item.category === category);
            displayMenuItems(filtered);
        }
    });
});

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Reservation Form Handling
reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    formMessage.style.color = '#28a745';
    formMessage.textContent = `Thank you, ${name}! Your table for ${guests} on ${date} at ${time} has been successfully reserved.`;
    reservationForm.reset();

    setTimeout(() => {
        formMessage.textContent = '';
    }, 6000);
});

// Newsletter Form Handling
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to AKS Restaurant newsletter!');
    newsletterForm.reset();
});

// Initialize Page
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menuItems);
});