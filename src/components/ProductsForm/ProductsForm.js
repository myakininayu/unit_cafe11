import { useState, useEffect } from 'react';
import useStore from '../../store';
import { useNavigate } from 'react-router-dom';


const ProductsForm = (props) => {
    const addProduct = useStore((state) => state.addProduct);
    const [item, setItem] = useState({name: null, img: null, price: null});
    const navigate = useNavigate();

    function addItem() {
        addProduct({id: Date.now(), ...item})
        navigate('/products');
    }


    return (
        <div>
            <label>Название</label>
            <input type='text' onChange={(e) => setItem({...item, name: e.target.value})}></input>
            <label>Изображение</label>
            <input type='file' onChange={(e) => setItem({...item, img: e.target.value})}></input>
            <label>Цена</label>
            <input type='number' onChange={(e) => setItem({...item, price: e.target.value})}></input>
            <button  onClick={addItem}>Применить</button>
        </div>
    );
}

export default ProductsForm;
