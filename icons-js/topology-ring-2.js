import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconTopologyRing2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-topology-ring-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M7 18h10" /><Path d="M18 16l-5 -8" /><Path d="M11 8l-5 8" /></Svg>;
}
export default IconTopologyRing2;