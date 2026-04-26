import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PricingCard from "./components/PricingCard";
import RatingBar from "./components/RatingBar";
import StepCard from "./components/StepCard";
import Workflow from "./components/Workflow";

// import "react-toastify/dist/ReactToastify.css";

const fetchCardData = async () => {
  const res = await fetch("/cardData.json");
  return res.json();
};
const cardDataPromise = fetchCardData();

function App() {
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
      <RatingBar></RatingBar>
      <Card
        carts={carts}
        setCarts={setCarts}
        cardDataPromise={cardDataPromise}
      ></Card>
      <StepCard></StepCard>
      <PricingCard></PricingCard>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  );
}

export default App;
