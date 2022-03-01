import "./app.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ChangeContent from "../utils/changeContent.jsx";

function App() {
  return (
    <div className="bodyHome">
      <section className="firstBlock">
        <div className="profileContainer">
          <img src="../../public/profile.jpeg" alt="profile image" />
          <h3>Luccas Lombardi</h3>
          <p>Frontend Developer</p>
        </div>
        <div className="slider">
          <AliceCarousel
            autoPlay={true}
            infinite={true}
            autoPlayInterval={3000}
            disableButtonsControls={true}
            disableDotsControls={true}
            animationType="fadeout"
            swipeExtraPadding={1000}
            swipeDelta={400}
          >
            <img src="../../public/slider/html-icon.svg" alt="html5" />
            <img src="../../public/slider/css-icon.svg" alt="css3" />
            <img src="../../public/slider/javascript-icon.svg" alt="js" />
          </AliceCarousel>
        </div>
      </section>

      <ChangeContent />
    </div>
  );
}

export default App;
