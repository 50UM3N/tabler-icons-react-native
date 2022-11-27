import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconMapSearch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v10" /><Path d="M9 4v13" /><Path d="M15 7v5" /><Circle cx={16.5} cy={17.5} r={2.5} /><Path d="M18.5 19.5l2.5 2.5" /></Svg>;
}
export default IconMapSearch;