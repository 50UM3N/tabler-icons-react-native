import Svg, { Path } from 'react-native-svg';
         
function IconLetterB({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-b" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 20v-16h6a4 4 0 0 1 0 8a4 4 0 0 1 0 8h-6" /><Path d="M7 12l6 0" /></Svg>;

}
export default IconLetterB;
        