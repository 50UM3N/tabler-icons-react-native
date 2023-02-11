import Svg, { Path } from 'react-native-svg';
                    
function IconKeyboardShow({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard-show" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 3m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" /><Path d="M6 7l0 0" /><Path d="M10 7l0 0" /><Path d="M14 7l0 0" /><Path d="M18 7l0 0" /><Path d="M6 11l0 .01" /><Path d="M18 11l0 .01" /><Path d="M10 11l4 0" /><Path d="M10 19l2 2l2 -2" /></Svg>;

}
export default IconKeyboardShow;
                    