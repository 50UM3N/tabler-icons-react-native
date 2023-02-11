import Svg, { Path } from 'react-native-svg';
                    
function IconArrowRotaryFirstLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-rotary-first-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z" /><Path d="M16 10v10" /><Path d="M13.5 9.5l-8.5 8.5" /><Path d="M10 18h-5v-5" /></Svg>;

}
export default IconArrowRotaryFirstLeft;
                    