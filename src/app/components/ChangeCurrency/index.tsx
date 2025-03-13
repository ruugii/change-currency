'use client'

import getChange from "@/app/api/freecurrencyapi/getChange"
import { useEffect, useState } from "react"

export default function ChangeCurrency () {

  const [token] = useState(process.env.NEXT_PUBLIC_API_KEY ?? '')
  const [from] = useState('EUR')
  const [to] = useState('USD')
  const [usd, setUsd] = useState(0)
  const [eur, setEur] = useState(0)

  const [date, setDate] = useState<Date>(new Date())


  useEffect(() => {
    getChange(token, from, to)
      .then((r) => {
        setUsd(r.data.USD)
        setDate(new Date())
      })
  }, [token, from, to])

  useEffect(() => {
    /*
      1e      USD
      1USD    EUR

      1*USD/1
    */
    setEur(1/usd)
  }, [usd])

  return (
    <>
      <div className=" bg-amber-50 text-black rounded-full px-2 py-4">
        <p>
          FECHA DEL CAMBIO: {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()} | {date.getHours()}:{date.getMinutes()< 10 ? `0${date.getMinutes()}` : date.getMinutes()}:{date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()} (UTC + 1)
        </p>
      </div>
      <div className=" bg-amber-50 text-black rounded-full px-2 py-4">
        <p>
          1€ = {usd}$
        </p>
      </div>
      <div className=" bg-amber-50 text-black rounded-full px-2 py-4">
        <p>
          1$ = {eur}€
        </p>
      </div>
    </>
  )
}