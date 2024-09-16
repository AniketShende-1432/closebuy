import img1 from './assets/product-images/Subproduct/1.png';
import img2 from './assets/product-images/Subproduct/2.png'
import img3 from './assets/product-images/Subproduct/3.jpg'
import img4 from './assets/product-images/Subproduct/4.png'
import img5 from './assets/product-images/Subproduct/5.png'

import img10 from './assets/product-images/1.png';
import img11 from './assets/product-images/2.png';
import img12 from './assets/product-images/3.png';
import img13 from './assets/product-images/4.jpg';
import img14 from './assets/product-images/5.png';
import img15 from './assets/product-images/6.jpg';
import img16 from './assets/product-images/6.png';
import img17 from './assets/product-images/7.png';
import img18 from './assets/product-images/8.png';
import img19 from './assets/product-images/9.jpg';
import img20 from './assets/product-images/10.png';
import img21 from './assets/product-images/11.png';
import img22 from './assets/product-images/12.png';

import img100 from './assets/product-images/maincategory/1.png';
import img101 from './assets/product-images/maincategory/2.png';
import img102 from './assets/product-images/maincategory/3.jpg';
import img103 from './assets/product-images/maincategory/4.png';
import img104 from './assets/product-images/maincategory/5.png';
import img105 from './assets/product-images/maincategory/6.png';
import img106 from './assets/product-images/maincategory/7.jpg';
import img107 from './assets/product-images/maincategory/8.png';
export const mainCategories = [
  { id: 1, name: "Vegetables & Fruits", image: `${img100}` },
  { id: 2, name: "Dairy & Breakfast", image:`${img101}`  },
  { id: 3, name: "Munchies" , image:`${img102}` },
  { id: 4, name: "Cold Drinks & Juices" , image: `${img103}`},
  { id: 5, name: "Instant & Frozen Food", image: `${img104}` },
  { id: 6, name: "Tea, Coffee & Health Drinks", image: `${img105}` },
  { id: 7, name: "Bakery & Biscuits Sweet Tooth", image: `${img106}` },
  { id: 8, name: "Atta, Rice & Dal", image: `${img107}` }
];

export const categories = [
  // Vegetables & Fruits
  {
    id: 1,
    mainCategoryId: 1,
    name: "Fresh Vegetables",
    image: `${img1}`
  },
  {
    id: 2,
    mainCategoryId: 1,
    name: "Fresh Fruits",
    image: `${img2}`
  },
  {
    id: 3,
    mainCategoryId: 1,
    name: "Mangoes & Melons",
    image: `${img3}`
  },
  {
    id: 4,
    mainCategoryId: 1,
    name: "Seasonal",
    image: `${img4}`
  },
  {
    id: 5,
    mainCategoryId: 1,
    name: "Exotics",
    image: `${img5}`
  },
  // Dairy & Breakfast
  { id: 6, mainCategoryId: 2, name: "Milk", image: "path_to_image" },
  { id: 7, mainCategoryId: 2, name: "Bread & Pav", image: "path_to_image" },
  { id: 8, mainCategoryId: 2, name: "Eggs", image: "path_to_image" },
  { id: 9, mainCategoryId: 2, name: "Flakes & Kids Cereals", image: "path_to_image" },
  { id: 10, mainCategoryId: 2, name: "Muesli & Granola", image: "path_to_image" },
  { id: 11, mainCategoryId: 2, name: "Oats", image: "path_to_image" },

  // Munchies
  { id: 12, mainCategoryId: 3, name: "Chips & Namkeen", image: "path_to_image" },
  { id: 13, mainCategoryId: 3, name: "Cookies & Biscuits", image: "path_to_image" },
  { id: 14, mainCategoryId: 3, name: "Candy & Chocolates", image: "path_to_image" },
  { id: 15, mainCategoryId: 3, name: "Nuts & Dried Fruits", image: "path_to_image" },
  { id: 16, mainCategoryId: 3, name: "Snack Bars", image: "path_to_image" },

  // Cold Drinks & Juices
  { id: 17, mainCategoryId: 4, name: "Carbonated Drinks", image: "path_to_image" },
  { id: 18, mainCategoryId: 4, name: "Fruit Juices", image: "path_to_image" },
  { id: 19, mainCategoryId: 4, name: "Energy & Health Drinks", image: "path_to_image" },
  { id: 20, mainCategoryId: 4, name: "Cold Coffee & Tea", image: "path_to_image" },

  // Instant & Frozen Food
  { id: 21, mainCategoryId: 5, name: "Instant Noodles & Pasta", image: "path_to_image" },
  { id: 22, mainCategoryId: 5, name: "Frozen Snacks", image: "path_to_image" },
  { id: 23, mainCategoryId: 5, name: "Ready Meals", image: "path_to_image" },
  { id: 24, mainCategoryId: 5, name: "Frozen Desserts", image: "path_to_image" },

  { id: 25, mainCategoryId: 6, name: "Tea", image: "path_to_image" },
  { id: 26, mainCategoryId: 6, name: "Coffee", image: "path_to_image" },
  { id: 27, mainCategoryId: 6, name: "Health Drinks", image: "path_to_image" },

  // Bakery & Biscuits Sweet Tooth
  { id: 28, mainCategoryId: 7, name: "Bread", image: "path_to_image" },
  { id: 29, mainCategoryId: 7, name: "Cookies", image: "path_to_image" },
  { id: 30, mainCategoryId: 7, name: "Cakes", image: "path_to_image" },

  // Atta, Rice & Dal
  { id: 31, mainCategoryId: 8, name: "Atta", image: "path_to_image" },
  { id: 32, mainCategoryId: 8, name: "Rice", image: "path_to_image" },
  { id: 33, mainCategoryId: 8, name: "Dal", image: "path_to_image" },

  // Dry Fruits, Masala & Oil
  

];
export const products = [
  // Fresh Vegetables
  { id: 2, name: 'Potato', categoryId: 1, categoryName: 'Fresh Vegetables', price: '₹25', image: `${img11}` },
  { id: 1, name: 'Tomato', categoryId: 1, categoryName: 'Fresh Vegetables', price: '₹20', image: `${img10}` },
  { id: 3, name: 'Onion', categoryId: 1, categoryName: 'Fresh Vegetables', price: '₹18', image: `${img12}` },
  { id: 4, name: 'Carrot', categoryId: 1, categoryName: 'Fresh Vegetables', price: '₹22', image: `${img13}` },

  // Fresh Fruits
  { id: 5, name: 'Apple', categoryId: 2, categoryName: 'Fresh Fruits', price: '₹30', image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce ' },
  { id: 6, name: 'Banana', categoryId: 2, categoryName: 'Fresh Fruits', price: '₹15', image: `${img14}` },
  { id: 7, name: 'Orange', categoryId: 2, categoryName: 'Fresh Fruits', price: '₹25', image: `${img16}` },
 
  { id: 8, name: 'Mango', categoryId: 3, categoryName: 'Mangoes & Melons', price: '₹40', image: `${img15}` },

  // Mangoes & Melons
  { id: 9, name: 'Alphonso Mango', categoryId: 3, categoryName: 'Mangoes & Melons', price: '₹50', image: `${img15}` },
  { id: 10, name: 'Watermelon', categoryId: 3, categoryName: 'Mangoes & Melons', price: '₹25', image: `${img17}` },
  { id: 11, name: 'Muskmelon', categoryId: 3, categoryName: 'Mangoes & Melons', price: '₹30', image: `${img18}` },
  { id: 12, name: 'Seasonal Fruit Basket', categoryId: 4, categoryName: 'Seasonal', price: '₹100', image: `${img19}` },

  // Exotics
  { id: 13, name: 'Dragon Fruit', categoryId: 5, categoryName: 'Exotics', price: '₹80', image: `${img20}` },
  { id: 14, name: 'Kiwi', categoryId: 5, categoryName: 'Exotics', price: '₹60', image: `${img21}` },
  { id: 15, name: 'Avocado', categoryId: 5, categoryName: 'Exotics', price: '₹70', image: `${img22}` },

  // Milk
  { id: 16, name: 'Amul Taaza Toned Fresh Milk', categoryId: 6, categoryName: 'Milk', price: '₹27', image: 'https://images.unsplash.com/photo-1598418909321-f566e827fb65' },
  { id: 17, name: 'Gokul Full Cream Fresh Milk', categoryId: 6, categoryName: 'Milk', price: '₹36', image: 'https://images.unsplash.com/photo-1598418909321-f566e827fb65' },
  { id: 18, name: 'Amul Taaza Homogenised Milk', categoryId: 6, categoryName: 'Milk', price: '₹74', image: 'https://images.unsplash.com/photo-1598418909321-f566e827fb65' },

  // Bread & Pav
  { id: 19, name: 'Brown Bread', categoryId: 7, categoryName: 'Bread & Pav', price: '₹30', image: 'https://images.unsplash.com/photo-1587573085473-9298d8dc72a4' },
  { id: 20, name: 'White Bread', categoryId: 7, categoryName: 'Bread & Pav', price: '₹25', image: 'https://images.unsplash.com/photo-1587573085473-9298d8dc72a4' },
  { id: 21, name: 'Pav', categoryId: 7, categoryName: 'Bread & Pav', price: '₹10', image: 'https://images.unsplash.com/photo-1587573085473-9298d8dc72a4' },

  // Eggs
  { id: 22, name: 'Eggs', categoryId: 8, categoryName: 'Eggs', price: '₹50', image: 'https://images.unsplash.com/photo-1551081832-e6e994153f1a' },
  { id: 23, name: 'Organic Eggs', categoryId: 8, categoryName: 'Eggs', price: '₹60', image: 'https://images.unsplash.com/photo-1551081832-e6e994153f1a' },
  { id: 24, name: 'Free Range Eggs', categoryId: 8, categoryName: 'Eggs', price: '₹70', image: 'https://images.unsplash.com/photo-1551081832-e6e994153f1a' },

  // Flakes & Kids Cereals
  { id: 25, name: 'Kellogg\'s Corn Flakes', categoryId: 9, categoryName: 'Flakes & Kids Cereals', price: '₹150', image: 'https://images.unsplash.com/photo-1602778495314-37f0e009982f' },
  { id: 26, name: 'Chocos', categoryId: 9, categoryName: 'Flakes & Kids Cereals', price: '₹120', image: 'https://images.unsplash.com/photo-1602778495314-37f0e009982f' },
  { id: 27, name: 'Froot Loops', categoryId: 9, categoryName: 'Flakes & Kids Cereals', price: '₹130', image: 'https://images.unsplash.com/photo-1602778495314-37f0e009982f' },
  { id: 28, name: 'Honey Loops', categoryId: 9, categoryName: 'Flakes & Kids Cereals', price: '₹140', image: 'https://images.unsplash.com/photo-1602778495314-37f0e009982f' },
  { id: 29, name: 'Wheat Flakes', categoryId: 9, categoryName: 'Flakes & Kids Cereals', price: '₹110', image: 'https://images.unsplash.com/photo-1602778495314-37f0e009982f' },

  // Chips & Namkeen
  { id: 30, name: 'Lays Chips', categoryId: 12, categoryName: 'Chips & Namkeen', price: '₹20', image: 'https://images.unsplash.com/photo-1608743123634-f029d10a7a38' },
  { id: 31, name: 'Bingo', categoryId: 12, categoryName: 'Chips & Namkeen', price: '₹18', image: 'https://images.unsplash.com/photo-1608743123634-f029d10a7a38' },
  { id: 32, name: 'Haldiram\'s Namkeen', categoryId: 12, categoryName: 'Chips & Namkeen', price: '₹50', image: 'https://images.unsplash.com/photo-1608743123634-f029d10a7a38' },
  { id: 33, name: 'Kurkure', categoryId: 12, categoryName: 'Chips & Namkeen', price: '₹25', image: 'https://images.unsplash.com/photo-1608743123634-f029d10a7a38' },

  // Cookies & Biscuits
  { id: 34, name: 'Parle-G', categoryId: 13, categoryName: 'Cookies & Biscuits', price: '₹10', image: 'https://images.unsplash.com/photo-1619212242704-98444c2fcd62' },
  { id: 35, name: 'Marie Gold', categoryId: 13, categoryName: 'Cookies & Biscuits', price: '₹25', image: 'https://images.unsplash.com/photo-1619212242704-98444c2fcd62' },
  { id: 36, name: 'Oreo', categoryId: 13, categoryName: 'Cookies & Biscuits', price: '₹30', image: 'https://images.unsplash.com/photo-1619212242704-98444c2fcd62' },
  { id: 37, name: 'Good Day', categoryId: 13, categoryName: 'Cookies & Biscuits', price: '₹20', image: 'https://images.unsplash.com/photo-1619212242704-98444c2fcd62' },

  // Candy & Chocolates
  { id: 38, name: 'Cadbury Dairy Milk', categoryId: 14, categoryName: 'Candy & Chocolates', price: '₹50', image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7' },
  { id: 39, name: 'Snickers', categoryId: 14, categoryName: 'Candy & Chocolates', price: '₹40', image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7' },
  { id: 40, name: 'KitKat', categoryId: 14, categoryName: 'Candy & Chocolates', price: '₹20', image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7' },
  { id: 41, name: '5 Star', categoryId: 14, categoryName: 'Candy & Chocolates', price: '₹10', image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7' },

  // Nuts & Dried Fruits
  { id: 42, name: 'Almonds', categoryId: 15, categoryName: 'Nuts & Dried Fruits', price: '₹100', image: 'https://images.unsplash.com/photo-1607877965748-6e0c4e48b1e9' },
  { id: 43, name: 'Cashews', categoryId: 15, categoryName: 'Nuts & Dried Fruits', price: '₹150', image: 'https://images.unsplash.com/photo-1607877965748-6e0c4e48b1e9' },
  { id: 44, name: 'Raisins', categoryId: 15, categoryName: 'Nuts & Dried Fruits', price: '₹70', image: 'https://images.unsplash.com/photo-1607877965748-6e0c4e48b1e9' },
  { id: 45, name: 'Walnuts', categoryId: 15, categoryName: 'Nuts & Dried Fruits', price: '₹150', image: 'https://images.unsplash.com/photo-1607877965748-6e0c4e48b1e9' },

  // Snack Bars
  { id: 46, name: 'Granola Bar', categoryId: 16, categoryName: 'Snack Bars', price: '₹30', image: 'https://images.unsplash.com/photo-1617902824742-05db64b0c334' },
  { id: 47, name: 'Protein Bar', categoryId: 16, categoryName: 'Snack Bars', price: '₹50', image: 'https://images.unsplash.com/photo-1617902824742-05db64b0c334' },
  { id: 48, name: 'Nutri Bar', categoryId: 16, categoryName: 'Snack Bars', price: '₹40', image: 'https://images.unsplash.com/photo-1617902824742-05db64b0c334' },
  { id: 49, name: 'Cereal Bar', categoryId: 16, categoryName: 'Snack Bars', price: '₹35', image: 'https://images.unsplash.com/photo-1617902824742-05db64b0c334' },

  // Carbonated Drinks
  { id: 50, name: 'Coca Cola', categoryId: 17, categoryName: 'Carbonated Drinks', price: '₹40', image: 'https://images.unsplash.com/photo-1512958728675-78f2650b9c5b' },
  { id: 51, name: 'Pepsi', categoryId: 17, categoryName: 'Carbonated Drinks', price: '₹35', image: 'https://images.unsplash.com/photo-1512958728675-78f2650b9c5b' },
  { id: 52, name: 'Sprite', categoryId: 17, categoryName: 'Carbonated Drinks', price: '₹40', image: 'https://images.unsplash.com/photo-1512958728675-78f2650b9c5b' },
  { id: 53, name: 'Fanta', categoryId: 17, categoryName: 'Carbonated Drinks', price: '₹40', image: 'https://images.unsplash.com/photo-1512958728675-78f2650b9c5b' },

  // Fruit Juices
  { id: 54, name: 'Tropicana Orange Juice', categoryId: 18, categoryName: 'Fruit Juices', price: '₹80', image: 'https://images.unsplash.com/photo-1573451447491-5f5394e67372' },
  { id: 55, name: 'Real Mango Juice', categoryId: 18, categoryName: 'Fruit Juices', price: '₹70', image: 'https://images.unsplash.com/photo-1573451447491-5f5394e67372' },
  { id: 56, name: 'Paper Boat Aamras', categoryId: 18, categoryName: 'Fruit Juices', price: '₹50', image: 'https://images.unsplash.com/photo-1573451447491-5f5394e67372' },
  { id: 57, name: 'B Natural Guava Juice', categoryId: 18, categoryName: 'Fruit Juices', price: '₹60', image: 'https://images.unsplash.com/photo-1573451447491-5f5394e67372' },

  // Energy & Health Drinks
  { id: 58, name: 'Red Bull', categoryId: 19, categoryName: 'Energy & Health Drinks', price: '₹110', image: 'https://images.unsplash.com/photo-1532634726-8b9fb99835f2' },
  { id: 59, name: 'Glucon-D', categoryId: 19, categoryName: 'Energy & Health Drinks', price: '₹40', image: 'https://images.unsplash.com/photo-1532634726-8b9fb99835f2' },
  { id: 60, name: 'Gatorade', categoryId: 19, categoryName: 'Energy & Health Drinks', price: '₹50', image: 'https://images.unsplash.com/photo-1532634726-8b9fb99835f2' },
  { id: 61, name: 'Electral', categoryId: 19, categoryName: 'Energy & Health Drinks', price: '₹30', image: 'https://images.unsplash.com/photo-1532634726-8b9fb99835f2' },

  // Cold Coffee & Tea
  { id: 62, name: 'Nescafe Cold Coffee', categoryId: 20, categoryName: 'Cold Coffee & Tea', price: '₹25', image: 'https://images.unsplash.com/photo-1586297135537-80a08b91d4a7' },
  { id: 63, name: 'Starbucks Cold Brew', categoryId: 20, categoryName: 'Cold Coffee & Tea', price: '₹120', image: 'https://images.unsplash.com/photo-1586297135537-80a08b91d4a7' },
  { id: 64, name: 'Lipton Iced Tea', categoryId: 20, categoryName: 'Cold Coffee & Tea', price: '₹30', image: 'https://images.unsplash.com/photo-1586297135537-80a08b91d4a7' },
  { id: 65, name: 'Nestea Iced Tea', categoryId: 20, categoryName: 'Cold Coffee & Tea', price: '₹25', image: 'https://images.unsplash.com/photo-1586297135537-80a08b91d4a7' },

  // Instant Noodles & Pasta
  { id: 66, name: 'Maggi Noodles', categoryId: 21, categoryName: 'Instant Noodles & Pasta', price: '₹12', image: 'https://images.unsplash.com/photo-1574063148180-cb195c0c52e5' },
  { id: 67, name: 'Top Ramen', categoryId: 21, categoryName: 'Instant Noodles & Pasta', price: '₹15', image: 'https://images.unsplash.com/photo-1574063148180-cb195c0c52e5' },
  { id: 68, name: 'Sunfeast Yippee', categoryId: 21, categoryName: 'Instant Noodles & Pasta', price: '₹20', image: 'https://images.unsplash.com/photo-1574063148180-cb195c0c52e5' },
  { id: 69, name: 'Pasta', categoryId: 21, categoryName: 'Instant Noodles & Pasta', price: '₹30', image: 'https://images.unsplash.com/photo-1574063148180-cb195c0c52e5' },

  // Frozen Snacks
  { id: 70, name: 'Frozen French Fries', categoryId: 22, categoryName: 'Frozen Snacks', price: '₹90', image: 'https://images.unsplash.com/photo-1626172146325-192ab4c122fa' },
  { id: 71, name: 'Frozen Samosa', categoryId: 22, categoryName: 'Frozen Snacks', price: '₹120', image: 'https://images.unsplash.com/photo-1626172146325-192ab4c122fa' },
  { id: 72, name: 'Frozen Spring Roll', categoryId: 22, categoryName: 'Frozen Snacks', price: '₹110', image: 'https://images.unsplash.com/photo-1626172146325-192ab4c122fa' },
  { id: 73, name: 'Frozen Momos', categoryId: 22, categoryName: 'Frozen Snacks', price: '₹140', image: 'https://images.unsplash.com/photo-1626172146325-192ab4c122fa' },

  // Ready Meals
  { id: 74, name: 'MTR Ready Meals', categoryId: 23, categoryName: 'Ready Meals', price: '₹80', image: 'https://images.unsplash.com/photo-1587747360276-4b82dc91dfff' },
  { id: 75, name: 'ITC Ready Meals', categoryId: 23, categoryName: 'Ready Meals', price: '₹90', image: 'https://images.unsplash.com/photo-1587747360276-4b82dc91dfff' },
  { id: 76, name: 'Haldiram\'s Ready Meals', categoryId: 23, categoryName: 'Ready Meals', price: '₹100', image: 'https://images.unsplash.com/photo-1587747360276-4b82dc91dfff' },
  { id: 77, name: 'Kohinoor Ready Meals', categoryId: 23, categoryName: 'Ready Meals', price: '₹95', image: 'https://images.unsplash.com/photo-1587747360276-4b82dc91dfff' },

  // Frozen Desserts
  { id: 78, name: 'Ice Cream', categoryId: 24, categoryName: 'Frozen Desserts', price: '₹60', image: 'https://images.unsplash.com/photo-1541661538396-6d2d3f7e8bec' },
  { id: 79, name: 'Frozen Yogurt', categoryId: 24, categoryName: 'Frozen Desserts', price: '₹70', image: 'https://images.unsplash.com/photo-1541661538396-6d2d3f7e8bec' },
  { id: 80, name: 'Gelato', categoryId: 24, categoryName: 'Frozen Desserts', price: '₹80', image: 'https://images.unsplash.com/photo-1541661538396-6d2d3f7e8bec' },
  { id: 81, name: 'Kulfi', categoryId: 24, categoryName: 'Frozen Desserts', price: '₹90', image: 'https://images.unsplash.com/photo-1541661538396-6d2d3f7e8bec' },

  { id: 82, name: 'Green Tea', categoryId: 25, categoryName: 'Tea', price: '₹5.99', image: 'path_to_image' },
  { id: 83, name: 'Black Tea', categoryId: 25, categoryName: 'Tea', price: '₹4.99', image: 'path_to_image' },
  { id: 84, name: 'Herbal Tea', categoryId: 25, categoryName: 'Tea', price: '₹6.99', image: 'path_to_image' },

  // Coffee
  { id: 85, name: 'Instant Coffee', categoryId: 26, categoryName: 'Coffee', price: '₹7.99', image: 'path_to_image' },
  { id: 86, name: 'Ground Coffee', categoryId: 26, categoryName: 'Coffee', price: '₹8.99', image: 'path_to_image' },
  { id: 87, name: 'Decaf Coffee', categoryId: 26, categoryName: 'Coffee', price: '₹9.99', image: 'path_to_image' },

  // Health Drinks
  { id: 88, name: 'Protein Shake', categoryId: 27, categoryName: 'Health Drinks', price: '₹12.99', image: 'path_to_image' },
  { id: 89, name: 'Energy Drink', categoryId: 27, categoryName: 'Health Drinks', price: '₹3.99', image: 'path_to_image' },
  { id: 90, name: 'Vitamin Water', categoryId: 27, categoryName: 'Health Drinks', price: '₹4.99', image: 'path_to_image' },

  // Bread
  { id: 91, name: 'White Bread', categoryId: 28, categoryName: 'Bread', price: '₹2.99', image: 'path_to_image' },
  { id: 92, name: 'Whole Wheat Bread', categoryId: 28, categoryName: 'Bread', price: '₹3.49', image: 'path_to_image' },
  { id: 93, name: 'Multigrain Bread', categoryId: 28, categoryName: 'Bread', price: '₹3.99', image: 'path_to_image' },

  // Cookies
  { id: 94, name: 'Chocolate Chip Cookies', categoryId: 29, categoryName: 'Cookies', price: '₹4.99', image: 'path_to_image' },
  { id: 95, name: 'Oatmeal Raisin Cookies', categoryId: 29, categoryName: 'Cookies', price: '₹5.49', image: 'path_to_image' },
  { id: 96, name: 'Sugar Cookies', categoryId: 29, categoryName: 'Cookies', price: '₹3.99', image: 'path_to_image' },

  // Cakes
  { id: 97, name: 'Chocolate Cake', categoryId: 30, categoryName: 'Cakes', price: '₹9.99', image: 'path_to_image' },
  { id: 98, name: 'Vanilla Cake', categoryId: 30, categoryName: 'Cakes', price: '₹8.99', image: 'path_to_image' },
  { id: 99, name: 'Red Velvet Cake', categoryId: 30, categoryName: 'Cakes', price: '₹10.99', image: 'path_to_image' },

  // Atta
  { id: 100, name: 'Whole Wheat Atta', categoryId: 31, categoryName: 'Atta', price: '₹40', image: 'path_to_image' },
  { id: 101, name: 'Multigrain Atta', categoryId: 31, categoryName: 'Atta', price: '₹50', image: 'path_to_image' },
  { id: 102, name: 'Besan', categoryId: 31, categoryName: 'Atta', price: '₹30', image: 'path_to_image' },

  // Rice
  { id: 103, name: 'Basmati Rice', categoryId: 32, categoryName: 'Rice', price: '₹80', image: 'path_to_image' },
  { id: 104, name: 'Sona Masoori Rice', categoryId: 32, categoryName: 'Rice', price: '₹70', image: 'path_to_image' },
  { id: 105, name: 'Parboiled Rice', categoryId: 32, categoryName: 'Rice', price: '₹60', image: 'path_to_image' },

  // Dal
  { id: 106, name: 'Toor Dal', categoryId: 33, categoryName: 'Dal', price: '₹45', image: 'path_to_image' },
  { id: 107, name: 'Moong Dal', categoryId: 33, categoryName: 'Dal', price: '₹50', image: 'path_to_image' },
  { id: 108, name: 'Chana Dal', categoryId: 33, categoryName: 'Dal', price: '₹55', image: 'path_to_image' }

];
