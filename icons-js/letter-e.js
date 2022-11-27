import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconLetterE({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-e" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 4h-10v16h10" /><Line x1={7} y1={12} x2={15} y2={12} /></Svg>;
}
export default IconLetterE;