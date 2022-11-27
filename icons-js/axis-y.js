import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconAxisY({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-axis-y" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 20h-.01" /><Path d="M15 20h-.01" /><Path d="M19 20h-.01" /><Path d="M4 7l3 -3l3 3" /><Path d="M7 20v-16" /></Svg>;
}
export default IconAxisY;