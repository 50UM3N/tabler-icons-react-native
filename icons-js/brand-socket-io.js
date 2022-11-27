import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandSocketIo({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-socket-io" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M11 11h1l3 -4z" /><Path d="M12 13h1l-4 4z" /></Svg>;
}
export default IconBrandSocketIo;