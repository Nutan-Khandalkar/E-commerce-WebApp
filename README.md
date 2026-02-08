# E-Commerce Web App

A modern, full-stack e-commerce application built with React, Node.js, and Tailwind CSS.

## 📋 Project Structure

```
E-commerce webApp/
├── Backend/                 # Node.js backend API
│   ├── package.json
│   └── src/
├── Frontend/               # React + Vite frontend
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── public/
│   └── src/
│       ├── main.jsx        # App entry point
│       ├── App.jsx         # Root component
│       ├── App.css
│       ├── index.css
│       ├── api/
│       │   └── fakeApi.js  # Mock API calls
│       ├── assets/
│       ├── components/
│       │   ├── NavBar.jsx           # Navigation with cart icon
│       │   ├── CartSidebar.jsx      # Sliding cart drawer
│       │   ├── Loader.jsx           # Loading spinner
│       │   └── ProductCard.jsx      # Product display card
│       ├── contexts/
│       │   ├── CartContext.jsx      # Cart state management
│       │   └── CategoryContext.jsx  # Category filtering
│       └── pages/
│           ├── Home.jsx             # Product listing
│           ├── ProductDetails.jsx   # Single product view
│           ├── Cart.jsx             # Full cart page
│           ├── Checkout.jsx         # Order form & summary
│           └── Login.jsx            # Auth page (placeholder)
└── README.md
```

## ✨ Features

### Frontend
- **Product Catalog**: Browse products with category filtering
- **Shopping Cart**: Add/remove items, adjust quantities via sidebar or cart page
- **Cart Badge**: Real-time item count on navbar
- **Product Details**: View full product information
- **Styled Checkout**: Two-column form + order summary
- **Responsive Design**: Mobile-first layout with Tailwind CSS
- **Mock Payment**: Test checkout flow without real payments

### Cart Management
- Add items to cart from product cards or detail pages
- Cart sidebar auto-opens on add
- Adjust quantities with +/− buttons
- Remove items individually or clear entire cart
- Cart state persists in React context

### Navigation
- Sticky navbar with brand, category selector, and cart
- Dynamic cart item count badge
- React Router for page navigation

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. **Clone/Extract the project**
   ```bash
   cd "E-commerce webApp"
   ```

2. **Install Frontend dependencies**
   ```bash
   cd Frontend
   npm install
   ```

3. **Install Backend dependencies** (optional, if running locally)
   ```bash
   cd ../Backend
   npm install
   ```

### Running the App

#### Frontend Development Server
```bash
cd Frontend
npm run dev
```
The app will start at `http://localhost:5173`

#### Backend (if needed)
```bash
cd Backend
npm start
```

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool and dev server
- **Context API** - State management

### Backend
- Node.js (Express)
- Mock API responses

## 📱 UI Components

### NavBar
- Brand logo linking to home
- Category dropdown (hidden on mobile)
- Cart icon with item count badge
- Login button

### ProductCard
- Product image with hover zoom
- Title and category
- Price display
- Add to cart button (opens sidebar)

### CartSidebar
- Sliding drawer from right
- List of cart items with images
- Quantity controls (+/−)
- Remove item buttons
- Total price and checkout link
- Clear cart option

### Cart Page
- Full shopping cart view
- Product cards in a list layout
- Quantity adjustment controls
- Individual item removal
- Clear cart and checkout buttons
- Empty cart state with continue shopping link

### Checkout Page
- Two-column responsive layout
- Form fields: name, email, address, city, postal code, country, card
- Order summary sidebar with item images and prices
- Mock payment button
- Clear cart functionality

## 🎯 Usage

1. **Browse Products**: Home page displays all products with category filter
2. **Add to Cart**: Click "Add" on any product card; cart sidebar opens
3. **View Cart Details**: 
   - Quick view in sidebar with quantity controls
   - Full page view at `/cart`
4. **Checkout**: Click "Proceed to Checkout" to fill order form
5. **Pay**: Click "Pay now" (mock) to complete purchase

## 🔄 Cart State Management

Cart context provides:
- `cartItems` - Array of items in cart
- `addToCart(product, qty)` - Add or increment item
- `removeFromCart(id)` - Remove item by ID
- `updateQuantity(id, qty)` - Set item quantity
- `clearCart()` - Remove all items
- `getTotalPrice()` - Calculate cart total
- `isCartOpen` / `setIsCartOpen` - Sidebar toggle

## 📝 Mock API

The `fakeApi.js` provides:
- `fetchProducts()` - Get all products
- `fetchProductsByCategory(categoryId)` - Filter by category
- `fetchCategories()` - Get category list
- `fetchProduct(id)` - Get single product details

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Order history
- [ ] Payment gateway (Stripe, PayPal)
- [ ] Product search
- [ ] Wishlist
- [ ] Reviews and ratings
- [ ] Admin dashboard

## 📄 License

This is a sample e-commerce project for educational purposes.

---

**Last Updated**: February 2026
