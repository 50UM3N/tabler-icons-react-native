import Svg, { Path } from 'react-native-svg';
         
function IconMoodMinus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-minus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.48 15.014a9 9 0 1 0 -7.956 5.97" /><Path d="M9 10h.01" /><Path d="M15 10h.01" /><Path d="M16 19h6" /><Path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" /></Svg>;

}
export default IconMoodMinus;
        