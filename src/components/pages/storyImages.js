

function StoryImages() {
    let listOfImages = [];

    function importAll(stories) {
        return stories.keys().map(stories);
    }
    (function() {
        listOfImages = importAll(require.context('../images/story', false, /\.(png|jpg|webp)$/));
    })()
    return (
        <div>
            {
                listOfImages.map( (image) =>{ 
                let b = image.split("/");
                b = b[3].split(".");
                b= String(b[0]+"."+b[2]);   

               return <img className="container img-fluid mb-5 w-75 d-flex jsutify-content-center" src={String(b)} alt="story"></img> })
            }
        </div>
    )
}

export default StoryImages;