import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSquareRoot2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-root-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 12h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1" /><Path d="M12 19c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" /><Path d="M3 12h1l3 8l3 -16h10" /></Svg>;
}
export default IconSquareRoot2;