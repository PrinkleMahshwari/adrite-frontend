import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Button from './components/common/Button'
import Card from './components/common/Card'

function App() {
  return (
    <BrowserRouter>

      <div className="gradient-bg min-h-screen">
        <Navbar />

        <div className="container-custom pt-40">

          <h1 className="heading-primary text-white max-w-2xl mb-8">
            Build Your Scale Efficiency
          </h1>

          <Button text="Get Started" />

        </div>
      </div>

      <section className="section-padding bg-light">

        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">

          <Card>
            <h2 className="text-2xl font-bold mb-4">
              API Integration
            </h2>

            <p className="paragraph">
              Reusable component card for Adrite project structure.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold mb-4">
              Dashboard System
            </h2>

            <p className="paragraph">
              Clean UI architecture using Tailwind reusable components.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold mb-4">
              Authentication
            </h2>

            <p className="paragraph">
              Protected routes and role-based access flow ready.
            </p>
          </Card>

        </div>

      </section>

      <Footer />

    </BrowserRouter>
  )
}

export default App;