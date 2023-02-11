import Svg, { Path } from 'react-native-svg';
                    
function IconVaccine({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vaccine" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 3l4 4" /><Path d="M19 5l-4.5 4.5" /><Path d="M11.5 6.5l6 6" /><Path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5" /><Path d="M7.5 12.5l1.5 1.5" /><Path d="M10.5 9.5l1.5 1.5" /><Path d="M3 21l3 -3" /></Svg>;

}
export default IconVaccine;
                    