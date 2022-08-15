import Svg, { Path, Circle, Line } from "react-native-svg";

function IconScissors({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scissors" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={7} r={3} /><Circle cx={6} cy={17} r={3} /><Line x1={8.6} y1={8.6} x2={19} y2={19} /><Line x1={8.6} y1={15.4} x2={19} y2={5} /></Svg>;
}

export default IconScissors;