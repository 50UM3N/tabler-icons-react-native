import Svg, { Path } from 'react-native-svg';
         
function IconBoxAlignBottomLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-bottom-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 13h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1z" /><Path d="M4 9v.01" /><Path d="M4 4v.01" /><Path d="M9 4v.01" /><Path d="M15 4v.01" /><Path d="M15 20v.01" /><Path d="M20 4v.01" /><Path d="M20 9v.01" /><Path d="M20 15v.01" /><Path d="M20 20v.01" /></Svg>;

}
export default IconBoxAlignBottomLeft;
        