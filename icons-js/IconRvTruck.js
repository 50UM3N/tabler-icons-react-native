import Svg, { Path } from 'react-native-svg';
         
function IconRvTruck({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rv-truck" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M9 17h6" /><Path d="M19 17h1a1 1 0 0 0 1 -1v-4.528a2 2 0 0 0 -.211 -.894l-.96 -1.92a3 3 0 0 0 -2.683 -1.658h-11.146a3 3 0 0 0 -3 3v6a1 1 0 0 0 1 1h1" /><Path d="M3 12h18" /><Path d="M15 12v-5" /><Path d="M6 4m0 1.5a1.5 1.5 0 0 1 1.5 -1.5h7a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1 -1.5 1.5h-7a1.5 1.5 0 0 1 -1.5 -1.5z" /></Svg>;

}
export default IconRvTruck;
        