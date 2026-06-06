import { use } from 'react'
import { notFound } from 'next/navigation'
import { products } from '@/src/lib/productsData'
import ProductDetailClient from './ProductDetailClient'

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const normalizedProducts = products.map((p) => ({ ...p, badge: p.badge ?? undefined }))
  const product = normalizedProducts.find((p) => p.slug === slug)
  if (!product) notFound()

  return <ProductDetailClient product={product} products={normalizedProducts} />
}