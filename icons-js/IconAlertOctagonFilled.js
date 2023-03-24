import Svg, { Path } from 'react-native-svg';
                    
function IconAlertOctagonFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-octagon-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15.3 2c.5 0 .914 .16 1.274 .47l.133 .123l4.7 4.7c.348 .348 .546 .745 .586 1.224l.007 .183v6.6c0 .5 -.16 .914 -.47 1.274l-.123 .133l-4.7 4.7c-.348 .348 -.745 .546 -1.224 .586l-.183 .007h-6.6c-.5 0 -.914 -.16 -1.274 -.47l-.133 -.123l-4.7 -4.7c-.348 -.348 -.546 -.745 -.586 -1.224l-.007 -.183v-6.6c0 -.5 .16 -.914 .47 -1.274l.123 -.133l4.7 -4.7c.348 -.348 .745 -.546 1.224 -.586l.183 -.007h6.6zm-3.29 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" stroke-width="0" fill="currentColor" /></Svg>;

}
export default IconAlertOctagonFilled;
                    