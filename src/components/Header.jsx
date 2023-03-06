import { Link } from 'react-router-dom';
import home from '../assets/home.png'


function Header(){
    return(
       <>
        <div className='mx-auto w-50'>
        <Link to={"/"}><img src={home} class="img-fluid"/> </Link>
        </div>
       </>
       
            
       
    )
}
export default Header;