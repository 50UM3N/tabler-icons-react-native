import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconPlaylist({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-playlist" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={14} cy={17} r={3} /><Path d="M17 17v-13h4" /><Path d="M13 5h-10" /><Line x1={3} y1={9} x2={13} y2={9} /><Path d="M9 13h-6" /></Svg>;
}
export default IconPlaylist;