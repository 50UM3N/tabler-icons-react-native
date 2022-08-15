import Svg, { Path, Line } from "react-native-svg";

const IconSkipBack = (size = 24, color = "#232e46", stroke = 2, ...props) => <Svg className="icon icon-tabler icon-tabler-skip-back" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 18v-12a2 2 0 0 0 -2.75 -1.84l-8.25 6.1a2 2 0 0 0 0 3.5l8.25 6.1a2 2 0 0 0 2.75 -1.75" /><Line x1={4} y1={20} x2={4} y2={4} /></Svg>;

export default IconSkipBack;