import Svg, { Path, Rect, Circle } from 'react-native-svg';
import * as React from "react";
function IconDice4({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dice-4" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Circle cx={8.5} cy={8.5} r={0.5} fill="currentColor" /><Circle cx={15.5} cy={8.5} r={0.5} fill="currentColor" /><Circle cx={15.5} cy={15.5} r={0.5} fill="currentColor" /><Circle cx={8.5} cy={15.5} r={0.5} fill="currentColor" /></Svg>;
}
export default IconDice4;