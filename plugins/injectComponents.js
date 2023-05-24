import Vue from 'vue';

import VuePhoneNumberInput from 'vue-phone-number-input';

// import Loader from '~/components/ui/Loader';
import BaseInput from '~/components/ui/BaseInput';
import BaseButton from '~/components/ui/BaseButton';

Vue.component('base-field', BaseInput);
Vue.component('base-btn', BaseButton);
// Vue.component('loader', Loader);
Vue.component('vue-phone-number-input', VuePhoneNumberInput);
