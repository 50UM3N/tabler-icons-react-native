import Svg, { Path } from 'react-native-svg';
         
function IconLetterCSmall({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-c-small" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" /></Svg>;

}
export default IconLetterCSmall;
        