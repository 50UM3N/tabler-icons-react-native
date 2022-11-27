import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconBinary({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-binary" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 10v-5h-1m8 14v-5h-1" /><Rect x={15} y={5} width={3} height={5} rx={0.5} /><Rect x={10} y={14} width={3} height={5} rx={0.5} /><Path d="M6 10h.01m-.01 9h.01" /></Svg>;
}
export default IconBinary;