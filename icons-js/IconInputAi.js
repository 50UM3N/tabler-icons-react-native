import Svg, { Path } from 'react-native-svg';
         
function IconInputAi({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-input-ai" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 11v-2a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4" /><Path d="M14 21v-4a2 2 0 1 1 4 0v4" /><Path d="M14 19h4" /><Path d="M21 15v6" /></Svg>;

}
export default IconInputAi;
        