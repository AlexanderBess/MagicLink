import Vue from 'vue';

import Header from '~/components/app/Header';
import InfoBlock from '~/components/app/InfoBlock';
import EditBlock from '~/components/app/EditBlock';
import Avatar from '~/components/app/Avatar';
import OptionalMenu from '~/components/app/OptionalMenu';
import Notification from '~/components/app/Notification';
import BaseInput from '~/components/ui/BaseInput';
import BaseButton from '~/components/ui/BaseButton';

import { ColorPicker, ColorPanel } from 'one-colorpicker';
import VuePhoneNumberInput from 'vue-phone-number-input';

Vue.component('HeaderMenu', Header);
Vue.component('InfoBlock', InfoBlock);
Vue.component('EditBlock', EditBlock);
Vue.component('Avatar', Avatar);
Vue.component('OptionalMenu', OptionalMenu);
Vue.component('Notification', Notification);
Vue.component('base-field', BaseInput);
Vue.component('base-btn', BaseButton);

Vue.component('vue-phone-number-input', VuePhoneNumberInput);
Vue.component('color-picker', ColorPicker);
Vue.component('color-panel', ColorPanel);
