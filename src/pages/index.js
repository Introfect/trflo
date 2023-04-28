import Header from "@/components/Header";
import ProductFeed from "@/components/ProductFeed";
import Checkout from "@/components/Checkout";
export default function Home({products}) {
  return (
    <div className="bg-gray-100 h-screen">
   
     <Header/>
     <main className="flex flex-cols mx-auto">
      {/**Banner */}  
      {/**Product Feed */}
      <ProductFeed products={products}/>
      <Checkout/>


     </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch ('http://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68').then(
  (res)=>res.json()
  )

  return {
      props:{
          products,
      }
  }
}