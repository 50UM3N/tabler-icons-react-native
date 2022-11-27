import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconArrowsDoubleSeNw({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-double-se-nw" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={10} x2={14} y2={21} /><Path d="M14 17v4h-4" /><Path d="M14 3h-4v4" /><Path d="M21 14l-11 -11" /></Svg>;
}
export default IconArrowsDoubleSeNw;