import image1 from "../assets/images/Sale_Image.png"
function Sale_Image()
{
    return(
        <div className="sale-image">
        <img src={image1} alt="Sorry the image can't be displayed"/>
        <div className="sale-image__offer">
            <h2>Udemy Flash sale 24 hours left</h2>
            <p>Get the top courses at 499</p>
        </div>
    </div>
    );
}

export default Sale_Image;