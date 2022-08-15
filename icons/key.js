import Svg, { Path, Circle, Line } from "react-native-svg";

function IconKey({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-key" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={8} cy={15} r={4} /><Line x1={10.85} y1={12.15} x2={19} y2={4} /><Line x1={18} y1={5} x2={20} y2={7} /><Line x1={15} y1={8} x2={17} y2={10} /></Svg>;
}

export default IconKey;