import Svg, { Path, Rect } from "react-native-svg";

const IconPause = (size = 24, color = "#232e46", stroke = 2, ...props) => <Svg className="icon icon-tabler icon-tabler-pause" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={6} height={16} rx={2} /><Rect x={14} y={4} width={6} height={16} rx={2} /></Svg>;

export default IconPause;