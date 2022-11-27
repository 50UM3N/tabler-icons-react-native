import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconWaveSquare({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wave-square" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12h5v8h4v-16h4v8h5" /></Svg>;
}
export default IconWaveSquare;