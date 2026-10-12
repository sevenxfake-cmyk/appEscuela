
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AlumnoCard from './components/AlumnoCard/AlumnoCard';

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
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Maria Perez"
            carrera="Diseño Gráfico"
            estado="Inactivo"
          />

          <AlumnoCard
            nombre="Adolfo Choque"
            carrera="Administración Industrial"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Luis Fernández"
            carrera="Ingeniería de Software con IA"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Sebastion Mendoza"
            carrera="Mecatrónica Industrial"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Jorge Ramírez"
            carrera="Redes y Seguridad Informática"
            estado="Inactivo"
          />

          <AlumnoCard
            nombre="Lucía González"
            carrera="Administración de Empresas"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Joel Santibañez"
            carrera="Electricidad Industrial"
            estado="Inactivo"
          />

          <AlumnoCard
            nombre="Valeria Sánchez"
            carrera="Diseño y Desarrollo Web"
            estado="Matriculado"
          />
        </div>
      </div>
    </>
  );
}

export default App;
