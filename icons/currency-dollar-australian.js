import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCurrencyDollarAustralian({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-dollar-australian" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 18l3.279 -11.476a0.75 .75 0 0 1 1.442 0l3.279 11.476" /><Path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" /><Path d="M17 20v-2" /><Path d="M18 6v-2" /><Path d="M4.5 14h5" /></Svg>;
}
export default IconCurrencyDollarAustralian;