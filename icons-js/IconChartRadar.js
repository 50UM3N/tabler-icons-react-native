import Svg, { Path } from 'react-native-svg';
         
function IconChartRadar({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-radar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3l9.5 7l-3.5 11h-12l-3.5 -11z" /><Path d="M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5z" /><Path d="M2.5 10l9.5 3l9.5 -3" /><Path d="M12 3v10l6 8" /><Path d="M6 21l6 -8" /></Svg>;

}
export default IconChartRadar;
        