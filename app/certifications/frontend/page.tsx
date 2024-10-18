import Certificate from "@/app/_components/Certificate";
import { frontendCertifications } from "@/constants";

export default function page() {
  return (
    <>
      {frontendCertifications.map((c, index) => (
        <Certificate key={index} {...c} />
      ))}
    </>
  );
}
