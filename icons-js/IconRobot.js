import Svg, { Path } from 'react-native-svg';
         
function IconRobot({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-robot" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><Path d="M12 2v2" /><Path d="M9 12v9" /><Path d="M15 12v9" /><Path d="M5 16l4 -2" /><Path d="M15 14l4 2" /><Path d="M9 18h6" /><Path d="M10 8v.01" /><Path d="M14 8v.01" /></Svg>;

}
export default IconRobot;
        