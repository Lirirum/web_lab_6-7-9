import React, { useState, useEffect  } from 'react';
import './App';
import './styles/popupMenu.css'; 
import desktoplogo from "./svg/img-desktop.svg"
import laptoplogo from "./svg/img-laptop.svg"
import monitorlogo from "./svg/img-monitor.svg"
import videologo from "./svg/img-video.svg"
import keyboardlogo from "./svg/img-keyboard.svg"
import gamepadlogo from "./svg/img-gamepad.svg"



const PopupMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  

    const handleDocumentClick = (event) => {
      if (isOpen && !event.target.closest('.dropdown-menu')) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
     
      document.addEventListener('click', handleDocumentClick);

      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, [isOpen]);
  

  return (
    <div class="dropdown-menu">
      <button  id="catalog_btn" onClick={toggleMenu} type='button'>Каталог товарів</button>
      {isOpen && (
        <div class="dropdown-content">
          <ul class="dropdown-menu__list">
            <li class='dropdown-menu__item' >
              <a class='dropdown-menu__link' href="">
              <figure>
                <img src={desktoplogo} alt="Описание изображения"/>                
              </figure>
                Настільні комп'ютери
              </a> </li>
            <li  class='dropdown-menu__item' >
              <a class='dropdown-menu__link' href="ProductDetail">
              <figure>
                <img src={laptoplogo} alt="Описание изображения"/>                
              </figure>
                Ноутбуки
              </a></li>
            <li  class='dropdown-menu__item' >
              <a class='dropdown-menu__link' href="ProductDetail">
              <figure>
                <img src={monitorlogo} alt="Описание изображения"/>                
              </figure>
                Монітори
              </a></li>
            <li  class='dropdown-menu__item' >
              <a class='dropdown-menu__link' href="ProductDetail">
              <figure>
                <img src={videologo} alt="Описание изображения"/>                
              </figure>
                Комплетующі
              </a></li>  

              <li  class='dropdown-menu__item' >
              <a class='dropdown-menu__link' href="ProductDetail">
              <figure>
                <img src={keyboardlogo} alt="Описание изображения"/>                
              </figure>
                Периферія
              </a></li>

              <li  class='dropdown-menu__item' >
              <a class='dropdown-menu__link' href="ProductDetail">
              <figure>
                <img src={gamepadlogo} alt="Описание изображения"/>                
              </figure>
                Для геймерів
              </a></li>

              <li  class='dropdown-menu__item' >
              <a class='dropdown-menu__link' href="ProductDetail">
              <figure>
                <img src={videologo} alt="Описание изображения"/>                
              </figure>
                Комплетующі
              </a></li>

              <li  class='dropdown-menu__item' >
              <a class='dropdown-menu__link' href="ProductDetail">
              <figure>
                <img src={videologo} alt="Описание изображения"/>                
              </figure>
                Комплетующі
              </a></li>

              <li  class='dropdown-menu__item' >
              <a class='dropdown-menu__link' href="ProductDetail">
              <figure>
                <img src={videologo} alt="Описание изображения"/>                
              </figure>
                Комплетующі
              </a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;