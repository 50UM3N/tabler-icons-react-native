import Svg, { Path, Rect, Circle } from 'react-native-svg';
import * as React from "react";
function IconTrafficLights({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-traffic-lights" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={7} y={2} width={10} height={20} rx={5} /><Circle cx={12} cy={7} r={1} /><Circle cx={12} cy={12} r={1} /><Circle cx={12} cy={17} r={1} /></Svg>;
}
export default IconTrafficLights;