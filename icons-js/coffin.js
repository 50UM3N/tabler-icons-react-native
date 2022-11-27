import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCoffin({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-coffin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 3l-2 6l2 12h6l2 -12l-2 -6z" /><Path d="M10 7v5" /><Path d="M8 9h4" /><Path d="M13 21h4l2 -12l-2 -6h-4" /></Svg>;
}
export default IconCoffin;