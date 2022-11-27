import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconClothesRack({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clothes-rack" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={5} r={2} /><Path d="M12 7v14" /><Path d="M9 21h6" /><Path d="M7.757 9.243a6 6 0 0 0 8.486 0" /></Svg>;
}
export default IconClothesRack;