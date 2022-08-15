import Svg, { Path, Circle } from "react-native-svg";

function IconAffiliate({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-affiliate" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" /><Path d="M11.683 12.317l5.759 -5.759" /><Circle cx={5.5} cy={5.5} r={1.5} /><Circle cx={18.5} cy={5.5} r={1.5} /><Circle cx={18.5} cy={18.5} r={1.5} /><Circle cx={8.5} cy={15.5} r={4.5} /></Svg>;
}

export default IconAffiliate;