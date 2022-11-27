import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconPercentage({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-percentage" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={17} cy={17} r={1} /><Circle cx={7} cy={7} r={1} /><Line x1={6} y1={18} x2={18} y2={6} /></Svg>;
}
export default IconPercentage;