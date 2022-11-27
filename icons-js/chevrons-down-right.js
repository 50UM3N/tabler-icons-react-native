import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconChevronsDownRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-down-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 5v8h-8" /><Path d="M17 9v8h-8" /></Svg>;
}
export default IconChevronsDownRight;