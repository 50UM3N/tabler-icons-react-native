import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconArrowDown({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={12} y1={5} x2={12} y2={19} /><Line x1={18} y1={13} x2={12} y2={19} /><Line x1={6} y1={13} x2={12} y2={19} /></Svg>;
}
export default IconArrowDown;