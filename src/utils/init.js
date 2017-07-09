/**
 * Created by jfhuang on 17/7/8.
 */

const fontSize = document.documentElement.clientWidth /640 * 100;

const $html = document.getElementsByTagName('html')[0];

$html.style['fontSize'] = fontSize + 'px';