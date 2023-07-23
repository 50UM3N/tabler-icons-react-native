import Svg, { Path } from 'react-native-svg';
         
function IconLetterK({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-k" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 4l0 16" /><Path d="M7 12h2l8 -8" /><Path d="M9 12l8 8" /></Svg>;

}
export default IconLetterK;
        