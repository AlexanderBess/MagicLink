import Vue from 'vue';

import Header from '~/components/app/Header';
import InfoBlock from '~/components/app/InfoBlock';
import EditBlock from '~/components/app/EditBlock';
import BaseInput from '~/components/ui/BaseInput';
import BaseButton from '~/components/ui/BaseButton';
// import Loader from '~/components/ui/Loader';
import VuePhoneNumberInput from 'vue-phone-number-input';

Vue.component('HeaderMenu', Header);
Vue.component('InfoBlock', InfoBlock);
Vue.component('EditBlock', EditBlock);
Vue.component('base-field', BaseInput);
Vue.component('base-btn', BaseButton);
// Vue.component('loader', Loader);
Vue.component('vue-phone-number-input', VuePhoneNumberInput);
