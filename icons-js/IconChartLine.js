import Svg, { Path } from 'react-native-svg';
         
function IconChartLine({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-line" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 19l16 0" /><Path d="M4 15l4 -6l4 2l4 -5l4 4" /></Svg>;

}
export default IconChartLine;
        