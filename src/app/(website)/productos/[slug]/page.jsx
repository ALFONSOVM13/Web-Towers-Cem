import BenefitsProduct from '@/components/productView/BenefitsProduct'
import DescriptionProduct from '@/components/productView/DescriptionProduct'
import ProductsSlider from '@/components/productView/ProductsSlider'
import UsosYAppProducts from '@/components/productView/UsosYAppProducts'
import { getProductBySlug } from '@/services/products'
import { notFound } from 'next/navigation'


const ProductPage = async ({params}) => {

  const product = await getProductBySlug(params.slug)

  if(!product) {
   notFound()
  }

  return (
      <>
      <ProductsSlider
        title={product.title}
        name={product.name}
        description={product.description}
        image={product.image}
      />
      <DescriptionProduct 
      cards={product.cards} />

      <BenefitsProduct
      benefits={product.benefits}
      image={product.image.front}
      dataSheet={product.dataSheet}
      />

      <UsosYAppProducts
      usesAndApplications={product.usesAndApplications}
      />
    </>
  )
}
export default ProductPage