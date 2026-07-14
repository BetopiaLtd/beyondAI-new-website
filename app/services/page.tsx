import { HowWeWork, ReadyToTransform } from '@/components/services/HowWeWork'
import CoreServices from '@/components/services/OurCoreServices'
import ServicesHero from '@/components/services/ServiceHero'
import React from 'react'

export default function page() {
  return (
    <div>
        <ServicesHero/>
        <CoreServices/>
        <HowWeWork/>
        <ReadyToTransform/>
    </div>
  )
}
