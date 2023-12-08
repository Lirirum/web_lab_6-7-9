import React,{useState,Button,useEffect} from 'react';

import './styles/product.css';
import { Link } from 'react-router-dom'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import IconButton from '@mui/material/IconButton';
import { useData } from './DataContext';
import { useTheme } from './ThemeContext';
import { useDispatch } from 'react-redux';
import { addToCart } from './store/actions';

const ProductCard = ({ product }) => {



const dispatch = useDispatch();
const [favorite, setFavorite] = useState(false);
const svgHeartStyle = {
  
  fontSize:'25px',
  fill: favorite ? 'red' : 'blue',


 
  
};

const svgStoreStyle = {
  
  fontSize:'25px',
  fill:  'blue',
  
};



  const { data,  handleIncrement} = useData();
  const ministyle = useTheme();

  return (
    <div className="product-item" >
      <div class = "product-img">
      <Link to={`/product/${product.id}`}  state={ product } >
      <img className='my_img' src={product.imageUrl} alt={product.name}  />
      </Link>
      </div>
 
      <div class="product-item__title">{product.name}</div>
      <div className='product-item__footer'>
      <div class="product-item__price">{product.price}</div>
      <div className='product-item__btn' >
      <IconButton  className="product-item__btn__fav"  >
        <FavoriteBorderIcon  style={svgHeartStyle}   ></FavoriteBorderIcon>
      </IconButton>


      <IconButton onClick={()=>{
        dispatch(addToCart(product))
      }} > 
      <LocalGroceryStoreOutlinedIcon style={svgStoreStyle} >   
      
    </LocalGroceryStoreOutlinedIcon> 
    </IconButton>

      </div>
     </div>
   
 
 
    </div>
  );
};

export default ProductCard;