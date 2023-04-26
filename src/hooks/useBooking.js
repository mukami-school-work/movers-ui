import { useContext } from "react";
import { StateContext } from "./stateProvider";

export default function useBooking() {
  const { state } = useContext(StateContext);
  console.log(state);
}
