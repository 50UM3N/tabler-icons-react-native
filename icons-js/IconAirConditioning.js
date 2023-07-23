import Svg, { Path } from 'react-native-svg';
         
function IconAirConditioning({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-air-conditioning" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 16a3 3 0 0 1 -3 3" /><Path d="M16 16a3 3 0 0 0 3 3" /><Path d="M12 16v4" /><Path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><Path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" /></Svg>;

}
export default IconAirConditioning;
        