import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconMessageReport({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-report" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><Line x1={12} y1={8} x2={12} y2={11} /><Line x1={12} y1={14} x2={12} y2={14.01} /></Svg>;
}
export default IconMessageReport;