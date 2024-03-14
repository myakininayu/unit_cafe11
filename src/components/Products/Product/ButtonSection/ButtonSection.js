import Modal from '../../../../components/Modal/Modal'

const ButtonSection = (props) => {
  return (
    <div className="d-flex flex-row justify-content-center">
        {/* <form class="mx-2" action="./products_form.html"> */}
        {/* <button type="submit" class="btn btn-primary">Изменить</button> */}
        <Modal addItem={props.addItem}></Modal>
        {/* </form> */}
        <button type="submit" class="btn btn-danger" onClick={() => props.deleteItem(props.id)}>Удалить</button>
    </div>
  );
}

export default ButtonSection;
