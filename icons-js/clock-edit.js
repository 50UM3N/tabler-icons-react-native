import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconClockEdit({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock-edit" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 12a9.001 9.001 0 1 0 -9.972 8.948c.32 .034 .644 .052 .972 .052" /><Path d="M12 7v5l2 2" /><Path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" /></Svg>;
}
export default IconClockEdit;