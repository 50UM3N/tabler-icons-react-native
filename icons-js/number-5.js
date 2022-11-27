import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconNumber5({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-number-5" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 20h4a4 4 0 1 0 0 -8h-4v-8h8" /></Svg>;
}
export default IconNumber5;