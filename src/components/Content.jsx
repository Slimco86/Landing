import About from "./About";
import Projects from "./Works";
import Experience from "./Experience";
import Contact from "./Contact";
import ChartPallete from "./CandleChart"
import { useLocation } from 'react-router-dom'
import { Suspense } from "react";


const Content = () =>{
    const location = useLocation();
    switch (location.hash){
        case "#work":
            return <Experience/>
        case "#projects":
            return <Projects/>
        case "#contact":
            return <Contact/>
        case "#testimonials":
            return (
                <Suspense>
                    <ChartPallete/>
                </Suspense>
                )
        default:
            return <About/>

    }
}


export default Content