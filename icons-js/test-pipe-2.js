import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconTestPipe2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-test-pipe-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 3v15a3 3 0 0 1 -6 0v-15" /><Path d="M9 12h6" /><Path d="M8 3h8" /></Svg>;
}
export default IconTestPipe2;