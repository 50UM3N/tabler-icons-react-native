import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSquareF9({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-f9" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 6.667v10.666a2.667 2.667 0 0 1 -2.667 2.667h-10.666a2.667 2.667 0 0 1 -2.667 -2.667v-10.666a2.667 2.667 0 0 1 2.667 -2.667h10.666a2.667 2.667 0 0 1 2.667 2.667z" /><Path d="M13 14.25c0 .414 .336 .75 .75 .75h1.5a0.75 .75 0 0 0 .75 -.75v-4.5a0.75 .75 0 0 0 -.75 -.75h-1.5a0.75 .75 0 0 0 -.75 .75v1.5c0 .414 .336 .75 .75 .75h2.25" /><Path d="M8 12h2" /><Path d="M10 9h-2v6" /></Svg>;
}
export default IconSquareF9;