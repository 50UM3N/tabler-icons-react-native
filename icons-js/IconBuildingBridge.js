import Svg, { Path } from 'react-native-svg';
                    
function IconBuildingBridge({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-bridge" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 5l0 14" /><Path d="M18 5l0 14" /><Path d="M2 15l20 0" /><Path d="M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2" /><Path d="M12 10l0 5" /></Svg>;

}
export default IconBuildingBridge;
                    