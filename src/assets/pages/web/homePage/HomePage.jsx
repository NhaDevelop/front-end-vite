import CategoryList from "../CategoryList";
import Slide from "../Slide";
import Product from "../Product";
import HeaderWeb from "../Header";

export default function HomePage() {
  return (
    <div>
      <HeaderWeb></HeaderWeb>
      <Slide />
      <CategoryList />
      <Product />
    </div>
  );
}
