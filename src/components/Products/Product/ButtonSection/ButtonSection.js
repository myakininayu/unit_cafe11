import useStore from '../../../../store';
import { Link } from 'react-router-dom';

const ButtonSection = (props) => {

  const delProduct = useStore((state) => state.delProduct);
  

  function deleteItem() {
    delProduct(props.prodInfo.id)
  }


  return (
    <div className="d-flex flex-row justify-content-center">
        <Link to="/products_form">Добавить продукт</Link>
        <button type="submit" onClick={() => deleteItem()}class="btn btn-danger">Удалить</button>
    </div>
  );
}

export default ButtonSection;
