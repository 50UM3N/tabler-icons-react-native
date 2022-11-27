import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconArrowTopTail({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-top-tail" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={12} y1={18} x2={12} y2={3} /><Path d="M15 6l-3 -3l-3 3" /><Path d="M15 21l-3 -3l-3 3" /></Svg>;
}
export default IconArrowTopTail;