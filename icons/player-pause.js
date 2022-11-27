import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconPlayerPause({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-pause" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={6} y={5} width={4} height={14} rx={1} /><Rect x={14} y={5} width={4} height={14} rx={1} /></Svg>;
}
export default IconPlayerPause;