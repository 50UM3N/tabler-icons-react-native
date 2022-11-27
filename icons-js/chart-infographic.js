import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconChartInfographic({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-infographic" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={7} cy={7} r={4} /><Path d="M7 3v4h4" /><Line x1={9} y1={17} x2={9} y2={21} /><Line x1={17} y1={14} x2={17} y2={21} /><Line x1={13} y1={13} x2={13} y2={21} /><Line x1={21} y1={12} x2={21} y2={21} /></Svg>;
}
export default IconChartInfographic;