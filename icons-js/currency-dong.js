import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCurrencyDong({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-dong" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 19h12" /><Circle cx={12} cy={12} r={4} /><Path d="M16 16v-12" /><Path d="M17 5h-4" /></Svg>;
}
export default IconCurrencyDong;