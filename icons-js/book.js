import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconBook({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><Path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><Line x1={3} y1={6} x2={3} y2={19} /><Line x1={12} y1={6} x2={12} y2={19} /><Line x1={21} y1={6} x2={21} y2={19} /></Svg>;
}
export default IconBook;