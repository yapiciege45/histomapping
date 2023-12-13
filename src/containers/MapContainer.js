import { MapComponent } from '@/components/shared/MapComponent'
import React from 'react'

import blogs from '@/mocks/blogs.json'

export const MapContainer = () => {
  return (
    <div className='w-full h-screen'>
      <MapComponent blogs={blogs} />
    </div>
  )
}
