import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomGreeting } from "../redux/greeting/greetingsSlice";

const Greeting = () => {
    const dispatch = useDispatch();
    const { greeting } = useSelector((state) => state.greetings);

    useEffect(() => {
        dispatch(getRandomGreeting());
    }, [dispatch]);
    
    return(
    
     <h1>{greeting}</h1>
     )
    }

export default Greeting;