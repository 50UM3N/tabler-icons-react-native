import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconShoppingCartDiscount({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-discount" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={19} r={2} /><Circle cx={17} cy={19} r={2} /><Path d="M17 17h-11v-14h-2" /><Path d="M20 6l-1 7h-13" /><Path d="M10 10l6 -6" /><Circle cx={10.5} cy={4.5} r={0.5} /><Circle cx={15.5} cy={9.5} r={0.5} /></Svg>;
}
export default IconShoppingCartDiscount;