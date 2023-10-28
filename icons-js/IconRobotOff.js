import Svg, { Path } from 'react-native-svg';
         
function IconRobotOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-robot-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2m-4 0h-4a2 2 0 0 1 -2 -2v-4" /><Path d="M12 2v2" /><Path d="M9 12v9" /><Path d="M15 15v6" /><Path d="M5 16l4 -2" /><Path d="M9 18h6" /><Path d="M14 8v.01" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconRobotOff;
        