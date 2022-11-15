import { useParams, Link, Route } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile'; 


const GalleryView = ({ galleries }) => { 

    const { galleryId } = useParams(); 
    const gallery = galleries.find(gallery => galleryId === gallery.gallerynumber)

    return (
        <>
            <h2>{gallery.name}</h2>
            <Route exact path='/galleries/:galleryId'>
                {gallery.objects.map(art => <ArtImageTile key={art.id} galleryId={galleryId} art={art} />)}
            </Route>
        </>
    )

};

export default GalleryView; 
