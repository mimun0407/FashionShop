import '../css/Navbar.css'
import { CiUser } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
function navbar(){
    return(
        <div className='nav-main'>
            <div className='nav-left'>
                <div className='nav-name' style={{cursor:'pointer'}}>Mimun</div>
                <div className='nav-List'>
                    <div>Shop</div>
                    <div>Our Story</div>
                    <div>Colection</div>
                    <div>Blogs</div>
                    <div>Reviews</div>
                    <div>Contact</div>
                </div>
            </div>
            <div className='nav-right'>
            <div  class="search-form">
                <input className="s-input"   placeholder="Search" type="search" required=""></input>
                <button type="submit" className="search-button">
                 <GoSearch />
                     </button>
            </div>
                <div className='nav-icon'>
                <div><CiUser />
                </div>
                <div ><GiShoppingCart /></div>
                <label for="nav-mobile-check" ><FiMenu /> </label>
                </div>
            </div>
            <input type='checkbox' name="" id="nav-mobile-check" className='nav-checkbox'></input>
            <div className='nav-overlay'>  
            <div className='nav-List-mobile'>
                    <div>Shop</div>
                    <div>Our Story</div>
                    <div>Colection</div>
                    <div>Blogs</div>
                    <div>Reviews</div>
                    <div>Contact</div>
                </div>
                <div  class="search-form-mobile">
                <input className="s-input-mobile"   placeholder="Search" type="search" required=""></input>
                <button type="submit" className="search-button-mobile">
                 <GoSearch />
                     </button>
            </div>
            </div>
            
        </div>
    )
}
export default navbar