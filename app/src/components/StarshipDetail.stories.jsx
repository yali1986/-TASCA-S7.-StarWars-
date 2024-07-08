import StarshipDetail from "./StarshipDetail"

export default {
    title: "StarshipDetail",
    component: StarshipDetail,
}

const Template = (args) => <StarshipDetail {...args} />

export const Default = Template.bind({})
Default.args = {
 starship: {
    name: 'X-wing',
    model: 'T-65 X-wing',
    manufacturer: 'Incom Corporation',
    cost_in_credits: '149,999',
    length: '12.5',
    crew: '1',
    passengers: '0',
    max_atmosphering_speed: '1,050',
    hyperdrive_rating: '1.0',
    starship_class: 'Starfighter', 
    }
}