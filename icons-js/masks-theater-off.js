import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconMasksTheaterOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-masks-theater-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 9c.058 -.005 .133 0 .192 0h6.616a2 2 0 0 1 1.992 2.183l-.554 6.041m-1.286 2.718a3.99 3.99 0 0 1 -2.71 1.058h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182" /><Path d="M18 13h.01" /><Path d="M15 16.5c.657 .438 1.313 .588 1.97 .451" /><Path d="M8.632 15.982a4.05 4.05 0 0 1 -.382 .018h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182a2 2 0 0 1 .514 -1.531a1.99 1.99 0 0 1 1.286 -.652m4 0h2.808a2 2 0 0 1 2 2" /><Path d="M6 8h.01" /><Path d="M6 12c.764 -.51 1.528 -.63 2.291 -.36" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconMasksTheaterOff;