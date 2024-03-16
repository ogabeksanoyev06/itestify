<script setup>
import { ref, onUpdated, onMounted, watch } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '~/components/ui/input';

definePageMeta({
   layout: 'cabinet'
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

const { regions, districts, schools, getRegions, getDistricts, getSchools } = useCommonData();

const { user, userProfile, updateUserProfile, loading } = useUserProfile();

onMounted(() => {
   userProfile();
   getRegions();
});

watch(
   () => user.value.region,
   (newValue, oldValue) => {
      if (newValue !== undefined && newValue !== null && newValue !== oldValue) {
         getDistricts(user.value.region);
      }
   }
);

watch(
   () => user.value.district,
   (newValue, oldValue) => {
      if (newValue !== undefined && newValue !== null && newValue !== oldValue) {
         getSchools(user.value.district);
      }
   }
);

onUpdated(() => {});
</script>

<template>
   <div>
      <h4 class="text-base sm:text-xl font-semibold mb-4">Asosiy malumotlar</h4>
      <VForm v-slot="{ handleSubmit }">
         <form @submit.prevent="handleSubmit(updateUserProfile)">
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
                     <VField name="first_name" rules="required|max:60|min:3" v-model="user.first_name" v-slot="{ errors }">
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
                     <VField name="last_name" rules="required|max:60|min:3" v-model="user.last_name" v-slot="{ errors }">
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
                           <span class="absolute top-1/2 -translate-y-1/2 start-0 flex items-center justify-center px-3"> 998 </span>
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
                     <VField name="region">
                        <Label for="region">Viloyatni tanlang</Label>
                        <Select v-model="user.region">
                           <SelectTrigger>
                              <SelectValue placeholder="Viloyatni tanlang" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 <SelectLabel>Tanlang</SelectLabel>
                                 <SelectItem v-for="(region, i) in regions" :key="i + 2" :value="region.id">
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
                                 <SelectItem v-for="district in districts" :key="district.id" :value="district.id">
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
                                 <SelectItem v-for="school in schools" :key="school.id" :value="school.id">
                                    {{ school.name }}
                                 </SelectItem>
                              </SelectGroup>
                           </SelectContent>
                        </Select>
                     </VField>
                  </div>
               </div>
               <Button type="submit" class="w-full sm:w-auto" :disabled="loading">
                  <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="mr-2 h-4 w-4 animate-spin" v-if="loading">
                     <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 1 1-6.219-8.56"
                     ></path>
                  </svg>
                  Saqlash
               </Button>
            </div>
         </form>
      </VForm>
   </div>
</template>
