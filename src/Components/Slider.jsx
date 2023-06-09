import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div className="text-center">
            <Carousel>
                <div>
                    <img src={'../../public/Images/Slider-1 (1).jpg'} />
                 
                </div>
                <div>
                <img src={'../../public/Images/Slider-1 (2).jpg'} />
               
                </div>
                <div>
                <img src={'../../public/Images/Slider-1 (3).jpg'} />
       
                </div>
                <div>
                <img src={'../../public/Images/Slider-1 (4).jpg'} />
                  
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;
