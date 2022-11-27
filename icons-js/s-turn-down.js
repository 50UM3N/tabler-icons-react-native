import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSTurnDown({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-s-turn-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" /><Path d="M5 7v9.5a3.5 3.5 0 0 0 7 0v-9a3.5 3.5 0 0 1 7 0v13.5" /><Path d="M16 18l3 3l3 -3" /></Svg>;
}
export default IconSTurnDown;