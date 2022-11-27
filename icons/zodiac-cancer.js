import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconZodiacCancer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zodiac-cancer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={12} r={3} /><Circle cx={18} cy={12} r={3} /><Path d="M3 12a10 6.5 0 0 1 14 -6.5" /><Path d="M21 12a10 6.5 0 0 1 -14 6.5" /></Svg>;
}
export default IconZodiacCancer;