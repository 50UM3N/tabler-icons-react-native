import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCubeUnfolded({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cube-unfolded" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 15h10v5h5v-5h5v-5h-10v-5h-5v5h-5z" /><Path d="M7 15v-5h5v5h5v-5" /></Svg>;
}
export default IconCubeUnfolded;