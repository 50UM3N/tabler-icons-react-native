import Svg, { Path } from 'react-native-svg';
                    
function IconBuildingBank({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-bank" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21l18 0" /><Path d="M3 10l18 0" /><Path d="M5 6l7 -3l7 3" /><Path d="M4 10l0 11" /><Path d="M20 10l0 11" /><Path d="M8 14l0 3" /><Path d="M12 14l0 3" /><Path d="M16 14l0 3" /></Svg>;

}
export default IconBuildingBank;
                    