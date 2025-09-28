import {
  Rectangle,
  RectangleHead,
  RectangleHeaderText,
  RectangleTopText,
} from "@/components/dashboard/main/rectangle/Rectangle";
import { ProfileBumpChart } from "@/components/chart/bump";
import { Calendar } from "@/components/ui/calendar";

export default function Profile() {
  return (
    <main className="w-full h-full flex">
      <Rectangle classname="w-96 h-80 m-5">
        <RectangleHead>
          <RectangleTopText>
            <a>Your yearly activity chart</a>
            <a>The chart shows the amount of camps you attended</a>
          </RectangleTopText>
        </RectangleHead>
      </Rectangle>
      <Rectangle classname="h-fit m-5">
        <RectangleHead>
          <RectangleHeaderText>
            <a>Upcoming Camp Dates</a>
          </RectangleHeaderText>
        </RectangleHead>
        <Calendar disabled={false} /*TODO: make this dynamic*/ />
      </Rectangle>
    </main>
  );
}

/*
<ProfileBumpChart
          className="w-80 h-3/4"
          data={[
            // TODO: make this dynamic
            {
              id: "1",
              data: [
                { x: "2025", y: 0 },
                { x: "2024", y: 0 },
                { x: "2026", y: 0 },
                { x: "2027", y: 0 },
              ],
            },
          ]}
          legendBottom="Years"
          legendLeft="Activities"
        />
        */
