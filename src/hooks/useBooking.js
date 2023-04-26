import axios from "axios";
import { useContext, useState } from "react";
import { StateContext } from "./stateProvider";
import useAuth from "./useAuth";

export default function useBooking() {
  const { server, localhost, setLoading, token, navigate } = useAuth();
  const { update, state, setBook, setQuote } = useContext(StateContext);
  const [selectedMover, setSelectedMover] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const bookNow = async () => {
    setLoading(true);
    try {
      const resp = await axios.post(`${server}/bookings`, state, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setQuote(resp.data.movers);
      setBook(resp.data.booking);
      setLoading(false);
      navigate("/movers");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const confirmNow = async () => {
    setLoading(true);
    try {
      const resp = await axios.patch(`${server}/bookings`, update, {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log(resp);
      setSelectedMover(() => resp.data.mover);
      setIsConfirmed(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return {
    bookNow,
    confirmNow,
    selectedMover,
    isConfirmed,
  };
}
