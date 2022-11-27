import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconTextWrapDisabled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-text-wrap-disabled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={4} y1={6} x2={14} y2={6} /><Line x1={4} y1={18} x2={14} y2={18} /><Path d="M4 12h17l-3 -3m0 6l3 -3" /></Svg>;
}
export default IconTextWrapDisabled;