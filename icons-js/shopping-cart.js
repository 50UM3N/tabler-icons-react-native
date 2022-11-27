import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconShoppingCart({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={19} r={2} /><Circle cx={17} cy={19} r={2} /><Path d="M17 17h-11v-14h-2" /><Path d="M6 5l14 1l-1 7h-13" /></Svg>;
}
export default IconShoppingCart;