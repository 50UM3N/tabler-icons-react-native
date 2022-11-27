import Svg, { Path, Line, Circle } from 'react-native-svg';
import * as React from "react";
function IconStepInto({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-step-into" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={12} y1={3} x2={12} y2={15} /><Line x1={16} y1={11} x2={12} y2={15} /><Line x1={8} y1={11} x2={12} y2={15} /><Circle cx={12} cy={20} r={1} /></Svg>;
}
export default IconStepInto;