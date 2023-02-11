import Svg, { Path } from 'react-native-svg';
                    
function IconPresentation({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-presentation" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 4l18 0" /><Path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" /><Path d="M12 16l0 4" /><Path d="M9 20l6 0" /><Path d="M8 12l3 -3l2 2l3 -3" /></Svg>;

}
export default IconPresentation;
                    