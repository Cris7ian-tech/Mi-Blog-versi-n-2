import "./index.css";

import Header from "./componentes/Header.tsx";
import MainLayout from "./pages/MainLayout.tsx";
import Footer from "./componentes/Footer.tsx";
import Card from "./componentes/ui/Card.tsx";


function App() {
  return (
    <>
    <Header />
    <MainLayout />
    <Card>
      <Card.Header>
        CardHeader: Articulo relacionado
      </Card.Header>

      <Card.Body>
        <div>
          <div>
            <h3>Auriculares Pro</h3>
            <p>Cancelación de ruido y bateria de larga duración</p>
          </div>
        </div>
        <img src="https://images.pexels.com/photos/34578398/pexels-photo-34578398.jpeg" 
        alt="Auriculares"
        className=""
        />
      </Card.Body>

      <Card.Footer>
        <div>
          <button>Leer post</button>
          <button><img src="/src/assets/share.svg" alt="Compartir"/>Compartir</button>
        </div>
      </Card.Footer>
    </Card>
    <Footer />
    </>
  )    
}

export default App


