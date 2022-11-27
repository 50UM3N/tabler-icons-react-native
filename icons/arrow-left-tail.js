import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowLeftTail({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left-tail" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 12h-15" /><Path d="M6 9l-3 3l3 3" /><Path d="M21 9l-3 3l3 3" /></Svg>;
}
export default IconArrowLeftTail;