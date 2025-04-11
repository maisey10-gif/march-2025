import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import  link from "next/link";
import { Import } from "lucide-react";
import { useState } from "react";

export default function AboutmePage() {
  let facts: string[] = ["when you look at yourself yawn, it makes you yawn again",]
  const [fact, setFact] = useState ("");
  return (
    <div>
      <h1 className={title()}>About Me</h1>
      <h1>About Me</h1>
      <p>Hi, my name is Maisey Hudman! I am 16 years old and my birthday is June 10th!</p>
        <img src="https://images.unsplash.com/photo-1682987228796-cdc66c167dcd?blend=000000&blend-alpha=10&blend-mode=normal&blend-w=1&crop=faces%2Cedges&h=630&mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzA5NTg1NzM2fA&ixlib=rb-4.0.3" alt="ballet shoes" />
        <p>Dance is my main and favorite hobbie. I am on 2 competitive teams and hope to continue in college!</p>
        <img src="https://th.bing.com/th/id/R.0abcf778e5702b8f55663231a0d93eec?rik=vyiwyjMeG7aFJQ&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1532295039064-229629db1073%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9&ehk=TO5wHOGMJpCbSF7nVtshl%2bh4h9UKZTzaK6ACuTeHFKM%3d&risl=&pid=ImgRaw&r=0" alt="arizona" />
        <p>Arizona is a huge part of my life because that is were almost all my family lives and they are super importan to me.</p>
        <img src="https://images.unsplash.com/photo-1483181994834-aba9fd1e251a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8d29tZW4lMjBzaG9wcGluZ3x8MHx8fHwxNjI3MjQwNDY5&ixlib=rb-1.2.1&q=80&w=1080" alt="Shoping" />
        <p>Shopping is also one of my favorite things to do because even if i only end up just window shopping for hours, i come out with so much inpiration for outfits, lifestyle, and more. I also love picking out gifts for others, and finding clothing that matches my style and activitys.</p>
        <a className="bg-green-500" href="https://www.inspireacademy.dance/gallery" target="_blank">Inspire Acadamy of Dance</a>
        <p>Inspire Acadamy of Dance is my dance studio, and is like my second home. I spend many nights and hour in my studio with my team, and i work at inspire in the summer. I usally just work in the camps with little kids, and i assist my teachers sometimes throughout the year. I have been dancing at Inspire ever scince there opeaning year, and i have loved growing up on their team! </p>
        <a className="bg-green-500" href="https://www.youtube.com/watch?v=ciFNj6hwdYI" target="_blank">Skyline Dance Team 2023 State Winning Routine</a>
        <p>The link above shows the highestscoring routine in the state in 2023. This team has benifited me in so many ways and i will cherish all the memories i made.</p>
        <a className="bg-green-500" href="https://dtf.com/en/locations/seattle-pacific-place" target="_blank">Din Tai Fung</a>
        <p>Din Tai Fung is my favorite resturant to go to because you can order so many different things, the food taste all so good, and it is such a nice place to eat!</p>
        <Button as={link} href="https://www.instagram.com/maiseyhudman/">Instagram</Button>
        <p>To learn more about me, you can visit my instagram!</p>
    </div>
  );
} 