import Svg, { Path, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconBluetoothConnected({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bluetooth-connected" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="7 8 17 16 12 20 12 4 17 8 7 16" /><Line x1={4} y1={12} x2={5} y2={12} /><Line x1={18} y1={12} x2={19} y2={12} /></Svg>;
}
export default IconBluetoothConnected;