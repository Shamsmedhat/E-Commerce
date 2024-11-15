// import React, { useState, useEffect } from "react";

// const useGuestCart = () => {
//   // Initialize cart state from localStorage or an empty array
//   const [cart, setCart] = useState(() => {
//     const storedCart = localStorage.getItem("cart");
//     return storedCart ? JSON.parse(storedCart) : [];
//   });

//   // Sync cart state to localStorage whenever the cart changes
//   useEffect(() => {
//     console.log("cart", cart);
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // Function to add or update a product in the cart
//   const addToCart = (productId) => {
//     setCart((prevCart) => {
//       return [...prevCart, { quantity: 1, productId }];

//       // Check if the product already exists in the cart
//       // const existingProduct = prevCart.find(
//       //   (item) => item.productId === productId,
//       // );

//       // if (existingProduct) {
//       //   // Increase quantity if product exists
//       //   return prevCart.map((item) =>
//       //     item.productId === productId
//       //       ? { ...item, quantity: item.quantity + 1 }
//       //       : item,
//       //   );
//       // } else {
//       //   // Add new product if it doesn't exist
//       //   return [...prevCart, { quantity: 1, productId }];
//       // }
//     });
//   };

//   return { cart, addToCart };
// };

// export default useGuestCart;
