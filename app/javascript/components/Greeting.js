import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomGreeting } from "../redux/greetings/greetingsSlice";

const Greeting = () => {
    const dispatch = useDispatch();
    const  greeting  = useSelector((state) => state.greeting);

    useEffect(() => {
        dispatch(getRandomGreeting());
    }, [dispatch]);
    console.log(greeting)
    return(
    
     <h1>{greeting.message}</h1>
    
     )
    }

export default Greeting;