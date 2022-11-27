import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconNetworkOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-network-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6.537 6.516a6 6 0 0 0 7.932 7.954m2.246 -1.76a6 6 0 0 0 -8.415 -8.433" /><Path d="M12 3c1.333 .333 2 2.333 2 6c0 .348 -.006 .681 -.018 1m-.545 3.43c-.332 .89 -.811 1.414 -1.437 1.57" /><Path d="M12 3c-.938 .234 -1.547 1.295 -1.825 3.182m-.156 3.837c.117 3.02 .777 4.68 1.981 4.981" /><Path d="M6 9h3m4 0h5" /><Path d="M3 19h7" /><Path d="M14 19h5" /><Circle cx={12} cy={19} r={2} /><Path d="M12 15v2" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconNetworkOff;