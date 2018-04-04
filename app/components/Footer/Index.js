import React from 'react';

const Index = () => {
  return (
    <div className="footer">
      <div className="footer--about">
        <span className="footer--about__title">Endereços</span>
        <span className="footer--about__subtitle">Rua Descampado, 222 - São Paulo, SP</span>
        <span className="footer--about__subtitle">Avenida Joaquim Alves Corrêa, 3224 - Valinhos, SP</span>
      </div>
      <div className="footer--about">
        <span className="footer--about__title">Telefone</span>
        
        <span className="footer--about__subtitle"><i class="fab fa-whatsapp"></i> (11) 95030-0039</span>
      </div>
    </div>
  );
};

export default Index;
