import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconDna2Off({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dna-2-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 3v1c-.007 2.46 -.91 4.554 -2.705 6.281m-2.295 1.719c-3.328 1.99 -4.997 4.662 -5.008 8.014v1" /><Path d="M17 21.014v-1c-.004 -1.44 -.315 -2.755 -.932 -3.944m-4.068 -4.07c-1.903 -1.138 -3.263 -2.485 -4.082 -4.068" /><Path d="M8 4h9" /><Path d="M7 20h10" /><Path d="M12 8h4" /><Path d="M8 16h8" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconDna2Off;