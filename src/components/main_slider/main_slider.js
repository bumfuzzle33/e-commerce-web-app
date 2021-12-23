import './main_slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Main_slider = ()=>{
    return(
        <div id="main_slider_container">
            <div id="caro_container">
            <Carousel
                showThumbs={false}
                infiniteLoop={true} 
                autoPlay={true}
            >
                <div>
                    <img src="resources/main_sliders/slider1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="resources/main_sliders/slider2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="resources/main_sliders/slider3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
            
        </div>
    )
}

export default Main_slider