"use client"
import useBasketStore from "@/app/(store)/store";
import { Product } from "../../sanity.types";
import { useEffect, useState } from "react";

interface AddToBasketProps {
  product: Product;
  disabled?: boolean;
}
const AddToBasketButton = ({ product, disabled }: AddToBasketProps) => {
  const { addItem, removeItem, getItemCount } = useBasketStore();
  const itemCount = getItemCount(product._id);
  const [isClient, setIsClient] = useState(false);

    useEffect(() => {
    setIsClient(true)
    }, [])
    if(!isClient) {
        return null
    }

  return <div className="flex items-center spacce-x-2">
    <span className="w-8 text-center font-semibold">{itemCount}</span>
  </div>;
};
export default AddToBasketButton;
