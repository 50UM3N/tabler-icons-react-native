import Svg, { Path } from 'react-native-svg';
                    
function IconLogicBuffer({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logic-buffer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M22 12h-5" /><Path d="M2 9h5" /><Path d="M2 15h5" /><Path d="M7 5l10 7l-10 7z" /></Svg>;

}
export default IconLogicBuffer;
                    