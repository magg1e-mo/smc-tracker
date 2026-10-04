// วางค่า config จาก Firebase Console ตรงนี้ (Project settings > Your apps > Web app > SDK setup and configuration)
// ค่าเหล่านี้ไม่ใช่ความลับ ปลอดภัยที่จะอยู่ในไฟล์สาธารณะ ความปลอดภัยจริงอยู่ที่ Firestore rules
// ถ้า apiKey ว่างอยู่ แอปจะทำงานแบบบันทึกในเครื่องอย่างเดียว
window.FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
