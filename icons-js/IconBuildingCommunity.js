import Svg, { Path } from 'react-native-svg';
         
function IconBuildingCommunity({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-community" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" /><Path d="M13 7l0 .01" /><Path d="M17 7l0 .01" /><Path d="M17 11l0 .01" /><Path d="M17 15l0 .01" /></Svg>;

}
export default IconBuildingCommunity;
        