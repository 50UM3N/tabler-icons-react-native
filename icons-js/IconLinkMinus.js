import Svg, { Path } from 'react-native-svg';
         
function IconLinkMinus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link-minus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 15l6 -6" /><Path d="M11 6l.463 -.536a5 5 0 1 1 7.071 7.072l-.534 .464" /><Path d="M12.603 18.534a5.07 5.07 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /><Path d="M16 19h6" /></Svg>;

}
export default IconLinkMinus;
        