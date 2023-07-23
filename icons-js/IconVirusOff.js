import Svg, { Path } from 'react-native-svg';
         
function IconVirusOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-virus-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3l18 18" /><Path d="M8.469 8.46a5 5 0 0 0 7.058 7.084" /><Path d="M16.913 12.936a5 5 0 0 0 -5.826 -5.853" /><Path d="M12 7v-4" /><Path d="M11 3h2" /><Path d="M15.536 8.464l2.828 -2.828" /><Path d="M17.657 4.929l1.414 1.414" /><Path d="M17 12h4" /><Path d="M21 11v2" /><Path d="M18.364 18.363l-.707 .707" /><Path d="M12 17v4" /><Path d="M13 21h-2" /><Path d="M8.465 15.536l-2.829 2.828" /><Path d="M6.343 19.071l-1.413 -1.414" /><Path d="M7 12h-4" /><Path d="M3 13v-2" /><Path d="M5.636 5.637l-.707 .707" /></Svg>;

}
export default IconVirusOff;
        