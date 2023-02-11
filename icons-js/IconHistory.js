import Svg, { Path } from 'react-native-svg';
                    
function IconHistory({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-history" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 8l0 4l2 2" /><Path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" /></Svg>;

}
export default IconHistory;
                    