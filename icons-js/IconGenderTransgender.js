import Svg, { Path } from 'react-native-svg';
         
function IconGenderTransgender({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-transgender" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><Path d="M15 9l6 -6" /><Path d="M21 7v-4h-4" /><Path d="M9 9l-6 -6" /><Path d="M3 7v-4h4" /><Path d="M5.5 8.5l3 -3" /><Path d="M12 16v5" /><Path d="M9.5 19h5" /></Svg>;

}
export default IconGenderTransgender;
        