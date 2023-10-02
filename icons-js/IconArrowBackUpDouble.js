import Svg, { Path } from 'react-native-svg';
         
function IconArrowBackUpDouble({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up-double" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 14l-4 -4l4 -4" /><Path d="M8 14l-4 -4l4 -4" /><Path d="M9 10h7a4 4 0 1 1 0 8h-1" /></Svg>;

}
export default IconArrowBackUpDouble;
        