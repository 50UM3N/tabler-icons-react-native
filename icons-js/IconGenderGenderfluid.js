import Svg, { Path } from 'react-native-svg';
         
function IconGenderGenderfluid({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-genderfluid" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 15.464a4 4 0 1 0 4 -6.928a4 4 0 0 0 -4 6.928z" /><Path d="M15.464 14l3 -5.196" /><Path d="M5.536 15.195l3 -5.196" /><Path d="M12 12h.01" /><Path d="M9 9l-6 -6" /><Path d="M5.5 8.5l3 -3" /><Path d="M21 21l-6 -6" /><Path d="M17 20l3 -3" /><Path d="M3 7v-4h4" /></Svg>;

}
export default IconGenderGenderfluid;
        