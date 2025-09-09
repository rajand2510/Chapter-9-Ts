// Interfaces for Online Store

// 1. Product Interface
interface Product {
    id: number;               // Unique product ID
    name: string;             // Product name
    price: number;            // Price in currency
    description?: string;     // Optional description
    category: string;         // Product category
    inStock: boolean;         // Availability
    tags?: string[];          // Optional tags for filtering/search
}

// 2. User Profile Interface
interface UserProfile {
    id: number;               // Unique user ID
    name: string;             // Full name
    email: string;            // Email address
    isVerified: boolean;      // Account verification status
    age?: number;             // Optional age
    address?: string;         // Optional address
    cart?: Product[];         // Optional cart with products
}

// Example Products
const product1: Product = {
    id: 101,
    name: "Wireless Mouse",
    price: 799,
    category: "Electronics",
    inStock: true,
    tags: ["computer", "accessories"],
};

const product2: Product = {
    id: 102,
    name: "Mechanical Keyboard",
    price: 2499,
    category: "Electronics",
    inStock: true,
};

// Example User with Cart
const user: UserProfile = {
    id: 1,
    name: "Antony Striker",
    email: "antony@example.com",
    isVerified: true,
    cart: [product1, product2],
};

// Display User Cart
console.log(`${user.name}'s Cart:`);
user.cart?.forEach((p) => {
    console.log(`- ${p.name} (${p.category}) - ₹${p.price}`);
});
