import Svg, { Path } from 'react-native-svg';
                    
function IconChartBubbleFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-bubble-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth="0" stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 12a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" stroke-width="0" fill={color} /><Path d="M16 16a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176a3 3 0 0 1 2.995 -2.824z" stroke-width="0" fill={color} /><Path d="M14.5 2a5.5 5.5 0 1 1 -5.496 5.721l-.004 -.221l.004 -.221a5.5 5.5 0 0 1 5.496 -5.279z" stroke-width="0" fill={color} /></Svg>;

}
export default IconChartBubbleFilled;
                    