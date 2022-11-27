import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconGridDots({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid-dots" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={5} cy={5} r={1} /><Circle cx={12} cy={5} r={1} /><Circle cx={19} cy={5} r={1} /><Circle cx={5} cy={12} r={1} /><Circle cx={12} cy={12} r={1} /><Circle cx={19} cy={12} r={1} /><Circle cx={5} cy={19} r={1} /><Circle cx={12} cy={19} r={1} /><Circle cx={19} cy={19} r={1} /></Svg>;
}
export default IconGridDots;