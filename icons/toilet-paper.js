import Svg, { Path, Ellipse } from 'react-native-svg';
import * as React from "react";
function IconToiletPaper({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-toilet-paper" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Ellipse cx={6} cy={10} rx={3} ry={7} /><Path d="M21 10c0 -3.866 -1.343 -7 -3 -7" /><Path d="M6 3h12" /><Path d="M21 10v10l-3 -1l-3 2l-3 -3l-3 2v-10" /><Path d="M6 10h.01" /></Svg>;
}
export default IconToiletPaper;