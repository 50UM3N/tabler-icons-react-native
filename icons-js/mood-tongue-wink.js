import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconMoodTongueWink({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-tongue-wink" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" /><Circle cx={12} cy={12} r={9} /><Path d="M9 10h.01" /><Path d="M10 14v2a2 2 0 0 0 4 0v-2" /><Path d="M15.5 14h-7" /><Path d="M17 10c-.5 -1 -2.5 -1 -3 0" /></Svg>;
}
export default IconMoodTongueWink;