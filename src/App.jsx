import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PricingCard from "./components/PricingCard";
import RatingBar from "./components/RatingBar";
import StepCard from "./components/StepCard";
import Workflow from "./components/Workflow";

const fetchCardData = async () => {
  const res = await fetch("/public/cardData.json");
  return res.json();
};
const cardDataPromise = fetchCardData();
// console.log(cardDataPromise);

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <RatingBar></RatingBar>
      <Card cardDataPromise={cardDataPromise}></Card>
      <StepCard></StepCard>
      <PricingCard></PricingCard>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  );
}

export default App;
