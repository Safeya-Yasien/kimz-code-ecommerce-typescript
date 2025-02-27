import { TProduct } from "@/types";
import CartItem from "../CartItem/CartItem";

type TCartItemsProps = {
  products: TProduct[];
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id:number) => void;
};

const CartItemList = ({
  products,
  changeQuantityHandler,
  removeItemHandler,
}: TCartItemsProps) => {
  const renderList = products.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQuantityHandler={changeQuantityHandler}
      removeItemHandler={removeItemHandler}
    />
  ));

  return <>{renderList}</>;
};
export default CartItemList;
