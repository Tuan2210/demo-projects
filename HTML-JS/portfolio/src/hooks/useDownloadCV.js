import { CV } from "@constants/url";

export default function useDownloadCV() {
  const onDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "CV_DinhQuangTuan.pdf";
    link.click();
  };

  return onDownloadCV;
}