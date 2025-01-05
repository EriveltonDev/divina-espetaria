import { Banner } from "./components/banner";
import { Numbers } from "./components/numbers";
import { Products } from "./components/products";
import { SubMenu } from "./components/submenu";

export function Home() {
  return (
    <>
      <Banner />
      <SubMenu />
      <Products />
      <Numbers />
    </>
  )
}