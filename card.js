

const cardContainer = document.getElementById('card-container');

async function api() {
  

try {
  const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
        data.forEach(p => {
          
            cardContainer.innerHTML +=

         `
        <article class="card">
          <div class="image-wrap">
            <img src="${p.image}" alt="${p.title || p.category}">
          </div>
          <div class="card-body">
            <h3 class="title">${p.category}</h3>
            <p class="desc">${p.description}</p>
            <button class="toggle-desc">See more</button>
            <div class="meta">
              <div class="price">$${Number(p.price).toFixed(2)}</div>
              <div class="rating">rating  ${p.rating && p.rating.rate }</div>
            </div>
            <div class="actions">
              <button class="btn btn-add">Add to Cart</button>
              <button class="btn btn-wish">Wishlist</button>
            </div>
          </div>
        </article>
      `;

    });}
    catch(error) {
      console.error('Error fetching products:', error);
    }

};
api()



    

    // NAVEbAR SLIDE_DOWN
    (function(){
      const nav = document.querySelector('nav');
      if(!nav) return;
      const threshold = 20; // px scrolled before showing nav
      function onScroll(){
        if(window.scrollY > threshold) nav.classList.add('nav--shown');
        else nav.classList.remove('nav--shown');
      }
      
      onScroll();
      window.addEventListener('scroll', onScroll, {passive:true});
    })();

    // NAV
    document.addEventListener('DOMContentLoaded', function(){
      const nav = document.querySelector('nav');
      const toggle = document.querySelector('.nav-toggle');
      const links = document.querySelectorAll('.nav-links a');
      if(!toggle || !nav) return;

      toggle.addEventListener('click', function(e){
        const open = nav.classList.toggle('nav-open');
        toggle.classList.toggle('open', open);
      });

      // close when a link is clicked (mobile)
      links.forEach(l=> l.addEventListener('click', ()=>{
        if(window.innerWidth <= 550){
          nav.classList.remove('nav-open');
          toggle.classList.remove('open');
        }
      }));

      // click outside to close
      document.addEventListener('click', function(e){
        if(window.innerWidth > 550) return;
        if(!nav.classList.contains('nav-open')) return;
        if(e.target.closest('nav')) return;
        nav.classList.remove('nav-open');
        toggle.classList.remove('open');
      });
    });

    // Footer

    const shopHeading = document.querySelector(".section-2 h2");
const serviceHeading = document.querySelector(".section-3 h2");

shopHeading.addEventListener("click", () => {

    if(window.innerWidth > 550) return;

    document.querySelector(".shop-content").classList.toggle("show");
    shopHeading.querySelector(".footer-arrow").classList.toggle("rotate");
});

serviceHeading.addEventListener("click", () => {

    if(window.innerWidth > 550) return;

    document.querySelector(".service-content").classList.toggle("show");
    serviceHeading.querySelector(".footer-arrow").classList.toggle("rotate");
});

 




