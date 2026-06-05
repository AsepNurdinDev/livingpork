import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import ProductList from '@/components/sections/ProductList'
import Testimonials from '@/components/sections/Testimonials'
import HowToOrder from '@/components/sections/HowToOrder'
import CTABanner from '@/components/sections/CTABanner'
import Gallery from '@/components/sections/Galery'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ProductList />
      <Testimonials />
      <HowToOrder />
      <Gallery />
      <CTABanner />
      <Footer />
    </>
  )
}