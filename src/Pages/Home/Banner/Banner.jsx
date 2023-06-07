import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../../public/img1.jpg";
import img2 from "../../../../public/img2.jpg";
import img3 from "../../../../public/img3.jpg";
import img4 from "../../../../public/img4.jpg";

const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={img1} />
            <p className="legend">Football Team 2002</p>
        </div>
        <div>
            <img src={img2} />
            <p className="legend">Hokey Team 2012</p>
        </div>
        <div>
            <img src={img3} />
            <p className="legend">Football Team 2008</p>
        </div>
        <div>
            <img src={img4} />
            <p className="legend">Cricket team 2010</p>
        </div>
    </Carousel>
    );
};

export default Banner;