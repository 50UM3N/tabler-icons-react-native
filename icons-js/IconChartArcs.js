import Svg, { Path } from 'react-native-svg';
                    
function IconChartArcs({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-arcs" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M16.924 11.132a5 5 0 1 0 -4.056 5.792" /><Path d="M3 12a9 9 0 1 0 9 -9" /></Svg>;

}
export default IconChartArcs;
                    