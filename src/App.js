import React from 'react'
import './App.css' //app css file
import Header from './Components/Header/Header'
import Hero from './Components/container/Hero'
import InvestSection from './Components/Invest-section/InvestSection'
import List from './Components/lists/List'
import Footer from './Components/Footer/Footer'
import ScrollToTopButton from './Components/scroll-on-top/scroll'
const App = () => {
  return (
    <div>
      <ScrollToTopButton></ScrollToTopButton>
      <Header></Header>
      <Hero></Hero>
      <InvestSection></InvestSection>
      <List></List>
      <Footer></Footer>
    </div>
  )
}

export default App

