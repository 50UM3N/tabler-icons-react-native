import Svg, { Path, Circle } from "react-native-svg";

function IconDna({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dna" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle transform="rotate(-45 12 12)" cx={12} cy={12} r={4} /><Path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" /><Path d="M14.828 3.515a4 4 0 1 0 5.657 5.657" /></Svg>;
}

export default IconDna;