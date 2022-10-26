import Svg, { Path, Circle } from "react-native-svg";

function IconGripHorizontal({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grip-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={5} cy={9} r={1} /><Circle cx={5} cy={15} r={1} /><Circle cx={12} cy={9} r={1} /><Circle cx={12} cy={15} r={1} /><Circle cx={19} cy={9} r={1} /><Circle cx={19} cy={15} r={1} /></Svg>;
}

export default IconGripHorizontal;