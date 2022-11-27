import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconTrain({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-train" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 13c0 -3.87 -3.37 -7 -10 -7h-8" /><Path d="M3 15h16a2 2 0 0 0 2 -2" /><Path d="M3 6v5h17.5" /><Line x1={3} y1={10} x2={3} y2={14} /><Line x1={8} y1={11} x2={8} y2={6} /><Line x1={13} y1={11} x2={13} y2={6.5} /><Line x1={3} y1={19} x2={21} y2={19} /></Svg>;
}
export default IconTrain;