import Svg, { Path } from 'react-native-svg';
         
function IconLetterKSmall({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-k-small" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10.5 8v8" /><Path d="M14.5 8l-3 4l3 4" /><Path d="M10.5 12h1" /></Svg>;

}
export default IconLetterKSmall;
        