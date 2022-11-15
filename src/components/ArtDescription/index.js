import { useParams, Link } from 'react-router-dom'

const ArtDescription = ({ gallery }) => { 
    const { artId } = useParams();
    const art = gallery.objects.find(art => art.id == artId);

    return(
        <>
            <Link to={`/galleries/${gallery.id}`}>Back to {gallery.name}</Link>
            <br></br>
            <br></br>
            Title: <a href={art.url}>"{art.title}"</a>
            <h3>Description: {art.description || 'N/A'}</h3>
            <h3>Credit: {art.creditline || 'N/A'}</h3>
            <h3>Technique: {art.technique || 'N/A'}</h3>
            {art.images.map(image => <img key={image.baseimageurl} src={image.baseimageurl}></img>)}
        </>
    )


}; 

export default ArtDescription; 
