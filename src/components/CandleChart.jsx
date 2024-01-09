import React from 'react'; 
import Chart from "react-apexcharts"; 
import fetchStockTicker from '../utils/polyQuery';
import { useState, useEffect } from 'react';
import { SectionWrapper } from '../hoc';
import { tickers } from '../constants';


const CandlestickChart = ({ticker,index}) => {
    /* Get stock ticker data*/
    const [result,setResult] = useState({})
    useEffect(() =>{
        fetchStockTicker(ticker,setResult)
    },[ticker])
    
    /* Build chart*/
    const state = { series: [
                                { data: result.data},
                                
                            ], 
                    options: { chart: 
                                { type: 'candlestick', },
                               title: {
                                   text: result.title,
                                   align: 'top',
                                   margin: 10,
                                   offsetX: 0,
                                   offsetY: 0,
                                   floating: false,
                                   style: {
                                     fontSize:  '24px',
                                     fontWeight:  'bold',
                                     fontFamily:  undefined,
                                     color:  '#263238'
                                   },
                               },

                                
                             }, 
                  }; 
    return ( 
            <Chart options={state.options} series={state.series} type="candlestick" width={700} /> 
        ); 
        }
        
const ChartPallete = () =>{
    return(
        <div className='flex flex-wrap backdrop-blur-sm bg-black/40 shadow-red-800/70 shadow-lg ring-2 ring-white/5 p-8 rounded-2xl'> 
            {tickers.map((t,index) => (
                <CandlestickChart ticker = {t} index = {index} key = {t+" chart"}/>
            ) )}
        </div>
    )
}
                        
export default SectionWrapper(ChartPallete);