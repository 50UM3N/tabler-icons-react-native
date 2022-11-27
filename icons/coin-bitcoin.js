import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCoinBitcoin({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-coin-bitcoin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M9 8h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09" /><Path d="M10 12h4" /><Path d="M10 7v10v-9" /><Path d="M13 7v1" /><Path d="M13 16v1" /></Svg>;
}
export default IconCoinBitcoin;