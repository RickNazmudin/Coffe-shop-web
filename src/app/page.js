import About from "./Componens/About/About";
import Offers from "./Componens/Offers/Offers";
import Contact from "./Componens/Contact/Contact";
import ProdectItem from "./Componens/ProdectItem/ProdectItem";
import AnmtionScroll from "./Componens/AnmtionScroll/AnmtionScroll";

export default async function Home() {
  let prodect = []

  try {

    const res = await fetch("http://localhost:3000/api/prodectsData")
    if(!res.ok) {
      throw new Error("في منتجات")
    }
    prodect = await res.json()

  }catch(err){

    throw err
 
  }
  
  return (
    <div className="HomePage">

    
      <About/>
      <ProdectItem prodect={prodect}/>
      <Offers/>
      <Contact/>
     
    
    </div>
  );
}
