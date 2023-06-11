import Vue from 'vue';

import Header from '~/components/app/Header';
import InfoBlock from '~/components/app/InfoBlock';
import EditBlock from '~/components/app/EditBlock';
import Avatar from '~/components/app/Avatar';
import BaseInput from '~/components/ui/BaseInput';
import BaseButton from '~/components/ui/BaseButton';

import VuePhoneNumberInput from 'vue-phone-number-input';

Vue.component('HeaderMenu', Header);
Vue.component('InfoBlock', InfoBlock);
Vue.component('EditBlock', EditBlock);
Vue.component('Avatar', Avatar);
Vue.component('base-field', BaseInput);
Vue.component('base-btn', BaseButton);

Vue.component('vue-phone-number-input', VuePhoneNumberInput);
