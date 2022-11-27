import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconListSearch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={15} cy={15} r={4} /><Path d="M18.5 18.5l2.5 2.5" /><Path d="M4 6h16" /><Path d="M4 12h4" /><Path d="M4 18h4" /></Svg>;
}
export default IconListSearch;