import Svg, { Path } from "react-native-svg";

function IconClover({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clover" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 10l-3.397 -3.44a2.104 2.104 0 0 1 0 -2.95a2.04 2.04 0 0 1 2.912 0l.485 .39l.485 -.39a2.04 2.04 0 0 1 2.912 0a2.104 2.104 0 0 1 0 2.95l-3.397 3.44z" /><Path d="M12 14l-3.397 3.44a2.104 2.104 0 0 0 0 2.95a2.04 2.04 0 0 0 2.912 0l.485 -.39l.485 .39a2.04 2.04 0 0 0 2.912 0a2.104 2.104 0 0 0 0 -2.95l-3.397 -3.44z" /><Path d="M14 12l3.44 -3.397a2.104 2.104 0 0 1 2.95 0a2.04 2.04 0 0 1 0 2.912l-.39 .485l.39 .485a2.04 2.04 0 0 1 0 2.912a2.104 2.104 0 0 1 -2.95 0l-3.44 -3.397z" /><Path d="M10 12l-3.44 -3.397a2.104 2.104 0 0 0 -2.95 0a2.04 2.04 0 0 0 0 2.912l.39 .485l-.39 .485a2.04 2.04 0 0 0 0 2.912a2.104 2.104 0 0 0 2.95 0l3.44 -3.397z" /></Svg>;
}

export default IconClover;