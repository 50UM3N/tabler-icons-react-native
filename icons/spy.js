import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconSpy({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-spy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 11h18" /><Path d="M5 11v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" /><Circle cx={7} cy={17} r={3} /><Circle cx={17} cy={17} r={3} /><Path d="M10 17h4" /></Svg>;
}
export default IconSpy;