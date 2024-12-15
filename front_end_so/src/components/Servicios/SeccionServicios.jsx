import Servicios from "./OfertaServicios/Servicios";
import HeroServicios from "./HeroServicios";
import IndustriasServimos from "./IndustriasServimos";
import EstudioCaso from "./EstudioCaso";
import ProgramasCapacitacion from "./ProgramasCapacitacion";

const SeccionServicios = () => {
    return(
        <div>
            <HeroServicios />
            <Servicios />
            <IndustriasServimos />
            <EstudioCaso />
            {/* Sección 6 */}
            <ProgramasCapacitacion />
        </div>
    );
};

export default SeccionServicios