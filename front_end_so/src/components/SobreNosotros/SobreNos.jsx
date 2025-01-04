import React from 'react';
import SeccionHero from './SeccionHero';
import MisionEmpresa from './MisionEmpresa';
import NuestroEquipo from './NuestroEquipo';
import NuestroEnfoque from './NuestroEnfoque';

const SobreNos = () => {
  return (
    <div className="sobre-nosotros-container">
      <SeccionHero/>
      <section id="mision">
        <MisionEmpresa />
      </section>

      <section id="equipo">
        <NuestroEquipo />
      </section>

      <section id="enfoque">
        <NuestroEnfoque />
      </section>
    </div>
  );
};

export default SobreNos;
