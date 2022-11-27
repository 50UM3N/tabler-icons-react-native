import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconVideoMinus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-video-minus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" /><Rect x={3} y={6} width={12} height={12} rx={2} /><Line x1={7} y1={12} x2={11} y2={12} /></Svg>;
}
export default IconVideoMinus;