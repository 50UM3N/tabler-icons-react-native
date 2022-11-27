import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconPictureInPictureOn({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-picture-in-picture-on" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" /><Rect x={14} y={14} width={7} height={5} rx={1} /><Line x1={7} y1={9} x2={11} y2={13} /><Path d="M8 13h3v-3" /></Svg>;
}
export default IconPictureInPictureOn;