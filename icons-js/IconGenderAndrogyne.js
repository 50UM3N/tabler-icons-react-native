import Svg, { Path } from 'react-native-svg';
         
function IconGenderAndrogyne({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-androgyne" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 11l6 -6" /><Path d="M9 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><Path d="M19 9v-4h-4" /><Path d="M16.5 10.5l-3 -3" /></Svg>;

}
export default IconGenderAndrogyne;
        