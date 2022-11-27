import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconEggFried({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-egg-fried" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={3} /><Path d="M14 3a5 5 0 0 1 4.872 6.13a3 3 0 0 1 .178 5.681a3 3 0 1 1 -4.684 3.626a5 5 0 1 1 -8.662 -4.996a5 5 0 1 1 4.645 -8.856a4.982 4.982 0 0 1 3.651 -1.585z" /></Svg>;
}
export default IconEggFried;