import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCreativeCommonsNc({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-creative-commons-nc" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M15 9h-4.5a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 1 0 3h-4.5" /><Path d="M12 7v2" /><Path d="M12 15v2" /><Path d="M6 6l3 3" /><Path d="M15 15l3 3" /></Svg>;
}
export default IconCreativeCommonsNc;