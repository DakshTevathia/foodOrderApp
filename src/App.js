import { useState } from "react";
import "./App.css";
import Desc from "./Components/Description/Desc";
import MealsList from "./Components/Meals/MealsList/MealsList";
import Navbar from "./Components/Navbar/Navbar";
import CartProvider from "./Store/CartProvider";
import Modal from "./UI/ModalUI/Modal";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const changeVisibility = () => {
    setModalVisible((modalVisible) => {
      return !modalVisible;
    });
  };

  return (
    <CartProvider>
      <div className="App">
        {modalVisible && <Modal setModalVisible={changeVisibility} />}
        <Navbar setModalVisible={changeVisibility} />
        {/* <div>
        Some BG Image Whose value I will change to absolute with an index of -1
      </div> */}
        <Desc />
        <div>
          <MealsList />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
