import Svg, { Path } from 'react-native-svg';
                    
function IconPennant2Filled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pennant-2-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 21h-4" fill="currentColor" /><Path d="M14 21v-18" fill="currentColor" /><Path d="M14 4l-9 4l9 4" fill="currentColor" /></Svg>;

}
export default IconPennant2Filled;
                    