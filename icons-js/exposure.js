import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconExposure({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-exposure" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Line x1={4.6} y1={19.4} x2={19.4} y2={4.6} /><Path d="M7 9h4m-2 -2v4" /><Line x1={13} y1={16} x2={17} y2={16} /></Svg>;
}
export default IconExposure;