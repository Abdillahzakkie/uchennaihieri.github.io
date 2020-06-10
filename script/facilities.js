// PLEASE DO NOT TOUCH THIS SCRIPT FILE, TEMPERING WITH SCRIPT MIGHT BREAK SOME CODES
// JUST GLANCE THROUGH THE CODE---NO MORE

const Btns = [...document.querySelectorAll('.banner-btn')];
const productItem = document.querySelector('.product-card');
const form = document.querySelector('.form-group');
const form_input = document.querySelector('.form-control-input');

const database = [
    {
      sys: {
        id: "1",
        seller: "Johnny William",
      },
      fields: {
        name: "Men Watch",
        slug: "MenWatch",
        type: "first_class",
        price: 25.5,
        images: [
          {
            fields: {
              file: {
                url: 'product1.png'
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "2",
        seller: "Johnny William",
      },
      fields: {
        name: "Men Watch",
        slug: "MenWatch",
        type: "second_class",
        price: 25.5,
        images: [
          {
            fields: {
              file: {
                url: 'product2.png'
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "3",
        seller: "Johnny William",
      },
      fields: {
        name: "Men Watch",
        slug: "MenWatch",
        type: "regular",
        price: 25.5,
        images: [
          {
            fields: {
              file: {
                url: 'product3.png'
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "4",
        seller: "Johnny William",
      },
      fields: {
        name: "Men Watch",
        slug: "MenWatch",
        type: "regular",
        price: 25.5,
        images: [
          {
            fields: {
              file: {
                url: 'product4.png'
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "5",
        seller: "Johnny William",
      },
      fields: {
        name: "Men Watch",
        slug: "MenWatch",
        type: "second_class",
        price: 25.5,
        images: [
          {
            fields: {
              file: {
                url: 'product5.jpg'
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "6",
        seller: "Johnny William",
      },
      fields: {
        name: "Men Watch",
        slug: "MenWatch",
        type: "first_class",
        price: 25.5,
        images: [
          {
            fields: {
              file: {
                url: 'product6.png'
              }
            }
          }
        ]
      }
    },
  ];

// Format data
const formatData = data => {
  const tempItem = data.map(item => {
    const id = item.sys.id;
    const seller = item.sys.seller;
    const images = item.fields.images.map(image => image.fields.file.url);
    
    return {id, seller,...item.fields, images}
  })
  return tempItem
}

// Product list item
const myProductList = data => {
  let products = data.map( item => 
    `<div class="center card" >
        <img src=${`../Assets/${item.images[0]}`} alt=${item.name} />
        <h2>
            ${item.name}
        </h2>
        <a href="#">
            <button class="center features">features</button>
        </a>
      </div>`
)
  return products
}
let products = formatData(database).map(item => item);
productItem.innerHTML = myProductList(products).join('')


// Add event listeners
window.addEventListener('load', () => {
  Btns.map(btn => {
    btn.addEventListener('click', e => {
      const data = formatData(database);
      const currentItem = e.currentTarget.dataset.id;

      if(currentItem === 'all') products = data.filter(item => item);
      else products = data.filter(item => item.type === currentItem);

      productItem.innerHTML = myProductList(products).join('')
    })
  })
})