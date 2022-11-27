import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconRecycle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-recycle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 17l-2 2l2 2" /><Path d="M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1" /><Path d="M8.536 11l-.732 -2.732l-2.732 .732" /><Path d="M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" /><Path d="M15.464 11l2.732 .732l.732 -2.732" /><Path d="M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" /></Svg>;
}
export default IconRecycle;