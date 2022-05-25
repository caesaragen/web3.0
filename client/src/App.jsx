import { Navbar, Loader, Welcome, Footer, Services, Transactions } from "./components";

const App = () => {


  return (
    <div className="min-h-screen">
      <h1 class="text-3xl font-bold underline">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </h1>
    </div>
  )
}

export default App;
