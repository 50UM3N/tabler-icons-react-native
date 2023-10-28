import Svg, { Path } from 'react-native-svg';
         
function IconTagsOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tags-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16.296 12.296l-5.71 -5.71" /><Path d="M6 6h-1a2 2 0 0 0 -2 2v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.278 -3.278" /><Path d="M18 19l.496 -.496" /><Path d="M20.384 16.367a4.822 4.822 0 0 0 -.792 -5.775l-4.592 -4.592" /><Path d="M7 10h-.01" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconTagsOff;
        