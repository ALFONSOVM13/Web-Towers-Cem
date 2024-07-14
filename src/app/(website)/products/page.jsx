import ProductSection from '@/components/products/ProductSection'
import { products } from '@/services/products'



const page = () => {

   return (
     <ProductSection
     products={products}
     />
   )
}
export default page
