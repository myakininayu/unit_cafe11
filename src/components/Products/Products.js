import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Product from './Product/Product';

let products = [
        { id: 1, name: 'Наполеон', img: './image/tort_napoleon.jpg', price: 500 },
        { id: 2, name: 'Торт "Графские развалины"', img: './image/cake_graf_razvalini.jpg', price: 520 },
        { id: 3, name: 'Пирожное "Птичье молоко"', img: './image/ptitsie_moloko.webp', price: 50 },
        { id: 4, name: 'Пирожное "Корзиночка"', img: './image/korzinka.jpg', price: 50 }
    ];

function Products() {
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
            {products.map((prod) => { return <Product prodInfo={prod}></Product>})}
            {//<Product prodInfo={products[0]}></Product>
            // Пока только таким образом сделали, без map
}
        </tbody>     
    </Table>
  );
}

export default Products;
