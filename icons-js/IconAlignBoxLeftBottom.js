import Svg, { Path } from 'react-native-svg';
                    
function IconAlignBoxLeftBottom({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-box-left-bottom" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 18.222v-12.444c0 -.982 -.796 -1.778 -1.778 -1.778h-12.444c-.982 0 -1.778 .796 -1.778 1.778v12.444c0 .982 .796 1.778 1.778 1.778h12.444c.982 0 1.778 -.796 1.778 -1.778z" /><Path d="M9 17h-2" /><Path d="M13 14h-6" /><Path d="M11 11h-4" /></Svg>;

}
export default IconAlignBoxLeftBottom;
                    