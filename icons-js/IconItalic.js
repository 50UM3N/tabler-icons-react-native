import Svg, { Path } from 'react-native-svg';
         
function IconItalic({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-italic" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 5l6 0" /><Path d="M7 19l6 0" /><Path d="M14 5l-4 14" /></Svg>;

}
export default IconItalic;
        