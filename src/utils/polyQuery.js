import { restClient } from '@polygon.io/client-js';
import cache from "./cache.json" assert { type: "json" } 
import fs from "fs"

const dummy = (data) => {
	console.log(data)

}

// async function fetchStockTicker(symbol,fn) {
// 	const rest = restClient(process.env.POLY_API_KEY);

// 	rest.stocks.aggregates(symbol, 1, "day", "2023-01-01", "2023-04-14").then((data) => {
// 		dummy(data)
// 		const title = data["ticker"]
// 		const updt_date = Date(Date.now())
// 		const ans = data['results'].map((d)=> (
// 			{x: new Date(d['t']),
// 			y:[d["o"],d["h"],d["l"],d["c"]]}
// 			))
// 		fn({data:ans,title:title,updt:updt_date})
// 		return {data:ans,title:title,updt:updt_date}
// 	}).catch(e => {
// 		console.error('An error happened:', e);
// 	});   
     
// }


async function fetchStockTicker(symbol,fn) {
	const rest = restClient("oRwk60kZ1cPSeVgagYuRO1Xwi6nC1tWB");
	const updt_date = new Date(Date.now()).toISOString().split("T")[0]


	if (updt_date == cache[symbol].updt_date){
		console.log("Reading from cache")
		const ans = cache[symbol].data
		const title = symbol
		fn({data:ans,title:title,updt:updt_date})
		return {data:ans,title:title,updt:updt_date}
	}
	else{
		const data = await rest.stocks.aggregates(symbol, 1, "day", "2023-01-01", updt_date)
		const title = data["ticker"]
		const ans = data['results'].map((d)=> (
		{x: new Date(d['t']).toLocaleDateString(),
		y:[d["o"],d["h"],d["l"],d["c"]]}
		))
		cache[symbol]["data"] = ans
		cache[symbol]["updt_date"] = updt_date
		/*fs.writeFile('src/utils/cache.json',JSON.stringify(cache),(error) =>{
			if (error){ console.log(error) 
				return}})*/
		fn({data:ans,title:title,updt:updt_date})
		return {data:ans,title:title,updt:updt_date}
		}
	
     

}

//fetchStockTicker("IBM")

export default fetchStockTicker