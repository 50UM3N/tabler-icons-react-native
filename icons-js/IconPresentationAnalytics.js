import Svg, { Path } from 'react-native-svg';
                    
function IconPresentationAnalytics({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-presentation-analytics" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 12v-4" /><Path d="M15 12v-2" /><Path d="M12 12v-1" /><Path d="M3 4h18" /><Path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" /><Path d="M12 16v4" /><Path d="M9 20h6" /></Svg>;

}
export default IconPresentationAnalytics;
                    