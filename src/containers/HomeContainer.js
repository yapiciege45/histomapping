import { HomeComponent } from '@/components/home/HomeComponent'
import { MapComponent } from '@/components/shared/MapComponent'
import { NavbarComponent } from '@/components/shared/NavbarComponent'
import React from 'react'

import blogs from '@/mocks/blogs.json'
import { FooterComponent } from '@/components/shared/FooterComponent'

export const HomeContainer = () => {
  return (
    <>
        <NavbarComponent />
        <HomeComponent />
        <MapComponent blogs={blogs} height='90vh' />
        <FooterComponent />
    </>
  )
}
