import Svg, { Path } from 'react-native-svg';
                    
function IconBrandStorytel({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-storytel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4.103 22c2.292 -2.933 16.825 -2.43 16.825 -11.538c0 -6.298 -4.974 -8.462 -8.451 -8.462c-3.477 0 -9.477 3.036 -9.477 11.241c0 6.374 1.103 8.759 1.103 8.759z" /></Svg>;

}
export default IconBrandStorytel;
                    