import { ref } from 'vue';

export const useTimer = () => {
   const testTimer = ref(0);

   const setTimer = (duration) => {
      testTimer.value = duration * 60;
      let testTimerInterval = setInterval(() => {
         if (testTimer.value <= 0) {
            clearInterval(testTimerInterval);
            return;
         }
         testTimer.value--;
      }, 1000);
   };

   const timerFormat = (time) => {
      let sec_num = parseInt(time, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - hours * 3600) / 60);
      let seconds = sec_num - hours * 3600 - minutes * 60;

      if (hours < 10) {
         hours = '0' + hours;
      }
      if (minutes < 10) {
         minutes = '0' + minutes;
      }
      if (seconds < 10) {
         seconds = '0' + seconds;
      }
      return hours + ':' + minutes + ':' + seconds;
   };

   const getTestLiveTime = async (tests, api) => {
      try {
         const response = await api.post('tests/get-test-live-time/', {
            test_type: tests.value.type,
            test_id: tests.value.testId
         });
         if (response.code === 200) {
            setTimer(response.data.left_time);
         }
      } catch (error) {
         console.error(error);
      }
   };

   return {
      testTimer,
      setTimer,
      timerFormat,
      getTestLiveTime
   };
};
