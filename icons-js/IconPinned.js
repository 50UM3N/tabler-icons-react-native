import Svg, { Path } from 'react-native-svg';
         
function IconPinned({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pinned" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" /><Path d="M12 16l0 5" /><Path d="M8 4l8 0" /></Svg>;

}
export default IconPinned;
        