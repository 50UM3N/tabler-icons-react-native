import Svg, { Path, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconCloudUpload({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-upload" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" /><Polyline points="9 15 12 12 15 15" /><Line x1={12} y1={12} x2={12} y2={21} /></Svg>;
}
export default IconCloudUpload;