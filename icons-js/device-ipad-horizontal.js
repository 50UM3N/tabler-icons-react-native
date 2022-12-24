import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconDeviceIpadHorizontal({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-ipad-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={2} y={4} width={20} height={16} rx={2} /><Path d="M9 17h6" /></Svg>;
}
export default IconDeviceIpadHorizontal;