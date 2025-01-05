import { Banner } from "./components/banner";
import { Products } from "./components/products";
import { SubMenu } from "./components/submenu";

export function Home() {
  return (
    <>
      <Banner />
      <SubMenu />
      <Products />
    </>
  )
}