import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconAdjustmentsOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={10} r={2} /><Path d="M6 6v2" /><Path d="M6 12v8" /><Circle cx={12} cy={16} r={2} /><Path d="M12 4v4" /><Path d="M12 12v2" /><Path d="M12 18v2" /><Circle cx={18} cy={7} r={2} /><Path d="M18 4v1" /><Path d="M18 9v5" /><Path d="M18 18v2" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconAdjustmentsOff;