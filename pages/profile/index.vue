<script setup>
import { profileService } from '~/services/profileService';
import { commonService } from '~/services/commonService';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-vue-next';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

definePageMeta({
   layout: 'cabinet'
});

const { $toast } = useNuxtApp();

const regions = ref({
   options: []
});
const districts = ref({
   options: []
});
const schools = ref({
   options: []
});

const user = ref({
   username: '',
   first_name: '',
   last_name: '',
   father_name: '',
   birth_date: '',
   district: '',
   school: null,
   type: 'applicant',
   region: '',
   balance: '',
   phone: '',
   email: null
});

const usertype = ref([
   {
      value: 'applicant',
      name: 'Abituriyent'
   },
   {
      value: 'pupil',
      name: "O'quvchi"
   },
   {
      value: 'teacher',
      name: "O'qituvchi"
   }
]);

const loading = ref(false);

async function getRegions() {
   try {
      const response = await commonService.regions();
      regions.value.options = response;
   } catch (error) {
      console.error('Error fetching user:', error);
   }
}

async function getDistricts(regionId) {
   try {
      const response = await commonService.districts(regionId);
      districts.value.options = response;
   } catch (error) {
      console.error('Error fetching districts:', error);
   }
}

async function getSchools(districtId) {
   try {
      const response = await commonService.schools(districtId);
      schools.value.options = response;
   } catch (error) {
      console.error('Error fetching schools:', error);
   }
}

async function getUser() {
   loading.value = true;
   try {
      const response = await profileService.user();
      user.value = response;
      user.value.phone = response?.phone?.slice(3);
      user.value.region = response.region?.id?.toString();
      user.value.district = response.district?.id?.toString();
      user.value.school = response.school?.id?.toString();
      schools.value.id = response.school?.id?.toString();
   } catch (error) {
      console.error(error);
   } finally {
      loading.value = false;
   }
}

async function updateProfile() {
   loading.value = true;
   let form = new FormData();
   form.append('username', user.value.username);
   form.append('first_name', user.value.first_name);
   form.append('last_name', user.value.last_name);
   form.append('father_name', user.value.father_name);
   form.append('email', user.value.email);
   form.append('district', user.value.district);
   form.append('school', user.value.school);
   form.append('type', user.value.type);
   form.append('phone', '998' + user.value.phone);
   try {
      const res = await profileService.updateProfile(form);
      user.value = res;
      getUser();
      $toast.success('Profile muvaffaqiyatli o\`zgartirildi');
   } catch (error) {
      $toast.error('Xatolik yuz berdi', error);
   } finally {
      loading.value = false;
   }
}

watch(
   () => user.region,
   (newValue, oldValue) => {
      if (newValue !== oldValue) {
         getDistricts(newValue);
      }
   }
);

watch(
   () => user.district,
   (newValue, oldValue) => {
      if (newValue !== oldValue) {
         getSchools(newValue);
      }
   }
);

onMounted(() => {
   getUser();
   getRegions();
});
</script>

<template>
   <div>
      <h4 class="text-base sm:text-xl font-semibold mb-4">Asosiy malumotlar</h4>

      <VForm v-slot="{ handleSubmit }">
         {{ districts.id }}
         <form @submit.prevent="handleSubmit(updateProfile)">
            <div>
               <div class="grid gap-3 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
                  <div class="flex flex-col">
                     <VField name="username" rules="required|max:60|min:3" v-model="user.username" v-slot="{ errors }">
                        <Label for="username">Foydalanuvchi nomi</Label>
                        <Input
                           id="username"
                           type="text"
                           placeholder="Fodalanuvchi nomi"
                           :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                           v-model="user.username"
                        />
                        <span class="text-xs text-red-600">{{ errors[0] }}</span>
                     </VField>
                  </div>
                  <div class="flex flex-col">
                     <VField
                        name="first_name"
                        rules="required|max:60|min:3"
                        v-model="user.first_name"
                        v-slot="{ errors }"
                     >
                        <Label for="first_name">Ism</Label>
                        <Input
                           id="first_name"
                           type="text"
                           placeholder="Fodalanuvchi nomi"
                           v-model="user.first_name"
                           :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                        />
                        <span class="text-xs text-red-600">{{ errors[0] }}</span>
                     </VField>
                  </div>
                  <div class="flex flex-col">
                     <VField
                        name="last_name"
                        rules="required|max:60|min:3"
                        v-model="user.last_name"
                        v-slot="{ errors }"
                     >
                        <Label for="last_name">Familiya</Label>
                        <Input
                           id="last_name"
                           type="text"
                           placeholder="Fodalanuvchi nomi"
                           v-model="user.last_name"
                           :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                        />
                        <span class="text-xs text-red-600">{{ errors[0] }}</span>
                     </VField>
                  </div>
                  <div class="flex flex-col">
                     <VField name="father_name" rules="max:60|min:3" v-model="user.father_name" v-slot="{ errors }">
                        <Label for="father_name">Otasining ismi</Label>
                        <Input
                           id="father_name"
                           type="text"
                           placeholder="Fodalanuvchi nomi"
                           v-model="user.father_name"
                           :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                        />
                        <span class="text-xs text-red-600">{{ errors[0] }}</span>
                     </VField>
                  </div>

                  <div class="flex flex-col">
                     <VField name="email" rules="email" v-model="user.email" v-slot="{ errors }">
                        <Label for="email">Email</Label>
                        <Input
                           id="email"
                           type="text"
                           placeholder="Fodalanuvchi nomi"
                           v-model="user.email"
                           :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                        />
                        <span class="text-xs text-red-600">{{ errors[0] }}</span>
                     </VField>
                  </div>
                  <div class="flex flex-col">
                     <VField name="phone" rules="phone|max:9" v-model="user.phone" v-slot="{ errors }">
                        <Label for="phone">Telefon raqam</Label>
                        <div class="relative w-full">
                           <Input
                              id="phone"
                              type="text"
                              placeholder="Telefon raqam"
                              v-model="user.phone"
                              class="pl-12"
                              :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                           />
                           <span
                              class="absolute top-1/2 -translate-y-1/2 start-0 flex items-center justify-center px-3"
                           >
                              998
                           </span>
                        </div>
                        <span class="text-xs text-red-600">{{ errors[0] }}</span>
                     </VField>
                  </div>
                  <div class="flex flex-col">
                     <VField name="region">
                        <Label for="region">Yo'nalishni tanlang</Label>
                        <Select v-model="user.type">
                           <SelectTrigger>
                              <SelectValue placeholder="Yo'nalishni tanlang" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 <SelectLabel>Tanlang</SelectLabel>
                                 <SelectItem v-for="(type, i) in usertype" :key="i + 2" :value="type.value">
                                    {{ type.name }}
                                 </SelectItem>
                              </SelectGroup>
                           </SelectContent>
                        </Select>
                     </VField>
                  </div>
                  <div class="flex flex-col">
                     {{ user.region }}
                     <VField name="region">
                        <Label for="region">Viloyatni tanlang</Label>
                        <Select v-model="user.region">
                           <SelectTrigger>
                              <SelectValue placeholder="Viloyatni tanlang" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 <SelectLabel>Tanlang</SelectLabel>
                                 <SelectItem
                                    v-for="(region, i) in regions.options"
                                    :key="i + 2"
                                    :value="region.id.toString()"
                                 >
                                    {{ region.name }}
                                 </SelectItem>
                              </SelectGroup>
                           </SelectContent>
                        </Select>
                     </VField>
                  </div>
                  <div class="flex flex-col">
                     <VField name="district">
                        <Label for="district">Tumanni tanlang</Label>

                        <Select v-model="user.district" :disabled="user.region === ''">
                           <SelectTrigger>
                              <SelectValue placeholder="Tumanni tanlang" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 <SelectLabel>Tanlang</SelectLabel>
                                 <SelectItem
                                    v-for="district in districts.options"
                                    :key="district.id"
                                    :value="district.id.toString()"
                                 >
                                    {{ district.name }}
                                 </SelectItem>
                              </SelectGroup>
                           </SelectContent>
                        </Select>
                     </VField>
                  </div>
                  <div class="flex flex-col">
                     <VField name="school">
                        <Label for="school">Maktabni tanlang</Label>
                        <Select v-model="user.school" :disabled="user.district === ''">
                           <SelectTrigger>
                              <SelectValue placeholder="Maktabni tanlang" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 <SelectLabel>Tanlang</SelectLabel>
                                 <SelectItem
                                    v-for="school in schools.options"
                                    :key="school.id"
                                    :value="school.id.toString()"
                                 >
                                    {{ school.name }}
                                 </SelectItem>
                              </SelectGroup>
                           </SelectContent>
                        </Select>
                     </VField>
                  </div>
               </div>
               <Button type="submit" class="w-full sm:w-auto">Saqlash</Button>
            </div>
         </form>
      </VForm>
   </div>
</template>
