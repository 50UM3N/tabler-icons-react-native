import Svg, { Path } from 'react-native-svg';
         
function IconArrowRotaryStraight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-rotary-straight" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M13 16v5" /><Path d="M13 3v7" /><Path d="M9 7l4 -4l4 4" /></Svg>;

}
export default IconArrowRotaryStraight;
        