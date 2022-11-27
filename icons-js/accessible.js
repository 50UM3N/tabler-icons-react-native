import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconAccessible({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-accessible" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" /><Circle cx={12} cy={7.5} r={0.5} fill="currentColor" /></Svg>;
}
export default IconAccessible;