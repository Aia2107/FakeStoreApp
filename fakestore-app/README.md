🛍️ FakeStore E-Commerce App
This is a front-end React app that interacts with the FakeStoreAPI to display, create, edit, and delete mock products. It mimics an e-commerce experience and helps practice working with REST APIs, React Router, and React Bootstrap UI components.

📸 Demo
Live Demo Link (optional): [Your Deployed URL Here]
Screenshots (optional): Add images of your Home, Product List, and Product Details pages

🚀 Features
✅ Browse products from a mock API

✅ View product details with images and descriptions

✅ Add new products (form with validation)

✅ Edit existing products

✅ Delete products with confirmation

✅ Responsive design with React Bootstrap

✅ Handles loading states and error messages

⚠️ Note: Since FakeStoreAPI is for testing, POST/PUT/DELETE requests return success but don’t persist changes.

🧑‍💻 Tech Stack
React (with Vite)

Axios – for API requests

React Router DOM – for navigation

React Bootstrap – for layout and styling

FakeStoreAPI – external mock API

🗂️ Pages Overview
Page	Path	Description
🏠 Home	/	Welcome screen with navigation to the product list
🛍 Product List	/products	Displays all products fetched from the API
📄 Product Detail	/products/:id	Shows full info on a single product + delete/edit options
➕ Add Product	/add-product	Form to add a new product using a POST request
✏️ Edit Product	/edit-product/:id	Form to update product details using PUT

🛠️ Installation & Setup
bash
Copy
Edit
# 1. Create the app with Vite
npx create-vite fakestore-app --template react

# 2. Navigate into the folder
cd fakestore-app

# 3. Install dependencies
npm install
npm install axios react-router-dom react-bootstrap bootstrap

# 4. Import Bootstrap in main.jsx
import 'bootstrap/dist/css/bootstrap.min.css';

# 5. Start the dev server
npm run dev
📁 Folder Structure
css
Copy
Edit
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── LoadingSpinner.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── ProductList.jsx
│   ├── ProductDetails.jsx
│   ├── AddProduct.jsx
│   └── EditProduct.jsx
│
├── App.jsx
├── main.jsx
