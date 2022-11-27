import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconBarrierBlock({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-barrier-block" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={7} width={16} height={9} rx={1} /><Path d="M7 16v4" /><Path d="M7.5 16l9 -9" /><Path d="M13.5 16l6.5 -6.5" /><Path d="M4 13.5l6.5 -6.5" /><Path d="M17 16v4" /><Path d="M5 20h4" /><Path d="M15 20h4" /><Path d="M17 7v-2" /><Path d="M7 7v-2" /></Svg>;
}
export default IconBarrierBlock;