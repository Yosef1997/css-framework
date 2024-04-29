import avatar1 from "../assets/Avatar1.png"
import avatar2 from "../assets/Avatar2.png"
import avatar3 from "../assets/Avatar3.png"
import avatar4 from "../assets/Avatar4.png"
import avatar5 from "../assets/Avatar5.png"
import avatar6 from "../assets/Avatar6.png"

const columnCard = [
  {
    title: "Lane Name",
    data: [
      {
        card_avatars: [],
        card_title: "Card Title",
        card_description: "",
        card_tasks: [],
        card_tags: [],
      },
    ],
  },
  {
    title: "Lane Name",
    data: [
      {
        card_avatars: [],
        card_title: "Card Title",
        card_description: "Card Description",
        card_tasks: [],
        card_tags: [],
      },
      {
        card_avatars: [avatar1, avatar2],
        card_title: "Card Title",
        card_description: "Card Description",
        card_tasks: [],
        card_tags: [],
      },
    ],
  },
  {
    title: "Lane Name",
    data: [
      {
        card_avatars: [],
        card_title: "Card Title",
        card_description: "Card Description",
        card_tasks: [],
        card_tags: [],
      },
      {
        card_avatars: [avatar1, avatar2],
        card_title: "Card Title",
        card_description: "Card Description",
        card_tasks: [],
        card_tags: [],
      },
      {
        card_avatars: [avatar1, avatar2, avatar3],
        card_title: "Card Title",
        card_description: "Card Description",
        card_tasks: ["Task1", "Task2", "Task3", "Task4"],
        card_tags: [],
      },
    ],
  },
  {
    title: "Lane Name",
    data: [
      {
        card_avatars: [],
        card_title: "Card Title",
        card_description: "Card Description",
        card_tasks: [],
        card_tags: [],
      },
      {
        card_avatars: [avatar1, avatar2],
        card_title: "Card Title",
        card_description: "Card Description",
        card_tasks: [],
        card_tags: [],
      },
      {
        card_avatars: [avatar1, avatar2, avatar3],
        card_title: "Card Title",
        card_description: "Card Description",
        card_tasks: ["Task1", "Task2", "Task3", "Task4"],
        card_tags: [],
      },
      {
        card_avatars: [avatar1, avatar6, avatar4, avatar2, avatar5, avatar3],
        card_title: "Card Title",
        card_description: "Card Description",
        card_tasks: ["Task1", "Task2", "Task3", "Task4"],
        card_tags: ["Tag", "Tag", "Tag"],
      },
    ],
  },
]

export default columnCard
