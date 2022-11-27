import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconUsb({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-usb" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={19} r={2} /><Path d="M12 17v-11.5" /><Path d="M7 10v3l5 3" /><Path d="M12 14.5l5 -2v-2.5" /><Path d="M16 10h2v-2h-2z" /><Circle cx={7} cy={9} r={1} /><Path d="M10 5.5h4l-2 -2.5z" /></Svg>;
}
export default IconUsb;