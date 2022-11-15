import { useParams } from 'react-router-dom'; 

const GalleryView = ({ galleries }) => { 
    const { galleryId } = useParams(); 

    const found = galleries.find(gallery => galleryId === gallery.gallerynumber)

    console.log(found); 
    return (
        <h2>{ found.name }</h2>
    )

};

export default GalleryView; 
