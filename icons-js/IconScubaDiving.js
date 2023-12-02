import Svg, { Path } from 'react-native-svg';
         
function IconScubaDiving({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-scuba-diving" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><Path d="M2 2l3 3l1.5 4l3.5 2l6 2l1 4l2.5 3" /><Path d="M11 8l4.5 1.5" /></Svg>;

}
export default IconScubaDiving;
        