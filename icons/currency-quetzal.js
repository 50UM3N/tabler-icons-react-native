import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCurrencyQuetzal({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-quetzal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={6} /><Path d="M13 13l5 5" /></Svg>;
}
export default IconCurrencyQuetzal;