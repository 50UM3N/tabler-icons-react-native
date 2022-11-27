import Svg, { Path, Rect, Circle } from 'react-native-svg';
import * as React from "react";
function IconBusStop({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bus-stop" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={3} width={4} height={6} rx={1} /><Circle cx={18} cy={17} r={2} /><Path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2" /><Path d="M16 17h-8" /><Path d="M16 5l1.5 7h4.5" /><Path d="M9.5 10h7.5" /><Path d="M12 5v5" /><Path d="M5 9v11" /></Svg>;
}
export default IconBusStop;