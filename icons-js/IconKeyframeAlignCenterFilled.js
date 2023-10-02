import Svg, { Path } from 'react-native-svg';
         
function IconKeyframeAlignCenterFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyframe-align-center-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 1 -1z" stroke-width="0" fill={color} /><Path d="M12 6c-.629 0 -1.214 .301 -1.606 .807l-2.908 3.748a2.395 2.395 0 0 0 -.011 2.876l2.919 3.762c.39 .505 .977 .807 1.606 .807c.629 0 1.214 -.301 1.606 -.807l2.908 -3.748a2.395 2.395 0 0 0 .011 -2.876l-2.919 -3.762a2.032 2.032 0 0 0 -1.606 -.807z" stroke-width="0" fill="currentColor" /><Path d="M12 1a1 1 0 0 1 .993 .883l.007 .117v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" /><Path d="M5 11a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z" stroke-width="0" fill="currentColor" /><Path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z" stroke-width="0" fill="currentColor" /></Svg>;

}
export default IconKeyframeAlignCenterFilled;
        