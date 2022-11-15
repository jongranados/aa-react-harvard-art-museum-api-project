import { NavLink } from "react-router-dom"; 
import './GalleryNavigation.css'
function navLinkGenerator(gallery) { 
    const url = `/galleries/${ gallery.id }`; 
    return(
        <NavLink key={ gallery.id } to={ url }>{gallery.name}</NavLink>
    );
};

const GalleryNavigation = ({ galleries }) => { 
    return(
        <nav> 
            <h1>Galleries</h1>
            <NavLink exact to='/'>Home</NavLink>
            {galleries.map(gallery => navLinkGenerator(gallery))}
        </nav>

    )
};

export default GalleryNavigation; 
