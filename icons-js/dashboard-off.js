import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconDashboardOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dashboard-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11.175 11.178a2 2 0 1 0 2.653 2.634" /><Path d="M14.5 10.5l1 -1" /><Path d="M8.621 4.612a9 9 0 0 1 11.721 11.72m-1.516 2.488a9.008 9.008 0 0 1 -1.226 1.18h-11.2a9 9 0 0 1 -.268 -13.87" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconDashboardOff;