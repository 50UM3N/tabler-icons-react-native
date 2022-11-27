import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconHierarchy({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hierarchy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={5} r={2} /><Circle cx={5} cy={19} r={2} /><Circle cx={19} cy={19} r={2} /><Path d="M6.5 17.5l5.5 -4.5l5.5 4.5" /><Line x1={12} y1={7} x2={12} y2={13} /></Svg>;
}
export default IconHierarchy;