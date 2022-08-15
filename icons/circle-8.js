import Svg, { Path, Circle } from "react-native-svg";

function IconCircle8({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-8" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={10} r={2} /><Circle cx={12} cy={14} r={2} /><Circle cx={12} cy={12} r={9} /></Svg>;
}

export default IconCircle8;