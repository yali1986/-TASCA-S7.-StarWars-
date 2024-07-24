import StarshipList from "./StarshipList"

export default {
    title: "StarshipList",
    component: StarshipList,
}

const Template = (args) => <StarshipList {...args} />

export const Default = Template.bind({})
Default.args = {
    starships : [
    { name: 'X-wing', model: 'T-65 X-wing' },
    { name: 'TIE Fighter', model: 'Twin Ion Engine Fighter' },
    ]
}