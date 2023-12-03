

function ChefImages() {
    let listOfImages = [];

    function importAll(stories) {
        return stories.keys().map(stories);
    }
    (function() {
        listOfImages = importAll(require.context('../images/chefs', false, /\.(png|jpg|webp)$/));
    })()
    return (
        <div>
            {
                listOfImages.map( (image) =>{ 
                let b = image.split("/");
                b = b[3].split(".");
                b= String(b[0]+"."+b[2]);   

                return <img className="container img-fluid w-25" src={String(b)} alt="founders"></img> 
            })
            }
        </div>
    )
}

export default ChefImages;