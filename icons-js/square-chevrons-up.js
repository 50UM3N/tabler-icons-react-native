import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSquareChevronsUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-chevrons-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 15l3 -3l3 3" /><Path d="M9 11l3 -3l3 3" /><Path d="M20 6.667v10.666a2.667 2.667 0 0 1 -2.667 2.667h-10.666a2.667 2.667 0 0 1 -2.667 -2.667v-10.666a2.667 2.667 0 0 1 2.667 -2.667h10.666a2.667 2.667 0 0 1 2.667 2.667z" /></Svg>;
}
export default IconSquareChevronsUp;