import Svg, { Path, Circle } from "react-native-svg";

function IconGripVertical({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grip-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={9} cy={5} r={1} /><Circle cx={9} cy={12} r={1} /><Circle cx={9} cy={19} r={1} /><Circle cx={15} cy={5} r={1} /><Circle cx={15} cy={12} r={1} /><Circle cx={15} cy={19} r={1} /></Svg>;
}

export default IconGripVertical;