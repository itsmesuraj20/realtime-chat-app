import React from 'react'
import { Button } from '@/components/ui/button'
const page = () => {
  return (
    <div className='max-w-3xl mx-auto md:py-10 h-screen'>
      <div className='h-full border rounded-md'>
        <div className='h-20'>
          <div className="p-5 border-b flex items-center justify-between" >
            <div>
              <h1 className='text-xl font-bold'> Daily Chat</h1>
              <div className='flex items-center gap-1'>
                <div className='h-4 w-4 bg-green-500 rounded-full animate-pulse'></div>
                <h1 className='text-sm text-gray-400'>2 onlines</h1>
              </div>
            </div>
            <Button>LOGIN</Button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default page



// https://youtu.be/-xXASlyU0Ck?si=KwcHACMAcyGuAea4&t=696
// start from here