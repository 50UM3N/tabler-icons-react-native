import Svg, { Path } from 'react-native-svg';
                    
function IconBrandCodesandbox({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-codesandbox" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z" /><Path d="M12 12l4 -2.25l4 -2.25" /><Path d="M12 12l0 9" /><Path d="M12 12l-4 -2.25l-4 -2.25" /><Path d="M20 12l-4 2v4.75" /><Path d="M4 12l4 2l0 4.75" /><Path d="M8 5.25l4 2.25l4 -2.25" /></Svg>;

}
export default IconBrandCodesandbox;
                    