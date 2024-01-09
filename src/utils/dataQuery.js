
async function fetchStockTickerOld(symbol,fn) { 
    const apiKey = '73LTU5WPLO925ZE6';
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+symbol+'&apikey=demo';
    const response = await fetch(url);
    const data = await response.json();
    const meta = data["Meta Data"]
    const title = meta["2. Symbol"]
    const updt_date = meta["3. Last Refreshed"]
    const raw_series = data["Time Series (Daily)"]
    const date_value = Object.entries(raw_series)
    const ans = date_value.map((d)=> (
        {x: new Date(d[0]),
        y:[d[1]["1. open"],d[1]["2. high"],d[1]["3. low"],d[1]["4. close"]]}
    ))
    fn({data:ans,title:title,updt:updt_date})
    return {data:ans,title:title,updt:updt_date} 
}


/*const data = await fetchStockTicker("IBM") 
    .then(data => { 
        return data
        }) 
    .catch(error => { 
        console.error('Error fetching stock tickers:', error); 
    });

console.log(data.title)*/


export default fetchStockTickerOld