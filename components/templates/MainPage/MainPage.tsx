'use client'
import Categories from '@/components/modules/MainPage/Categories/Categories'
import Hero from '@/components/modules/MainPage/Hero/Hero'
import { MainPageGate } from '@/context/goods'
import { useGate } from 'effector-react'

const MainPage = () => {
  useGate(MainPageGate)
  return (
    <main>
      <Hero />
      <Categories />
    </main>
  )
}

export default MainPage
