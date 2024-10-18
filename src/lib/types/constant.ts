export const file = "/images/docs/file.svg";
export const fileCsv = "/images/docs/fileCvs.svg";
export const fileDocs = "/images/docs/fileDocs.svg";
export const filePdf = "/images/docs/fileSvg.svg";
export const fileXlsx = "/images/docs/fileXlsx.svg";
export const logo2 = "/images/logo2.png";
export const loginImage = "/images/login.jpg";

export const uploadedFileObj = {
  "image/jpeg": file,
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": fileXlsx,
  "application/vnd.ms-excel": fileXlsx,
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    fileDocs,
  "text/plain": fileDocs,
  "text/csv": fileCsv,
  "application/pdf": filePdf,
};

export function getKB(file: { size: number }) {
  return Number(file.size / 1024).toFixed(2);
}

export function getMB(file: { size: number }) {
  return Number(file.size / 1048576).toFixed(2);
}

export const STORAGE_KEY = "SECURE_DATA";
