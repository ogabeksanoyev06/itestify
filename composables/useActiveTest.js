import { testService } from '~/services/testService';

export default async function useActiveTest() {
   try {
      const response = await testService.activeTests();
      return response;
   } catch (error) {
      console.error('Error fetching active test:', error);
      return error;
   }
}
