import Svg, { Path } from 'react-native-svg';
         
function IconArrowMergeAltRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-merge-alt-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 7l-4 -4l-4 4" /><Path d="M6 21v.01" /><Path d="M6 18.01v.01" /><Path d="M7 15.02v.01" /><Path d="M10 13.03v.01" /><Path d="M12 3v5.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v1.394" /></Svg>;

}
export default IconArrowMergeAltRight;
        