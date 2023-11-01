import React, { useState, useEffect } from 'react';
import '../Styles/MenuPage.css';
import FoodCart from '../Components/FoodCart';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getAllFood } from '../actions/foodAction';



function Menu() {
  const dispatch = useDispatch();
  useEffect(()=> {dispatch(getAllFood())}, [dispatch]);
  const foodstate = useSelector(state => state.getAllfoodReducer)
  const {foods, loading ,error} = foodstate;
  console.log(foods[5]);

  const [menuType, setMenuType] = useState('drinks');

  return (
    <div className='menuPage'>
        <h1>Menu</h1>
        <div className='menuList'>
          <ul>
            <li onClick={() => {setMenuType('drinks')}}>Soft Drinks</li>
            <li onClick={() => {setMenuType('food')}}>Food</li>
            <li onClick={() => setMenuType('fastfood')}>Fast Food</li>
            <li onClick={() => setMenuType('pizza')}>Pizza</li>
          </ul>
        </div>
    {loading ? (<h1>Loading...</h1>) :
    error ? (<h1>Error, someting gone wrong...!!</h1>) :
      <div className='menuContent'>
        <div className='item-listing'>
          {foods && foods.map((item) =>
            item.type === menuType && (
              <Link to={`detail/${item.id}`} key={item.id}>
                <FoodCart item={item} />
              </Link>
            )
          )}
        </div>
      </div>
}
    </div>
            
  );
}

export default Menu;
