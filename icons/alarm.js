import Svg, { Path, Circle, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconAlarm({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={13} r={7} /><Polyline points="12 10 12 13 14 13" /><Line x1={7} y1={4} x2={4.25} y2={6} /><Line x1={17} y1={4} x2={19.75} y2={6} /></Svg>;
}
export default IconAlarm;