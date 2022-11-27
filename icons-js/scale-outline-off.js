import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconScaleOutlineOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scale-outline-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 3h10a4 4 0 0 1 4 4v10m-1.173 2.83a3.987 3.987 0 0 1 -2.827 1.17h-10a4 4 0 0 1 -4 -4v-10c0 -1.104 .447 -2.103 1.17 -2.827" /><Path d="M11.062 7.062c.31 -.041 .622 -.062 .938 -.062c1.956 0 3.724 .802 4.994 2.095a142.85 142.85 0 0 0 -1.994 1.905m-3.723 .288a3 3 0 0 0 -1.315 .71l-2.956 -2.903a6.977 6.977 0 0 1 1.142 -.942" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconScaleOutlineOff;