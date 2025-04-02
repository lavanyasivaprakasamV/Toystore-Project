const toys = {
  outdoor: [
    {
      id: 1,
      name: "Tennis",
      price: 24.99,
      image:
        "https://specials-images.forbesimg.com/imageserve/62ba612c0c0809bf67b023c3/3-in-1-Game-Set-with-Tennis--Badminton-and-Volleyball/960x0.jpg?fit=scale",
      description: "Enjoy a fast-paced game of tennis with this durable and lightweight racket set!",
    },
    {
      id: 2,
      name: "Football",
      price: 22.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_YBDafFlvftI1S7YA8K5QKN_8dDwUCys-wA&s",
      description: "Kick off the fun with this high-quality football, perfect for all ages!",
    },
    {
      id: 3,
      name: "Basketball",
      price: 21.99,
      image:
        "https://www.gemsbougainvillas.in/wp-content/uploads/2020/05/outdoor-games-bannerImg-mob.jpg",
      description: "Shoot some hoops with this sturdy basketball, great for outdoor play!",
    },
    {
      id: 4,
      name: "Cricket",
      price: 23.99,
      image:
        "https://assets.forestholidays.co.uk/damprodblob/assets/siteassets/forestipedia/blogs/classic-outdoor-games/medium_cricket_0ef076cf87.jpg",
      description: "Hit big shots with this professional-grade cricket bat and ball set!",
    },
    {
      id: 5,
      name: "Volleyball",
      price: 19.99,
      image:
        "https://www.hearthsong.com/cdn/shop/products/1cef6e97652155cbf33c59c06456bebe045d637320220901T163747Z.jpg?v=1675336075&width=533",
      description: "Spike your way to victory with this premium volleyball!",
    },
    {
      id: 6,
      name: "Badminton",
      price: 18.99,
      image:
        "https://i0.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2014/03/badminton-1428047_1920-2.jpg?fit=1920%2C1280&ssl=1",
      description: "Enjoy an exciting badminton match with this lightweight racket set!",
    },
  ],
  educational: [
    {
      id: 7,
      name: "Abacus",
      price: 11.99,
      image: "https://m.media-amazon.com/images/I/81M+maeotkL._SY450_.jpg",
      description: "Learn math the fun way with this colorful abacus!",
    },
    {
      id: 8,
      name: "Ring Tower Toy",
      price: 10.99,
      image:
        "https://jolykid.com/cdn/shop/products/S584eb015e2a745a3bad12189277b36fbw.jpg?v=1688873514",
      description: "Stack and sort with this vibrant ring tower toy!",
    },
    {
      id: 9,
      name: "Chess",
      price: 14.99,
      image:
        "https://plus.unsplash.com/premium_photo-1670183859029-99a0a2c1912b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlc3N8ZW58MHx8MHx8fDA%3D",
      description: "Challenge your mind with this classic chess set!",
    },
    {
      id: 10,
      name: "Rubik's Cube",
      price: 8.99,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik%27s_cube.svg/1966px-Rubik%27s_cube.svg.png",
      description: "Twist and turn to solve this iconic Rubik’s Cube!",
    },
    {
      id: 11,
      name: "Puzzle",
      price: 12.99,
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kp4difk0/learning-toy/j/d/g/wooden-slide-puzzles-brain-games-toys-for-kids-4-5-6-years-boys-original-imag3fetp3zymahw.jpeg?q=90&crop=false",
      description: "Put the pieces together for hours of fun with this puzzle set!",
    },
    {
      id: 12,
      name: "Alphabet Board",
      price: 9.99,
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/learning-toy/a/d/r/learning-toys-puzzle-educational-jigsaw-game-capital-atoz-letter-original-imagacadumggxakf.jpeg?q=20&crop=false",
      description: "Learn letters easily with this interactive alphabet board!",
    },
  ],
  "small-toys": [
    {
      id: 13,
      name: "Pen Squishy",
      price: 5.99,
      image: "https://m.media-amazon.com/images/I/71rZpII2fSL.jpg",
      description: "A fun, squishy pen perfect for stress relief!",
    },
    {
      id: 14,
      name: "Unicorn",
      price: 6.99,
      image:
        "https://www.jiomart.com/images/product/original/rve14qv5b4/crispy-toys-small-pink-unicorn-soft-toy-baby-toys-soft-toys-for-kids-soft-toys-for-girls-soft-toys-for-baby-girl-birthday-gift-for-girls-birthday-gift-for-girls-gift-item-32-cm-product-images-orve14qv5b4-p609147843-4-202405302303.jpg?im=Resize=(420,420)",
      description: "A magical unicorn plushie for endless cuddles!",
    },
    {
      id: 15,
      name: "Car",
      price: 4.99,
      image:
        "https://img.freepik.com/free-photo/green-easter-car-with-yellow-egg_23-2149301294.jpg",
      description: "Zoom into fun with this speedy toy car!",
    },
    {
      id: 16,
      name: "Magic Spring",
      price: 5.49,
      image:
        "https://www.happygiftmart.com/image/cache/catalog/RVM-Toys-Mini-Small-12-Pcs-Rainbow-Magic-Spring-Coil-Fun-Stretch-Toy-for/RVM-Toys-Mini-Small-12-Pcs-Rainbow-Magic-Spring-Coil-Fun-Stretch-Toy-for-Birthda-630x552.jpg",
      description: "Watch this magic spring flip and tumble down the stairs!",
    },
    {
      id: 17,
      name: "Drum",
      price: 7.99,
      image:
        "https://samstoy.in/cdn/shop/files/Sams-Toy-World-Flash-Drum-Toy-For-Kids-Musical-Lighting-best-for-baby-Gift-samstoy-in-9541.jpg?v=1724875082",
      description: "Beat to the rhythm with this mini drum set!",
    },
    {
      id: 18,
      name: "Teddy Bear",
      price: 8.49,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/2/KF/BU/FS/146850259/soft-toys-teddy-bear-cream-4-feet--250x250.jpg",
      description: "A cuddly teddy bear, perfect for snuggles!",
    },
  ],
};
const cart = [];
const displayProducts = (category) => {
  const productContainer = document.getElementById("product-list");
  const categoryButtons = document.querySelectorAll(".category-button");
  document.getElementById("cart-container").style.display = "none";
  productContainer.style.display = "grid";
  categoryButtons.forEach((button) => (button.style.display = "inline-block"));
  document.getElementById("product-description").style.display = "none";
  productContainer.innerHTML = "";
  const categoryToys = toys[category];
  if (categoryToys) {
    categoryToys.forEach((toy) => {
      const productItem = document.createElement("li");
      productItem.classList.add("product");
      const image = document.createElement("img");
      image.src = toy.image;
      image.alt = toy.name;
      image.style.width = "200px";
      image.style.height = "150px";
      image.addEventListener("click", () => showDescription(toy));
      productItem.appendChild(image);
      productContainer.appendChild(productItem);
    });
  }
};
const showDescription = (toy) => {
  const productContainer = document.getElementById("product-list");
  const categoryButtons = document.querySelectorAll(".category-button");
  const descriptionContainer = document.getElementById("product-description");
  productContainer.style.display = "none";
  categoryButtons.forEach((button) => (button.style.display = "none"));
  descriptionContainer.innerHTML = "";
  const image = document.createElement("img");
  image.src = toy.image;
  image.alt = toy.name;
  image.style.width = "200px";
  image.style.height = "200px";
  descriptionContainer.appendChild(image);
  const name = document.createElement("h3");
  name.textContent = toy.name;
  descriptionContainer.appendChild(name);
  const price = document.createElement("p");
  price.textContent = `Price: $${toy.price}`;
  descriptionContainer.appendChild(price);
  const description = document.createElement("p");
  description.textContent = `Description: ${toy.description}`;
  descriptionContainer.appendChild(description);
  const backButton = document.createElement("button");
  backButton.textContent = "Back";
  backButton.classList.add("back-button");
  backButton.addEventListener("click", goBackToShop);
  descriptionContainer.appendChild(backButton);
  const addButton = document.createElement("button");
  addButton.textContent = "Add to Cart";
  addButton.addEventListener("click", () => addToCart(toy));
  descriptionContainer.appendChild(addButton);
  descriptionContainer.style.display = "block";
};
const addToCart = (toy) => {
  const existingItem = cart.find((item) => item.id === toy.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...toy, quantity: 1 });
  }
  alert("Item added to cart!");
};
const viewCart = () => {
  const productContainer = document.getElementById("product-list");
  const descriptionContainer = document.getElementById("product-description");
  const cartContainer = document.getElementById("cart-container");
  productContainer.style.display = "none";
  descriptionContainer.style.display = "none";
  cartContainer.style.display = "block";
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  let totalAmount = 0;
  cart.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;
    cartItem.appendChild(image);
    const name = document.createElement("span");
    name.textContent = item.name;
    cartItem.appendChild(name);
    const quantity = document.createElement("span");
    quantity.textContent = `Quantity: ${item.quantity}`;
    cartItem.appendChild(quantity);
    const price = document.createElement("span");
    price.textContent = `Price: $${(item.price * item.quantity).toFixed(2)}`;
    cartItem.appendChild(price);
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", () => removeFromCart(item.id));
    cartItem.appendChild(removeButton);
    cartList.appendChild(cartItem);
    totalAmount += item.price * item.quantity;
  });
  document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
};
const removeFromCart = (id) => {
  const itemIndex = cart.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    cart[itemIndex].quantity--;
    if (cart[itemIndex].quantity === 0) {
      cart.splice(itemIndex, 1);
    }
  }
  viewCart();
};
const goBackToShop = () => {
  const productContainer = document.getElementById("product-list");
  const categoryButtons = document.querySelectorAll(".category-button");
  productContainer.style.display = "grid";
  document.getElementById("product-description").style.display = "none";
  document.getElementById("cart-container").style.display = "none";
  categoryButtons.forEach((button) => (button.style.display = "inline-block"));
};
