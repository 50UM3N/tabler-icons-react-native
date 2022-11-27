import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconThermometer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-thermometer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 5a2.828 2.828 0 0 1 0 4l-8 8h-4v-4l8 -8a2.828 2.828 0 0 1 4 0z" /><Path d="M16 7l-1.5 -1.5" /><Path d="M13 10l-1.5 -1.5" /><Path d="M10 13l-1.5 -1.5" /><Path d="M7 17l-3 3" /></Svg>;
}
export default IconThermometer;