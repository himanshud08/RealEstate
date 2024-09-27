import AboutUs from '@/components/AboutUs'
import FeaturedProperty from '@/components/FeaturedProperty'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Footer from '@/components/Footer'


const Home = () => {
  return (
   <><Navbar />
   <Hero />
   <HowItWorks />
   <FeaturedProperty />
   <Services />
   <AboutUs />
   <Footer />
   </>
  )
}

export default Home