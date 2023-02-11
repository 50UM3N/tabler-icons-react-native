import Svg, { Path } from 'react-native-svg';
                    
function IconBrandGravatar({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-gravatar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5.64 5.632a9 9 0 1 0 6.36 -2.632v7.714" /></Svg>;

}
export default IconBrandGravatar;
                    