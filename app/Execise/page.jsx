import BodyPartList from "@/components/BodyPartList";
import { fetchBodyPart } from "@/utils";

export default async function Exercise() {
  const bodyPart = await fetchBodyPart();

  return (
    <div className="w-full">
      <BodyPartList bodyPart={bodyPart} />
    </div>
  );
}
