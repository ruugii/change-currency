'use client'

import getChange from "@/app/api/freecurrencyapi/getChange"
import { useEffect, useState } from "react"

export default function ChangeCurrency () {

  const [token] = useState(process.env.NEXT_PUBLIC_API_KEY ?? '')
  const [from] = useState('EUR')
  const [to] = useState('USD')


  useEffect(() => {
    console.log(token);
    getChange(token, from, to)
  }, [token, from, to])

  return (
    <></>
  )
}