import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconUserExclamation({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-exclamation" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={9} cy={7} r={4} /><Path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><Line x1={19} y1={7} x2={19} y2={10} /><Line x1={19} y1={14} x2={19} y2={14.01} /></Svg>;
}
export default IconUserExclamation;