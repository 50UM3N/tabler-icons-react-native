import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconFileScissors({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-scissors" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><Circle cx={15} cy={17} r={1} /><Circle cx={9} cy={17} r={1} /><Path d="M9 17l6 -6" /><Path d="M15 17l-6 -6" /></Svg>;
}
export default IconFileScissors;