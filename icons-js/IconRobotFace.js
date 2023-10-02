import Svg, { Path } from 'react-native-svg';
         
function IconRobotFace({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-robot-face" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z" /><Path d="M9 16c1 .667 2 1 3 1s2 -.333 3 -1" /><Path d="M9 7l-1 -4" /><Path d="M15 7l1 -4" /><Path d="M9 12v-1" /><Path d="M15 12v-1" /></Svg>;

}
export default IconRobotFace;
        