import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconUrgent({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-urgent" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 16v-4a4 4 0 0 1 8 0v4" /><Path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><Rect x={6} y={16} width={12} height={4} rx={1} /></Svg>;
}
export default IconUrgent;