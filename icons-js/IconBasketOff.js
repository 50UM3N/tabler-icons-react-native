import Svg, { Path } from 'react-native-svg';
                    
function IconBasketOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 10l1.359 -1.63" /><Path d="M10.176 6.188l1.824 -2.188l5 6" /><Path d="M18.77 18.757c-.358 .768 -1.027 1.262 -1.77 1.243h-10c-.966 .024 -1.807 -.817 -2 -2l-2 -8h7" /><Path d="M14 10h7l-1.397 5.587" /><Path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconBasketOff;
                    