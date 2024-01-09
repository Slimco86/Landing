import About from "./About";
import Projects from "./Works";
import Experience from "./Experience";
import Contact from "./Contact";
import Tech from "./Tech";
//import CandlestickChart from "./CandleChart";
import ChartPallete from "./CandleChart"
import { useLocation } from 'react-router-dom'
import { languages } from '../constants'
import { Suspense } from "react";



const Content = () =>{
    const location = useLocation();
    if (location.hash == "#work"){
        return <Experience/>
    }
    else if (location.hash == "#about" | location.hash == ""){
        return (
                <>
                <About/>
                </>
            )
    }
    else if (location.hash == "#projects"){
        return <Projects/>
    }
    else if (location.hash == "#contact"){
        return <Contact/>
    }

    else if (location.hash == "#testimonials"){
        return (
        <Suspense>
            <ChartPallete/>
        </Suspense>
        )
        
    }
}

export default Content