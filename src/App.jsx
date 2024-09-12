import './App.css'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'
import Testimonials from './components/Testimonials/Testimonials'
import Title from './components/Title/Title'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title={'Our Programs'} sub_title={'What We Offer'} />
        <Programs />
        <About />
        <Title title={'Gallery'} sub_title={'Campus Photos'} />
        <Campus />
        <Title title={'TESTIMONIALS'} sub_title={'What Student Says'} />
        <Testimonials />
        <Title title={'Contact us'} sub_title={'Get in Touch'} />
        <Contact />
        <Footer />

      </div>
    </div>
  )
}

export default App
