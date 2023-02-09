import { useState } from "react";
import "./App.css";
import Desc from "./Components/Description/Desc";
import MealsList from "./Components/Meals/MealsList/MealsList";
import Navbar from "./Components/Navbar/Navbar";
import Modal from "./UI/ModalUI/Modal";
function App() {
  const [mealId, setMealId] = useState("nothingSelected");
  const [modalVisible, setModalVisible] = useState(false);

  const changeVisibility = () => {
    setModalVisible((modalVisible) => {
      return !modalVisible;
    });
  };

  const addToCart = (Id) => {
    setMealId(Id);
  };

  return (
    <div className="App">
      {modalVisible && (
        <Modal mealId={mealId} setModalVisible={changeVisibility} />
      )}
      <Navbar mealId={mealId} setModalVisible={changeVisibility} />
      {/* <div>
        Some BG Image Whose value I will change to absolute with an index of -1
      </div> */}
      <Desc />
      <div>
        <MealsList addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
