import { title } from "@/components/primitives";

export default function RecipiePage() {
  return (
    <div>
      <h1 className={title()}>Recipies</h1>
      <h1>Chocolate Chip Cookie Recipie</h1>
      <p>1. Preheat your oven to 350 F and cover a large baking pan with parchment paper and set aside.</p>
      <p>2. In a large bowl, beat together 1 cup of unsalted butter, 1 and 1/2 cups of light brown sugar and 1/2 cup of granulated sugar on high spead with a stan mixer for a few minutes until light and fluffy.</p>
      <p>3. Add 2 eggs and 2 egg yolks one at a time, and beat after each time you add. Beat in 1 Teaspoon of vanilla after all eggs and egg yolks are combined. </p>
      <p>4. Combine 3 cups of all-purpose flour, 1 tsp of baking powder, 1 tsp of baking soda, and 1/2 tsp of salt in a large bowl. Put your mixer on low speed and gradually beat in the butter mixture made in the previous steps, until it is fully blended. Be careful, you dont want to over mix! </p>
      <p>5. Stir in 1 cup of chopped pecans and 2 cups of semi sweet chocolate chips with a seprate spoon. You can cover the dough and place it in the fridge to chill for around 30 minutes at the least if desired, but be careful, the dough goes bad after 3 days!</p>
      <p>6. Scoop out your cookie dough into 2 oz balls and place them at least 2 inches apart</p>
      <p>7. Once your Oven is preheated, bake your cookies for 12 to 15 minutes, or until the edges are golden brown. </p>
      <div className="flex">
        <p className="m-6">text</p>
        <p></p>
      </div>
    </div>
  );
}
