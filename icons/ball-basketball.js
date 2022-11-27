import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconBallBasketball({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ball-basketball" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Line x1={5.65} y1={5.65} x2={18.35} y2={18.35} /><Line x1={5.65} y1={18.35} x2={18.35} y2={5.65} /><Path d="M12 3a9 9 0 0 0 9 9" /><Path d="M3 12a9 9 0 0 1 9 9" /></Svg>;
}
export default IconBallBasketball;