import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandMercedes({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-mercedes" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M12 3v9" /><Path d="M12 12l7 5" /><Path d="M12 12l-7 5" /></Svg>;
}
export default IconBrandMercedes;