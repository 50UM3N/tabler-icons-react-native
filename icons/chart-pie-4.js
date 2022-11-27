import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconChartPie4({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-pie-4" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12l-6.5 5.5" /><Path d="M12 3v9h9" /><Circle cx={12} cy={12} r={9} /><Path d="M12 12l5 7.5" /></Svg>;
}
export default IconChartPie4;