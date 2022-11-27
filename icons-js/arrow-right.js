import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconArrowRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={5} y1={12} x2={19} y2={12} /><Line x1={13} y1={18} x2={19} y2={12} /><Line x1={13} y1={6} x2={19} y2={12} /></Svg>;
}
export default IconArrowRight;