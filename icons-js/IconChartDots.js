import Svg, { Path } from 'react-native-svg';
                    
function IconChartDots({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-dots" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3v18h18" /><Path d="M9 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M10.16 10.62l2.34 2.88" /><Path d="M15.088 13.328l2.837 -4.586" /></Svg>;

}
export default IconChartDots;
                    