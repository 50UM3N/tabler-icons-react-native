import Svg, { Path } from 'react-native-svg';
         
function IconTrolley({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trolley" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M6 16l3 2" /><Path d="M12 17l8 -12" /><Path d="M17 10l2 1" /><Path d="M9.592 4.695l3.306 2.104a1.3 1.3 0 0 1 .396 1.8l-3.094 4.811a1.3 1.3 0 0 1 -1.792 .394l-3.306 -2.104a1.3 1.3 0 0 1 -.396 -1.8l3.094 -4.81a1.3 1.3 0 0 1 1.792 -.394z" /></Svg>;

}
export default IconTrolley;
        