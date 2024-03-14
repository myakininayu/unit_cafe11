import React, { useState } from 'react';
import './Modal.css';

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState({ id: null, name: null, img: null, price: 0 });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button type="submit" class="btn btn-primary" onClick={openModal}>Создать</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Создание товара</h2>
            <p>Название</p>
            <input type='text' onChange={(e) => {setItem({...item, name: e.target.value})}}></input>
            <p>Фото</p>
            <input type='file' onChange={(e) => {setItem({...item, img: e.target.value})}}></input>
            <p>Цена за штуку</p>
            <input type='number' onChange={(e) => {setItem({...item, price: e.target.value})}}></input>

            <button onClick={() => props.addItem(item)}>Применить</button>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;