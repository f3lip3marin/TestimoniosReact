import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className= "contenedor-principal">
      <h1>Esto es lo que dicen nuestros alunmos sobre freecodecamp </h1>
      <Testimonio
      nombre = "Emma Bostian"
      pais= "Suecia"
      imagen = "emma"
      cargo = "Sotfware Developer"
      empresa = "Spotify"
      testimonio = "lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sed, veritatis illum, vel beatae laboriosam cum dolores consequatur dolor tempora atque fugit assumenda libero hic, saepe minus tenetur ipsum. Ipsu" />
      <Testimonio
      nombre = "Shawn Wang"
      pais= "singapur"
      imagen= "shawn"
      cargo = "Ingeniero de sotfware"
      empresa = "google"
      testimonio = "orem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sed, veritatis illum, vel beatae laboriosam cum dolores consequatur dolor tempora atque fugit assumenda libero hic, saepe minus tenetur ipsum. Ipsu" />
      <Testimonio
      nombre = "sarah conner"
      pais= "USA"
      imagen= "sarah"
      cargo = "Ingeniero de sotfware"
      empresa = "ChatDesk"
      testimonio = "rem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sed, veritatis illum, vel beatae laboriosam cum dolores consequatur dolor tempora atque fugit assumenda libero hic, saepe minus tenetur ipsum. Ips" />
      </div>
    </div>
  );
}

export default App;
