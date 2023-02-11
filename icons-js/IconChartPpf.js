import Svg, { Path } from 'react-native-svg';
                    
function IconChartPpf({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-ppf" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 17c0 -6.075 -5.373 -11 -12 -11" /><Path d="M3 3v18h18" /></Svg>;

}
export default IconChartPpf;
                    