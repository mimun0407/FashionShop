import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import '../css/ProductDetail.css'
function ProductDetail(){
    return(
        <>
        <Navbar />
        <div className="page-data">
      <section className="product-main">
        <div className="w-layout-blockcontainer container w-container">
          <div className="product-wrap">
            <div className="product-image-wrap">
              <img
                src="https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf528f93cf1b86ac095cdf_Product-Thumb-13.jpg"
                loading="eager"
                alt=""
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 43vw"
                srcSet="https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf528f93cf1b86ac095cdf_Product-Thumb-13-p-500.jpg 500w, https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf528f93cf1b86ac095cdf_Product-Thumb-13.jpg 618w"
                className="product-main-img"
              />
              <a href="#" className="product-plus w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog">
                <script type="application/json" className="w-json">
                  {JSON.stringify({
                    items: [
                      {
                        url: "https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf528f93cf1b86ac095cdf_Product-Thumb-13.jpg",
                        type: "image"
                      }
                    ],
                    group: "Group"
                  })}
                </script>
              </a>
            </div>
            <div className="product-info">
              <h2 className="product-main-name">Glacier Front Sweater Dress</h2>
              <p className="product-short-info">
                This sophisticated piece seamlessly combines warmth with style, featuring a unique glacier-inspired front design.
                Crafted from luxurious, soft knit fabric, this sweater dress is a must-have for cozy yet fashion-forward days.
              </p>
              <div className="product-price-box">
                <div className="sale-price" dangerouslySetInnerHTML={{ __html: "$&nbsp;99.00&nbsp;USD" }} />
              </div>
              <div className="add-to-cart">
                <form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="65d050cbae9b76c3ecafbdcf" data-loading-text="Adding to cart..." data-commerce-product-id="65d050c914a8e354f1dcce0b" className="w-commerce-commerceaddtocartform default-state">
                  <input type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-15632ee9179d54512009ae1731b16298" name="commerce-add-to-cart-quantity-input" min="1" className="w-commerce-commerceaddtocartquantityinput quantity-field" defaultValue="1" />
                  <input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" className="w-commerce-commerceaddtocartbutton cart-btn" value="Add to Cart" />
                </form>
                <div tabIndex="0" style={{ display: 'none' }} className="w-commerce-commerceaddtocartoutofstock success-message">
                  <div>This product is out of stock.</div>
                </div>
                <div aria-live="assertive" data-node-type="commerce-add-to-cart-error" style={{ display: 'none' }} className="w-commerce-commerceaddtocarterror error-message">
                  <div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">
                    Product is not available in this quantity.
                  </div>
                </div>
              </div>
              <div className="product-information">
                <div className="product-detail">
                  <div className="info-title">SKU:</div>
                  <div className="data-info" dangerouslySetInnerHTML={{ __html: "FAB-GFD-003" }} />
                </div>
                <div className="product-detail">
                  <div className="info-title">Category:</div>
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <a href="/category/women" className="plain-link">Women</a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/return-policy">Free delivery &amp; Returns policies</a>
              </div>
            </div>
            <div className="p-none w-dyn-list w-dyn-items-repeater-ref">
              <script type="text/x-wf-template" id="wf-template-8255f90a-040e-b987-a204-c3715f97c2f2">
                {`
                  <div role="listitem" class="w-dyn-item w-dyn-repeater-item">
                    <a href="#" data-wf-sku-bindings="[{from:'f_more_images_4dr[]',to:'media'}]" class="w-inline-block w-lightbox">
                      <img src="https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf492cbd2d6d66253029fb_Product-Thumb-01.jpg" loading="lazy" data-wf-sku-bindings="[{from:'f_more_images_4dr[]',to:'src'}]" alt="" sizes="100vw" srcset="https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf492cbd2d6d66253029fb_Product-Thumb-01-p-500.jpg 500w, https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf492cbd2d6d66253029fb_Product-Thumb-01.jpg 618w"/>
                      <script type="application/json" class="w-json">
                        {"items":[{"url":"https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf492cbd2d6d66253029fb_Product-Thumb-01.jpg","type":"image"}],"group":"Group"}
                      </script>
                    </a>
                  </div>
                `}
              </script>
              <div role="list" className="w-dyn-items" data-wf-collection="f_more_images_4dr" data-wf-template-id="wf-template-8255f90a-040e-b987-a204-c3715f97c2f2">
                {/* Add dynamic items here */}
              </div>
              <div className="empty-state w-dyn-hide w-dyn-empty">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-details">
        <div className="w-layout-blockcontainer container w-container">
          <div className="product-description">
            <h3 className="product-info-title">Description</h3>
            <div className="prduct-richtext w-richtext">
              <p>Step into the enchanting world of Chanel, where elegance and allure intertwine to create a captivating olfactory masterpiece. This exquisite fragrance is meticulously crafted to evoke emotions, leaving a lasting impression that lingers in the air. At its core, Chanel reveals a harmonious blend of carefully selected notes, each playing a vital role in the symphony of scents. The intoxicating floral bouquet of [describe floral notes] embraces the senses, drawing you deeper into its captivating allure.</p>
              <ul role="list">
                <li>Buildable coverage: This concealer provides customizable coverage from sheer to full, ensuring a natural-looking finish.</li>
                <li>Radiant finish: It imparts a luminous glow to the skin, brightening the under-eye area and adding a healthy radiance.</li>
                <li>Long-lasting formula: The concealer stays put throughout the day without creasing or fading, maintaining a fresh appearance.</li>
                <li>Wide shade range: NARS offers a diverse range of shades to cater to different skin tones, ensuring a precise match.</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="product-info-title">Care Instructions</h3>
            <div className="prduct-richtext w-richtext">
              <p>To ensure the longevity and pristine condition of your cherished Chanel fragrance, follow these care instructions meticulously. Store your fragrance in a cool, dry place away from direct sunlight and extreme temperatures. Avoid exposing the bottle to excessive heat, as it may alter the scent composition. Always replace the cap tightly after each use to prevent air from compromising the fragrance's integrity. Additionally, refrain from spraying the perfume on delicate fabrics or jewelry to avoid potential damage.</p>
            </div>
          </div>
          <div>
            <h3 className="product-info-title">Size &amp; Fit</h3>
            <div className="prduct-richtext w-richtext">
              <p>Experience the timeless elegance of Chanel with a fragrance that exudes sophistication and allure. This carefully crafted scent is designed to leave a lasting impression, making it an ideal choice for special occasions and everyday wear. The carefully selected blend of notes ensures a harmonious balance, allowing you to indulge in the luxurious essence of Chanel. Elevate your fragrance collection with this iconic masterpiece, a true testament to the artistry and craftsmanship that define the Chanel brand.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="products">
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-title">
          <div className="sub-title">
            <img
              src="https://assets-global.website-files.com/659507bb7a4d47c6fe9ae693/65cdb0be9edc17f970d858e6_star.svg"
              loading="lazy"
              alt="Star Icon"
            />
            <div>Related</div>
          </div>
          <h2 className="title">Similar Products</h2>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="product-list w-dyn-items">
            {[
              {
                href: "/product/fireside-flannel-shirt-dress",
                src: "https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf528f94d93a7c75ade705_Product-Thumb-07.jpg",
                srcset: "https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf528f94d93a7c75ade705_Product-Thumb-07-p-500.jpg 500w, https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf528f94d93a7c75ade705_Product-Thumb-07.jpg 618w",
                name: "Fireside Flannel Shirt Dress",
                price: "$ 129.99 USD",
              },
              {
                href: "/product/sculpted-satin-sheath-gown",
                src: "https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf529b845468f5b4536dab_Product-Thumb-06.jpg",
                srcset: "https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf529b845468f5b4536dab_Product-Thumb-06-p-500.jpg 500w, https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf529b845468f5b4536dab_Product-Thumb-06.jpg 618w",
                name: "Sculpted Satin Sheath Gown",
                price: "$ 99.86 USD",
              },
              {
                href: "/product/blissful-lounge-track-pants",
                src: "https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf52abef3bb516d9431144_Product-Thumb-16.jpg",
                srcset: "https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf52abef3bb516d9431144_Product-Thumb-16-p-500.jpg 500w, https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf52abef3bb516d9431144_Product-Thumb-16.jpg 618w",
                name: "Blissful Lounge Track Pants",
                price: "$ 68.90 USD",
              },
              {
                href: "/product/double-breasted-blazer",
                src: "https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf527da1c8a8b2c0b44c3f_Product-Thumb-09.jpg",
                srcset: "https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf527da1c8a8b2c0b44c3f_Product-Thumb-09-p-500.jpg 500w, https://assets-global.website-files.com/65cc81e94b2c1a9169171905/65cf527da1c8a8b2c0b44c3f_Product-Thumb-09.jpg 618w",
                name: "Double-Breasted Blazer",
                price: "$ 119.50 USD",
              },
            ].map((product, index) => (
              <div role="listitem" className="product-item w-dyn-item" key={index}>
                <a
                  data-w-id="98bc6159-af93-787c-b35d-3c4bd2775de3"
                  href={product.href}
                  className="product-link w-inline-block"
                >
                  <div className="product-img">
                    <img
                      alt=""
                      loading="lazy"
                      style={{
                        transform:
                          'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
                        transformStyle: 'preserve-3d',
                      }}
                      data-wf-sku-bindings='[{"from":"f_main_image_4dr","to":"src"}]'
                      src={product.src}
                      sizes="(max-width: 479px) 44vw, (max-width: 767px) 46vw, (max-width: 991px) 31vw, 22vw"
                      srcSet={product.srcset}
                      className="product-image"
                    />
                  </div>
                  <div className="product-data">
                    <h5 className="product-name">{product.name}</h5>
                    <div className="price-wrap">
                      <div
                        data-wf-sku-bindings='[{"from":"f_price_","to":"innerHTML"}]'
                        dangerouslySetInnerHTML={{ __html: product.price }}
                      />
                      <div
                        data-wf-sku-bindings='[{"from":"f_compare_at_price_7dr10dr","to":"innerHTML"}]'
                        className="old-price w-dyn-bind-empty"
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
        <Footer />
        
        </>
    )
}
export default ProductDetail;