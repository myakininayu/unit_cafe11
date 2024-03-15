import Image from 'react-bootstrap/Image';
import style from './Product.module.css'
import ButtonSection from './ButtonSection/ButtonSection';

const Product = (props) => {
  return (
    <tr>
        <th scope="row">{props.prodInfo.id}</th>
        <td>"{props.prodInfo.name}"</td>
        <td><Image className={style.img} src={props.prodInfo.img} alt="Торт"></Image></td>
        <td>{props.prodInfo.price}₽</td>
        <td min-height="200px">
            <ButtonSection prodInfo={props.prodInfo}></ButtonSection>
        </td>
    </tr>
  );
}

export default Product;
