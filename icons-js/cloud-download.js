import Svg, { Path, Line, Polyline } from 'react-native-svg';
import * as React from "react";
function IconCloudDownload({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-download" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><Line x1={12} y1={13} x2={12} y2={22} /><Polyline points="9 19 12 22 15 19" /></Svg>;
}
export default IconCloudDownload;