import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconRegistered({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-registered" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M10 15v-6h2a2 2 0 1 1 0 4h-2" /><Path d="M14 15l-2 -2" /></Svg>;
}
export default IconRegistered;