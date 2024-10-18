import Certificate from "@/app/_components/Certificate";
import { cybersecurityCertifications } from "@/constants";

export default function page() {
  return (
    <>
      {cybersecurityCertifications.map((c, index) => (
        <Certificate key={index} {...c} />
      ))}
    </>
  );
}
