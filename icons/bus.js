import Svg, { Path, Circle, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconBus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={17} r={2} /><Circle cx={18} cy={17} r={2} /><Path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" /><Polyline points="16 5 17.5 12 22 12" /><Line x1={2} y1={10} x2={17} y2={10} /><Line x1={7} y1={5} x2={7} y2={10} /><Line x1={12} y1={5} x2={12} y2={10} /></Svg>;
}
export default IconBus;