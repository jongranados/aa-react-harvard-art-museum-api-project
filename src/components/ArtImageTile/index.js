import "./ArtImageTile.css";
import { Link } from 'react-router-dom'; 

const ArtImageTile = ({galleryId, art}) => { 
    const linkURL = `/galleries/${galleryId}/art/${art.id}`; 
    const imgURL = art.primaryimageurl;
    
    return (
        <Link to={linkURL}>
            <img src={imgURL} alt=""></img>
        </Link>
    )
}; 

export default ArtImageTile; 
