import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconArrowsDoubleNwSe({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-double-nw-se" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 21l-11 -11" /><Path d="M3 14v-4h4" /><Path d="M17 14h4v-4" /><Line x1={10} y1={3} x2={21} y2={14} /></Svg>;
}
export default IconArrowsDoubleNwSe;