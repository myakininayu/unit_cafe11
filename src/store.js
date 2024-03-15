import {create} from "zustand";

const useStore = create((set) => ({
    products: [
        { id: 1, name: 'Наполеон', img: './image/tort_napoleon.jpg', price: 500 },
        { id: 2, name: 'Корж', img: './image/korzh.jpg', price: 40 }
    ], 
    addProduct: (prod) => set(state => (
        {
            products: [
                ...state.products,
                prod
            ]
        }
    )),
    delProduct: (idDel) => set(state => (
        {
            products: state.products.filter(pr => pr.id !== idDel)
        }
    ))
}))

export default useStore;


