import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import MenuData from '../data/MenuData';
import '../Styles/itemsDetails.css';
import {useDispatch, useSelector} from 'react-redux';
import { getAllFood } from '../actions/foodAction';

const ItemDetails = () => {
  const { id } = useParams();
  const [itemInfo, setItemInfo] = useState({ name: '', img: '' });
  const dispatch = useDispatch();
  useEffect(()=> {dispatch(getAllFood())}, [dispatch]);
  const foodstate = useSelector(state => state.getAllfoodReducer)
  const {foods, loading ,error} = foodstate;

  useEffect(() => {
    // Filter the item by id and type
    const filteredItems = foods.filter((item) => item.id === parseInt(id));

    if (filteredItems.length > 0) {
      setItemInfo({
        name: filteredItems[0].name,
        img: filteredItems[0].image,
      });
    } else {
      // Handle the case when the item with the specified id is not found
      setItemInfo({ name: 'Item not found', img: '' });
    }
  }, [id]);

  return (
    <div className="main-div">

      <div className='left'><img src={itemInfo.img} alt={itemInfo.name} /></div>
      <div className='right'><h1>{itemInfo.name}</h1></div>
        {/* 
         */}
    </div>
  );
};

export default ItemDetails;
