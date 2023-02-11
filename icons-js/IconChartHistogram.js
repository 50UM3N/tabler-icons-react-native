import Svg, { Path } from 'react-native-svg';
                    
function IconChartHistogram({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-histogram" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3v18h18" /><Path d="M20 18v3" /><Path d="M16 16v5" /><Path d="M12 13v8" /><Path d="M8 16v5" /><Path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" /></Svg>;

}
export default IconChartHistogram;
                    