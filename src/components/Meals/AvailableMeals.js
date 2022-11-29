import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Vegan Pastrami Burger",
        description: "Pieces of marinated and baked seitan with spices",
        price: 29.99,
    },
    {
        id: "m2",
        name: "Chickpea Burger",
        description: "Chickpea patty with pepper, parsley and herbs",
        price: 25.99,
    },
    {
        id: "m3",
        name: "Tofu Burger",
        description: "Pieces of baked smoked tofu in marinade",
        price: 30.99,
    },
    {
        id: "m4",
        name: "Greek Kebab",
        description:
            "Plant-based greek-style kebab with vegan feta cheese and baked potatoes",
        price: 30.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem           
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
