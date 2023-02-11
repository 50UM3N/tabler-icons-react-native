import Svg, { Path } from 'react-native-svg';
                    
function IconVirus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-virus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><Path d="M12 7v-4" /><Path d="M11 3h2" /><Path d="M15.536 8.464l2.828 -2.828" /><Path d="M17.657 4.929l1.414 1.414" /><Path d="M17 12h4" /><Path d="M21 11v2" /><Path d="M15.535 15.536l2.829 2.828" /><Path d="M19.071 17.657l-1.414 1.414" /><Path d="M12 17v4" /><Path d="M13 21h-2" /><Path d="M8.465 15.536l-2.829 2.828" /><Path d="M6.343 19.071l-1.413 -1.414" /><Path d="M7 12h-4" /><Path d="M3 13v-2" /><Path d="M8.464 8.464l-2.828 -2.828" /><Path d="M4.929 6.343l1.414 -1.413" /></Svg>;

}
export default IconVirus;
                    