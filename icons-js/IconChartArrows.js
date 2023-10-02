import Svg, { Path } from 'react-native-svg';
         
function IconChartArrows({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-arrows" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 18l14 0" /><Path d="M9 9l3 3l-3 3" /><Path d="M14 15l3 3l-3 3" /><Path d="M3 3l0 18" /><Path d="M3 12l9 0" /><Path d="M18 3l3 3l-3 3" /><Path d="M3 6l18 0" /></Svg>;

}
export default IconChartArrows;
        