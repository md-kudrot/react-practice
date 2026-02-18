export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.img.src} 
                    alt={props.img.alt}
                />

                {/* uncomment that */}
                {/* <img 
                    className="main-image"
                    src={props.obj.img.src} 
                    alt={props.obj.img.alt}
                /> */}
            </div>
            <div className="info-container">
                {/* <img 
                    className="marker"
                    src="../images/marker.png" 
                    alt="map marker icon"
                /> */}
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>


                {/* uncomment that: */}
                {/* <span className="country">{props.obj.country}</span>
                <a href={props.obj.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.obj.title}</h2>
                <p className="trip-dates">{props.obj.dates}</p>
                <p className="entry-text">{props.obj.text}</p> */}
            </div>
            
        </article>
    )
}