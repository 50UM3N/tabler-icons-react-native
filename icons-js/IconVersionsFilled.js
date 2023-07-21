import Svg, { Path } from 'react-native-svg';
                    
function IconVersionsFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-versions-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth="0" stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 4h-6a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" stroke-width="0" fill={color} /><Path d="M7 6a1 1 0 0 1 .993 .883l.007 .117v10a1 1 0 0 1 -1.993 .117l-.007 -.117v-10a1 1 0 0 1 1 -1z" stroke-width="0" fill={color} /><Path d="M4 7a1 1 0 0 1 .993 .883l.007 .117v8a1 1 0 0 1 -1.993 .117l-.007 -.117v-8a1 1 0 0 1 1 -1z" stroke-width="0" fill={color} /></Svg>;

}
export default IconVersionsFilled;
                    