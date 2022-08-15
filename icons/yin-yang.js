import Svg, { Path, Circle } from "react-native-svg";

function IconYinYang({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-yin-yang" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9" /><Circle cx={12} cy={7.5} r={0.5} fill="currentColor" /><Circle cx={12} cy={16.5} r={0.5} fill="currentColor" /></Svg>;
}

export default IconYinYang;