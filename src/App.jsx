import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usecurrencyinfo from './hooks/usecurrencyinfo'
import {Inputbox} from './components/index'

function App() {
  const [amount,setamount]=useState()
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [convertedamount,setconvertamount]=useState()

  const currencyinfo=usecurrencyinfo(from)
  const options=Object.keys(currencyinfo)

  const convert=()=>{
    setconvertamount(amount*currencyinfo[to])

  }

  const swap=()=>{
    setFrom(to)
    setTo(from)
    const amt=amount
    setamount(amt)
    setconvertamount(convertedamount)
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:'url(https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=600'}}>
    <div className='w-full'>
    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
      <form
              onSubmit={(e)=>{
                e.preventDefault()
                convert()
            }}
            >
              <div className="w-full mb-1">
                <Inputbox 
                  label="from"
                  amount={amount}
                  currencyoptions={options}
                  oncurrencychange={(currency)=>setFrom(currency)}
                  onamountchange={(amount)=>setamount(amount)}
                  selectedcurrency={from}

                />
              </div>
              <div className="relative w-full h-0.5">
                  <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' 
                  onClick={swap}>
                    Swap
                  </button>
              </div>
              <div className="w-full mb-1">
                  <Inputbox 
                    label="to"
                    amount={convertedamount}
                    currencyoptions={options}
                    oncurrencychange={(currency)=>setTo(currency)}
                    onamountchange={(amount)=>setamount(amount)}
                    selectedcurrency={to}

                  />
              </div>
              <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default App
