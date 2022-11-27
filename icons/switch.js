import Svg, { Path, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconSwitch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-switch" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="15 4 19 4 19 8" /><Line x1={14.75} y1={9.25} x2={19} y2={4} /><Line x1={5} y1={19} x2={9} y2={15} /><Polyline points="15 19 19 19 19 15" /><Line x1={5} y1={5} x2={19} y2={19} /></Svg>;
}
export default IconSwitch;