import Svg, { Path } from 'react-native-svg';
import * as React from "react";
const IconWaveTriangle = (size = 24, color = "currentColor", stroke = 2, ...props) => <Svg className="icon icon-tabler icon-tabler-wave-triangle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12h4l3 8l4 -16l3 8h4" /></Svg>;
export default IconWaveTriangle;