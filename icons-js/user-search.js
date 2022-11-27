import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconUserSearch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={7} r={4} /><Path d="M6 21v-2a4 4 0 0 1 4 -4h1" /><Circle cx={16.5} cy={17.5} r={2.5} /><Path d="M18.5 19.5l2.5 2.5" /></Svg>;
}
export default IconUserSearch;