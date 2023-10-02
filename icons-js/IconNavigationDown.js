import Svg, { Path } from 'react-native-svg';
         
function IconNavigationDown({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-navigation-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16.528 12.815l-4.528 -9.815l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463" /><Path d="M19 16v6" /><Path d="M22 19l-3 3l-3 -3" /></Svg>;

}
export default IconNavigationDown;
        