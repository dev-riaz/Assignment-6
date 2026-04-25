import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import RatingBar from "./components/RatingBar";
import StepCard from "./components/StepCard";

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
    </>
  );
}

export default App;
