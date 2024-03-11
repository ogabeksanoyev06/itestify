export function phoneFormat(phoneNumber) {
   try {
      if (!phoneNumber) return false; // Telefon raqami mavjud emas yoki bo'sh bo'lsa false qaytariladi
      const cleaned = ('' + phoneNumber).replace(/\D/g, ''); // Raqamni faqat sonlar qatoriga aylantiramiz
      const match = cleaned.match(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/); // Raqamni belgilangan formatda ajratamiz
      if (match) {
         return `+${match[1]} ${match[2]} ${match[3]}-${match[4]}-${match[5]}`; // Formatlangan raqamni qaytarib beramiz
      }
      return phoneNumber; // Formatlanmagan raqamni o'ziga qaytarib beramiz
   } catch {
      return phoneNumber; // Xatolik holatida raqamni o'ziga qaytarib beramiz
   }
}

export function currencyFormat(amount, currency = 'UZS') {
   try {
      if (!amount) return 0; // Miqdor mavjud emas yoki bo'sh bo'lsa false qaytariladi
      const formatter = new Intl.NumberFormat('uz-UZ', {
         currency: currency,
         minimumFractionDigits: 2 // Kamida 2 belgi orasida keskin sonlarni qo'llab-quvvatlash
      });
      return formatter.format(amount); // Formatlangan miqdorni qaytarib beramiz
   } catch {
      return amount; // Xatolik holatida miqdorni o'ziga qaytarib beramiz
   }
}
