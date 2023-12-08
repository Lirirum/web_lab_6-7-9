import React,{useState  ,useEffect} from 'react';
import PopupMenu from './PopupMenu';
import './App.css';
import './styles/header.css';
import {ReactComponent as ScalesLogo} from './svg/img-scales.svg';
import {ReactComponent as TeleLogo} from './svg/img-telephone.svg'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';
import userlogo  from "./svg/user.svg"
import {  useSelector, useDispatch } from 'react-redux';
import { openCartMenu, openLoginMenu } from './store/actions';

const Header = ({ isLoggedIn, onLoginClick, onLogoutClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cartItems = useSelector(state => state.cart.cartItems);

  const [cartItemsCount, setItemsCount] = useState(cartItems.length);
  useEffect(() => {
    setItemsCount(cartItems.length)
  }, [cartItems])

  const dispatch = useDispatch();

  

  
  return (
    <header>
    <div class ='top-box'>
    <div class='header__logo'>
    <a href="/">
    SunWay
    </a>

    </div>
      
      <ul class = "header__nav">
        <li class = "header__nav-item"  > <a href="/" class = "header__nav-link" >Головна</a></li>
        <li class = "header__nav-item" href="" ><a  href="1" class = "header__nav-link">Про нас</a></li>
        <li class = "header__nav-item" href="" ><a class = "header__nav-link">Контакти</a></li>
        <li class = "header__nav-item" href="" ><a class = "header__nav-link">Оплата і доставка</a></li>
        <li class = "header__nav-item" href="" ><a class = "header__nav-link">Гарантія</a></li>
        <li class = "header__nav-item" href="" ><a class = "header__nav-link">Техпідтримка</a></li>      
      

        
      
     
     </ul>

        
    </div >


    <div class='header__bottom' >
 
    <div class='container header__bottom-box'>
    <div class='header__bottom-left'>
      
    <div class='header_menu'>
    <PopupMenu/>
    </div>
    <form class="header__search"  method="GET" >
                    <input type="text" placeholder="Шукати" class="search-input" name="search" />

                    <div class="header__search__loader" >
                        <span class=""></span>
                    </div>



                   
                    <button class="btn_search" type="button" >Знайти</button>
                  
                 
    </form>
   


   
    </div>

    <div class='header__bottom-right'>
      <div class='header__phones' 
      
      onMouseEnter={()=>{setIsHovered(true);
      
      }}
      onMouseLeave={()=>{setIsHovered(false)}}
      >
      <TeleLogo></TeleLogo>
      <a href="tel:0975231242" class="header__phones-active js-change-view-mobile-number">
                        <span class="number" data-hero="true">097 523 1242</span>
                       
                    </a>
      <ul class="header__phones-list" style={ {  visibility:isHovered?"visible":"hidden", opacity:isHovered?1:0 }} >

                       <li><a href="tel:0975231242">0975231242</a></li> 
                        <li>
                            <a href="tel:0975231242" class="js-change-view-mobile-number">
                                <span class="__number">0975231242</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:0975231242" class="js-change-view-mobile-number">
                                <span class="__number">0975231242</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:0975231242" class="js-change-view-mobile-number">
                                <span class="__number">0975231242</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:0975231242" class="js-change-view-mobile-number">
                                <span class="__number">0975231242</span>
                            </a>
                        </li>
                        <li class="paymant">
                            <span class="header__phones-paymant">Згідно з тарифами вашого оператора</span>
                        </li>

                    </ul>

      </div>



    <div class='header__basket-list'>
    <div class='header__basket-item'>
    <IconButton onClick={()=>{ dispatch(openLoginMenu())}}>

                <img src={userlogo} alt="Описание изображения"/>                
          
</IconButton>
</div>

        <div class='header__basket-item'>
      <IconButton>

        <FavoriteBorderIcon></FavoriteBorderIcon>
      </IconButton>
      </div>


      <div class='header__basket-item'>

      <IconButton   >
      <ScalesLogo>        
      </ScalesLogo>
      </IconButton>

  
   


      </div>


      <div class='header__basket-item'>
      <IconButton onClick={()=>{
  
        dispatch(openCartMenu());
      }} >

        <LocalGroceryStoreOutlinedIcon></LocalGroceryStoreOutlinedIcon>
      </IconButton>
      <span className='header__basket-item_count' style={{
    visibility : cartItemsCount ?'visible' : 'hidden',

  }}>
          {cartItemsCount}
        </span>
      
      </div>

      </div>




    </div>

    </div>
    </div>  
    
    </header>
    
  );
};

export default Header;