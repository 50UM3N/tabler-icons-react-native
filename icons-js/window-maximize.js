import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconWindowMaximize({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-window-maximize" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={16} width={5} height={5} rx={1} /><Path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" /><Path d="M12 8h4v4" /><Path d="M16 8l-5 5" /></Svg>;
}
export default IconWindowMaximize;