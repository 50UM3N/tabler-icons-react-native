import Svg, { Path, Circle } from "react-native-svg";

function IconVirus({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-virus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={5} /><Path d="M12 7v-4m-1 0h2" /><Path d="M12 7v-4m-1 0h2" transform="rotate(45 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(90 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(135 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(180 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(225 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(270 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(315 12 12)" /></Svg>;
}

export default IconVirus;