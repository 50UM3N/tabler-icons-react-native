import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconOld({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-old" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 21l-1 -4l-2 -3v-6" /><Path d="M5 14l-1 -3l4 -3l3 2l3 .5" /><Circle cx={8} cy={4} r={1} /><Path d="M7 17l-2 4" /><Path d="M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" /></Svg>;
}
export default IconOld;