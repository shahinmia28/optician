import "./topSlider.scss";
import { Carousel } from "react-bootstrap";

const TopSlider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src="./image/f1.jpg" alt="First slide" />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img src="./image/f2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="./image/f3.png" alt="Fourth slide" />
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <img src="./image/f4.jpg" alt="Third slide" />
        </Carousel.Item> */}
        <Carousel.Item>
          <img src="./image/f5.jpg" alt="fifth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="./image/f6.jpg" alt="sixth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TopSlider;
