import BodyPartList from "@/components/BodyPartList";
import { fetchBodyPart } from "@/utils";

export default async function Exercise() {
  const bodyPart = await fetchBodyPart();
  const body = ["all", ...bodyPart];

  return (
    <div className="w-full">
      <BodyPartList bodyPart={body} />
    </div>
  );
}
