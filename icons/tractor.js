import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconTractor({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tractor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={7} cy={15} r={4} /><Line x1={7} y1={15} x2={7} y2={15.01} /><Circle cx={19} cy={17} r={2} /><Line x1={10.5} y1={17} x2={17} y2={17} /><Path d="M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5" /><Path d="M18 5h-1a1 1 0 0 0 -1 1v4" /></Svg>;
}
export default IconTractor;