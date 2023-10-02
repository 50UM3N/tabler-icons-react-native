import Svg, { Path } from 'react-native-svg';
         
function IconLadle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ladle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 14v1a6 6 0 1 0 12 0v-9a3 3 0 0 1 6 0" /><Path d="M9 16c-.663 0 -1.3 -.036 -1.896 -.102l-.5 -.064c-2.123 -.308 -3.604 -1.013 -3.604 -1.834c0 -.82 1.482 -1.526 3.603 -1.834l.5 -.064a17.27 17.27 0 0 1 1.897 -.102c.663 0 1.3 .036 1.896 .102l.5 .064c2.123 .308 3.604 1.013 3.604 1.834c0 .82 -1.482 1.526 -3.603 1.834l-.5 .064a17.27 17.27 0 0 1 -1.897 .102z" /></Svg>;

}
export default IconLadle;
        