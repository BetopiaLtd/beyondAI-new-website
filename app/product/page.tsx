import { ProductCTA } from '@/components/product/ProductCTA'
import ProductHero from '@/components/product/ProductHero'
import { ProductShowcase, WhyChooseBeyondAI } from '@/components/product/ProductShowcase'
import React from 'react'

export default function page() {
  return (
    <div>
        <ProductHero/>
        <ProductShowcase/>
        <WhyChooseBeyondAI/>
        <ProductCTA/>
    </div>
  )
}
