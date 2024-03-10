const ButtonSection = () => {
  return (
    <div className="d-flex flex-row justify-content-center">
        <form class="mx-2" action="./products_form.html">
        <button type="submit" class="btn btn-primary">Изменить</button>
        </form>
        <button type="submit" class="btn btn-danger">Удалить</button>
    </div>
  );
}

export default ButtonSection;
