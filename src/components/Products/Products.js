import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Product from './Product/Product';
import useStore from '../../store';
import { useState, useEffect } from 'react';


function Products() {

    const products = useStore((state) => state.products);
    const [productList, setProductList] = useState(products);

    useEffect(() => {
        setProductList(products);
    }, [products]);


    return (
        <Table responsive bordered>
            <thead class="table-dark">
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Название</th>
                    <th scope="col">Фото</th>
                    <th scope="col">Цена за штуку</th>
                    <th scope="col">Редактирование</th>
                </tr>
            </thead>
            <tbody>
                {productList.map((prod) => { return <Product key={prod.id} prodInfo={prod}></Product> })}
            </tbody>
        </Table>
    );
}

export default Products;
