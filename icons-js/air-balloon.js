import Svg, { Path, Rect, Ellipse } from 'react-native-svg';
import * as React from "react";
function IconAirBalloon({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-air-balloon" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={10} y={19} width={4} height={3} rx={1} /><Path d="M12 16c3.314 0 6 -4.686 6 -8a6 6 0 1 0 -12 0c0 3.314 2.686 8 6 8z" /><Ellipse cx={12} cy={9} rx={2} ry={7} /></Svg>;
}
export default IconAirBalloon;