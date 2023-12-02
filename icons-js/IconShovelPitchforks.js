import Svg, { Path } from 'react-native-svg';
         
function IconShovelPitchforks({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shovel-pitchforks" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 3h4" /><Path d="M7 3v12" /><Path d="M4 15h6v3a3 3 0 0 1 -6 0v-3z" /><Path d="M14 21v-3a3 3 0 0 1 6 0v3" /><Path d="M17 21v-18" /></Svg>;

}
export default IconShovelPitchforks;
        