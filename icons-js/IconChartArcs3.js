import Svg, { Path } from 'react-native-svg';
         
function IconChartArcs3({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-arcs-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M7 12a5 5 0 1 0 5 -5" /><Path d="M6.29 18.957a9 9 0 1 0 5.71 -15.957" /></Svg>;

}
export default IconChartArcs3;
        