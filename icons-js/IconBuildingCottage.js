import Svg, { Path } from 'react-native-svg';
                    
function IconBuildingCottage({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-cottage" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21l18 0" /><Path d="M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11" /><Path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5" /></Svg>;

}
export default IconBuildingCottage;
                    