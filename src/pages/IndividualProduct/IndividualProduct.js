import { useEffect } from "react";
import { IndividualProductCard } from "../../components";
import { useData } from "../../contexts/DataContext";
// import "./IndividualProduct.css"

export function IndividualProduct() {
  // const { setTitle } = useData();

  // useEffect(() => setTitle("Product"), []);

  return (
    <>
      <IndividualProductCard />
    </>
  );
}
