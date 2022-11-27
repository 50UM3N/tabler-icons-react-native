import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconWreckingBall({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wrecking-ball" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={19} cy={13} r={2} /><Circle cx={4} cy={17} r={2} /><Circle cx={13} cy={17} r={2} /><Line x1={13} y1={19} x2={4} y2={19} /><Line x1={4} y1={15} x2={13} y2={15} /><Path d="M8 12v-5h2a3 3 0 0 1 3 3v5" /><Path d="M5 15v-2a1 1 0 0 1 1 -1h7" /><Path d="M19 11v-7l-6 7" /></Svg>;
}
export default IconWreckingBall;