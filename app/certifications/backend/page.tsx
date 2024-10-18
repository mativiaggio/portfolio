import Certificate from "@/app/_components/Certificate";
import { backendCertifications } from "@/constants";

export default function page() {
  return (
    <>
      {backendCertifications.map((c, index) => (
        <Certificate key={index} {...c} />
      ))}
    </>
  );
}
