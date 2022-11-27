import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCircles({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circles" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={7} r={4} /><Circle cx={6.5} cy={17} r={4} /><Circle cx={17.5} cy={17} r={4} /></Svg>;
}
export default IconCircles;