# 🌱 Paradise Nursery Shopping App

A simple React + Redux Toolkit based shopping cart application for a plant nursery. Users can browse plants, add them to the cart, and manage quantities dynamically.

---

## 🚀 Features

* 🌿 View list of available plants
* 🛒 Add items to cart
* ➕ Increase / ➖ Decrease item quantity
* ❌ Remove items from cart
* 💰 Automatic total price calculation
* ⚡ State management using Redux Toolkit

---

## 🧩 Tech Stack

* React (Functional Components + Hooks)
* Redux Toolkit
* React Redux

---

## 📁 Project Structure

```
paradise-nursery/
│── src/
│   │── components/
│   │   ├── Navbar.js
│   │   ├── ProductList.js
│   │   ├── ProductCard.js
│   │   ├── Cart.js
│   │   ├── CartItem.js
│   │
│   │── store/
│   │   ├── cartSlice.js
│   │   ├── store.js
│   │
│   │── App.js
│   │── index.js
│
│── package.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone https://github.com/anirajsoni/paradise-nursery.git
```

2. Navigate to project folder:

```
cd paradise-nursery
```

3. Install dependencies:

```
npm install
```

4. Run the app:

```
npm start
```

---

## 🛠️ Functionality Breakdown

### 🔹 Redux Store

* Implemented using `configureStore`
* Cart state managed in `cartSlice.js`

### 🔹 Cart Features

* Add to cart
* Remove from cart
* Increase / decrease quantity
* Auto total calculation

### 🔹 Components

* **Navbar** → App header
* **ProductList** → Displays plant items
* **ProductCard** → Individual product UI
* **Cart** → Displays cart items & total
* **CartItem** → Handles quantity actions

---

## 📌 Future Improvements

* 🎨 Add UI styling (CSS / Tailwind)
* 🖼️ Add product images
* 🔀 Add routing (separate Cart page)
* 🌐 Deploy app (Netlify / Vercel)

---

## 👨‍💻 Author

**Aniraj Soni**
GitHub: https://github.com/anirajsoni

---

## 📜 License

This project is for learning and demonstration purposes.
