import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconHelicopterLanding({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-helicopter-landing" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Line x1={9} y1={8} x2={9} y2={16} /><Line x1={9} y1={12} x2={15} y2={12} /><Line x1={15} y1={8} x2={15} y2={16} /></Svg>;
}
export default IconHelicopterLanding;