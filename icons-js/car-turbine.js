import Svg, { Path, Circle, Rect } from 'react-native-svg';
import * as React from "react";
function IconCarTurbine({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-car-turbine" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={11} cy={13} r={4} /><Path d="M18.86 11c.088 .66 .14 1.512 .14 2a8 8 0 1 1 -8 -8h6" /><Path d="M11 9c2.489 .108 4.489 .108 6 0" /><Rect x={17} y={3} width={4} height={8} rx={1} /><Path d="M11 13l-3.5 -1.5" /><Path d="M11 13l2.5 3" /><Path d="M8.5 16l2.5 -3" /><Path d="M11 13l3.5 -1.5" /><Path d="M11 9v4" /></Svg>;
}
export default IconCarTurbine;