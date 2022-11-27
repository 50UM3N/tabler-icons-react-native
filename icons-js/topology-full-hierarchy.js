import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconTopologyFullHierarchy({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-topology-full-hierarchy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M6 8v8" /><Path d="M18 16v-8" /><Path d="M8 6h8" /><Path d="M16 18h-8" /><Path d="M7.5 7.5l3 3" /><Path d="M13.5 13.5l3 3" /><Path d="M16.5 7.5l-3 3" /><Path d="M10.5 13.5l-3 3" /></Svg>;
}
export default IconTopologyFullHierarchy;