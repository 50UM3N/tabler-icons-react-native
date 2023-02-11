import Svg, { Path } from 'react-native-svg';
                    
function IconDragDrop({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-drag-drop" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" /><Path d="M13 13l9 3l-4 2l-2 4l-3 -9" /><Path d="M3 3l0 .01" /><Path d="M7 3l0 .01" /><Path d="M11 3l0 .01" /><Path d="M15 3l0 .01" /><Path d="M3 7l0 .01" /><Path d="M3 11l0 .01" /><Path d="M3 15l0 .01" /></Svg>;

}
export default IconDragDrop;
                    