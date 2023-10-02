import Svg, { Path } from 'react-native-svg';
         
function IconArrowMergeAltLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-merge-alt-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 7l4 -4l4 4" /><Path d="M18 21v.01" /><Path d="M18 18.01v.01" /><Path d="M17 15.02v.01" /><Path d="M14 13.03v.01" /><Path d="M12 3v5.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v1.394" /></Svg>;

}
export default IconArrowMergeAltLeft;
        