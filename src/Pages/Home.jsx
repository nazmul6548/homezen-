import LatestReviews from "../component/LatestReviews";
import Slide from "../component/Slide";
import OneSection from "../component/extraSection/OneSection";


const Home = () => {
    return (
        <div>
          
            <Slide></Slide>
            <LatestReviews></LatestReviews>
            <OneSection></OneSection>
        </div>
    );
};

export default Home;