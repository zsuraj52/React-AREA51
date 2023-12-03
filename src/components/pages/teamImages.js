

function TeamImages() {
    let listOfImages = [];

    function importAll(founders) {
        return founders.keys().map(founders);
    }
    (function() {
        listOfImages = importAll(require.context('../images/founders', false, /\.(png|jpg|webp)$/));
    })()
    return (
        <div>
            {
                listOfImages.map((image) =>{ 
                let b = image.split("/");
                b = b[3].split(".");
                b= String(b[0]+"."+b[2]);   
               return(
                    <img className="container img-fluid w-25" src={String(b)} alt="founders"></img>
                //    <div className="row">
                //         <div className="col-md-4 text-center">
                //             <img className="container img-fluid" src={String(b)} alt="founders"></img> 
                //         </div> 
                //    </div> 
                )
                })
            }
        </div>
    )
}

export default TeamImages;