import Svg, { Path, Line } from "react-native-svg";

const IconSkipForward = (size = 24, color = "#232e46", stroke = 2, ...props) => <Svg className="icon icon-tabler icon-tabler-skip-forward" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 6v12a2 2 0 0 0 2.75 1.84l8.25 -6.1a2 2 0 0 0 0 -3.5l-8.25 -6.1a2 2 0 0 0 -2.75 1.75" /><Line x1={20} y1={4} x2={20} y2={20} /></Svg>;

export default IconSkipForward;