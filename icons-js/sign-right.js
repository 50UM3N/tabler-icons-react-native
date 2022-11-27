import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSignRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sign-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 21h4" /><Path d="M10 21v-10" /><Path d="M10 6v-3" /><Path d="M6 6h10l2 2.5l-2 2.5h-10z" /></Svg>;
}
export default IconSignRight;