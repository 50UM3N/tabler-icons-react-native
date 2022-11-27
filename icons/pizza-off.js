import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPizzaOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pizza-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10.313 6.277l1.687 -3.277l5.34 10.376m2.477 6.463a19.093 19.093 0 0 1 -7.817 1.661c-3.04 0 -5.952 -.714 -8.5 -1.983l5.434 -10.559" /><Path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634c1.56 .002 3.105 -.24 4.582 -.713" /><Path d="M11 14v-.01" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconPizzaOff;