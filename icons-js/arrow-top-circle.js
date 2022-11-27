import Svg, { Path, Line, Circle } from 'react-native-svg';
import * as React from "react";
function IconArrowTopCircle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-top-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={12} y1={17} x2={12} y2={3} /><Path d="M15 6l-3 -3l-3 3" /><Circle cx={12} cy={19} r={2} /></Svg>;
}
export default IconArrowTopCircle;