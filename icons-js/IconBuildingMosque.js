import Svg, { Path } from 'react-native-svg';
                    
function IconBuildingMosque({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-mosque" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21h7v-2a2 2 0 1 1 4 0v2h7" /><Path d="M4 21v-10" /><Path d="M20 21v-10" /><Path d="M4 16h3v-3h10v3h3" /><Path d="M17 13a5 5 0 0 0 -10 0" /><Path d="M21 10.5c0 -.329 -.077 -.653 -.224 -.947l-.776 -1.553l-.776 1.553a2.118 2.118 0 0 0 -.224 .947a.5 .5 0 0 0 .5 .5h1a.5 .5 0 0 0 .5 -.5z" /><Path d="M5 10.5c0 -.329 -.077 -.653 -.224 -.947l-.776 -1.553l-.776 1.553a2.118 2.118 0 0 0 -.224 .947a.5 .5 0 0 0 .5 .5h1a.5 .5 0 0 0 .5 -.5z" /><Path d="M12 2a2 2 0 1 0 2 2" /><Path d="M12 6v2" /></Svg>;

}
export default IconBuildingMosque;
                    