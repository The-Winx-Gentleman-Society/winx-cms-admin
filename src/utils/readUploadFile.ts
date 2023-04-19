import * as XLSX from 'xlsx';

export default async function readUploadFile(file: any) {
  const reader = new FileReader();

  const res = new Promise((resolve,) => reader.onloadend = () => {
    if (typeof reader?.result == "string") {
      const base64String = reader?.result
        ?.replace('data:', '')
        ?.replace(/^.+,/, '');

      const workbook = XLSX.read(base64String, { type: 'base64' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
  
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      
      resolve(jsonData);
    }
  });
  
  reader.readAsDataURL(file);

  return res;
}
