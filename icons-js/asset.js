import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconAsset({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-asset" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={9} cy={15} r={6} /><Circle cx={9} cy={15} r={2} /><Circle cx={19} cy={5} r={2} /><Path d="M14.218 17.975l6.619 -12.174" /><Path d="M6.079 9.756l12.217 -6.631" /><Circle cx={9} cy={15} r={2} /></Svg>;
}
export default IconAsset;