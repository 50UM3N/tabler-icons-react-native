import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconVectorOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vector-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6.68 6.733a0.996 .996 0 0 1 -.68 .267h-2a1 1 0 0 1 -1 -1v-2c0 -.276 .112 -.527 .293 -.708" /><Rect x={17} y={3} width={4} height={4} rx={1} /><Path d="M20.72 20.693a0.997 .997 0 0 1 -.72 .307h-2a1 1 0 0 1 -1 -1v-2c0 -.282 .116 -.536 .304 -.718" /><Rect x={3} y={17} width={4} height={4} rx={1} /><Path d="M5 7v10" /><Path d="M19 7v8" /><Path d="M9 5h8" /><Path d="M7 19h10" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconVectorOff;