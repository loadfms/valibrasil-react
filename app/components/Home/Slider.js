import React from 'react';

const Slider = () => {
  return (
    <div className="home--cards">
      <div className="home--cards_card">
        <img src="https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&h=240&w=369" alt="" />
        <div class="home--cards_card_overlay">
          <h2>Limpeza</h2>
          <p>Aqui você encontra os melhores produtos para limpeza pesada</p>
        </div>
      </div>
      <div className="home--cards_card">
        <img src="https://images.pexels.com/photos/8279/muffin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=369&w=240" alt="" />
        <div class="home--cards_card_overlay">
          <h2>Embalagens</h2>
          <p>Para você ou para o seu negócio embalagens de qualidade são essenciais</p>
        </div>
      </div>
      <div className="home--cards_card">
        <img src="https://images.pexels.com/photos/125545/pexels-photo-125545.jpeg?auto=compress&cs=tinysrgb&h=369&w=240" alt="" />
        <div class="home--cards_card_overlay">
          <h2>Festas</h2>
          <p>Encontre todas a novidades para você decorar e utilizar em sua festa, pelos melhores preços</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
