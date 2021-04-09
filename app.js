const menu = [
  {
    id: 1,
    title: "Dosa",
    category: "breakfast",
    price: 25.00,
    img: "./images/item-15.png",
    desc: `A dosa is a rice pancake, originating from South India, made from a fermented batter. It is somewhat similar to a crepe in appearance. Its main ingredients are rice and black gram, ground together in a fine, smooth batter with a dash of salt, then fermented.`
  },
  {
    id: 2,
    title: "Idli",
    category: "breakfast",
    price: 20.00,
    img: "./images/item-16.png",
    desc: `Idli or idly are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and among Tamils in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils and rice`,
  },
  {
    id: 3,
    title: "Puri",
    category: "breakfast",
    price: 30.00,
    img: "./images/item-17.png",
    desc: `Puri is a deep-fat fried bread made from unleavened whole-wheat flour that originated in the Indian subcontinent. It is eaten for breakfast or as a snack or light meal. It is usually served with a savory curry or bhaji, as in puri bhaji, but may also be eaten with sweet dishes`,
  },
  {
    id: 4,
    title: "Bonda",
    category: "breakfast",
    price: 20.00,
    img: "./images/item-19.png",
    desc: `Bonda is a typical South Indian snack that has various sweet and spicy versions in different regions. Most common of which is "Aloo Bonda", and other region specific variations including potato replaced with sweet potato, tapioca, grated pineapple, green peas, etc. `,
  },
  {
    id: 5,
    title: "Chapathi",
    category: "breakfast",
    price: 35.00,
    img: "./images/item-18.png",
    desc: `Chapati, also known as roti, safati, shabaati, phulka and roshi, is an unleavened flatbread originating from the Indian subcontinent and staple in India, Nepal, Bangladesh, Pakistan, Sri Lanka, East Africa and the Caribbean.`,
  },
  {
    id: 6,
    title: "India Style Lunch",
    category: "lunch",
    price: 200,
    img: "./images/item-20.png",
    desc: `A light midday meal between breakfast and dinner; lunch. Any light meal or snack. A restaurant or lunchroom: Let's eat at the dairy lunch.`,
  },
  {
    id: 7,
    title: "NothernIndian Style Lunch",
    category: "lunch",
    price: 180,
    img: "./images/item-21.png",
    desc: `North India has heavier, creamier dishes than the South, which cooks with a higher water content.`,
  },
  {
    id: 8,
    title: "SounthIndian Style Lunch ",
    category: "lunch",
    price: 150,
    img: "./images/item-22.png",
    desc: ` The thali platter would have combination of sweet, salt, bitter, sour and spicy mixed with rice or chapathi as main dish. All the recipes or dishes served in the the thali makes a perfect balance and serves all the nutrients required for a proper diet.`,
  },
  {
    id: 9,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 10,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 11,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "Veg Noodles",
    category: "Snacks",
    price: 30.00,
    img: "./images/item-13.png",
    desc: `This quick and simple noodle recipe with lots of garlic flavour and spiciness will win your heart instantly. Enjoy!`,
  },
  {
    id: 13,
    title: "Chicken Noodles",
    category: "Snacks",
    price: 50.00,
    img: "./images/item-14.png",
    desc: `This quick and simple chicken noodle recipe with lots of garlic flavour, chicken pieces and spiciness will win your heart instantly. Enjoy!`,
  },
  {
    id: 14,
    title: "Veg Manchuria",
    category: "Snacks",
    price: 30.00,
    img: "./images/item-11.png",
    desc: `Manchurian is an Indian Chinese fried cauliflower dish. Gobi Manchurian is the result of the adaptation of Chinese cooking and seasoning techniques to suit Indian tastes and has become a staple of Indian Chinese cuisine. The word Manchurian means native or inhabitant of Manchuria.`,
  },
  {
    id: 15,
    title: "Chicken Machuria",
    category: "Snacks",
    price: 50.00,
    img: "./images/item-12.png",
    desc: `Delicious fried chicken in slightly sweet,hot & sour Machurian sauce. Chicken Manchurian is an Indo Chinese Food that is much popular in the Indian Sub Continent`,
  },
  {
    id: 16,
    title: "South Indian Dinner",
    category: "dinner",
    price: 180.00,
    img: "./images/item-24.png",
    desc: `South Indians tend to eat more rice or rice based items with their meals`,
  },
  {
    id: 17,
    title: "North Indian Dinner",
    category: "dinner",
    price: 180.00,
    img: "./images/item-23.png",
    desc: `North Indian uses a lot of yogurt, cream and is non-veg, North Indian prefer breads like naan, chapati and paratha.`,
  },
 
  
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
