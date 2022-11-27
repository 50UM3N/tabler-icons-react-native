import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCoinYen({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-coin-yen" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M9 12h6" /><Path d="M9 15h6" /><Path d="M9 8l3 4.5" /><Path d="M15 8l-3 4.5v4.5" /></Svg>;
}
export default IconCoinYen;