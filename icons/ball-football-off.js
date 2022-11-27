import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconBallFootballOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ball-football-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.041 16.046a9 9 0 0 0 -12.084 -12.09m-2.323 1.683a9 9 0 0 0 12.726 12.73" /><Path d="M12 7l4.755 3.455l-.566 1.743l-.98 3.014l-.209 .788h-6l-1.755 -5.545l1.86 -1.351l2.313 -1.681z" /><Path d="M12 7v-4" /><Line x1={15} y1={16} x2={17.5} y2={19} /><Path d="M16.755 10.455l3.745 -1.455" /><Path d="M9.061 16.045l-2.561 2.955" /><Path d="M7.245 10.455l-3.745 -1.455" /><Line x1={3} y1={3} x2={21} y2={21} /></Svg>;
}
export default IconBallFootballOff;