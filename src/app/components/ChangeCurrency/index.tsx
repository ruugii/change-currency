'use client'

import getChange from "@/app/api/freecurrencyapi/getChange"
import { useEffect, useState } from "react"

export default function ChangeCurrency() {

  const [token] = useState(process.env.NEXT_PUBLIC_API_KEY ?? '')
  const [from] = useState('EUR')
  const [to] = useState('USD')
  const [usd, setUsd] = useState(0)
  const [eur, setEur] = useState(0)

  const [date, setDate] = useState<Date>(new Date())

  const [firstRender, setFirstRender] = useState<boolean>(true)
  const [timeRefreshInSeg] = useState<number>(60)

  useEffect(() => {
    const getData = () => {
      getChange(token, from, to)
        .then((r) => {
          setUsd(r.data.USD);
          setDate(new Date());
          setFirstRender(false);
        });
    };
  
    // Fetch data immediately if it's the first render
    if (firstRender) {
      getData();
    }
  
    // Set interval for fetching data every 5 seconds
    const intervalId = setInterval(() => {
      getData();
    }, (timeRefreshInSeg * 1000));
  
    // Cleanup interval on unmount or dependencies change
    return () => clearInterval(intervalId);
  }, [token, from, to, firstRender]);

  useEffect(() => {
    /*
      1e      USD
      1USD    EUR

      1*USD/1
    */
    setEur(1 / usd)
  }, [usd])

  return (
    <div className="gap-3 w-1/4">
      <div className=" bg-amber-50 text-black rounded-full px-2 py-4 my-3 flex content-center justify-center items-center">
        <p>
          FECHA DEL CAMBIO: {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()} | {date.getHours()}:{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:{date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()} (UTC + 1)
        </p>
      </div>
      <div className=" bg-amber-50 text-black rounded-full px-2 py-4 my-3 flex content-center justify-center items-center">
        <p>
          1€ = {usd.toFixed(2)}$
        </p>
      </div>
      <div className=" bg-amber-50 text-black rounded-full px-2 py-4 my-3 flex content-center justify-center items-center">
        <p>
          1$ = {eur.toFixed(2)}€
        </p>
      </div>
    </div>
  )
}