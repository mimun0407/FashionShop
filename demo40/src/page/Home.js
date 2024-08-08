import Navbar from '../component/Navbar';
import '../css/home.css'
import Footer from '../component/Footer'
function Home() {
  return (
    <div>
      <Navbar />
      <div className='home-head'>
        <img className='home-image' src="Image/FMv4_KMVIAAcfJS.jpeg" alt="Hero" />
        <h1 className='text-on-top'>Your fashion should make you feel good, look great.</h1>
        <button className='button-on-top'>Shop now</button>
      </div>
      
      <div className='big-first-list container'>
      <div className="link-title">
      <div className="section-title m-none">
        <div className="sub-title">
          <img 
            src="https://assets-global.website-files.com/659507bb7a4d47c6fe9ae693/65cdb0be9edc17f970d858e6_star.svg" 
            loading="lazy" 
            alt="Star Icon" 
          />
          <div>Fabrik Finds</div>
        </div>
        <h2 className="title">Featured Products</h2>
      </div>
      <div className="section-link desktop">
        <a 
          data-w-id="1170cbc9-68d6-1109-f4f9-41c2becdad8a" 
          href="/shop" 
          className="secondary-btn w-inline-block"
        >
          <div>View All</div>
          <img 
            src="https://assets-global.website-files.com/659507bb7a4d47c6fe9ae693/65cd96534db29f47badcbf8c_ic-arrow.svg" 
            loading="lazy" 
            style={{
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)', 
              transformStyle: 'preserve-3d'
            }} 
            alt="Arrow" 
            className="arrow" 
          />
        </a>
      </div>
    </div>
     
     
      <div className='home-first-list container'>
        <div >
        <img className='image-first-list' src='/Image/65cf52cbdc2e3db72984e0c2_Product-Thumb-15.jpg' alt="Picture">
        </img>
        <div class="product-data">
        <h5 class="product-name">Street Style Bomber Jacket</h5>
        <div class="price-wrap">
          <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$&nbsp;79.00&nbsp;USD</div>
          <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="old-price">$&nbsp;100.00&nbsp;USD</div>
          </div>
      </div>
        </div>
        <div >
        <img className='image-first-list' src='/Image/65cf528f93cf1b86ac095cdf_Product-Thumb-13.jpg' alt="Picture"></img>
        <div class="product-data">
        <h5 class="product-name">Street Style Bomber Jacket</h5>
        <div class="price-wrap">
          <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$&nbsp;79.00&nbsp;USD</div>
          <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="old-price">$&nbsp;100.00&nbsp;USD</div>
          </div>
      </div>
        </div>
        <div >
        <img className='image-first-list' src='/Image/65cf528fe9d4068d6830a27a_Product-Thumb-14.jpg' alt="Picture"></img>
        <div class="product-data">
        <h5 class="product-name">Street Style Bomber Jacket</h5>
        <div class="price-wrap">
          <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$&nbsp;79.00&nbsp;USD</div>
          <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="old-price">$&nbsp;100.00&nbsp;USD</div>
          </div>
      </div>
        </div>

      </div>
      <div className="w-layout-blockcontainer container w-container">
    <div className="section-title">
      <div className="sub-title">
        <img src="https://assets-global.website-files.com/659507bb7a4d47c6fe9ae693/65cdb0be9edc17f970d858e6_star.svg" loading="lazy" alt="Star Icon" />
        <div>Categories</div>
      </div>
      <h2 className="title">Our Collection</h2>
    </div>
    <div className="category-wrap">
      <div className="oc-wrap w-dyn-list">
        <div role="list" className="collection-list w-dyn-items">
          <div role="listitem" className="collection-item w-dyn-item">
            <a href="/category/accessories" className="category-link w-inline-block">
              <img alt="" loading="lazy" style={{ transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)", transformStyle: "preserve-3d" }} 
                   src="https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cdbde2bddf30bdf04b5846_category-03.jpg" 
                   sizes="(max-width: 479px) 92vw, (max-width: 767px) 30vw, (max-width: 991px) 22vw, 23vw" 
                   srcSet="https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cdbde2bddf30bdf04b5846_category-03-p-500.jpg 500w, https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cdbde2bddf30bdf04b5846_category-03-p-800.jpg 800w, https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cdbde2bddf30bdf04b5846_category-03.jpg 824w" 
                   className="category-image-v2" />
              <div className="category-name">Accessories</div>
            </a>
          </div>
          <div role="listitem" className="collection-item w-dyn-item">
            <a href="/category/women" className="category-link w-inline-block">
              <img alt="" loading="lazy" style={{ transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)", transformStyle: "preserve-3d" }} 
                   src="https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cdbdd248e4112d27a04861_category-02.jpg" 
                   sizes="(max-width: 479px) 92vw, (max-width: 767px) 30vw, (max-width: 991px) 22vw, 23vw" 
                   srcSet="https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cdbdd248e4112d27a04861_category-02-p-500.jpg 500w, https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cdbdd248e4112d27a04861_category-02-p-800.jpg 800w, https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cdbdd248e4112d27a04861_category-02.jpg 824w" 
                   className="category-image-v2" />
              <div className="category-name">Women</div>
            </a>
          </div>
          <div role="listitem" className="collection-item w-dyn-item">
            <a href="/category/men" className="category-link w-inline-block">
              <img alt="" loading="lazy" style={{ transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)", transformStyle: "preserve-3d" }} 
                   src="https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cdbd8d43ad1ba0b6b4a346_category-01.jpg" 
                   sizes="(max-width: 479px) 92vw, (max-width: 767px) 30vw, (max-width: 991px) 22vw, 23vw" 
                   srcSet="https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cdbd8d43ad1ba0b6b4a346_category-01-p-500.jpg 500w, https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cdbd8d43ad1ba0b6b4a346_category-01-p-800.jpg 800w, https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cdbd8d43ad1ba0b6b4a346_category-01.jpg 824w" 
                   className="category-image-v2" />
              <div className="category-name">Men</div>
            </a>
          </div>
        </div>
      </div>
      <a href="/shop" className="category-btn w-inline-block">
        <div>Discover all new items</div>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} className="category-arrow">
          <img src="https://assets-global.website-files.com/659507bb7a4d47c6fe9ae693/65cd96534db29f47badcbf8c_ic-arrow.svg" loading="lazy" style={{ filter: "invert(0%)" }} alt="Arrow" className="arrow" />
        </div>
      </a>
    </div>
  </div>
      </div>
         <Footer />
    </div>
  );
}

export default Home;
