import Svg, { Path, Circle, Line } from "react-native-svg";

function IconCut({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cut" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={7} cy={17} r={3} /><Circle cx={17} cy={17} r={3} /><Line x1={9.15} y1={14.85} x2={18} y2={4} /><Line x1={6} y1={4} x2={14.85} y2={14.85} /></Svg>;
}

export default IconCut;