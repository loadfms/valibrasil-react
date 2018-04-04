import React from 'react';

const Index = () => {
  return (
    <div className="listproducts">
      <span className="listproducts--title"> Conheça a Valibrasil</span>
      <hr />
      <div className="contact">
        <div className="contact--content">
          <div className="contact--content__first">
            <h1 className="contact--content__title">Valinhos </h1>
            <span className="contact--content__subtitle">Avenida Joaquim Alves Corrêa, 3224</span>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.178201494639!2d-47.001081085409126!3d-22.98047368497436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cd9f48f52691%3A0x888fef3a75752782!2sVALIBRASIL+COMERCIO+DE+EMBALAGENS+DESCARTAVEIS+LTDA!5e0!3m2!1spt-BR!2sbr!4v1519243943129" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="contact--content__second">
            <h1 className="contact--content__title">São Paulo </h1>
            <span className="contact--content__subtitle">Rua Descampado, 222</span>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.93776079245396!2d-46.60458069697001!3d-23.622183629416746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b706a0d3c47%3A0x7ffba51951126964!2sValibrasil+Descartaveis+e+Embalagens!5e0!3m2!1spt-BR!2sbr!4v1519243894069" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;