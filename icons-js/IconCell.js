import Svg, { Path } from 'react-native-svg';
         
function IconCell({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cell" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4l-4 2v5l4 2l4 -2v-5z" /><Path d="M12 11l4 2l4 -2v-5l-4 -2l-4 2" /><Path d="M8 13v5l4 2l4 -2v-5" /></Svg>;

}
export default IconCell;
        