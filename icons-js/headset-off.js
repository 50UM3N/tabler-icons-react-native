import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconHeadsetOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-headset-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={13} width={4} height={6} rx={2} /><Path d="M17.185 13.173a2 2 0 0 1 2.815 1.827v1m-1.18 2.825a2 2 0 0 1 -2.82 -1.825v-1" /><Path d="M4 15v-3c0 -2.208 .894 -4.207 2.34 -5.654m2.377 -1.643a8 8 0 0 1 11.283 7.297v3" /><Path d="M18 19c0 1.657 -2.686 3 -6 3" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconHeadsetOff;