import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconGoGame({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-go-game" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={6} r={2} /><Circle cx={12} cy={12} r={2} /><Circle cx={6} cy={18} r={2} /><Circle cx={18} cy={18} r={2} /><Path d="M3 12h7m4 0h7" /><Path d="M3 6h1m4 0h13" /><Path d="M3 18h1m4 0h8m4 0h1" /><Path d="M6 3v1m0 4v8m0 4v1" /><Path d="M12 3v7m0 4v7" /><Path d="M18 3v13m0 4v1" /></Svg>;
}
export default IconGoGame;