
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AlumnoCard from './components/AlumnoCard/AlumnoCard';
import Contador from './components/Contador/Contador';

function App() {
  return (
    <>
      {/* Barra de navegación */}
      <Navbar />

      {/* Contenedor principal */}
      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>

        <div className="row">
          <AlumnoCard
            nombre="Daniel Puccio"
            carrera="Desarrollo de Software"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Maria Perez"
            carrera="Diseño Gráfico"
            estadoInicial="Inactivo"
          />

          <AlumnoCard
            nombre="Carlos Mendoza"
            carrera="Administración Industrial"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Luis Fernández"
            carrera="Ingeniería de Software con IA"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Ana Torres"
            carrera="Mecatrónica Industrial"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Jorge Ramírez"
            carrera="Redes y Seguridad Informática"
            estadoInicial="Inactivo"
          />

          <AlumnoCard
            nombre="Lucía González"
            carrera="Administración de Empresas"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Pedro Castillo"
            carrera="Electricidad Industrial"
            estadoInicial="Inactivo"
          />

          <AlumnoCard
            nombre="Valeria Sánchez"
            carrera="Diseño y Desarrollo Web"
            estadoInicial="Matriculado"
          />
        </div>

        {/* Contador interactivo */}
        <Contador />
      </div>
    </>
  );
}

export default App;
