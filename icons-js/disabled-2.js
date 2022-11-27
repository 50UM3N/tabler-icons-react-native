import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconDisabled2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-disabled-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={17} cy={6} r={2} /><Path d="M9 11a5 5 0 1 0 3.95 7.95" /><Path d="M19 20l-4 -5h-4l3 -5l-4 -3l-4 1" /></Svg>;
}
export default IconDisabled2;