import Svg, { Path } from 'react-native-svg';
                    
function IconActivityHeartbeat({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-activity-heartbeat" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5" /></Svg>;

}
export default IconActivityHeartbeat;
                    