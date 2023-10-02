import Svg, { Path } from 'react-native-svg';
         
function IconArrowMergeRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-merge-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 8l-4 -4l-4 4" /><Path d="M12 20v-16" /><Path d="M18 18c-4 -1.333 -6 -4.667 -6 -10" /></Svg>;

}
export default IconArrowMergeRight;
        