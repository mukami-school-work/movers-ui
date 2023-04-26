import { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, setState] = useState({
    // add any other state variables you need to persist across pages
    pickup_address: "",
    destination_address: "",
    book_date: "",
    user_id: "",
    box_id: "",
    apartment_id: "",
  });

  const setPickup_address = (pickup_address) => {
    setState({ ...state, pickup_address });
  };
  const setDestination_address = (destination_address) => {
    setState({ ...state, destination_address });
  };
  const setBook_date = (book_date) => {
    setState({ ...state, book_date });
  };
  const setApartment_id = (apartment_id) => {
    setState({ ...state, apartment_id });
  };
  const setUser_id = (user_id) => {
    setState({ ...state, user_id });
  };
  const setBox_id = (box_id) => {
    setState({ ...state, box_id });
  };
  console.log(state);
  return (
    <StateContext.Provider
      value={{
        state,
        setPickup_address,
        setDestination_address,
        setBook_date,
        setUser_id,
        setApartment_id,
        setBox_id,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
