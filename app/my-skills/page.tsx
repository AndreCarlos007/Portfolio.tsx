import React from 'react'

import { IconCloudDemo } from '@/components/ui/IconCloudDemo'

const page = () => {
  return (
    <div style={{backgroundImage: "url(/bg-2.jpg)" }}
    className='h-screen w-screen flex items-center justify-center bg-cover bg-center'>
      
        <div className="flex justify-center ">
                <IconCloudDemo />
              </div>
    </div>
  )
}

export default page
