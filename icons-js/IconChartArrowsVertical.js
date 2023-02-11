import Svg, { Path } from 'react-native-svg';
                    
function IconChartArrowsVertical({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-arrows-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 21v-14" /><Path d="M9 15l3 -3l3 3" /><Path d="M15 10l3 -3l3 3" /><Path d="M3 21l18 0" /><Path d="M12 21l0 -9" /><Path d="M3 6l3 -3l3 3" /><Path d="M6 21v-18" /></Svg>;

}
export default IconChartArrowsVertical;
                    