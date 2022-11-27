import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconDeviceMobileCharging({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile-charging" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={6} y={3} width={12} height={18} rx={2} /><Path d="M11 4h2" /><Path d="M12 9.5l-1 2.5h2l-1 2.5" /></Svg>;
}
export default IconDeviceMobileCharging;