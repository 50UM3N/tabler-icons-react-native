import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPencilOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10.003 9.997l-6.003 6.003v4h4l6.006 -6.006m1.99 -1.99l2.504 -2.504a2.828 2.828 0 1 0 -4 -4l-2.5 2.5" /><Path d="M13.5 6.5l4 4" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconPencilOff;