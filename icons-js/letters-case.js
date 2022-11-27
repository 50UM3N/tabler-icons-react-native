import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconLettersCase({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letters-case" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={18} cy={16} r={3} /><Line x1={21} y1={13} x2={21} y2={19} /><Path d="M3 19v-10a4 4 0 0 1 4 -4a4 4 0 0 1 4 4v10" /><Line x1={3} y1={13} x2={11} y2={13} /></Svg>;
}
export default IconLettersCase;