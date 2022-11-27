import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconAnalyze({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-analyze" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.095 8.095 0 0 0 -8.019 3.918" /><Path d="M4 13a8.1 8.1 0 0 0 15.001 2.998" /><Circle cx={19} cy={16} r={1} /><Circle cx={5} cy={8} r={1} /><Circle cx={12} cy={12} r={3} /></Svg>;
}
export default IconAnalyze;