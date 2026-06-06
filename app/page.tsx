import ScrollReveal from '@/components/ScrollReveal'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import ProductList from '@/components/sections/ProductList'
import Testimonials from '@/components/sections/Testimonials'
import HowToOrder from '@/components/sections/HowToOrder'
import CTABanner from '@/components/sections/CTABanner'
import Gallery from '@/components/sections/Galery'
import ArticlesSection from '@/components/sections/Articlessection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Hero />  {/* Hero tidak perlu ScrollReveal, langsung tampil */}

      <ScrollReveal>
        <Features />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <ProductList />
      </ScrollReveal>

      <ScrollReveal>
        <HowToOrder />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <Gallery />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <ArticlesSection />
      </ScrollReveal>

      <ScrollReveal>
        <CTABanner />
      </ScrollReveal>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </>
  )
}