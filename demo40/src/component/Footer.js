import '../css/Footer.css'
function Footer(){
    return(
        <div>

    <section className="footer">
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-wrap">
          <div className="footer-left">
            <p className="footer-info">Subscribe for elegance, exclusivity, and endless style stories</p>
            <div className="newsletter-form w-form">
              <form 
                id="wf-form-Contact-Form" 
                name="wf-form-Contact-Form" 
                data-name="Contact Form" 
                method="get" 
                className="newsletter-field" 
                data-wf-page-id="659507bb7a4d47c6fe9ae697" 
                data-wf-element-id="7e13f6ac-55f5-d1f3-6abf-9bbba0a4b7d0" 
                aria-label="Contact Form"
              >
                <input 
                  className="newsletter-input w-input" 
                  maxLength="256" 
                  name="Email" 
                  data-name="Email" 
                  placeholder="Enter your email" 
                  type="email" 
                  id="email" 
                  required
                />
                <label id="terms-conditions" className="w-checkbox checkbox-field">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                  <input 
                    type="checkbox" 
                    name="Terms-Conditions-2" 
                    id="Terms-Conditions-2" 
                    data-name="Terms Conditions 2" 
                    required 
                    style={{ position: "absolute", zIndex: -1 }}
                  />
                  <span className="checkbox-label w-form-label" htmlFor="Terms-Conditions-2">
                    I hereby agree to the <a href="/terms-conditions" className="plain-link">terms &amp; conditions</a> of fabrik
                  </span>
                </label>
                <input type="submit" data-wait="" className="newsletter-btn w-button" value="Submit" />
              </form>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-menu">
              <a href="/about" className="footer-link">About us</a>
              <a href="/categories" className="footer-link">Categories</a>
              <a href="/shop" className="footer-link">Shop</a>
              <a href="/faq" className="footer-link">FAQ</a>
              <a href="/contact-us" className="footer-link">Contact us</a>
              <a href="/blogs" className="footer-link">Blogs</a>
              <a href="/reviews" className="footer-link">Reviews</a>
            </div>
            <div className="footer-menu">
              <a href="/template-info/licensing" className="footer-link">Licensing</a>
              <a href="/template-info/changelog" className="footer-link">Changelog</a>
              <a href="/return-policy" className="footer-link">Return Policy</a>
              <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
              <a href="/terms-conditions" className="footer-link">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </div>
       
    </section>
    </div>
    )
}
export default Footer