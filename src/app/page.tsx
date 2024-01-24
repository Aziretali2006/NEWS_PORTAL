// "use client"

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './dashboard/main/Main'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  )
}
