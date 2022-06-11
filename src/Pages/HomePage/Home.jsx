import Announcment from "../../Components/Announcment/Announcment";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products/Products";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <>
     <Announcment/>
     <Navbar/>
     <Slider/>
     <Categories/>
     <Products/>
     <Newsletter/>
     <Footer/>
    </>
   
  )
}

export default Home