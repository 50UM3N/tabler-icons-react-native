import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconLayoutBoard({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-board" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Path d="M4 9h8" /><Path d="M12 15h8" /><Path d="M12 4v16" /></Svg>;
}
export default IconLayoutBoard;